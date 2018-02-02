package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateDefinition;
import com.wso2telco.dep.manageservice.resource.model.workflow.*;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


/**
 * Created by manoj on 10/16/17.
 */
public class ApplicationSearchService {
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);

    private static final String AUTHORIZATION = "Authorization";
    private static final String API_NAME = "apiName";

    public ApplicationSearchService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getDetails(String authHeader, ApplicationDetailRequest request) throws Exception {

        TaskDetailsResponse taskDetailsResponseDAO;
        List<ApplicationDetailsResponse[]> applicationDetailsResponses;
        List<OperationRateResponse> operationRateResponses;

        if (validateApplicationRequest(request)) {
            taskDetailsResponseDAO = getApplicationTasks(authHeader, request);
            if (taskDetailsResponseDAO != null) {
                if (taskDetailsResponseDAO.getData().size() > 0) {
                    applicationDetailsResponses = getApplicationDetails(authHeader, taskDetailsResponseDAO);
                    if (applicationDetailsResponses != null) {
                        if (request.getProcessType().equals("SUBSCRIPTION_CREATION")) {
                            operationRateResponses = getOperationRates(authHeader, applicationDetailsResponses, request);
                            return new Callback().setPayload(generateResponse(taskDetailsResponseDAO, applicationDetailsResponses, operationRateResponses)).setSuccess(true).setMessage(Messages.APPLICATION_SEARCH_SUCCESS.getValue());
                        } else {
                            return new Callback().setPayload(generateResponse(taskDetailsResponseDAO, applicationDetailsResponses, null)).setSuccess(true).setMessage(Messages.APPLICATION_SEARCH_SUCCESS.getValue());
                        }
                    } else {
                        return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_SEARCH_ERROR.getValue());
                    }
                } else {
                    return new Callback().setPayload(generateResponse(taskDetailsResponseDAO, null, null)).setSuccess(true).setMessage(Messages.APPLICATION_SEARCH_SUCCESS.getValue());
                }
            } else {
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_SEARCH_ERROR.getValue());
            }
        } else {
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_SEARCH_ERROR.getValue());
        }
    }

    /**
     * this method will validate the received request parameters
     *
     * @param requestDAO
     * @return
     */
    public boolean validateApplicationRequest(ApplicationDetailRequest requestDAO) {
        return (requestDAO != null);
    }

    /**
     * this method will make a request to activity engine and get all the available application/subscription
     * approval tasks.
     *
     * @param authHeader
     * @param requestDAO
     * @return
     */
    public TaskDetailsResponse getApplicationTasks(String authHeader, ApplicationDetailRequest requestDAO) {

        String url = "http://localhost:9763/activiti-rest/service" + "/runtime/tasks?";
        boolean isSearchForUser = false;
        TaskDetailsResponse responseDAO;

        if (requestDAO.getAssignee() != null) {
            isSearchForUser = true;
            url += ("assignee=" + requestDAO.getAssignee());
        }

        if (!isSearchForUser && requestDAO.getCandidateGroups() != null) {
            url += ("candidateGroups=" + requestDAO.getCandidateGroups());
        }

        url += ((requestDAO.getSize() != null) ? "&size=" + requestDAO.getSize() : "&size=100");
        url += ((requestDAO.getSize() != null) ? "&start=" + requestDAO.getStart() : "&start=0");
        url += "&order=desc";
        url += "&sort=createTime";

        if (requestDAO.getProcessType().equals("APPLICATION_CREATION")) {
            url += "&processDefinitionKey=application_creation_approval_process";
        } else if (requestDAO.getProcessType().equals("SUBSCRIPTION_CREATION")) {
            url += "&processDefinitionKey=subscription_approval_process";
        }

        HttpGet httpGet = new HttpGet(url);
        /** add headers */
        httpGet.setHeader(AUTHORIZATION, authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                responseDAO = mapper.readValue(response.getEntity().getContent(), TaskDetailsResponse.class);
                return responseDAO;
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading approval tasks from hub");
                return null;
            }
        } catch (IOException e) {
            log.error(" Exception while loading approval tasks from hub " + e);
            return null;
        }


    }

    public List<ApplicationDetailsResponse[]> getApplicationDetails(String authHeader, TaskDetailsResponse responseDAO) {
        String url;
        ApplicationDetailsResponse[] detailsResponseDAO;
        List<ApplicationDetailsResponse[]> detailsResponseDAOS = new ArrayList<>();
        for (int i = 0; i < responseDAO.getData().size(); i++) {
            url = "http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + responseDAO.getData().get(i).getId() + "/variables";
            HttpGet httpGet = new HttpGet(url);
            /** add headers */
            httpGet.setHeader(AUTHORIZATION, authHeader);

            try {
                response = client.execute(httpGet);
                if (response.getStatusLine().getStatusCode() == 200) {
                    detailsResponseDAO = mapper.readValue(response.getEntity().getContent(), ApplicationDetailsResponse[].class);
                    detailsResponseDAOS.add(detailsResponseDAO);
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error loading application of task id from hub");
                    return null;
                }
            } catch (IOException e) {
                log.error(" Exception while loading application of task id from hub " + e);
                return null;
            }
        }

        return detailsResponseDAOS;
    }

    public List<OperationRateResponse> getOperationRates(String authHeader, List<ApplicationDetailsResponse[]> applicationDetailsList, ApplicationDetailRequest request) {
        HttpGet httpGet;
        StringBuilder url = new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/");
        List<OperationRateResponse> operationRateResponses = new ArrayList<>();

        for (int i = 0; i < applicationDetailsList.size(); i++) {

            OperationRateResponse operationRateResponse;

            Map<String, String> appDetails = new HashMap<>();
            for (final ApplicationDetailsResponse choice : Arrays.asList(applicationDetailsList.get(i))) {
                appDetails.put(choice.getName(), choice.getValue());
            }

            if (request.getIsAdmin()) {
                url.append("apis/" + appDetails.get(API_NAME) + "/operations/operationrates");
            } else {
                url.append("http://localhost:9763/ratecard-service/ratecardservice/" + "operators/" + request.getOperator() + "/apis/" + appDetails.get(API_NAME) + "/operatorrates");
            }

            httpGet = new HttpGet(url.toString());
            /** add headers */
            httpGet.setHeader(AUTHORIZATION, authHeader);

            try {
                response = client.execute(httpGet);
                if (response.getStatusLine().getStatusCode() == 200) {
                    operationRateResponse = mapper.readValue(response.getEntity().getContent(), OperationRateResponse.class);
                    operationRateResponses.add(operationRateResponse);
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error loading operation rates from hub");
                    return null;
                }
            } catch (IOException e) {
                log.error(" Exception while loading operation rates from  hub " + e);
                return null;
            }
        }

        return operationRateResponses;
    }

    public SearchResponse generateResponse(TaskDetailsResponse taskDetails, List<ApplicationDetailsResponse[]> applicationDetailsResponses, List<OperationRateResponse> operationRateResponses) throws ParseException {

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH);
        SimpleDateFormat dateFormatter = new SimpleDateFormat("dd-MMM-yyyy");
        SimpleDateFormat timeFormatter = new SimpleDateFormat("HH:mm:ss");
        SimpleDateFormat offsetFormatter = new SimpleDateFormat("XXX");

        SearchResponse searchResponse = new SearchResponse();

        Metadata metadata = new Metadata();
        metadata.setOrder(taskDetails.getOrder());
        metadata.setSize(taskDetails.getSize());
        metadata.setSort(taskDetails.getSort());
        metadata.setStart(taskDetails.getStart());
        metadata.setTotal(taskDetails.getTotal());

        List<ApplicationTask> applicationTasks = new ArrayList<>();

        for (int k = 0; k < taskDetails.getData().size(); k++) {

            Task task = taskDetails.getData().get(k);
            ApplicationTask applicationTask = new ApplicationTask();
            List<RelevantRate> relevantRates = new ArrayList<>();
            List<Operation> operationRates;
            CreateTime createTime = new CreateTime();

            if (task.getCreateTime() != null) {
                Date date = format.parse(task.getCreateTime());
                createTime.setDate(dateFormatter.format(date));
                createTime.setTime(timeFormatter.format(date));
                createTime.setOffset(offsetFormatter.format(date));
                createTime.setUnformatted(task.getCreateTime());
            } else {
                createTime.setDate("");
                createTime.setTime("");
                createTime.setOffset("");
                createTime.setUnformatted("");
            }

            Map<String, String> map = new HashMap<>();
            for (final ApplicationDetailsResponse choice : Arrays.asList(applicationDetailsResponses.get(k))) {
                map.put(choice.getName(), choice.getValue());
            }

            if (operationRateResponses != null && operationRateResponses.get(k).getApi() != null) {

                operationRates = operationRateResponses.get(k).getApi().getOperations();

                for (Operation operation : operationRates) {

                    RelevantRate relevantRate = new RelevantRate();
                    List<RateDefinition> rateDefinitions = new ArrayList<>();
                    for (RateDefinition rateDefinition : operation.getRates()) {

                        RateDefinition tempDef = new RateDefinition();
                        tempDef.setRateDefId(rateDefinition.getOperationRateId());
                        tempDef.setRateDefName(rateDefinition.getRateDefName());
                        tempDef.setRateDefDescription(rateDefinition.getRateDefDescription());

                        rateDefinitions.add(tempDef);
                    }
                    relevantRate.setApiOperation(operation.getApiOperationName());
                    relevantRate.setRateDefinitions(rateDefinitions);

                    relevantRates.add(relevantRate);
                }
            }

            String description;
            String tier;

            if (map.get("description") != null) {
                description = map.get("description");
            } else if (map.get("applicationDescription") != null) {
                description = map.get("applicationDescription");
            } else {
                description = "";
            }

            if (map.get("tier") != null) {
                tier = map.get("tier");
            } else if (map.get("tierName") != null) {
                tier = map.get("tierName");
            } else {
                tier = "";
            }

            applicationTask.setId(task.getId());
            applicationTask.setAssignee(task.getAssignee());
            applicationTask.setApiName((map.get(API_NAME) != null) ? map.get(API_NAME) : "");
            applicationTask.setCreateTime(createTime);
            applicationTask.setTaskDescription(task.getDescription());
            applicationTask.setApplicationId((map.get("applicationId") != null) ? map.get("applicationId") : "");
            applicationTask.setApplicationName((map.get("applicationName") != null) ? map.get("applicationName") : "");
            applicationTask.setApplicationDescription(description);
            applicationTask.setOperators(map.get("operators"));
            applicationTask.setTier(tier);

            if (map.get("tiersStr") != null) {
                applicationTask.setTiersStr(new ArrayList<String>(Arrays.asList(map.get("tiersStr").split(","))));
            } else if (map.get("apiTiers") != null) {
                applicationTask.setTiersStr(new ArrayList<String>(Arrays.asList(map.get("apiTiers").split(","))));
            }

            applicationTask.setUserName(map.get("userName"));
            applicationTask.setApiContext(map.get("apiVersion"));
            applicationTask.setApiContext(map.get("apiContext"));
            applicationTask.setSubscriber(map.get("subscriber"));
            applicationTask.setRelevantRates(relevantRates);
            applicationTask.setSelectedRate("");
            applicationTask.setCreditPlan("");

            applicationTasks.add(applicationTask);
        }

        searchResponse.setMetadata(metadata);
        searchResponse.setApplicationTasks(applicationTasks);

        return searchResponse;
    }
}
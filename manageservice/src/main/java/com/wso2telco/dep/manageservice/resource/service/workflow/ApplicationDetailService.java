package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.CurrencyDAO;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApplicationDetailRequestDAO;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApplicationDetailsResponseDAO;
import com.wso2telco.dep.manageservice.resource.dao.workflow.TaskDetailsResponseDAO;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by manoj on 10/16/17.
 */
public class ApplicationDetailService {
    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);
    private TaskDetailsResponseDAO taskDetailsResponseDAO;

    public ApplicationDetailService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getDetails(String authHeader, ApplicationDetailRequestDAO requestDAO) throws Exception {

        TaskDetailsResponseDAO taskDetailsResponseDAO;
        List <ApplicationDetailsResponseDAO[]> applicationDetailsResponseDAO;

        if (validateApplicationRequest(requestDAO)) {
            taskDetailsResponseDAO = getApplicationTasks(authHeader, requestDAO);
            if(taskDetailsResponseDAO!= null){
                if(taskDetailsResponseDAO.getData().size() > 0){
                    applicationDetailsResponseDAO = getApplicationDetails(authHeader,taskDetailsResponseDAO);
                    if(applicationDetailsResponseDAO != null){
                        if(requestDAO.getProcessType().equals("SUBSCRIPTION_CREATION")){
                            //operation rates search
                        }else{
                            generateResoponse(taskDetailsResponseDAO, applicationDetailsResponseDAO);
                        }
                    }else {
                        //return when no tasks are available
                    }
                }else {
                    //return when no tasks are available
                }
            }else {
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Approval Tasks");
            }
        }else {
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Approval Tasks");
        }
        return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Approval Tasks");
    }

    public boolean validateApplicationRequest(ApplicationDetailRequestDAO requestDAO) {
        if (requestDAO != null) {
            return true;
        } else {
            return false;
        }

    }

    /**
     * this method will make a request to activity engine and get all the available application/subscription
     * approval tasks.
     * @param authHeader
     * @param requestDAO
     * @return
     */
    public TaskDetailsResponseDAO getApplicationTasks(String authHeader, ApplicationDetailRequestDAO requestDAO) {

        String url = "http://localhost:9763/activiti-rest/service" + "/runtime/tasks?";
        boolean isSearchForUser = false;
        TaskDetailsResponseDAO responseDAO;

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

        httpGet = new HttpGet(url);
        /** add headers */
        httpGet.setHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                responseDAO = mapper.readValue(response.getEntity().getContent(), TaskDetailsResponseDAO.class);
                return responseDAO;
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading approval tasks from hub");
                return null;
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading approval tasks from hub");
            return null;
        }


    }

    public List <ApplicationDetailsResponseDAO[]> getApplicationDetails(String authHeader, TaskDetailsResponseDAO responseDAO){
        HttpGet httpGet;
        String url;
        ApplicationDetailsResponseDAO [] detailsResponseDAO;
        List <ApplicationDetailsResponseDAO[]> detailsResponseDAOS = new ArrayList<ApplicationDetailsResponseDAO[]>();
        for(int i = 0 ; i < responseDAO.getData().size(); i++){
            url ="http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + responseDAO.getData().get(i).getId() + "/variables";
            httpGet = new HttpGet(url);
            /** add headers */
            httpGet.setHeader("Authorization", authHeader);

            try {
                response = client.execute(httpGet);
                if (response.getStatusLine().getStatusCode() == 200) {
                    detailsResponseDAO = mapper.readValue(response.getEntity().getContent(), ApplicationDetailsResponseDAO[].class);
                    detailsResponseDAOS.add(detailsResponseDAO);
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error loading application of task id from hub");
                    return null;
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while loading application of task id from hub");
                return null;
            }
        }

        return detailsResponseDAOS;
    }

    public void getOperationRates (String authHeader, List <ApplicationDetailsResponseDAO[]> responseDAOS){
        HttpGet httpGet;
        String url;


    }

    public void generateResoponse(TaskDetailsResponseDAO taskDetailsResponseDAO,List <ApplicationDetailsResponseDAO[]> applicationDetailsResponseDAOList ){
//        Stream <ApplicationDetailsResponseDAO> testStream = Arrays.stream(applicationDetailsResponseDAOList.get(0));
//        String a = applicationDetailsResponseDAOList.stream().map((appDetail, index) -> {
//
//        });

        String[] myArray = new String[]{"bob", "alice", "paul", "ellie"};
        Stream<String> myStream = Arrays.stream(myArray);
        int i = 0;
        Stream<String> myNewStream = myStream.map(s -> {
            System.out.println(i);
            return s + "hi";
        });
//        String[] myNewArray = myNewStream.toArray(String[]::new);
        List<String> collect = Arrays.stream(myArray).map(s -> {
            System.out.println(i);
            return s + "hi";
        }).collect(Collectors.toList());

//        Map<String, String> stringMap = Arrays.stream(myArray).map(s -> {
//            System.out.println(i);
//            return s + "hi";
//        }).collect(Collectors.toMap());
        System.out.println("hi " + collect);
    }
}

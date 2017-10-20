package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.CurrencyDAO;
import com.wso2telco.dep.manageservice.resource.dao.workflow.GraphData;
import com.wso2telco.dep.manageservice.resource.dao.workflow.GraphResponse;
import com.wso2telco.dep.manageservice.resource.dao.workflow.Range;
import com.wso2telco.dep.manageservice.resource.dao.workflow.TaskDetailsResponse;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Month;
import java.time.YearMonth;
import java.util.*;

/**
 * Created by manoj on 10/19/17.
 */
public class HistoryService {
    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);

    public HistoryService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getHistory(String authHeader, String type, String user) throws Exception {

        GraphResponse response = new GraphResponse();

        DateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX", Locale.ENGLISH);
        DateFormat monthFormat = new SimpleDateFormat("MMM", Locale.ENGLISH);

        List<Range> months = new ArrayList<>();
        List<String> xAxisLabels = new ArrayList<>();

        for (int i = -5; i < 1; i++) {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.MONTH, i);
            calendar.set(Calendar.DATE, 1);
            calendar.set(Calendar.HOUR, -12);
            calendar.set(Calendar.MINUTE, 0);
            calendar.set(Calendar.SECOND, 0);

            Date start = calendar.getTime();

            calendar.add(Calendar.MONTH, 1);
            calendar.set(Calendar.DATE, 0);
            calendar.set(Calendar.HOUR, 23);
            calendar.set(Calendar.MINUTE, 59);
            calendar.set(Calendar.SECOND, 59);

            Date stop = calendar.getTime();

            months.add(new Range().setStart(simpleDateFormat.format(start)).setEnd(simpleDateFormat.format(stop)));
            xAxisLabels.add(monthFormat.format(start));
        }

        List<Integer> data = getData(authHeader, type, user, months);
        if (data != null) {
            GraphData graphData = new GraphData();
            graphData.setData(data);
            graphData.setLabel(type.toUpperCase());
            List<GraphData> graphDataList = new ArrayList<>();
            graphDataList.add(graphData);
            GraphResponse graphResponse = new GraphResponse();
            graphResponse.setXAxisLabels(xAxisLabels);
            graphResponse.setGraphData(graphDataList);
            return new Callback().setPayload(graphResponse).setSuccess(false).setMessage("Error Adding New Currency");
        } else {
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Currency");
        }

    }


    public List<Integer> getData(String authHeader, String type, String user, List<Range> months) {
        String process = (type.equals("applications")) ? "application_creation_approval_process" : "subscription_approval_process";
        List<Integer> data = new ArrayList<>();

        for (Range month : months) {

            HttpGet httpGet = new HttpGet("http://localhost:9763/activiti-rest/service" + "/history/historic-task-instances?taskCreatedAfter="
                    + month.getStart() + "&taskCreatedBefore=" + month.getEnd() + "&processDefinitionKey=" + process + "&taskAssignee=" + user);

            httpGet.addHeader("Authorization", authHeader);

            try {
                response = client.execute(httpGet);
                if (response.getStatusLine().getStatusCode() == 200) {
                    TaskDetailsResponse taskResponse = mapper.readValue(response.getEntity().getContent(), TaskDetailsResponse.class);
                    data.add(taskResponse.getTotal());
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error loading categories from hub");
                    return null;
                }

            } catch (IOException e) {
                log.error(" Exception while loading categories from hub " + e);
                return null;
            }
        }

        return data;
    }

}

package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.workflow.Assign;
import com.wso2telco.dep.manageservice.resource.dao.workflow.AssignRequest;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

/**
 * Created by manoj on 10/18/17.
 */
public class ApplicationAssignService {

    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);

    public ApplicationAssignService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback assignApplication(String authHeader, AssignRequest request) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + request.getTaskId());
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);


        if (validateRequest(request)) {

            /** set request body */
            Assign assign = new Assign();
            assign.setAction("claim");
            assign.setAssignee(request.getAssignee().toLowerCase());
            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(assign)));

            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 200) {
                    return new Callback().setPayload(null).setSuccess(true).setMessage("New Currency Added Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + "Error Assigning Task");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Assigning Task");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while assigning task");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Assigning Task");
            }
        } else {
            log.error("Assign Task : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Assigning Task");
        }
    }

    public boolean validateRequest(AssignRequest request) {
        if (request != null) {
            return true;
        } else {
            return false;
        }
    }
}

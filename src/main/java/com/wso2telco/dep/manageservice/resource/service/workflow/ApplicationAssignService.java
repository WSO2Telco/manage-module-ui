package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.workflow.Assign;
import com.wso2telco.dep.manageservice.resource.model.workflow.AssignRequest;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class ApplicationAssignService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);
    private static final String ERROR = "Error Assigning Task";

    public ApplicationAssignService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback assignApplication(String authHeader, AssignRequest request) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + request.getTaskId());
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);


        if (validateRequest(request)) {


            try {
                /** set request body */
                Assign assign = new Assign();
                assign.setAction("claim");
                assign.setAssignee(request.getAssignee().toLowerCase());
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(assign)));

                HttpResponse response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 200) {
                    return new Callback().setPayload(null).setSuccess(true).setMessage("New Currency Added Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + ERROR);
                    return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
                }
            } catch (IOException e) {
                log.error(" Exception while assigning task " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
            }
        } else {
            log.error("Assign Task : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
        }
    }

    public boolean validateRequest(AssignRequest request) {
        return (request != null);
    }
}

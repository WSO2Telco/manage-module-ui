package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApprovalRequest;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApproveEntity;
import com.wso2telco.dep.manageservice.resource.dao.workflow.Variable;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class ApproveSubscriptionService {

    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);

    public ApproveSubscriptionService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback approveSubscription(String authHeader, ApprovalRequest request) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + request.getTaskId());
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);

        if (validateRequest(request)) {

            List<Variable> variables = new ArrayList<Variable>();

            if (request.getRole()) {
                variables.add(new Variable().setName("hubAdminApproval").setValue(request.getStatus()).setType("string"));
                variables.add(new Variable().setName("completedByUser").setValue(request.getUser()).setType("string"));
                variables.add(new Variable().setName("status").setValue(request.getStatus()).setType("string"));
                variables.add(new Variable().setName("completedOn").setValue(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH).format(new Date())).setType("string"));
                variables.add(new Variable().setName("description").setValue(request.getDescription()).setType("string"));
                variables.add(new Variable().setName("selectedTier").setValue(request.getSelectedTier()).setType("string"));
                variables.add(new Variable().setName("selectedRate").setValue(request.getSelectedRate()).setType("string"));
            } else {
                variables.add(new Variable().setName("operatorAdminApproval").setValue(request.getStatus()).setType("string"));
                variables.add(new Variable().setName("completedByUser").setValue(request.getUser()).setType("string"));
                variables.add(new Variable().setName("status").setValue(request.getStatus()).setType("string"));
                variables.add(new Variable().setName("completedOn").setValue(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH).format(new Date())).setType("string"));
                variables.add(new Variable().setName("description").setValue(request.getDescription()).setType("string"));
                variables.add(new Variable().setName("selectedRate").setValue(request.getSelectedRate()).setType("string"));
            }

            ApproveEntity entity = new ApproveEntity();
            entity.setAction("complete");
            entity.setVariables(variables);

            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(entity)));

            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 200) {
                    return new Callback().setPayload(null).setSuccess(true).setMessage("Subscription Approved Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + "Error Approving Subscription");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Approving Subscription");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while Approving Subscription");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Approving Subscription");
            }
        } else {
            log.error("Approving Subscription : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Approving Subscription");
        }
    }

    public boolean validateRequest(ApprovalRequest request) {
        if (request != null && request.getTaskId() != null && request.getStatus() != null && request.getSelectedTier() != null) {
            return true;
        } else {
            return false;
        }
    }
}

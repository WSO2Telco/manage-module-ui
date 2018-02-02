package com.wso2telco.dep.manageservice.resource.service.workflow;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.workflow.ApprovalRequest;
import com.wso2telco.dep.manageservice.resource.model.workflow.ApproveEntity;
import com.wso2telco.dep.manageservice.resource.model.workflow.Variable;
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


public class ApproveApplicationService {
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);
    private static final String ERROR = "Error Approving Application";

    public ApproveApplicationService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback approveApplication(String authHeader, ApprovalRequest request) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/activiti-rest/service" + "/runtime/tasks/" + request.getTaskId());
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);

        final String type = "string";

        if (validateRequest(request)) {

            List<Variable> variables = new ArrayList<>();

            if (request.getRole()) {
                variables.add(new Variable().setName("hubAdminApproval").setValue(request.getStatus()).setType(type));
                variables.add(new Variable().setName("completedByUser").setValue(request.getUser()).setType(type));
                variables.add(new Variable().setName("status").setValue(request.getStatus()).setType(type));
                variables.add(new Variable().setName("completedOn").setValue(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH).format(new Date())).setType(type));
                variables.add(new Variable().setName("description").setValue(request.getDescription()).setType(type));
                variables.add(new Variable().setName("selectedTier").setValue(request.getSelectedTier()).setType(type));
                variables.add(new Variable().setName("creditPlan").setValue(request.getCreditPlan()).setType(type));
            } else {
                variables.add(new Variable().setName("operatorAdminApproval").setValue(request.getStatus()).setType(type));
                variables.add(new Variable().setName("completedByUser").setValue(request.getUser()).setType(type));
                variables.add(new Variable().setName("status").setValue(request.getStatus()).setType(type));
                variables.add(new Variable().setName("completedOn").setValue(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.ENGLISH).format(new Date())).setType(type));
                variables.add(new Variable().setName("description").setValue(request.getDescription()).setType(type));
            }

            ApproveEntity entity = new ApproveEntity();
            entity.setAction("complete");
            entity.setVariables(variables);

            try {
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(entity)));
                HttpResponse response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 200) {
                    return new Callback().setPayload(null).setSuccess(true).setMessage("Application Approved Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " " + ERROR);
                    return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
                }
            } catch (IOException e) {
                log.error( " Exception while Approving Application " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
            }
        } else {
            log.error("Approving Application : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
        }
    }

    public boolean validateRequest(ApprovalRequest request) {
        return (request != null && request.getTaskId() != null && request.getStatus() != null && request.getSelectedTier() != null);
    }
}

package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateDefinition;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

/**
 * Created by manoj on 10/12/17.
 */
public class RateDefinitionService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateDefinitionService.class);

    private static final String LOADING_ERROR = Messages.RATE_DEFINITION_LOADING_ERROR.getValue();

    public RateDefinitionService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getRateDefinitions(String authHeader) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "ratedefinitions");
        httpGet.addHeader("Authorization", authHeader);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                RateDefinition[] rateDefinitions = mapper.readValue(response.getEntity().getContent(), RateDefinition[].class);
                return new Callback().setPayload(rateDefinitions).setSuccess(true).setMessage("Rate Definition  List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading rate definitions from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
            }
        } catch (IOException e) {
            log.error(" Exception while loading rate definitions from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
        }
    }
}

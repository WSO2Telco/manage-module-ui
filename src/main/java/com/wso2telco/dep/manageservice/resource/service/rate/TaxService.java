package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Tax;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class TaxService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(TaxService.class);

    private static final String LOADING_ERROR = Messages.TAX_LOADING_ERROR.getValue();

    public TaxService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getTaxes(String authHeader) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "taxes");
        httpGet.addHeader("Authorization", authHeader);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                Tax[] taxes = mapper.readValue(response.getEntity().getContent(), Tax[].class);
                return new Callback().setPayload(taxes).setSuccess(true).setMessage("Rate Tax List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading taxes from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
            }
        } catch (IOException e) {
            log.error("Exception while loading taxes from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
        }
    }
}


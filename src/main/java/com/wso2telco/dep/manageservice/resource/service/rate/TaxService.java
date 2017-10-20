package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Tax;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

/**
 * Created by manoj on 10/11/17.
 */
public class TaxService {

    private HttpGet httpGet;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(TaxService.class);
    private Tax[] taxDAOS;

    public TaxService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getTaxes(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "taxes");
        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.taxDAOS = mapper.readValue(response.getEntity().getContent(), Tax[].class);
                return new Callback().setPayload(this.taxDAOS).setSuccess(true).setMessage("Rate Tax List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading taxes from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Tax List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading taxes from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Tax List");
        }
    }
}


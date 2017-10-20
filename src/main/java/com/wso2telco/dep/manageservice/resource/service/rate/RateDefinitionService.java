package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.RateDefinitionDAO;
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
    private HttpGet httpGet;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateDefinitionService.class);
    private RateDefinitionDAO[] rateDefinitionDAOS;

    public RateDefinitionService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getRateDefinitions(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "ratedefinitions");
        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.rateDefinitionDAOS = mapper.readValue(response.getEntity().getContent(), RateDefinitionDAO[].class);
                return new Callback().setPayload(this.rateDefinitionDAOS).setSuccess(true).setMessage("Rate Definition  List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading rate definitions from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading rate definitions List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading rate definitions from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading rate definitions List");
        }
    }
}

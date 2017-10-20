package com.wso2telco.dep.manageservice.resource.service.rate;

/**
 * Created by manoj on 10/12/17.
 */

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateType;
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
public class RateTypeService {

    private HttpGet httpGet;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateTypeService.class);
    private RateType[] typeDAOS;

    public RateTypeService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getTypes(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "ratetypes");
        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.typeDAOS = mapper.readValue(response.getEntity().getContent(), RateType[].class);
                return new Callback().setPayload(this.typeDAOS).setSuccess(true).setMessage("Rate Type List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading rate types from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Rate Type List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading taxes from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Rate Type List");
        }
    }
}



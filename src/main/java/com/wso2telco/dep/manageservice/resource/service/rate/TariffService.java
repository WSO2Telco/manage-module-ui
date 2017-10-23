package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Tariff;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class TariffService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(TariffService.class);

    private static final String ADDING_ERROR = Messages.TARIFF_ADDING_ERROR.getValue();
    private static final String LOADING_ERROR = Messages.TARIFF_LOADING_ERROR.getValue();

    public TariffService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getTariffs(String authHeader) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "tariffs");
        httpGet.addHeader("Authorization", authHeader);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                Tariff[] tariffs = mapper.readValue(response.getEntity().getContent(), Tariff[].class);
                return new Callback().setPayload(tariffs).setSuccess(true).setMessage("Rate Tariff List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading Tariff from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
            }
        } catch (IOException e) {
            log.error("Exception while loading Tariff from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
        }
    }

    public Callback setTarif(Tariff tariffDAO, String authHeader) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "tariffs");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);

        if (validateRequest(tariffDAO)) {
            try {
                /** set request body */
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(tariffDAO)));

                HttpResponse response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    Tariff tariff = mapper.readValue(response.getEntity().getContent(), Tariff.class);
                    return new Callback().setPayload(tariff).setSuccess(true).setMessage("New Tariff Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new tariff to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
                }
            } catch (IOException e) {
                log.error("Exception while adding new tariff to hub " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
            }
        } else {
            log.error("Add New Tariff : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
        }
    }

    public boolean validateRequest(Tariff tariffDAO) {
        return (tariffDAO != null);
    }
}

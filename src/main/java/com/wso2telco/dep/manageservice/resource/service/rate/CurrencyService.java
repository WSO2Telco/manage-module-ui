package com.wso2telco.dep.manageservice.resource.service.rate;

/**
 * Created by manoj on 10/12/17.
 */

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Currency;
import com.wso2telco.dep.manageservice.resource.util.ApplicationConfiguration;
import com.wso2telco.dep.manageservice.resource.util.Configuration;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class CurrencyService {

    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);
    private Currency[] currencyDAOS;
    private Currency currencyDAO;
    private Configuration configuration;

    public CurrencyService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
        this.configuration = ApplicationConfiguration.readAppConfig();
    }

    public Callback getCurrencies(String authHeader) throws Exception {
//        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "currencies");
        // Sample usage of config Reader
        httpGet = new HttpGet(configuration.getRateServiceUrl() + "currencies");

        /** add headers*/
        httpGet.setHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.currencyDAOS = mapper.readValue(response.getEntity().getContent(), Currency[].class);
                return new Callback().setPayload(this.currencyDAOS).setSuccess(true).setMessage("Rate Currency List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading currencies from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Currency List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading currencies from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Currency List");
        }
    }

    public Callback setCurrency(Currency currencyDAO, String authHeader) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "currencies");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);
        /** set request body */
        httpPost.setEntity(new StringEntity(mapper.writeValueAsString(currencyDAO)));

        if(validateRequest(currencyDAO)){
            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    this.currencyDAO = mapper.readValue(response.getEntity().getContent(), Currency.class);
                    return new Callback().setPayload(this.currencyDAO).setSuccess(true).setMessage("New Currency Added Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new currency to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Currency");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while adding new currency to hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Currency");
            }
        }else {
            log.error("Add New Currency : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Currency");
        }
    }

    public boolean validateRequest(Currency currencyDAO){
        if(currencyDAO.getCurrencyCode() != null){
            return true;
        }else {
            return false;
        }
    }
}

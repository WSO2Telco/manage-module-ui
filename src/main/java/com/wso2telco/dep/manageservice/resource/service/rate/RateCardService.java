package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateCard;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

/**
 * Created by manoj on 10/13/17.
 */
public class RateCardService {
    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateCardService.class);
    private RateCard[] rateCardDAOS;
    private RateCard rateCardDAO;

    public RateCardService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getRateCards(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "ratecards?schema=full");
        /** add headers*/
        httpGet.setHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.rateCardDAOS = mapper.readValue(response.getEntity().getContent(), RateCard[].class);
                return new Callback().setPayload(this.rateCardDAOS).setSuccess(true).setMessage("Rate Definitions Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error Loading Rate Definition List from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Rate Definition List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading Rate Definition list from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Currency List");
        }
    }

    public Callback setRateCard(RateCard rateCardDAO, String authHeader) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "ratecards");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);
        /** set request body */
        httpPost.setEntity(new StringEntity(mapper.writeValueAsString(rateCardDAO)));

        if (validateRequest(rateCardDAO)) {
            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    this.rateCardDAO = mapper.readValue(response.getEntity().getContent(), RateCard.class);
                    return new Callback().setPayload(this.rateCardDAO).setSuccess(true).setMessage("Rate Card Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new Rate Card to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Rate Card");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while adding new Rate Card to hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Rate Card");
            }
        } else {
            log.error("Add New Rate Card : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Rate Card");
        }
    }

    public boolean validateRequest(RateCard rateCardDAO) {
        if (rateCardDAO != null) {
            return true;
        } else {
            return false;
        }
    }
}

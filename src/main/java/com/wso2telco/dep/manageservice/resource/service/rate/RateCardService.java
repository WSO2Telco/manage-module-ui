package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateCard;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;
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
import java.util.List;

/**
 * Copyright (c) 2016, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 * <p>
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class RateCardService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateCardService.class);

    private static final String ADDING_ERROR = Messages.RATE_CARD_ADDING_ERROR.getValue();
    private static final String LOADING_ERROR = Messages.RATE_CARD_LOADING_ERROR.getValue();

    public RateCardService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executeGet(String authenticationCredential) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "ratecards?schema=full");
        /** add headers*/
        httpGet.setHeader("Authorization", authenticationCredential);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                RateCard[] rateCards = mapper.readValue(response.getEntity().getContent(), RateCard[].class);
                return new Callback().setPayload(rateCards).setSuccess(true).setMessage("Rate Definitions Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error Loading Rate Definition List from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
            }
        } catch (IOException e) {
            log.error(" Exception while loading Rate Definition list from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
        }
    }

    @Override
    public Callback executeGet(String authenticationCredential, List<String> pathParamStringList) {
        return null;
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "ratecards");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authenticationCredential);


        if (validateRequest((RateCard) request)) {
            try {
                /** set request body */
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(request)));

                HttpResponse response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    RateCard rateCard = mapper.readValue(response.getEntity().getContent(), RateCard.class);
                    return new Callback().setPayload(rateCard).setSuccess(true).setMessage("Rate Card Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new Rate Card to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
                }
            } catch (IOException e) {
                log.error("Exception while adding new Rate Card to hub " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
            }
        } else {
            log.error("Add New Rate Card : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
        }
    }

    public boolean validateRequest(RateCard rateCardDAO) {
        return (rateCardDAO != null);
    }
}

package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Currency;
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

public class CurrencyService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CurrencyService.class);

    public CurrencyService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executeGet(String authenticationCredential) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "currencies");
        /** add headers*/
        httpGet.setHeader("Authorization", authenticationCredential);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                Currency[] currencies = mapper.readValue(response.getEntity().getContent(), Currency[].class);
                return new Callback().setPayload(currencies).setSuccess(true).setMessage("Rate Currency List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading currencies from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CURRENCY_LOADING_ERROR.getValue());
            }
        } catch (IOException e) {
            log.error("Exception while loading currencies from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CURRENCY_LOADING_ERROR.getValue());
        }
    }

    @Override
    public Callback executeGet(String authenticationCredential, List<String> pathParamStringList) {
        return null;
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "currencies");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authenticationCredential);

        if (validateRequest((Currency)request)) {
            try {
                /** set request body */
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(request)));

                HttpResponse response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    Currency currency = mapper.readValue(response.getEntity().getContent(), Currency.class);
                    return new Callback().setPayload(currency).setSuccess(true).setMessage("New Currency Added Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new currency to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CURRENCY_ADDING_ERROR.getValue());
                }
            } catch (IOException e) {
                log.error("Exception while adding new currency to hub " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CURRENCY_ADDING_ERROR.getValue());
            }
        } else {
            log.error("Add New Currency : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CURRENCY_ADDING_ERROR.getValue());
        }
    }

    public boolean validateRequest(Currency currencyDAO) {
        return (currencyDAO.getCurrencyCode() != null);
    }
}

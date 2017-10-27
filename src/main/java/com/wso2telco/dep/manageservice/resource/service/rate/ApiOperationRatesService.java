package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.ApiOperationRates;
import com.wso2telco.dep.manageservice.resource.model.rate.RateDefinition;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
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
public class ApiOperationRatesService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CategoryService.class);

    private static final String OPERATIONS = "/operations/";

    public ApiOperationRatesService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executeGet(String authenticationCredential) {
        return null;
    }

    @Override
    public Callback executeGet(String authenticationCredential, List<String> pathParamStringList) {

        RateDefinition[] rateDefinitions;
        RateDefinition[] operationrates;

        if (!pathParamStringList.get(2).equals("null")) {
             rateDefinitions = requestRateDefinitions(authenticationCredential, pathParamStringList, "operator");
             operationrates = requestOperationRates(authenticationCredential, pathParamStringList, "operator-assign");

        } else {
            rateDefinitions = requestRateDefinitions(authenticationCredential, pathParamStringList, "admin");
            operationrates = requestOperationRates(authenticationCredential, pathParamStringList, "admin-assign");
        }

        ApiOperationRates apiOperationRates = new ApiOperationRates();
        apiOperationRates.setSource(rateDefinitions);
        apiOperationRates.setDestination(operationrates);

        return new Callback().setPayload(apiOperationRates).setSuccess(true).setMessage("Api Operations Loaded Successfully");
    }

    public RateDefinition[] requestRateDefinitions(String authenticationCredential, List<String> pathParamStringList, String type) {

        StringBuilder url = new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/");
        RateDefinition[] rateDefinitions = new RateDefinition[0];

        switch (type) {
            case "admin":
                url.append("apis/" + pathParamStringList.get(0) + OPERATIONS + pathParamStringList.get(1) + "/ratedefinitions");
                break;
            case "operator":
                url.append("operators/" + pathParamStringList.get(2) + "/apis/" + pathParamStringList.get(0) + OPERATIONS + pathParamStringList.get(1) + "/ratedefinitions");
                break;
            default:
                break;
        }

        HttpGet httpGet = new HttpGet(url.toString());

        httpGet.addHeader("Authorization", authenticationCredential);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                rateDefinitions = mapper.readValue(response.getEntity().getContent(), RateDefinition[].class);
                return rateDefinitions;
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading api operation rates from hub");
                return rateDefinitions;
            }

        } catch (IOException e) {
            log.error(" Exception while loading api operation rates from hub " + e);
            return rateDefinitions;
        }
    }

    public RateDefinition[] requestOperationRates(String authenticationCredential, List<String> pathParamStringList, String type) {

        StringBuilder url = new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/");
        RateDefinition[] rateDefinitions = new RateDefinition[0];

        switch (type) {
            case "admin-assign":
                url.append("apis/" + pathParamStringList.get(0) + OPERATIONS + pathParamStringList.get(1) + "/operationrates");
                break;
            case "operator-assign":
                url.append("operators/" + pathParamStringList.get(2) + "/apis/" + pathParamStringList.get(0) + OPERATIONS + pathParamStringList.get(1) + "/operatorrates");
                break;
            default:
                break;
        }

        HttpGet httpGet = new HttpGet(url.toString());

        httpGet.addHeader("Authorization", authenticationCredential);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                rateDefinitions = mapper.readValue(response.getEntity().getContent(), RateDefinition[].class);
                return rateDefinitions;
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading operation rates from hub");
                return rateDefinitions;
            }

        } catch (IOException e) {
            log.error(" Exception while loading operation rates from hub " + e);
            return rateDefinitions;
        }
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {
        return null;
    }
}

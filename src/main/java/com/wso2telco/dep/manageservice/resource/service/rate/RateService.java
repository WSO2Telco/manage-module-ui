package com.wso2telco.dep.manageservice.resource.service.rate;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferrable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;

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
public class RateService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(RateService.class);


    public RateService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback get(String ERROR, String SUCCESS, String url, String authHeader) {
        HttpGet httpGet = new HttpGet(url);

        httpGet.addHeader("Authorization", authHeader);

        try {
            HttpResponse response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                Object object = mapper.readValue(response.getEntity().getContent(), Object.class);
                return new Callback().setPayload(object).setSuccess(true).setMessage(SUCCESS);
            } else {
                log.error(response.getStatusLine().getStatusCode() + " " + ERROR);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
            }

        } catch (IOException e) {
            log.error(" Exception while loading categories from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
        }
    }

    public Callback set(Object object, String ERROR, String SUCCESS, String url, String authHeader) {
        HttpPost httpPost = new HttpPost(url);
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);

        try {
            /** set request body */
            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(object)));
            HttpResponse response = client.execute(httpPost);
            if (response.getStatusLine().getStatusCode() == 201) {
                Object responseObject = mapper.readValue(response.getEntity().getContent(), Object.class);
                return new Callback().setPayload(responseObject).setSuccess(true).setMessage(SUCCESS);
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error while adding new Category to hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
            }
        } catch (IOException e) {
            log.error(" Exception while adding new Category to hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(ERROR);
        }
    }

	
}

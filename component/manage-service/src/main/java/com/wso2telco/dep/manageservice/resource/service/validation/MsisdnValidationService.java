/**
 * Copyright (c) 2017, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 *
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.wso2telco.dep.manageservice.resource.service.validation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.MsisdnValidation;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import com.wso2telco.dep.manageservice.resource.util.ServiceUrl;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class MsisdnValidationService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(MsisdnValidationService.class);

    public MsisdnValidationService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {
        HttpPost httpPost = new HttpPost(new StringBuilder(super.getUrl(ServiceUrl.MSISDN_VALIDATION_SERVICE)).toString());

        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authenticationCredential);

        try {
            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(request)));
            HttpResponse response = client.execute(httpPost);

            if (response.getStatusLine().getStatusCode() == 200) {
                MsisdnValidation msisdnValidation = mapper.readValue(response.getEntity().getContent(), MsisdnValidation.class);
                return new Callback().setPayload(msisdnValidation).setSuccess(true).setMessage("Hit Validation Service successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error while requesting validation");
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.VALIDATION_SERVICE_ERROR.getValue());
            }

        } catch (IOException e) {
            log.error("Error occurred while executing validation Service");
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.VALIDATION_SERVICE_ERROR.getValue());
        }

    }
}

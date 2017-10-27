/*******************************************************************************
 * Copyright  (c) 2016-2017, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 *
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
package com.wso2telco.dep.manageservice.resource.service.whitelist;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

public class ApplicationService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(ApplicationService.class);

    public ApplicationService () {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executeGet(String authenticationCredential) {
        return null;
    }

    @Override
    public Callback executeGet(String authenticationCredential, List<String> pathParamStringList) {
        return null;
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {

        HttpPost httpPost = new HttpPost(new StringBuilder("http://localhost:9763/blacklist-whitelist-service/queries/").append("apps").toString());
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authenticationCredential);

        try {
            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(request)));
            HttpResponse response = client.execute(httpPost);

            if (response.getStatusLine().getStatusCode() == 200) {
                String[] application = mapper.readValue(response.getEntity().getContent(),  String[].class);
                return new Callback().setPayload(application).setSuccess(true).setMessage("Applications Loaded SuccessFully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error while loading applications");
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_LOADING_ERROR.getValue());
            }

        } catch (UnsupportedEncodingException | JsonProcessingException | ClientProtocolException e) {
            log.error("Error while loading applications " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_LOADING_ERROR.getValue());
        } catch (IOException e) {
            log.error("Error while loading applications " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.APPLICATION_LOADING_ERROR.getValue());
        }
    }
}

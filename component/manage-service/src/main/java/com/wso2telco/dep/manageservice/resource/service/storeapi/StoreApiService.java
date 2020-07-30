/*
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

package com.wso2telco.dep.manageservice.resource.service.storeapi;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.model.ApiResourcePath;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.wso2.carbon.apimgt.hostobjects.internal.HostObjectComponent;
import org.wso2.carbon.apimgt.impl.APIConstants;
import org.wso2.carbon.apimgt.impl.APIManagerConfiguration;

public class StoreApiService {

    private static final String STORE_REST_API_VERSION = "v0.13";

    /**
     * Returns API definition as a JSON String by calling WSO2 api-store REST API v0.13.
     *
     * @param apiId unique ID of the API
     * @return Callback with JSON representation of API definition
     * @throws BusinessException if any error occurred while retrieving API definitions
     */
    public Callback getApiJsonStr(String apiId) throws BusinessException {
        HttpGet request = new HttpGet(storeApiUrl(apiId));
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(request)) {
            return new Callback().setMessage("success")
                .setPayload(EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8.name()))
                .setSuccess(true);
        } catch (IOException e) {
            throw new BusinessException("Error occurred while retrieving API details" + e.getLocalizedMessage());
        }
    }

    /**
     * Returns list of API resource paths by calling WSO2 api-store REST API v0.13.
     *
     * @param apiId unique ID of the API
     * @return Callback with list of API resource paths
     * @throws BusinessException if any error occurred while retrieving API definitions
     */
    public Callback getResourcePolicies(String apiId) throws BusinessException {
        HttpGet request = new HttpGet(storeApiUrl(apiId));
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(request)) {
            final List<ApiResourcePath> apiResourcePolicies = new ArrayList<>();
            final Gson gson = new Gson();
            final String responseString = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8.name());
            final String apiDefinition = gson.fromJson(responseString, JsonObject.class).get("apiDefinition").getAsString();
            gson.fromJson(apiDefinition, JsonObject.class)
                .get("paths")
                .getAsJsonObject()
                .entrySet()
                .forEach(resourcePathEntry -> {
                    final String resourcePath = resourcePathEntry.getKey();
                    resourcePathEntry.getValue()
                        .getAsJsonObject()
                        .entrySet()
                        .forEach(httpVerbEntry -> {
                            final ApiResourcePath apiResourcePath = new ApiResourcePath();
                            apiResourcePath.setResourcePath(resourcePath);
                            apiResourcePath.setHttpVerb(httpVerbEntry.getKey());
                            apiResourcePolicies.add(apiResourcePath);
                        });
                });
            return new Callback().setMessage("success")
                .setPayload(apiResourcePolicies)
                .setSuccess(true);
        } catch (IOException e) {
            throw new BusinessException("Error occurred while retrieving API details" + e.getLocalizedMessage());
        }
    }

    private String storeApiUrl(String apiId) {
        final APIManagerConfiguration config = HostObjectComponent.getAPIManagerConfiguration();
        return config.getFirstProperty(APIConstants.API_STORE_URL)
            .replace("store", "api/am/store/" + STORE_REST_API_VERSION + "/apis/") + apiId;
    }
}

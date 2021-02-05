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

package com.wso2telco.dep.manageservice.resource.service.supertoken;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.util.Environment;
import com.wso2telco.dep.manageservice.resource.util.PropertyUtil;
import org.apache.http.NameValuePair;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.wso2.carbon.apimgt.impl.APIManagerConfiguration;
import org.wso2.carbon.apimgt.impl.internal.ServiceReferenceHolder;

public class SuperTokenService {

    /**
     * Generate a super token using TokenAPI. This token can be used to invoke any API without having a subscription.
     * A separate user application should be created and relevant consumer key and consumer secret should be configured
     * in super-token-conf.properties file. The credentials should not disclosed to anyone and should be a super secret
     * since any API could be invoked using that credentials without having a valid subscription.
     *
     * @param environment either PRODUCTION or SANDBOX. This will be used for pick the correct consumer keys
     * @return String JSON representation of super token object
     * @throws BusinessException if any error occurred while generating the token
     */
    public String generate(Environment environment) throws BusinessException {
        final Properties superTokenConf = PropertyUtil.superTokenProperties();

        HttpPost request = new HttpPost(gatewayUrl());
        List<NameValuePair> urlParameters = new ArrayList<>();
        urlParameters.add(new BasicNameValuePair("grant_type", "client_credentials"));
        request.setEntity(new UrlEncodedFormEntity(urlParameters, StandardCharsets.UTF_8));

        CredentialsProvider provider = new BasicCredentialsProvider();
        provider.setCredentials(AuthScope.ANY, new UsernamePasswordCredentials(
            superTokenConf.getProperty("super.token." + environment.toString() + ".consumer.key"),
            superTokenConf.getProperty("super.token." + environment.toString() + ".consumer.secret")
        ));
        try (CloseableHttpClient httpClient = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();
             CloseableHttpResponse response = httpClient.execute(request)) {
            return EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8.name());
        } catch (IOException e) {
            throw new BusinessException("Error occurred while generating token" + e.getLocalizedMessage());
        }
    }

    private String gatewayUrl() {
        final String GATEWAY_URL = "APIGateway.Environments.Environment.GatewayEndpoint";
        APIManagerConfiguration apiManagerConfiguration = ServiceReferenceHolder.getInstance().getAPIManagerConfigurationService().getAPIManagerConfiguration();
        return apiManagerConfiguration.getFirstProperty(GATEWAY_URL).split(",")[0] + "/token";
    }
}

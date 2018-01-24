package com.wso2telco.dep.manageservice.resource.model.rate;

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
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.wso2telco.dep.manageservice.resource.model.workflow.Api;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "apiOperationId",
        "api",
        "apiOperation",
        "apiOperationCode",
        "createdBy"
})
public class ApiOperation implements RequestTransferable {

    @JsonProperty("apiOperationId")
    private Integer apiOperationId;
    @JsonProperty("api")
    private Api api;
    @JsonProperty("apiOperation")
    private String apiOperation;
    @JsonProperty("apiOperationCode")
    private String apiOperationCode;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("apiOperationId")
    public Integer getApiOperationId() {
        return apiOperationId;
    }

    @JsonProperty("apiOperationId")
    public void setApiOperationId(Integer apiOperationId) {
        this.apiOperationId = apiOperationId;
    }

    @JsonProperty("api")
    public Api getApi() {
        return api;
    }

    @JsonProperty("api")
    public void setApi(Api api) {
        this.api = api;
    }

    @JsonProperty("apiOperation")
    public String getApiOperation() {
        return apiOperation;
    }

    @JsonProperty("apiOperation")
    public void setApiOperation(String apiOperation) {
        this.apiOperation = apiOperation;
    }

    @JsonProperty("apiOperationCode")
    public String getApiOperationCode() {
        return apiOperationCode;
    }

    @JsonProperty("apiOperationCode")
    public void setApiOperationCode(String apiOperationCode) {
        this.apiOperationCode = apiOperationCode;
    }

    @JsonProperty("createdBy")
    public String getCreatedBy() {
        return createdBy;
    }

    @JsonProperty("createdBy")
    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
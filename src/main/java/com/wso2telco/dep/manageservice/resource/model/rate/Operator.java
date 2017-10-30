package com.wso2telco.dep.manageservice.resource.model.rate;

import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

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


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "operatorId",
        "operatorName",
        "operatorDescription",
        "createdBy"
})
public class Operator {

    @JsonProperty("operatorId")
    private Integer operatorId;
    @JsonProperty("operatorName")
    private String operatorName;
    @JsonProperty("operatorDescription")
    private String operatorDescription;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("operatorId")
    public Integer getOperatorId() {
        return operatorId;
    }

    @JsonProperty("operatorId")
    public void setOperatorId(Integer operatorId) {
        this.operatorId = operatorId;
    }

    @JsonProperty("operatorName")
    public String getOperatorName() {
        return operatorName;
    }

    @JsonProperty("operatorName")
    public void setOperatorName(String operatorName) {
        this.operatorName = operatorName;
    }

    @JsonProperty("operatorDescription")
    public String getOperatorDescription() {
        return operatorDescription;
    }

    @JsonProperty("operatorDescription")
    public void setOperatorDescription(String operatorDescription) {
        this.operatorDescription = operatorDescription;
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

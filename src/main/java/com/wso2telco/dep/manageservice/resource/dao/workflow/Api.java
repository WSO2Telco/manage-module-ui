package com.wso2telco.dep.manageservice.resource.dao.workflow;


import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "apiId",
        "apiName",
        "apiDescription",
        "operations",
        "createdBy"
})
public class Api {

    @JsonProperty("apiId")
    private Integer apiId;
    @JsonProperty("apiName")
    private String apiName;
    @JsonProperty("apiDescription")
    private String apiDescription;
    @JsonProperty("operations")
    private List<Operation> operations = null;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("apiId")
    public Integer getApiId() {
        return apiId;
    }

    @JsonProperty("apiId")
    public void setApiId(Integer apiId) {
        this.apiId = apiId;
    }

    @JsonProperty("apiName")
    public String getApiName() {
        return apiName;
    }

    @JsonProperty("apiName")
    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    @JsonProperty("apiDescription")
    public String getApiDescription() {
        return apiDescription;
    }

    @JsonProperty("apiDescription")
    public void setApiDescription(String apiDescription) {
        this.apiDescription = apiDescription;
    }

    @JsonProperty("operations")
    public List<Operation> getOperations() {
        return operations;
    }

    @JsonProperty("operations")
    public void setOperations(List<Operation> operations) {
        this.operations = operations;
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
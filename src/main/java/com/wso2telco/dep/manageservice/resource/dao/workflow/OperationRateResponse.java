package com.wso2telco.dep.manageservice.resource.dao.workflow;


import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "api",
        "operator"
})
public class OperationRateResponse {

    @JsonProperty("api")
    private Api api;
    @JsonProperty("operator")
    private Object operator;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("api")
    public Api getApi() {
        return api;
    }

    @JsonProperty("api")
    public void setApi(Api api) {
        this.api = api;
    }

    @JsonProperty("operator")
    public Object getOperator() {
        return operator;
    }

    @JsonProperty("operator")
    public void setOperator(Object operator) {
        this.operator = operator;
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

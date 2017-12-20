package com.wso2telco.dep.manageservice.resource.model;

import com.fasterxml.jackson.annotation.*;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "msisdnList"
})
public class MsisdnValidationRequest implements RequestTransferable {

    @JsonProperty("msisdnList")
    private List<String> msisdnList = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<>();

    @JsonProperty("msisdnList")
    public List<String> getMsisdnList() {
        return msisdnList;
    }

    @JsonProperty("msisdnList")
    public void setMsisdnList(List<String> msisdnList) {
        this.msisdnList = msisdnList;
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

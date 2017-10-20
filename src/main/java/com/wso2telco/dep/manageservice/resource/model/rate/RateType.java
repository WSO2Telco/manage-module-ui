package com.wso2telco.dep.manageservice.resource.model.rate;

/**
 * Created by manoj on 10/12/17.
 */


import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "rateTypeId",
        "rateTypeCode",
        "createdBy",
        "rateTypeDesc"
})
public class RateType {

    @JsonProperty("rateTypeId")
    private Integer rateTypeId;
    @JsonProperty("rateTypeCode")
    private String rateTypeCode;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonProperty("rateTypeDesc")
    private String rateTypeDesc;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("rateTypeId")
    public Integer getRateTypeId() {
        return rateTypeId;
    }

    @JsonProperty("rateTypeId")
    public void setRateTypeId(Integer rateTypeId) {
        this.rateTypeId = rateTypeId;
    }

    @JsonProperty("rateTypeCode")
    public String getRateTypeCode() {
        return rateTypeCode;
    }

    @JsonProperty("rateTypeCode")
    public void setRateTypeCode(String rateTypeCode) {
        this.rateTypeCode = rateTypeCode;
    }

    @JsonProperty("createdBy")
    public String getCreatedBy() {
        return createdBy;
    }

    @JsonProperty("createdBy")
    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    @JsonProperty("rateTypeDesc")
    public String getRateTypeDesc() {
        return rateTypeDesc;
    }

    @JsonProperty("rateTypeDesc")
    public void setRateTypeDesc(String rateTypeDesc) {
        this.rateTypeDesc = rateTypeDesc;
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

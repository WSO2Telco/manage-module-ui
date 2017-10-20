package com.wso2telco.dep.manageservice.resource.model.rate;

/**
 * Created by manoj on 10/12/17.
 */
import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "currencyId",
        "currencyCode",
        "currencyDescription",
        "createdBy"
})
public class Currency {

    @JsonProperty("currencyId")
    private Integer currencyId;
    @JsonProperty("currencyCode")
    private String currencyCode;
    @JsonProperty("currencyDescription")
    private String currencyDescription;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("currencyId")
    public Integer getCurrencyId() {
        return currencyId;
    }

    @JsonProperty("currencyId")
    public void setCurrencyId(Integer currencyId) {
        this.currencyId = currencyId;
    }

    @JsonProperty("currencyCode")
    public String getCurrencyCode() {
        return currencyCode;
    }

    @JsonProperty("currencyCode")
    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    @JsonProperty("currencyDescription")
    public String getCurrencyDescription() {
        return currencyDescription;
    }

    @JsonProperty("currencyDescription")
    public void setCurrencyDescription(String currencyDescription) {
        this.currencyDescription = currencyDescription;
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

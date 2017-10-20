package com.wso2telco.dep.manageservice.resource.model.rate;

/**
 * Created by manoj on 10/13/17.
 */
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "rateDefinition",
        "rateCategories",
        "rateTaxes",
        "createdBy"
})
public class RateCard {

    @JsonProperty("rateDefinition")
    private RateDefinition rateDefinition;
    @JsonProperty("rateCategories")
    private List<RateCategory> rateCategories = null;
    @JsonProperty("rateTaxes")
    private List<Tax> rateTaxes = null;
    @JsonProperty("createdBy")
    private Object createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("rateDefinition")
    public RateDefinition getRateDefinition() {
        return rateDefinition;
    }

    @JsonProperty("rateDefinition")
    public void setRateDefinition(RateDefinition rateDefinition) {
        this.rateDefinition = rateDefinition;
    }

    @JsonProperty("rateCategories")
    public List<RateCategory> getRateCategories() {
        return rateCategories;
    }

    @JsonProperty("rateCategories")
    public void setRateCategories(List<RateCategory> rateCategories) {
        this.rateCategories = rateCategories;
    }

    @JsonProperty("rateTaxes")
    public List<Tax> getRateTaxes() {
        return rateTaxes;
    }

    @JsonProperty("rateTaxes")
    public void setRateTaxes(List<Tax> rateTaxes) {
        this.rateTaxes = rateTaxes;
    }

    @JsonProperty("createdBy")
    public Object getCreatedBy() {
        return createdBy;
    }

    @JsonProperty("createdBy")
    public void setCreatedBy(Object createdBy) {
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


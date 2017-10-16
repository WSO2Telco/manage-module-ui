package com.wso2telco.dep.manageservice.resource.dao.rate;

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
public class RateCardDAO {

    @JsonProperty("rateDefinition")
    private RateDefinitionDAO rateDefinition;
    @JsonProperty("rateCategories")
    private List<RateCategoryDAO> rateCategories = null;
    @JsonProperty("rateTaxes")
    private List<TaxDAO> rateTaxes = null;
    @JsonProperty("createdBy")
    private Object createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("rateDefinition")
    public RateDefinitionDAO getRateDefinition() {
        return rateDefinition;
    }

    @JsonProperty("rateDefinition")
    public void setRateDefinition(RateDefinitionDAO rateDefinition) {
        this.rateDefinition = rateDefinition;
    }

    @JsonProperty("rateCategories")
    public List<RateCategoryDAO> getRateCategories() {
        return rateCategories;
    }

    @JsonProperty("rateCategories")
    public void setRateCategories(List<RateCategoryDAO> rateCategories) {
        this.rateCategories = rateCategories;
    }

    @JsonProperty("rateTaxes")
    public List<TaxDAO> getRateTaxes() {
        return rateTaxes;
    }

    @JsonProperty("rateTaxes")
    public void setRateTaxes(List<TaxDAO> rateTaxes) {
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


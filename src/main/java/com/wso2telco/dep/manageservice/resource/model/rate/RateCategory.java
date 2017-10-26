package com.wso2telco.dep.manageservice.resource.model.rate;

/**
 * Created by manoj on 10/13/17.
 */

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "rateCategoryId",
        "rateDefinition",
        "category",
        "subCategory",
        "tariff",
        "createdBy"
})
public class RateCategory implements RequestTransferable {

    @JsonProperty("rateCategoryId")
    private Integer rateCategoryId;
    @JsonProperty("rateDefinition")
    private RateDefinition rateDefinition;
    @JsonProperty("category")
    private Category category;
    @JsonProperty("subCategory")
    private Category subCategory;
    @JsonProperty("tariff")
    private Tariff tariff;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("rateCategoryId")
    public Integer getRateCategoryId() {
        return rateCategoryId;
    }

    @JsonProperty("rateCategoryId")
    public void setRateCategoryId(Integer rateCategoryId) {
        this.rateCategoryId = rateCategoryId;
    }

    @JsonProperty("rateDefinition")
    public RateDefinition getRateDefinition() {
        return rateDefinition;
    }

    @JsonProperty("rateDefinition")
    public void setRateDefinition(RateDefinition rateDefinition) {
        this.rateDefinition = rateDefinition;
    }

    @JsonProperty("category")
    public Category getCategory() {
        return category;
    }

    @JsonProperty("category")
    public void setCategory(Category category) {
        this.category = category;
    }

    @JsonProperty("subCategory")
    public Category getSubCategory() {
        return subCategory;
    }

    @JsonProperty("subCategory")
    public void setSubCategory(Category subCategory) {
        this.subCategory = subCategory;
    }

    @JsonProperty("tariff")
    public Tariff getTariff() {
        return tariff;
    }

    @JsonProperty("tariff")
    public void setTariff(Tariff tariff) {
        this.tariff = tariff;
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

package com.wso2telco.dep.manageservice.resource.dao.rate;

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

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "rateCategoryId",
        "rateDefinition",
        "category",
        "subCategory",
        "tariff",
        "createdBy"
})
public class RateCategoryDAO {

    @JsonProperty("rateCategoryId")
    private Integer rateCategoryId;
    @JsonProperty("rateDefinition")
    private RateDefinitionDAO rateDefinition;
    @JsonProperty("category")
    private CategoryDAO category;
    @JsonProperty("subCategory")
    private CategoryDAO subCategory;
    @JsonProperty("tariff")
    private TariffDAO tariff;
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
    public RateDefinitionDAO getRateDefinition() {
        return rateDefinition;
    }

    @JsonProperty("rateDefinition")
    public void setRateDefinition(RateDefinitionDAO rateDefinition) {
        this.rateDefinition = rateDefinition;
    }

    @JsonProperty("category")
    public CategoryDAO getCategory() {
        return category;
    }

    @JsonProperty("category")
    public void setCategory(CategoryDAO category) {
        this.category = category;
    }

    @JsonProperty("subCategory")
    public CategoryDAO getSubCategory() {
        return subCategory;
    }

    @JsonProperty("subCategory")
    public void setSubCategory(CategoryDAO subCategory) {
        this.subCategory = subCategory;
    }

    @JsonProperty("tariff")
    public TariffDAO getTariff() {
        return tariff;
    }

    @JsonProperty("tariff")
    public void setTariff(TariffDAO tariff) {
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

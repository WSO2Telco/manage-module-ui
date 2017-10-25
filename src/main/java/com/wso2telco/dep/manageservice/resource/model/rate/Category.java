package com.wso2telco.dep.manageservice.resource.model.rate;

/**
 * Created by manoj on 10/11/17.
 */

import com.fasterxml.jackson.annotation.*;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferrable;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "categoryId",
        "categoryName",
        "categoryCode",
        "categoryDescription",
        "createdBy"
})
public class Category implements RequestTransferrable {

    @JsonProperty("categoryId")
    private Integer categoryId;
    @JsonProperty("categoryName")
    private String categoryName;
    @JsonProperty("categoryCode")
    private String categoryCode;
    @JsonProperty("categoryDescription")
    private String categoryDescription;
    @JsonProperty("createdBy")
    private String createdBy;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("categoryId")
    public Integer getCategoryId() {
        return categoryId;
    }

    @JsonProperty("categoryId")
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    @JsonProperty("categoryName")
    public String getCategoryName() {
        return categoryName;
    }

    @JsonProperty("categoryName")
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @JsonProperty("categoryCode")
    public String getCategoryCode() {
        return categoryCode;
    }

    @JsonProperty("categoryCode")
    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }

    @JsonProperty("categoryDescription")
    public String getCategoryDescription() {
        return categoryDescription;
    }

    @JsonProperty("categoryDescription")
    public void setCategoryDescription(String categoryDescription) {
        this.categoryDescription = categoryDescription;
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
package com.wso2telco.dep.manageservice.resource.model;

import com.fasterxml.jackson.annotation.*;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "valid",
        "invalid",
        "validationRegex",
        "prefixGroup",
        "digitsGroup"
})
public class MsisdnValidation implements RequestTransferable {

    @JsonProperty("valid")
    private List<String> valid = null;
    @JsonProperty("invalid")
    private List<String> invalid = null;
    @JsonProperty("validationRegex")
    private String validationRegex;
    @JsonProperty("prefixGroup")
    private Integer prefixGroup;
    @JsonProperty("digitsGroup")
    private Integer digitsGroup;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("valid")
    public List<String> getValid() {
        return valid;
    }

    @JsonProperty("valid")
    public void setValid(List<String> valid) {
        this.valid = valid;
    }

    @JsonProperty("invalid")
    public List<String> getInvalid() {
        return invalid;
    }

    @JsonProperty("invalid")
    public void setInvalid(List<String> invalid) {
        this.invalid = invalid;
    }

    @JsonProperty("validationRegex")
    public String getValidationRegex() {
        return validationRegex;
    }

    @JsonProperty("validationRegex")
    public void setValidationRegex(String validationRegex) {
        this.validationRegex = validationRegex;
    }

    @JsonProperty("prefixGroup")
    public Integer getPrefixGroup() {
        return prefixGroup;
    }

    @JsonProperty("prefixGroup")
    public void setPrefixGroup(Integer prefixGroup) {
        this.prefixGroup = prefixGroup;
    }

    @JsonProperty("digitsGroup")
    public Integer getDigitsGroup() {
        return digitsGroup;
    }

    @JsonProperty("digitsGroup")
    public void setDigitsGroup(Integer digitsGroup) {
        this.digitsGroup = digitsGroup;
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

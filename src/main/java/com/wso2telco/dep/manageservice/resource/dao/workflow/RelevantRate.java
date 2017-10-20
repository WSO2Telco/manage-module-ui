package com.wso2telco.dep.manageservice.resource.dao.workflow;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.wso2telco.dep.manageservice.resource.dao.rate.RateDefinitionDAO;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "apiOperation",
        "rateDefinitions"
})
public class RelevantRate {

    @JsonProperty("apiOperation")
    private String apiOperation;
    @JsonProperty("rateDefinitions")
    private List<RateDefinitionDAO> rateDefinitions = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("apiOperation")
    public String getApiOperation() {
        return apiOperation;
    }

    @JsonProperty("apiOperation")
    public void setApiOperation(String apiOperation) {
        this.apiOperation = apiOperation;
    }

    @JsonProperty("rateDefinitions")
    public List<RateDefinitionDAO> getRateDefinitions() {
        return rateDefinitions;
    }

    @JsonProperty("rateDefinitions")
    public void setRateDefinitions(List<RateDefinitionDAO> rateDefinitions) {
        this.rateDefinitions = rateDefinitions;
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
package com.wso2telco.dep.manageservice.resource.model.workflow;


import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "graphData",
        "xAxisLabels"
})
public class GraphResponse {

    @JsonProperty("graphData")
    private List<GraphData> graphData = null;
    @JsonProperty("xAxisLabels")
    private List<String> xAxisLabels = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("graphData")
    public List<GraphData> getGraphData() {
        return graphData;
    }

    @JsonProperty("graphData")
    public void setGraphData(List<GraphData> graphData) {
        this.graphData = graphData;
    }

    @JsonProperty("xAxisLabels")
    public List<String> getXAxisLabels() {
        return xAxisLabels;
    }

    @JsonProperty("xAxisLabels")
    public void setXAxisLabels(List<String> xAxisLabels) {
        this.xAxisLabels = xAxisLabels;
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
package com.wso2telco.dep.manageservice.resource.dao.workflow;

import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "assignee",
        "isAdmin",
        "operator",
        "size",
        "start",
        "processType",
        "candidateGroups"
})
public class ApplicationDetailRequestDAO {

    @JsonProperty("assignee")
    private String assignee;
    @JsonProperty("isAdmin")
    private Boolean isAdmin;
    @JsonProperty("operator")
    private String operator;
    @JsonProperty("size")
    private Integer size;
    @JsonProperty("start")
    private Integer start;
    @JsonProperty("processType")
    private String processType;
    @JsonProperty("candidateGroups")
    private String candidateGroups;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("assignee")
    public String getAssignee() {
        return assignee;
    }

    @JsonProperty("assignee")
    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    @JsonProperty("isAdmin")
    public Boolean getIsAdmin() {
        return isAdmin;
    }

    @JsonProperty("isAdmin")
    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    @JsonProperty("operator")
    public String getOperator() {
        return operator;
    }

    @JsonProperty("operator")
    public void setOperator(String operator) {
        this.operator = operator;
    }

    @JsonProperty("size")
    public Integer getSize() {
        return size;
    }

    @JsonProperty("size")
    public void setSize(Integer size) {
        this.size = size;
    }

    @JsonProperty("start")
    public Integer getStart() {
        return start;
    }

    @JsonProperty("start")
    public void setStart(Integer start) {
        this.start = start;
    }

    @JsonProperty("processType")
    public String getProcessType() {
        return processType;
    }

    @JsonProperty("processType")
    public void setProcessType(String processType) {
        this.processType = processType;
    }

    @JsonProperty("candidateGroups")
    public String getCandidateGroups() {
        return candidateGroups;
    }

    @JsonProperty("candidateGroups")
    public void setCandidateGroups(String candidateGroups) {
        this.candidateGroups = candidateGroups;
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


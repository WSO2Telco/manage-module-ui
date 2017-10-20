package com.wso2telco.dep.manageservice.resource.model.workflow;

import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "taskId",
        "description",
        "selectedTier",
        "status",
        "user",
        "taskType",
        "role",
        "creditPlan",
        "selectedRate"
})
public class ApprovalRequest {

    @JsonProperty("taskId")
    private String taskId;
    @JsonProperty("description")
    private String description;
    @JsonProperty("selectedTier")
    private String selectedTier;
    @JsonProperty("status")
    private String status;
    @JsonProperty("user")
    private String user;
    @JsonProperty("taskType")
    private String taskType;
    @JsonProperty("role")
    private Boolean role;
    @JsonProperty("creditPlan")
    private String creditPlan;
    @JsonProperty("selectedRate")
    private String selectedRate;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("taskId")
    public String getTaskId() {
        return taskId;
    }

    @JsonProperty("taskId")
    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    @JsonProperty("description")
    public void setDescription(String description) {
        this.description = description;
    }

    @JsonProperty("selectedTier")
    public String getSelectedTier() {
        return selectedTier;
    }

    @JsonProperty("selectedTier")
    public void setSelectedTier(String selectedTier) {
        this.selectedTier = selectedTier;
    }

    @JsonProperty("status")
    public String getStatus() {
        return status;
    }

    @JsonProperty("status")
    public void setStatus(String status) {
        this.status = status;
    }

    @JsonProperty("user")
    public String getUser() {
        return user;
    }

    @JsonProperty("user")
    public void setUser(String user) {
        this.user = user;
    }

    @JsonProperty("taskType")
    public String getTaskType() {
        return taskType;
    }

    @JsonProperty("taskType")
    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    @JsonProperty("role")
    public Boolean getRole() {
        return role;
    }

    @JsonProperty("role")
    public void setRole(Boolean role) {
        this.role = role;
    }

    @JsonProperty("creditPlan")
    public String getCreditPlan() {
        return creditPlan;
    }

    @JsonProperty("creditPlan")
    public void setCreditPlan(String creditPlan) {
        this.creditPlan = creditPlan;
    }

    @JsonProperty("selectedRate")
    public String getSelectedRate() {
        return selectedRate;
    }

    @JsonProperty("selectedRate")
    public void setSelectedRate(String selectedRate) {
        this.selectedRate = selectedRate;
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
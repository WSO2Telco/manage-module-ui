package com.wso2telco.dep.manageservice.resource.model.whitelist;

import com.fasterxml.jackson.annotation.*;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;

import java.util.HashMap;
import java.util.Map;


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "operator"
})
public class Application implements RequestTransferable {

    @JsonProperty("id")
    private String id;
    @JsonProperty("operator")
    private String operator;

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(String id) {
        this.id = id;
    }

    @JsonProperty("operator")
    public String getOperator() {
        return operator;
    }

    @JsonProperty("operator")
    public void setOperator(String operator) {
        this.operator = operator;
    }

}

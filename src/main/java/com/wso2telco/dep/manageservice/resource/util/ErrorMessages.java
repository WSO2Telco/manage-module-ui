package com.wso2telco.dep.manageservice.resource.util;

public enum ErrorMessages {

//    Todo Define error messages
    ERROR_MESSAGES("ERROR MESSAGES");

    private String name;

    ErrorMessages(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

package com.wso2telco.dep.manageservice.resource.util;

public enum Messages {

//    Todo Define error messages
    ERROR_MESSAGES("ERROR MESSAGES"),
    CATEGORY_ADDING_ERROR("Error Adding New Category"),
    CATEGORY_LOADING_ERROR("Error Loading Category List"),
    APPLICATION_SEARCH_ERROR("Error Loading Approval Tasks"),
    APPLICATION_SEARCH_SUCCESS("Approval Tasks Loaded");

    private String name;

    Messages(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

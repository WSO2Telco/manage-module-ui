package com.wso2telco.dep.manageservice.resource.util;

public enum Messages {

//    Todo Define error messages
    ERROR_MESSAGES("ERROR MESSAGES"),
    CATEGORY_ADDING_ERROR("Error Adding New Category"),
    CATEGORY_LOADING_ERROR("Error Loading Category List"),
    CURRENCY_ADDING_ERROR( "Error Adding New Currency"),
    CURRENCY_LOADING_ERROR("Error Loading Currency List"),
    TARIFF_ADDING_ERROR( "Error Adding New Tariff"),
    TARIFF_LOADING_ERROR("Error Loading Tariff List"),
    RATE_CARD_ADDING_ERROR( "Error Adding New Rate Card"),
    RATE_CARD_LOADING_ERROR("Error Loading Rate Card List"),
    RATE_DEFINITION_LOADING_ERROR("Error Loading Rate Definition List"),
    TAX_LOADING_ERROR("Error Loading Tax List"),
    RATE_TYPE_LOADING_ERROR("Error Loading Rate Type List"),
    APPLICATION_SEARCH_ERROR("Error Loading Approval Tasks"),
    APPLICATION_SEARCH_SUCCESS("Approval Tasks Loaded");

    private String value;

    Messages(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

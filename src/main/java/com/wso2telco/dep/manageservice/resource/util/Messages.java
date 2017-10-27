package com.wso2telco.dep.manageservice.resource.util;

/**
 * Copyright (c) 2016, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 * <p>
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
public enum Messages {

    /** to define error messages*/
    ERROR_MESSAGES("ERROR MESSAGES"),
    CATEGORY_ADDING_ERROR("Error Adding New Category"),
    CATEGORY_LOADING_ERROR("Error Loading Category List"),
    CATEGORY_ADDING_SUCCESS("New Category Created Successfully"),
    CATEGORY_LOADING_SUCCESS("Rate Category List Loaded Successfully"),
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
    APPLICATION_SEARCH_SUCCESS("Approval Tasks Loaded"),
    API_OPERATIONS_LOADING_EROOR("Error Loading Api Operations"),
    API_OPERATION_RATES_LOADING_ERROR("Error Loading Api Operation Rates"),
    API_LOADING_ERROR("Error Loading api List"),
    SUBSCRIBERS_LOADING_ERROR("Error Loading subscribers");

    private String value;

    Messages(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

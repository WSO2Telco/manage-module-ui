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
public enum ServiceTypes {

    RATE_CARD("rate_card"),
    RATE_CATEGORY("rate_category"),
    RATE_CURRENCY("rate_currency"),
    RATE_TAX("rate_tax"),
    RATE_DEFINITION("rate_definition"),
    RATE_TYPE("rate_type"),
    RATE_TARIFF("rate_tariff"),
    RATE_API_OPERATIONS("rate_api_operations"),
    RATE_API_OPERATION_RATES("rate_api_operation_rates"),
    QUOTA_LIMIT("quota_limit"),
    BLACKLIST("blacklist");

    private String value;

    ServiceTypes(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

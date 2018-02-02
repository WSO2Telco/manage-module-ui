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
public enum ServiceUrl {

    RATE_SERVICE("http://localhost:9763/ratecard-service/ratecardservice/"),
    BLACKLIST_WHITELIST("http://localhost:9763/blacklist-whitelist-service/queries/"),
    QUOTA_SERVICE("http://localhost:9763/quota-service/services/"),
    MSISDN_VALIDATION_SERVICE("http://localhost:8281/services/msisdnValidation");
    private String value;

    ServiceUrl(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

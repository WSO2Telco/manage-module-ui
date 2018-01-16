package com.wso2telco.dep.manageservice.resource.service.rate;

import com.wso2telco.dep.manageservice.resource.service.Serviceable;

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
public class RateFactory {

    static RateFactory instance;

    RateFactory() {
    }

    public static synchronized RateFactory getInstance() {
        if (instance == null) {
            instance = new RateFactory();
        }
        return instance;
    }


    public Serviceable getRateCardService() {
        return new RateCardService();
    }

    public Serviceable getRateCategoryService() {
        return new CategoryService();
    }

    public Serviceable getRateCurrencyService() {
        return new CurrencyService();
    }

    public Serviceable getRateTaxService() {
        return new TaxService();
    }

    public Serviceable getRateDefinitionService() {
        return new RateDefinitionService();
    }

    public Serviceable getRateTariffService() {
        return new TariffService();
    }

    public Serviceable getRateTypeService() {
        return new RateTypeService();
    }

    public Serviceable getApiOperationsService(){
        return new ApiOperationsService();
    }

    public Serviceable getApiOperationRatesService(){
        return new ApiOperationRatesService();
    }

    public Serviceable getOperatorsService(){
        return new OperatorService();
    }

    public Serviceable getAssignRatesService(){
        return new AssignRateService();
    }
}

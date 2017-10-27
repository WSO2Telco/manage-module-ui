package com.wso2telco.dep.manageservice.resource.service;

import com.wso2telco.dep.manageservice.resource.service.blacklist.BlackListFactory;
import com.wso2telco.dep.manageservice.resource.service.quota.QuotaFactory;
import com.wso2telco.dep.manageservice.resource.service.rate.RateFactory;
import com.wso2telco.dep.manageservice.resource.service.whitelist.WhiteListFactory;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

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
public class ServiceFactory {
    static ServiceFactory instance;

    private ServiceFactory() {
    }

    public static synchronized ServiceFactory getInstance() {
        if (instance == null) {
            instance = new ServiceFactory();
        }
        return instance;
    }


    public Serviceable getService(ServiceTypes serviceTypes) {
        Serviceable service = null;
        switch (serviceTypes) {
            case QUOTA_LIMIT:
                service = QuotaFactory.getInstance().getQuotaLimitService();
                break;
            case RATE_CARD:
                service = RateFactory.getInstance().getRateCardService();
                break;
            case RATE_CATEGORY:
                service = RateFactory.getInstance().getRateCategoryService();
                break;
            case RATE_CURRENCY:
                service = RateFactory.getInstance().getRateCurrencyService();
                break;
            case RATE_TAX:
                service = RateFactory.getInstance().getRateTaxService();
                break;
            case RATE_TYPE:
                service = RateFactory.getInstance().getRateTypeService();
                break;
            case RATE_TARIFF:
                service = RateFactory.getInstance().getRateTariffService();
                break;
            case RATE_DEFINITION:
                service = RateFactory.getInstance().getRateDefinitionService();
                break;
            case RATE_API_OPERATIONS:
                service = RateFactory.getInstance().getApiOperationsService();
                break;
            case RATE_API_OPERATION_RATES:
                service = RateFactory.getInstance().getApiOperationRatesService();
                break;
            case BLACKLIST:
                service = BlackListFactory.getInstance().getApiService();
                break;
            case WHITELIST_SUBSCRIBERS:
                service = WhiteListFactory.getInstance().getSubscriberService();
                break;
            case WHITELIST_APPLICATIONS:
                service = WhiteListFactory.getInstance().getApplicationService();
                break;
            default:
                break;
        }
        return service;
    }

}

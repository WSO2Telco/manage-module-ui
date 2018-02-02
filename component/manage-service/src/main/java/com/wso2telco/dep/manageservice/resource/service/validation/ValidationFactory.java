package com.wso2telco.dep.manageservice.resource.service.validation;

import com.wso2telco.dep.manageservice.resource.service.Serviceable;

public class ValidationFactory {

    static ValidationFactory instance;
    ValidationFactory () {
    }

    public static synchronized ValidationFactory getInstance() {
        if (instance == null) {
            instance = new ValidationFactory();
        }
        return instance;
    }
        public Serviceable getMsisdnValidationService() {
            return  new MsisdnValidationService();
        }
}

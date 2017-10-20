package com.wso2telco.dep.manageservice.resource.service;

/**
 * Created by manoj on 9/15/17.
 */

import com.wso2telco.dep.manageservice.resource.model.App;

public class AppService {

    private App appDAO;

    public AppService() {
        appDAO = new App();
    }

    public void setAppDAO(App appDAO) {
        this.appDAO = appDAO;
    }

    public App getAppDAO() {
        return appDAO;
    }
}

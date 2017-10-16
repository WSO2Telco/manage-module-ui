package com.wso2telco.dep.manageservice.resource.service;

/**
 * Created by manoj on 9/15/17.
 */

import com.wso2telco.dep.manageservice.resource.dao.AppDAO;

public class AppService {

    private AppDAO appDAO;

    public AppService() {
        appDAO = new AppDAO();
    }

    public void setAppDAO(AppDAO appDAO) {
        this.appDAO = appDAO;
    }

    public AppDAO getAppDAO() {
        return appDAO;
    }
}

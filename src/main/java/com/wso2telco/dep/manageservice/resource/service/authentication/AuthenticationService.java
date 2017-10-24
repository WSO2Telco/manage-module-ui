package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.dep.manageservice.resource.model.LoginResponse;

import java.util.ArrayList;
import java.util.List;


public class AuthenticationService {

    public LoginResponse doLogin() {
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setIsLoggedIn(true);
        loginResponse.setUserName("admin");
        loginResponse.setToken("YWRtaW46YWRtaW4=");
        loginResponse.setIsAdmin(true);
        loginResponse.setOperator("");
        loginResponse.setBilling(true);
        loginResponse.setSuccess(true);
        loginResponse.setMessage("user verified successfully");

        List<String> roles = new ArrayList();
        roles.add("Internal/subscriber");
        roles.add("manage-app-admin");
        roles.add("Internal/everyone");
        roles.add("admin");
        loginResponse.setRoles(roles);

        return loginResponse;
    }
}

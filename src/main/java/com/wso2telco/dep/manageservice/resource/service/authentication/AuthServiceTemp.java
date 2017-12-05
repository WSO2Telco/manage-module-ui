package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.dep.manageservice.resource.model.LoginResponse;

import java.util.ArrayList;
import java.util.List;

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
public class AuthServiceTemp {
    public LoginResponse doLogin() {

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setUserName("admin");
        loginResponse.setToken("YWRtaW46YWRtaW4=");
        loginResponse.setIsAdmin(true);
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

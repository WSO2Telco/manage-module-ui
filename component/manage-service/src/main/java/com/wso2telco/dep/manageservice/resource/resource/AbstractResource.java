package com.wso2telco.dep.manageservice.resource.resource;
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

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.service.ServiceFactory;
import com.wso2telco.dep.manageservice.resource.service.Serviceable;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.core.Response;
import java.util.List;

public abstract class AbstractResource {

    ServiceFactory serviceFactory = ServiceFactory.getInstance();

    protected abstract ServiceTypes getService();

    protected Response doGet(String authenticationCredential) {
        Serviceable service = serviceFactory.getService(getService());

        Callback callback = service.executeGet(authenticationCredential);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    protected Response doGet(String authenticationCredential, List<String> pathParamStringList) {
        Serviceable service = serviceFactory.getService(getService());

        Callback callback = service.executeGet(authenticationCredential, pathParamStringList);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    protected Response doPost(RequestTransferable request, String authenticationCredential) {
        Serviceable service = serviceFactory.getService(getService());

        Callback callback = service.executePost(request, authenticationCredential);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    protected Response doPost(RequestTransferable[] request, String authenticationCredential, List<String> pathParamStringList) {
        Serviceable service = serviceFactory.getService(getService());

        Callback callback = service.executePost(request, authenticationCredential, pathParamStringList);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

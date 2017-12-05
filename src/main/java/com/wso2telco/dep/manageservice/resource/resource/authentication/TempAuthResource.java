package com.wso2telco.dep.manageservice.resource.resource.authentication;

import com.wso2telco.dep.manageservice.resource.service.authentication.AuthServiceTemp;
import com.wso2telco.dep.manageservice.resource.service.authentication.AuthenticationService;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
@Path("/authentication")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TempAuthResource {

    private AuthServiceTemp authenticationService = new AuthServiceTemp();

    @POST
    @Path("/login")
    public Response setApp(@Context HttpHeaders headers) {

        Object responseString = null;
        responseString = authenticationService.doLogin();
        return Response.status(Response.Status.OK).entity(responseString).build();
    }
}

/**
 * Copyright (c) 2017, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 *
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.wso2telco.dep.manageservice.resource.resource.validation;

import com.wso2telco.dep.manageservice.resource.model.MsisdnValidationRequest;
import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/validation/msisdn")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class MsisdnValidationResource extends AbstractResource{

    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.MSISDN_VALIDATION;
    }

    @POST
    public Response setValidation(@HeaderParam("authorization") String authHeader, MsisdnValidationRequest msisdnValidation) {
        return doPost(msisdnValidation, authHeader);
    }

}

package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
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

@Path("/rate/apioperationrates/{apiName}/{apiOperationId}/{operatorId}")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApiOperationRatesResource extends AbstractResource {
    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.RATE_API_OPERATION_RATES;
    }

    @GET
    public Response getApiOperationRates(@HeaderParam("authorization") String authHeader, @PathParam("apiName") String apiName,
                                         @PathParam("apiOperationId") String apiOperationId, @PathParam("operatorId") String operatorId) {
        List<String> pathParamStringList = new ArrayList<>();
        pathParamStringList.add(apiName);
        pathParamStringList.add(apiOperationId);
        pathParamStringList.add(operatorId);
        return doGet(authHeader, pathParamStringList);
    }

}

/*
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

package com.wso2telco.dep.manageservice.resource.resource.responsefilter;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.model.ResponseFilter;
import com.wso2telco.dep.manageservice.resource.service.responsefilter.ResponseFilterService;
import com.wso2telco.dep.manageservice.resource.util.ErrorHandler;

@Path("/response-filter")
@Consumes("application/json")
@Produces("application/json")
public class ResponseFilterResource {

    private static final Logger logger = Logger.getLogger(ResponseFilterResource.class.getName());

    @POST
    public Response add(String payload) {
        final Gson gson = new GsonBuilder().serializeNulls().create();
        final ResponseFilter responseFilter = gson.fromJson(payload, ResponseFilter.class);
        try {
            final String jsonString = gson.toJson(new ResponseFilterService().addResponseFilter(responseFilter));
            return Response.status(Response.Status.OK).entity(jsonString).build();
        } catch (BusinessException exception) {
            logger.log(Level.SEVERE, "error in add response filter : ", exception);
            return ErrorHandler.createErrorResponse(exception);
        }
    }

    @GET
    public Response find(@QueryParam("sp") String sp, @QueryParam("application") String application,
                         @QueryParam("api") String api, @QueryParam("operation") String operation) {
        try {
            final String jsonString = new Gson().toJson(
                new ResponseFilterService().findResponseFilter(sp, application, api, operation)
            );
            return Response.status(Response.Status.OK).entity(jsonString).build();
        } catch (BusinessException exception) {
            logger.log(Level.SEVERE, "error in find response filter : ", exception);
            return ErrorHandler.createErrorResponse(exception);
        }
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") String id) {
        try {
            final String jsonString = new Gson().toJson(
                new ResponseFilterService().findResponseFilter(Integer.parseInt(id))
            );
            return Response.status(Response.Status.OK).entity(jsonString).build();
        } catch (BusinessException exception) {
            logger.log(Level.SEVERE, "error in find response filter by ID : ", exception);
            return ErrorHandler.createErrorResponse(exception);
        }
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        try {
            final String jsonString = new Gson().toJson(
                new ResponseFilterService().deleteResponseFilter(Integer.parseInt(id))
            );
            return Response.status(Response.Status.OK).entity(jsonString).build();
        } catch (BusinessException exception) {
            logger.log(Level.SEVERE, "error in delete response filter : ", exception);
            return ErrorHandler.createErrorResponse(exception);
        }
    }
}

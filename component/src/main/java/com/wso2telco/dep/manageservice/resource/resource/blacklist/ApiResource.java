package com.wso2telco.dep.manageservice.resource.resource.blacklist;

import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/blacklist")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApiResource extends AbstractResource {

    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.BLACKLIST;
    }

    @GET
    public Response getApis(@HeaderParam("authorization") String authHeader) {
        return doGet(authHeader);
    }

}

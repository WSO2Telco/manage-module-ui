package com.wso2telco.dep.manageservice.resource.resource.whitelist;

import com.wso2telco.dep.manageservice.resource.model.whitelist.Application;
import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/whitelist/getapps")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApplicationResource extends AbstractResource {

    protected ServiceTypes getService() {
        return ServiceTypes.WHITELIST_APPLICATIONS;
    }

    @POST
    public Response setApplications(@HeaderParam("authorization") String authHeader, Application application) {
        return doPost(application, authHeader);
    }
}


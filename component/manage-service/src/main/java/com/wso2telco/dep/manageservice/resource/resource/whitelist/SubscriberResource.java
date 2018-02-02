package com.wso2telco.dep.manageservice.resource.resource.whitelist;

import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/whitelist/getsubscribers")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

public class SubscriberResource extends AbstractResource {

    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.WHITELIST_SUBSCRIBERS;
    }

    @POST
    public Response getSubscribers(@HeaderParam("authorization") String authHeader) {
        return doPost(null, authHeader);
    }
}

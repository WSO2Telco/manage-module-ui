package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.service.rate.RateDefinitionService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/rate/ratedefinitions")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RateDefinitionResource {

    RateDefinitionService rateDefinitionService = new RateDefinitionService();

    @GET
    public Response getRateDefinitions(@HeaderParam("authorization") String authHeader) {
        Callback callback = rateDefinitionService.getRateDefinitions(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}

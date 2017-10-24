package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.service.rate.TaxService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/rate/taxes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TaxResource {

    TaxService taxService = new TaxService();

    @GET
    public Response getTaxes(@HeaderParam("authorization") String authHeader) {
        Callback callback = taxService.getTaxes(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}


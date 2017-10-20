package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.service.rate.TaxService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by manoj on 10/12/17.
 */

@Path("/rate/taxes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TaxResource {

    private Callback callback;
    TaxService taxService = new TaxService();

    @GET
    public Response getTaxes(@HeaderParam("authorization") String authHeader) throws Exception {
        callback = taxService.getTaxes(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}


package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.service.rate.RateTypeService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by manoj on 10/12/17.
 */

@Path("/rate/ratetypes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RateTypeResource {

    private Callback callback;
    RateTypeService typeService = new RateTypeService();

    @GET
    public Response getTypes(@HeaderParam("authorization") String authHeader) throws Exception {
        callback = typeService.getTypes(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}


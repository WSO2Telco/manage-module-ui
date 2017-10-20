package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.RateCard;
import com.wso2telco.dep.manageservice.resource.service.rate.RateCardService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/ratecards")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RateCardResource {

    private Callback callback;
    RateCardService rateCardService = new RateCardService();

    @GET
    public Response getRateCards(@HeaderParam("authorization") String authHeader) throws Exception {
        callback = rateCardService.getRateCards(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setRateCard(@HeaderParam("authorization") String authHeader, RateCard rateCardDAO) throws Exception {
        callback = rateCardService.setRateCard(rateCardDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}


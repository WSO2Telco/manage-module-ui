package com.wso2telco.dep.manageservice.resource.resource.rate;


import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Currency;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/currencies")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CurrencyResource {

    CurrencyService currencyService = new CurrencyService();

    @GET
    public Response getCurrencies(@HeaderParam("authorization") String authHeader) {
        Callback callback = currencyService.getCurrencies(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setCurrency(@HeaderParam("authorization") String authHeader, Currency currencyDAO) {
        Callback callback = currencyService.setCurrency(currencyDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}

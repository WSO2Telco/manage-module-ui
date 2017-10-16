package com.wso2telco.dep.manageservice.resource.resource.rate;

/**
 * Created by manoj on 10/12/17.
 */

import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.CurrencyDAO;
import com.wso2telco.dep.manageservice.resource.service.rate.CurrencyService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/currencies")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CurrencyResource {

    private Callback callback;
    CurrencyService currencyService = new CurrencyService();

    @GET
    public Response getCurrencies(@HeaderParam("authorization") String authHeader) throws Exception {
        callback = currencyService.getCurrencies(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setCurrency(@HeaderParam("authorization") String authHeader, CurrencyDAO currencyDAO) throws Exception {
        callback = currencyService.setCurrency(currencyDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}

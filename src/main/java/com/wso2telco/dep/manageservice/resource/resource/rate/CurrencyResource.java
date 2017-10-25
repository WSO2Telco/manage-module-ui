package com.wso2telco.dep.manageservice.resource.resource.rate;


import com.wso2telco.dep.manageservice.resource.model.rate.Currency;
import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/currencies")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CurrencyResource extends AbstractResource {

    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.RATE_CURRENCY;
    }

    @GET
    public Response getCurrencies(@HeaderParam("authorization") String authHeader) {
        return doGet(authHeader);
    }

    @POST
    public Response setCurrency(@HeaderParam("authorization") String authHeader, Currency currency) {
        return doPost(currency, authHeader);
    }

}
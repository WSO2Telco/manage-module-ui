package com.wso2telco.dep.manageservice.resource.resource.rate;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.wso2telco.dep.manageservice.resource.model.rate.RateCard;
import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

@Path("/rate/ratecards")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RateCardResource extends AbstractResource{

    
    protected ServiceTypes getService() {
    	return ServiceTypes.RATE_CARD;
    }
    
    @GET
    public Response getRateCards(@HeaderParam("authorization") String authHeader) throws Exception {
    	return doGet(authHeader);
    }

    @POST
    public Response setRateCard(@HeaderParam("authorization") String authHeader, RateCard rateCardDAO) {
    	return doPost(rateCardDAO,authHeader);
    }

}


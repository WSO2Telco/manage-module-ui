package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Tariff;
import com.wso2telco.dep.manageservice.resource.service.rate.TariffService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by manoj on 10/12/17.
 */
@Path("/rate/tariffs")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TariffResource {

    private Callback callback;
    TariffService tariffService = new TariffService();

    @GET
    public Response getTariffs(@HeaderParam("authorization") String authHeader) throws Exception {
        callback = tariffService.getTariffs(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setCurrencies(@HeaderParam("authorization") String authHeader, Tariff tariffDAO) throws Exception {
        callback = tariffService.setTarif(tariffDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

}

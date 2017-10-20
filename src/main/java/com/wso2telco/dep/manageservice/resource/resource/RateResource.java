package com.wso2telco.dep.manageservice.resource.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 * Created by manoj on 9/28/17.
 */
public class RateResource {

    @GET
    @Path("/categories")
    public Response getCategories() {

        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/getratedefinitionlist")
    public Response getRateDefinitionList() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/getTaxList")
    public Response getTaxList() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/getratecards")
    public Response getRateCards() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/getratetypelist")
    public Response getRateTypeList() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/currencies")
    public Response getCurrencies() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }

    @GET
    @Path("/gettarifflist")
    public Response getTariffList() {
        Object responseString = null;
        return Response.status(Response.Status.OK).entity(responseString).build();
    }
}

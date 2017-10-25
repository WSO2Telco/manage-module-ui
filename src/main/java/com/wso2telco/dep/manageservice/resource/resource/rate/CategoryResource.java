package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Category;
import com.wso2telco.dep.manageservice.resource.resource.AbstractResource;
import com.wso2telco.dep.manageservice.resource.service.rate.RateFactory;
import com.wso2telco.dep.manageservice.resource.service.ServiceFactory;
import com.wso2telco.dep.manageservice.resource.service.rate.CategoryService;
import com.wso2telco.dep.manageservice.resource.util.ServiceTypes;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/categories")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CategoryResource extends AbstractResource {

    @Override
    protected ServiceTypes getService() {
        return ServiceTypes.RATE_CATEGORY;
    }

    @GET
    public Response getCategories(@HeaderParam("authorization") String authHeader) {
        return doGet(authHeader);
    }

    @POST
    public Response setCategory(@HeaderParam("authorization") String authHeader, Category category) {
        return doPost(category, authHeader);
    }
}
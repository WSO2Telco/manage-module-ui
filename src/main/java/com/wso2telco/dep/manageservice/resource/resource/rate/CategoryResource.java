package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Category;
import com.wso2telco.dep.manageservice.resource.service.rate.CategoryService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/categories")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CategoryResource {

    CategoryService categoryService = new CategoryService();

    @GET
    public Response getCategories(@HeaderParam("authorization") String authHeader) {
        Callback callback = categoryService.getCategories(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setCategory(@HeaderParam("authorization") String authHeader, Category categoryDAO) {
        Callback callback = categoryService.setCategory(categoryDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}
package com.wso2telco.dep.manageservice.resource.resource.rate;

import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.CategoryDAO;
import com.wso2telco.dep.manageservice.resource.service.rate.CategoryService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rate/categories")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CategoryResource {

    private Callback callback;
    CategoryService categoryService = new CategoryService();

    @GET
    public Response getCategories(@HeaderParam("authorization") String authHeader) throws Exception {
         callback = categoryService.getCategories(authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }

    @POST
    public Response setCategory(@HeaderParam("authorization") String authHeader, CategoryDAO categoryDAO) throws Exception {
        callback = categoryService.setCategory(categoryDAO, authHeader);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}
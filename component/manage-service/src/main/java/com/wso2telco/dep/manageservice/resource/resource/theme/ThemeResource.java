package com.wso2telco.dep.manageservice.resource.resource.theme;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/theme")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ThemeResource{
    @GET
    @Path("/")
    public Response getTheme(){
        Response response = Response.status(Response.Status.OK)
                .entity("done")
                .build();
        return response;
    }
}

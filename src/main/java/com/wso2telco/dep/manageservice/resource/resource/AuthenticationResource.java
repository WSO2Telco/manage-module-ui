package com.wso2telco.dep.manageservice.resource.resource;

/**
 * Created by manoj on 9/26/17.
 */

import com.wso2telco.dep.manageservice.resource.model.User;
import com.wso2telco.dep.manageservice.resource.service.AuthenticationService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/authentication")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

    private AuthenticationService authenticationService;

    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public Response setApp(User userDAO) throws Exception {
        authenticationService = new AuthenticationService();
        Object responseString = null;
        responseString = authenticationService.doLogin(userDAO);
        return Response.status(Response.Status.OK).entity(responseString).build();
    }
}

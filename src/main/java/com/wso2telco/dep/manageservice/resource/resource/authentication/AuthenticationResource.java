package com.wso2telco.dep.manageservice.resource.resource.authentication;

import com.wso2telco.core.authfilter.util.HeaderParam;
import com.wso2telco.dep.manageservice.resource.service.authentication.AuthenticationService;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

@Path("/authentication")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

    private AuthenticationService authenticationService = new AuthenticationService();

    @GET
    @Path("/login")
    public Response setApp(@Context HttpHeaders headers, @Context HttpServletRequest request) {
    	
    	String userName = headers.getRequestHeader(HeaderParam.USER_NAME.getTObject()).get(0);
    	
        Object responseString = null;
        responseString = authenticationService.doLogin(userName);
        String sessionId = request.getSession(true).getId();
        return Response.status(Response.Status.OK).entity(responseString).cookie(new NewCookie("JSESSIONID", sessionId)).build();
    }
}

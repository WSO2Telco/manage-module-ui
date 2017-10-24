package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.workflow.AssignRequest;
import com.wso2telco.dep.manageservice.resource.service.workflow.ApplicationAssignService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/assign")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApplicationAssignResource {

    ApplicationAssignService applicationAssignService = new ApplicationAssignService();

    @POST
    public Response assignApplication(@HeaderParam("authorization") String authHeader, AssignRequest assignRequest) throws Exception {
        Callback callback = applicationAssignService.assignApplication(authHeader, assignRequest);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

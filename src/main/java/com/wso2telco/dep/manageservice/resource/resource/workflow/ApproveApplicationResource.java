package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApprovalRequest;
import com.wso2telco.dep.manageservice.resource.service.workflow.ApproveApplicationService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/approve/application/creation")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApproveApplicationResource {
    private Callback callback;
    ApproveApplicationService approveApplicationService = new ApproveApplicationService();

    @POST
    public Response assignApplication(@HeaderParam("authorization") String authHeader, ApprovalRequest approveApplicationRequest) throws Exception {
        callback = approveApplicationService.approveApplication(authHeader, approveApplicationRequest);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

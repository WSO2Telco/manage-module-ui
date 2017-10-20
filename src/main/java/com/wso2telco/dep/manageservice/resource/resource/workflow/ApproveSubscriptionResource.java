package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.workflow.ApprovalRequest;
import com.wso2telco.dep.manageservice.resource.service.workflow.ApproveSubscriptionService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/approve/subscription/creation")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApproveSubscriptionResource {
    private Callback callback;
    ApproveSubscriptionService approveSubscriptionService = new ApproveSubscriptionService();

    @POST
    public Response assignApplication(@HeaderParam("authorization") String authHeader, ApprovalRequest approvalRequest) throws Exception {
        callback = approveSubscriptionService.approveSubscription(authHeader, approvalRequest);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

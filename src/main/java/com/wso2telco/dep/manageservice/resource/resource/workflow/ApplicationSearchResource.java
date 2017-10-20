package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.workflow.ApplicationDetailRequest;
import com.wso2telco.dep.manageservice.resource.service.workflow.ApplicationSearchService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/search")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApplicationSearchResource {
    private Callback callback;
    ApplicationSearchService applicationDetailService = new ApplicationSearchService();

    @POST
    public Response getCurrencies(@HeaderParam("authorization") String authHeader, ApplicationDetailRequest detailRequestDAO) throws Exception {
        callback = applicationDetailService.getDetails(authHeader, detailRequestDAO);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

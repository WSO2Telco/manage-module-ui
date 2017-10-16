package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.workflow.ApplicationDetailRequestDAO;
import com.wso2telco.dep.manageservice.resource.service.workflow.ApplicationDetailService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/details")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ApplicationDetailResource {
    private Callback callback;
    ApplicationDetailService applicationDetailService = new ApplicationDetailService();

    @POST
    public Response getCurrencies(@HeaderParam("authorization") String authHeader, ApplicationDetailRequestDAO detailRequestDAO) throws Exception {
        callback = applicationDetailService.getDetails(authHeader, detailRequestDAO);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

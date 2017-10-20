package com.wso2telco.dep.manageservice.resource.resource.workflow;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.service.workflow.HistoryService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applications/graph/{type}/{user}")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class HistoryResource {

    private Callback callback;
    HistoryService historyService = new HistoryService();

    @GET
    public Response getCurrencies(@HeaderParam("authorization") String authHeader, @PathParam("type") String type, @PathParam("user") String user) throws Exception {
        callback = historyService.getHistory(authHeader, type, user);
        return Response.status(Response.Status.OK).entity(callback).build();
    }
}

package com.wso2telco.dep.manageservice.resource.resource;

import com.wso2telco.dep.manageservice.resource.model.App;
import com.wso2telco.dep.manageservice.resource.service.AppService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/resource")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AppResource {

	private AppService appService = new AppService();

	@GET
	public Response getApp() {

		App appDAO = new App();
		appDAO.setAppName("Facebook");
		appDAO.setAppId(1);

		System.out.println("request sent");

		Object responseString = null;
		appService.setAppDAO(appDAO);
		responseString = appService.getAppDAO();

		return Response.status(Response.Status.OK).entity(responseString).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").build();
	}

	@GET
	@Path("/read")
	public Response readApp() {

		App appDAO = new App();
		appDAO.setAppName("Facebook");
		appDAO.setAppId(1);

		System.out.println("request sent");

		Object responseString = null;
		appService.setAppDAO(appDAO);
		responseString = appService.getAppDAO();

		return Response.status(Response.Status.OK).entity(responseString).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").build();
	}

	@POST
	public Response setApp(App appDAO) {
		Object responseString = null;
		responseString = appDAO;
		return Response.status(Response.Status.OK).entity(responseString).build();
	}

}
package com.wso2telco.dep.manageservice.resource.resource.subscription;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.service.subscription.SubscriptionService;
import com.wso2telco.dep.manageservice.resource.util.ErrorDTO;


@Path("/subscription")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class SubscriptionResource {

	@GET
	@Path("/{apiName}/{apiVersion}/{apiProvider}/tiers")
	public Response getSubscriptionTiersByAPI(@PathParam("apiName") String apiName,
			@PathParam("apiVersion") String apiVersion, @PathParam("apiProvider") String apiProvider) {

		Status responseCode = null;
		Object responseString = null;
		SubscriptionService subscriptionService = new SubscriptionService();
		
		try {
			
			responseString = subscriptionService.getSubscriptionTiersByAPI(apiProvider, apiName, apiVersion);
			responseCode = Response.Status.OK;
		} catch (BusinessException e) {

			ErrorDTO error = new ErrorDTO();
			ErrorDTO.RequestError requestError = new ErrorDTO.RequestError();
			ErrorDTO.RequestError.ServiceException serviceException = new ErrorDTO.RequestError.ServiceException();

			serviceException.setMessageId(e.getErrorType().getCode());
			serviceException.setText(e.getErrorType().getMessage());
			requestError.setServiceException(serviceException);
			error.setRequestError(requestError);

			responseString = error;
			responseCode = Response.Status.BAD_REQUEST;
		}
		
		return Response.status(responseCode).entity(responseString).build();
	}
}

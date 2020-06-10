package com.wso2telco.dep.manageservice.resource.resource.authentication;

import com.wso2telco.core.authfilter.util.HeaderParam;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.service.authentication.AuthenticationService;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import com.wso2telco.dep.manageservice.resource.util.ErrorDTO;

@Path("/authentication")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthenticationResource {

	private AuthenticationService authenticationService = new AuthenticationService();

	@GET
	@Path("/login")
	public Response setApp(@Context HttpHeaders headers, @Context HttpServletRequest request) {

		String userName = headers.getRequestHeader(HeaderParam.USER_NAME.getTObject()).get(0);

		Status responseCode = null;
		Object responseString = null;
		String sessionId = request.getSession(true).getId();
        try {
			responseString = authenticationService.doLogin(sessionId, userName);
			responseCode = Response.Status.OK;
		} catch (BusinessException e) {

			ErrorDTO error = new ErrorDTO();
			ErrorDTO.RequestError requestError = new ErrorDTO.RequestError();
			ErrorDTO.RequestError.ServiceException serviceException = new ErrorDTO.RequestError.ServiceException();

			serviceException.setMessageId(e.getErrorType().getCode());
			serviceException.setText(e.getErrorType().getMessage());
			requestError.setServiceException(serviceException);
			error.setRequestError(requestError);

			responseCode = Response.Status.BAD_REQUEST;
		}

		return Response.status(responseCode).entity(responseString).build();
	}
}

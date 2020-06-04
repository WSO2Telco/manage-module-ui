package com.wso2telco.dep.manageservice.resource.resource.theme;

import com.wso2telco.core.authfilter.util.HeaderParam;
import com.wso2telco.dep.manageservice.resource.service.theme.ThemeService;
import org.json.JSONException;
import org.json.JSONObject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/theme")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ThemeResource{
    @POST
    @Path("/")
    public Response setTheme(@Context HttpHeaders headers, String data) throws JSONException {
        ThemeService themeService = new ThemeService();
        Response.Status responseCode = null;
        Object responseString = null;
        JSONObject json = new JSONObject(data);
        String loggedInUser = headers.getRequestHeader(HeaderParam.USER_NAME.getTObject()).get(0);
        try{
            responseString = themeService.changeTheme(loggedInUser, json.getString("value").toString());
            responseCode = Response.Status.OK;
        } catch (Exception e){
            responseString = "Theme update failed !!";
            responseCode = Response.Status.BAD_REQUEST;
        }
        return Response.status(responseCode).entity(responseString).build();
    }
}

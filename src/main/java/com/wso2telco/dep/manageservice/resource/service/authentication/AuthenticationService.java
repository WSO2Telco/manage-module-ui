package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.core.userrolepermission.UserPermissionRetriever;
import com.wso2telco.core.userrolepermission.UserRoleRetriever;
import com.wso2telco.core.userrolepermission.util.UserRolePermissionType;
import com.wso2telco.dep.manageservice.resource.model.LoginResponse;
import java.util.List;


public class AuthenticationService {

    public LoginResponse doLogin(String userName) {
    	
    	UserRoleRetriever userRoleRetriever = new UserRoleRetriever();
    	List<String> currentUserRoleList = userRoleRetriever.getUserRoles(userName);
    	String roles[] = new String[currentUserRoleList.size()];
    	roles = currentUserRoleList.toArray(roles);
    	
    	UserPermissionRetriever userPermissionRetriever = new UserPermissionRetriever();
    	List<String> uiPermissionList = userPermissionRetriever.getUserRolePermissions(userName, UserRolePermissionType.UI_PERMISSION);
    	String [] uiPermissions = new String[uiPermissionList.size()];
    	uiPermissions = uiPermissionList.toArray(uiPermissions);
    	
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setUserName(userName);
        loginResponse.setRoles(roles);
        loginResponse.setUiPermissions(uiPermissions);

        return loginResponse;
    }
}

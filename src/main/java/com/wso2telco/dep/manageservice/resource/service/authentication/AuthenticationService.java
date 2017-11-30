package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.core.userprofile.UserProfileRetriever;
import com.wso2telco.core.userprofile.dto.UserProfileDTO;
import com.wso2telco.dep.manageservice.resource.model.LoginResponse;

public class AuthenticationService {

	public LoginResponse doLogin(String userName) {

		UserProfileRetriever userProfileRetriever = new UserProfileRetriever();
		UserProfileDTO userProfileDTO = userProfileRetriever.getUserProfile(userName);

		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setUserName(userProfileDTO.getUserName());
		loginResponse.setFirstName(userProfileDTO.getFirstName());
		loginResponse.setLastName(userProfileDTO.getLastName());
		loginResponse.setEmailAddress(userProfileDTO.getEmailAddress());
		loginResponse.setOrganization(userProfileDTO.getOrganization());
		loginResponse.setDepartment(userProfileDTO.getDepartment());
		loginResponse.setRoles(userProfileDTO.getUserRoles());
		loginResponse.setUiPermissions(userProfileDTO.getUiPermissions());

		return loginResponse;
	}
}

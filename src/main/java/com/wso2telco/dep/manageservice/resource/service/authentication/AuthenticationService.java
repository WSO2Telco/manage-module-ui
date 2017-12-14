package com.wso2telco.dep.manageservice.resource.service.authentication;

import java.util.Map;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.userprofile.UserProfileRetriever;
import com.wso2telco.core.userprofile.dto.UserProfileDTO;

public class AuthenticationService {

	public Map<String, Object> doLogin(String userName) throws BusinessException {

		UserProfileRetriever userProfileRetriever = new UserProfileRetriever();
		UserProfileDTO userProfileDTO = userProfileRetriever.getUserProfile(userName);
		Map<String, Object> returnJson = userProfileDTO.getUiPermissions();
		
		returnJson.put("userName", userProfileDTO.getUserName());
		returnJson.put("organization", userProfileDTO.getOrganization());
		returnJson.put("Department",userProfileDTO.getDepartment());
		
		return returnJson;
	}
}

package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.userprofile.UserProfileRetriever;
import com.wso2telco.core.userprofile.cache.CacheFactory;
import com.wso2telco.core.userprofile.cache.UserProfileCachable;
import com.wso2telco.core.userprofile.dto.UserProfileDTO;
import com.wso2telco.core.userprofile.util.CacheType;
import com.wso2telco.dep.manageservice.resource.model.LoginResponse;

public class AuthenticationService {

	public LoginResponse doLogin(String sessionId, String userName) throws BusinessException {

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

		UserProfileCachable cachable = CacheFactory.getInstance(CacheType.LOCAL).getService();
		cachable.cache(sessionId, userProfileDTO);

		return loginResponse;
	}
}

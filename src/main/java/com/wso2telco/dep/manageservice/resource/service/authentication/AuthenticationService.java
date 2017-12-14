package com.wso2telco.dep.manageservice.resource.service.authentication;

import com.wso2telco.core.dbutils.exception.BusinessException;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.userprofile.UserProfileRetriever;
import com.wso2telco.core.userprofile.cache.CacheFactory;
import com.wso2telco.core.userprofile.cache.UserProfileCachable;
import com.wso2telco.core.userprofile.dto.UserProfileDTO;
import com.wso2telco.core.userprofile.util.CacheType;
import java.util.Map;

public class AuthenticationService {

	public Map<String, Object> doLogin(String sessionId, String userName) throws BusinessException {

		UserProfileRetriever userProfileRetriever = new UserProfileRetriever();
		UserProfileDTO userProfileDTO = userProfileRetriever.getUserProfile(userName);
		Map<String, Object> returnJson = userProfileDTO.getUiPermissions();
		
		returnJson.put("userName", userProfileDTO.getUserName());
		returnJson.put("organization", userProfileDTO.getOrganization());
		returnJson.put("Department",userProfileDTO.getDepartment());

		UserProfileCachable cachable = CacheFactory.getInstance(CacheType.LOCAL).getService();
		cachable.cache(sessionId, userProfileDTO);
		
		return returnJson;
	}
}

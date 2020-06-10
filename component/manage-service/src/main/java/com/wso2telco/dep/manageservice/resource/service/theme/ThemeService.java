package com.wso2telco.dep.manageservice.resource.service.theme;

import com.wso2telco.core.userprofile.UserProfileRetriever;
import com.wso2telco.core.userprofile.dto.UserProfileDTO;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.userprofile.prosser.UserClaimProsser;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.HashMap;
import java.util.Map;

public class ThemeService {
    private static final String THEME_CLAIM_URL = "http://wso2.org/claims/usertheme";
    private final Log log = LogFactory.getLog(ThemeService.class);

    public Object changeTheme(String userName, String value) {

        Map<String, Object> returnJson = new HashMap<>();
        UserClaimProsser userClaimProsser = new UserClaimProsser();
        userClaimProsser.setUserClaimsByUserName(userName, THEME_CLAIM_URL, value);
        returnJson.put("message", "Theme updated successfully");
        returnJson.put("status", "ok");

        return returnJson;
    }

    public Map<String, Object> getTheme(String userName) throws BusinessException {

        UserProfileRetriever userProfileRetriever = new UserProfileRetriever();
        UserProfileDTO userProfileDTO = userProfileRetriever.getUserProfile(userName);
        Map<String, Object> returnJson = new HashMap<>();
        returnJson.put("theme", userProfileDTO.getTheme());

        return returnJson;
    }

}

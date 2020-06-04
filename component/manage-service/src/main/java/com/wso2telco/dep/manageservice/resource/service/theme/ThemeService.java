package com.wso2telco.dep.manageservice.resource.service.theme;

import com.wso2telco.core.userprofile.prosser.UserClaimProsser;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class ThemeService {
    private static final String THEME_CLAIM_URL = "http://wso2.org/claims/usertheme";
    private final Log log = LogFactory.getLog(ThemeService.class);

    public Object changeTheme(String userName, String value){
        UserClaimProsser userClaimProsser = new UserClaimProsser();
        userClaimProsser.setUserClaimsByUserName(userName,
                THEME_CLAIM_URL,
                value);
        return "Theme updated successfully";
    }
}


package com.wso2telco.dep.manageservice.resource.service.subscription;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import org.wso2.carbon.apimgt.api.model.APIIdentifier;
import org.wso2.carbon.apimgt.api.APIProvider;
import org.wso2.carbon.apimgt.api.model.API;
import org.wso2.carbon.apimgt.api.model.Tier;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.dbutils.exception.GenaralError;
import org.wso2.carbon.apimgt.impl.APIManagerFactory;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.carbon.apimgt.api.APIManagementException;

public class SubscriptionService {

	private final Log log = LogFactory.getLog(SubscriptionService.class);
	
	private APIProvider apiProvider;

	public List<String> getSubscriptionTiersByAPI(String providerName, String apiName, String apiVersion) throws BusinessException {

		List<String> apiTierList = new ArrayList<>();

		try {
			
			APIIdentifier apiId = new APIIdentifier(providerName, apiName, apiVersion);
			APIProvider apiProvider = getApiProvider(providerName);
			API api = apiProvider.getAPI(apiId);
			Set<Tier> tierSet = api.getAvailableTiers();

			Iterator<Tier> it = tierSet.iterator();
			while (it.hasNext()) {

				Object tierObject = it.next();
				Tier tier = (Tier) tierObject;
				apiTierList.add(tier.getDisplayName());
			}
		} catch (Exception e) {

			log.error(e.getMessage());
			throw new BusinessException(GenaralError.INTERNAL_SERVER_ERROR);
		}

		return apiTierList;
	}

	public APIProvider getApiProvider(String username) throws APIManagementException {

		apiProvider = APIManagerFactory.getInstance().getAPIProvider(username);
		return apiProvider;
	}

}

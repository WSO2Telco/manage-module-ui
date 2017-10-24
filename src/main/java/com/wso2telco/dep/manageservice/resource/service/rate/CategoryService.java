package com.wso2telco.dep.manageservice.resource.service.rate;

import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Category;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class CategoryService extends RateService {

    private final Log log = LogFactory.getLog(RateService.class);

    public Callback getCategories(String authHeader) {
        return super.get(Messages.CATEGORY_LOADING_ERROR.getValue(), Messages.CATEGORY_LOADING_SUCCESS.getValue() , new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/").append("categories").toString(), authHeader);
    }

    public Callback setCategory(Category category, String authHeader) {
        if (validateRequest(category)) {
            return super.set(category, Messages.CATEGORY_ADDING_ERROR.getValue(),Messages.CATEGORY_ADDING_SUCCESS.getValue() , new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/").append("categories").toString(), authHeader);
        } else {
            log.error("Add New Category : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_ADDING_ERROR.getValue());
        }
    }

    public boolean validateRequest(Category category) {
        return (category != null);
    }
}

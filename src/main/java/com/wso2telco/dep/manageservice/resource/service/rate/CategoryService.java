package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.rate.Category;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

public class CategoryService {

    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CategoryService.class);


    public CategoryService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getCategories(String authHeader) {
        HttpGet httpGet = new HttpGet(new StringBuilder("http://localhost:9763/ratecard-service/ratecardservice/").append("categories").toString());

        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                Category[] categories = mapper.readValue(response.getEntity().getContent(), Category[].class);
                return new Callback().setPayload(categories).setSuccess(true).setMessage("Rate Category List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading categories from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_LOADING_ERROR.getName());
            }

        } catch (IOException e) {
            log.error(" Exception while loading categories from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_LOADING_ERROR.getName());
        }
    }

    public Callback setCategory(Category categoryDAO, String authHeader) {
        HttpPost httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "categories");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);

        if (validateRequest(categoryDAO)) {
            try {
                /** set request body */
                httpPost.setEntity(new StringEntity(mapper.writeValueAsString(categoryDAO)));
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    Category category = mapper.readValue(response.getEntity().getContent(), Category.class);
                    return new Callback().setPayload(category).setSuccess(true).setMessage("New Category Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new Category to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_ADDING_ERROR.getName());
                }
            } catch (IOException e) {
                log.error(" Exception while adding new Category to hub " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_ADDING_ERROR.getName());
            }
        } else {
            log.error("Add New Category : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.CATEGORY_ADDING_ERROR.getName());
        }
    }

    public boolean validateRequest(Category categoryDAO) {
        return (categoryDAO != null);
    }
}

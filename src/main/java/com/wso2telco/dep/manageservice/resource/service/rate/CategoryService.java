package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.CategoryDAO;
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
    private static final String ADDING_ERROR = "Error Adding New Category";
    private static final String LOADING_ERROR = "Error Loading Category List";

    public CategoryService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getCategories(String authHeader) {
        HttpGet httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "categories");

        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                CategoryDAO[] categories = mapper.readValue(response.getEntity().getContent(), CategoryDAO[].class);
                return new Callback().setPayload(categories).setSuccess(true).setMessage("Rate Category List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading categories from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
            }

        } catch (IOException e) {
            log.error(" Exception while loading categories from hub " + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(LOADING_ERROR);
        }
    }

    public Callback setCategory(CategoryDAO categoryDAO, String authHeader) {
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
                    CategoryDAO category = mapper.readValue(response.getEntity().getContent(), CategoryDAO.class);
                    return new Callback().setPayload(category).setSuccess(true).setMessage("New Category Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new Category to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
                }
            } catch (IOException e) {
                log.error(" Exception while adding new Category to hub " + e);
                return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
            }
        } else {
            log.error("Add New Category : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage(ADDING_ERROR);
        }
    }

    public boolean validateRequest(CategoryDAO categoryDAO) {
        return (categoryDAO != null);
    }
}

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

    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(CategoryService.class);
    private CategoryDAO [] categoryDAOS;
    private CategoryDAO categoryDAO;

    public CategoryService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getCategories(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "categories");
        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.categoryDAOS = mapper.readValue(response.getEntity().getContent(), CategoryDAO[].class);
                return new Callback().setPayload(this.categoryDAOS).setSuccess(true).setMessage("Rate Category List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading categories from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Category List");
            }

        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading categories from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Category List");
        }
    }

    public Callback setCategory(CategoryDAO categoryDAO, String authHeader) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "categories");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);
        /** set request body */
        httpPost.setEntity(new StringEntity(mapper.writeValueAsString(categoryDAO)));

        if (validateRequest(categoryDAO)) {
            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    this.categoryDAO = mapper.readValue(response.getEntity().getContent(), CategoryDAO.class);
                    return new Callback().setPayload(this.categoryDAO).setSuccess(true).setMessage("New Category Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new Category to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Category");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while adding new Category to hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Category");
            }
        } else {
            log.error("Add New Category : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Category");
        }
    }

    public boolean validateRequest(CategoryDAO categoryDAO) {
        if (categoryDAO != null) {
            return true;
        } else {
            return false;
        }
    }
}

package com.wso2telco.dep.manageservice.resource.service.whitelist;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.resource.RequestTransferable;
import com.wso2telco.dep.manageservice.resource.service.AbstractService;
import com.wso2telco.dep.manageservice.resource.service.blacklist.ApiService;
import com.wso2telco.dep.manageservice.resource.util.Messages;
import com.wso2telco.dep.manageservice.resource.util.ServiceUrl;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

public class SubscriberService extends AbstractService {

    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(ApiService.class);

    public SubscriberService () {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    @Override
    public Callback executeGet(String authenticationCredential) {
        return null;
    }

    @Override
    public Callback executeGet(String authenticationCredential, List<String> pathParamStringList) {
        return null;
    }

    @Override
    public Callback executePost(RequestTransferable request, String authenticationCredential) {
        HttpPost httpPost = new HttpPost(new StringBuilder(super.getUrl(ServiceUrl.BLACKLIST_WHITELIST)).append("subscribers").toString());
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authenticationCredential);

        try {
            httpPost.setEntity(new StringEntity(mapper.writeValueAsString(request)));
            HttpResponse response = client.execute(httpPost);

            if (response.getStatusLine().getStatusCode() == 200) {
                String[] subscribers = mapper.readValue(response.getEntity().getContent(), String[].class);
                return new Callback().setPayload(subscribers).setSuccess(true).setMessage("Subscribers Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading subscribers");
                return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.SUBSCRIBERS_LOADING_ERROR.getValue());
            }

        } catch (UnsupportedEncodingException | JsonProcessingException | ClientProtocolException e) {
            log.error(" Exception while loading subscribers" + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.SUBSCRIBERS_LOADING_ERROR.getValue());
        } catch (IOException e) {
            log.error(" Exception while loading subscribers" + e);
            return new Callback().setPayload(null).setSuccess(false).setMessage(Messages.SUBSCRIBERS_LOADING_ERROR.getValue());
        }
    }

    @Override
    public Callback executePost(RequestTransferable[] request, String authenticationCredential, List<String> pathParamStringList) {
        return null;
    }
}

package com.wso2telco.dep.manageservice.resource.service;

import com.wso2telco.dep.manageservice.resource.dao.LoginResponse;
import com.wso2telco.dep.manageservice.resource.dao.UserDAO;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ssl.SSLContextBuilder;

import java.util.ArrayList;
import java.util.List;


public class AuthenticationService {

    private HttpPost httpPost;
    private StringEntity entity;


    public HttpResponse doAuthentication(UserDAO userDAO) throws Exception {

        BasicCookieStore cookieStore = new BasicCookieStore();
        SSLContextBuilder builder = new SSLContextBuilder();
        builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
        SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
        CloseableHttpClient httpclient = HttpClientBuilder.create().setSSLSocketFactory(sslsf)
                .setDefaultCookieStore(cookieStore).build();

        String requestBody = "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" x" +
                "mlns:aut=\"http://authentication.services.core.carbon.wso2.org\"><soap:Header/><soap:Body><aut:login>" +
                "<aut:username>" + userDAO.getUserName() + "</aut:username>" +
                "<aut:password>" + userDAO.getPassword() + "</aut:password>" +
                "<aut:remoteAddress>localhost</aut:remoteAddress>" +
                "</aut:login></soap:Body></soap:Envelope>";

        httpPost = new HttpPost("https://localhost:9444/services/AuthenticationAdmin");

        entity = new StringEntity(requestBody);
        httpPost.setEntity(entity);

        HttpResponse response = null;

        try {
            response = httpclient.execute(httpPost);
            return response;
        } catch (Exception ex) {
            ex.printStackTrace();
            return response;
        }

    }

    public LoginResponse doLogin(UserDAO userDAO) throws Exception {
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setIsLoggedIn(true);
        loginResponse.setUserName("admin");
        loginResponse.setToken("YWRtaW46YWRtaW4=");
        loginResponse.setIsAdmin(true);
        loginResponse.setOperator("");
        loginResponse.setBilling(true);
        loginResponse.setSuccess(true);
        loginResponse.setMessage("user verified successfully");

        List<String> roles = new ArrayList();
        roles.add("Internal/subscriber");
        roles.add("manage-app-admin");
        roles.add("Internal/everyone");
        roles.add("admin");
        loginResponse.setRoles(roles);

        return loginResponse;

    }
}

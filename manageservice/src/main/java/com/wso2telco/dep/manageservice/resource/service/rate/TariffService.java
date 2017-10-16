package com.wso2telco.dep.manageservice.resource.service.rate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wso2telco.dep.manageservice.resource.dao.Callback;
import com.wso2telco.dep.manageservice.resource.dao.rate.TariffDAO;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

import java.io.IOException;

/**
 * Created by manoj on 10/12/17.
 */
public class TariffService {
    private HttpGet httpGet;
    private HttpPost httpPost;
    private HttpResponse response;
    private HttpClient client;
    private ObjectMapper mapper;
    private final Log log = LogFactory.getLog(TariffService.class);
    private TariffDAO tariffDAO;
    private TariffDAO[] tariffDAOS;

    public TariffService() {
        this.client = HttpClientBuilder.create().build();
        this.mapper = new ObjectMapper();
    }

    public Callback getTariffs(String authHeader) throws Exception {
        httpGet = new HttpGet("http://localhost:9763/ratecard-service/ratecardservice/" + "tariffs");
        httpGet.addHeader("Authorization", authHeader);

        try {
            response = client.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                this.tariffDAOS = mapper.readValue(response.getEntity().getContent(), TariffDAO[].class);
                return new Callback().setPayload(this.tariffDAOS).setSuccess(true).setMessage("Rate Tariff List Loaded Successfully");
            } else {
                log.error(response.getStatusLine().getStatusCode() + " Error loading Tariff from hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Tariff List");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error(response.getStatusLine().getStatusCode() + " Exception while loading Tariff from hub");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Loading Tariff List");
        }
    }

    public Callback setTarif(TariffDAO tariffDAO, String authHeader) throws Exception {
        httpPost = new HttpPost("http://localhost:9763/ratecard-service/ratecardservice/" + "tariffs");
        /** add headers */
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", authHeader);
        /** set request body */
        httpPost.setEntity(new StringEntity(mapper.writeValueAsString(tariffDAO)));

        if (validateRequest(tariffDAO)) {
            try {
                response = client.execute(httpPost);
                if (response.getStatusLine().getStatusCode() == 201) {
                    this.tariffDAO = mapper.readValue(response.getEntity().getContent(), TariffDAO.class);
                    return new Callback().setPayload(this.tariffDAOS).setSuccess(true).setMessage("New Tariff Created Successfully");
                } else {
                    log.error(response.getStatusLine().getStatusCode() + " Error while adding new tariff to hub");
                    return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Tariff");
                }
            } catch (IOException e) {
                e.printStackTrace();
                log.error(response.getStatusLine().getStatusCode() + " Exception while adding new tariff to hub");
                return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Tariff");
            }
        } else {
            log.error("Add New Tariff : Invalid Request");
            return new Callback().setPayload(null).setSuccess(false).setMessage("Error Adding New Tariff");
        }
    }

    public boolean validateRequest(TariffDAO tariffDAO) {
        if (tariffDAO != null) {
            return true;
        } else {
            return false;
        }
    }
}

/*
 * Copyright (c) 2016, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 * <p>
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.wso2telco.dep.manageservice.resource.service.responsefilter;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.dao.ResponseFilterDAO;
import com.wso2telco.dep.manageservice.resource.model.Callback;
import com.wso2telco.dep.manageservice.resource.model.GenericResponseWithIDs;
import com.wso2telco.dep.manageservice.resource.model.ResponseFilter;

public class ResponseFilterService {

    /**
     * Add a response filter record to the database
     *
     * @param responseFilter responseFilter record need to be added
     * @return Callback with generated id
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public Callback addResponseFilter(ResponseFilter responseFilter) throws BusinessException {
        ResponseFilterDAO dataProvider = new ResponseFilterDAO();
        GenericResponseWithIDs genericResponse = new GenericResponseWithIDs();
        genericResponse.setId(dataProvider.addResponseFilter(responseFilter).getId());
        genericResponse.setIdType("ResponseFilter ID");
        genericResponse.setMessage("ResponseFilter created successfully");
        return new Callback().setMessage("success").setPayload(genericResponse).setSuccess(true);
    }

    /**
     * Find response filter for given parameters
     *
     * @param sp String service provider name
     * @param application String application name
     * @param api String api name
     * @param operation String operation name
     * @return Callback with responseFilter object
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public Callback findResponseFilter(String sp, String application, String api, String operation) throws BusinessException {
        ResponseFilterDAO dataProvider = new ResponseFilterDAO();
        ResponseFilter responseFilter = dataProvider.findResponseFilter(sp, application, api, operation);
        return new Callback().setMessage("success").setPayload(responseFilter).setSuccess(true);
    }

    /**
     * Find response filter for given id
     *
     * @param id integer id of the response filter
     * @return Callback with responseFilter object
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public Callback findResponseFilter(int id) throws BusinessException {
        ResponseFilterDAO dataProvider = new ResponseFilterDAO();
        ResponseFilter responseFilter = dataProvider.findResponseFilter(id);
        return new Callback().setMessage("success").setPayload(responseFilter).setSuccess(true);
    }

    /**
     * Remove existing response filter for given id
     *
     * @param id integer id of the response filter to be deleted
     * @return Callback with deleted id
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public Callback deleteResponseFilter(int id) throws BusinessException {
        ResponseFilterDAO dataProvider = new ResponseFilterDAO();
        dataProvider.deleteResponseFilter(id);
        GenericResponseWithIDs genericResponse = new GenericResponseWithIDs();
        genericResponse.setId(id);
        genericResponse.setIdType("ResponseFilter ID");
        genericResponse.setMessage("ResponseFilter deleted successfully");
        return new Callback().setMessage("success").setPayload(genericResponse).setSuccess(true);
    }
}

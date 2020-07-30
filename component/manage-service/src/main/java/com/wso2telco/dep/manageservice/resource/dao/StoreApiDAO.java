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

package com.wso2telco.dep.manageservice.resource.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.wso2telco.core.dbutils.DbUtils;
import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.core.dbutils.exception.ServiceError;
import com.wso2telco.core.dbutils.util.DataSourceNames;
import com.wso2telco.dep.manageservice.resource.model.ApiResourcePath;
import com.wso2telco.dep.manageservice.resource.util.Tables;

public class StoreApiDAO {

    private static final Logger logger = Logger.getLogger(StoreApiDAO.class.getName());

    /**
     * Find resource paths for given API ID
     *
     * @param apiId integer id of the API
     * @return List of ApiResourcePath objects
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public List<ApiResourcePath> findResourcePaths(int apiId) throws BusinessException {
        if (apiId < 1) {
            logger.log(Level.SEVERE, "Invalid Parameter");
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        }

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        List<ApiResourcePath> apiResourcePaths = null;

        try {
            connection = DbUtils.getDbConnection(DataSourceNames.WSO2AM_DB);
            if (connection == null) {
                logger.log(Level.SEVERE, "unable to open {} database connection", DataSourceNames.WSO2AM_DB);
                throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
            }

            final StringBuilder query = new StringBuilder("SELECT URL_PATTERN, HTTP_METHOD FROM ");
            query.append(Tables.AM_API_URL_MAPPING.getTObject());
            query.append(" WHERE API_ID=?");
            statement = connection.prepareStatement(query.toString());
            statement.setInt(1, apiId);
            resultSet = statement.executeQuery();

            apiResourcePaths = new ArrayList<>();
            while (resultSet.next()) {
                ApiResourcePath apiResourcePath = new ApiResourcePath();
                apiResourcePath.setResourcePath(resultSet.getString(1));
                apiResourcePath.setHttpVerb(resultSet.getString(2));
                apiResourcePaths.add(apiResourcePath);
            }
        } catch (SQLException e) {
            logger.log(Level.SEVERE, "database operation error in findResponseFilter : ", e);
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "error in findResponseFilter : ", e);
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        } finally {
            DbUtils.closeAllConnections(statement, connection, resultSet);
        }
        return apiResourcePaths;
    }

    /**
     * Find API context for given API ID
     *
     * @param apiId integer id of the API
     * @return String API context path
     * @throws BusinessException if any errors occurred while doing the database operations
     */
    public String findApiContext(int apiId) throws BusinessException {
        if (apiId < 1) {
            logger.log(Level.SEVERE, "Invalid Parameter");
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        }

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        String apiContext = null;

        try {
            connection = DbUtils.getDbConnection(DataSourceNames.WSO2AM_DB);
            if (connection == null) {
                logger.log(Level.SEVERE, "unable to open {} database connection", DataSourceNames.WSO2AM_DB);
                throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
            }

            final StringBuilder query = new StringBuilder("SELECT CONTEXT FROM ");
            query.append(Tables.AM_API.getTObject());
            query.append(" WHERE API_ID=?");
            statement = connection.prepareStatement(query.toString());
            statement.setInt(1, apiId);
            resultSet = statement.executeQuery();

            if (resultSet.next()) {
                apiContext = resultSet.getString(1);
            }
        } catch (SQLException e) {
            logger.log(Level.SEVERE, "database operation error in findApiContext : ", e);
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "error in findApiContext : ", e);
            throw new BusinessException(ServiceError.SERVICE_ERROR_OCCURED);
        } finally {
            DbUtils.closeAllConnections(statement, connection, resultSet);
        }
        return apiContext;
    }
}

/*******************************************************************************
 * Copyright  (c) 2016-2017, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 *
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
package com.wso2telco.dep.manageservice.resource.util;

import com.wso2telco.core.dbutils.fileutils.PropertyFileReader;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.io.File;
import java.util.Properties;


public class ApplicationConfiguration {

    private static final String MANAGE_APP_CONFIG_FILE = "manage.properties";
    private static final String MSISDN_VALIDATION_SERVICE = "MsisdnValidationService";
    private static final Log log = LogFactory.getLog(ApplicationConfiguration.class);
    private static String serviceEndpoint = "";

    private ApplicationConfiguration() {
    }

    public static Properties readAppConfig() {

        Properties properties = null;
        properties = PropertyFileReader.getFileReader().getProperties(MANAGE_APP_CONFIG_FILE);
        return properties;

    }

    public static String getMsisdnValidationServiceUrl() {
		if (serviceEndpoint.equals("")) {
			String carbonHome = System.getProperty("carbon.home");
			String apiManagerFile = carbonHome + "/repository/conf/api-manager.xml";

			try {
				DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();

				Document document = builder.parse(new File(apiManagerFile));
				Element rootElement = document.getDocumentElement();

				NodeList nodeList = rootElement.getElementsByTagName(MSISDN_VALIDATION_SERVICE);
				Node node = nodeList.item(0);

				serviceEndpoint = ((Element)node).getTextContent();
			} catch (Exception e) {
				String errorMessage = "Error in ApplicationConfiguration.getMsisdnValidationServiceUrl";
				log.error(errorMessage, e);
			}
		}
        return serviceEndpoint;
    }
}

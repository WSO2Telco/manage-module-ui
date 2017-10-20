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

import org.apache.log4j.Logger;
import org.wso2.carbon.utils.CarbonUtils;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.File;

public class ApplicationConfiguration {

    private ApplicationConfiguration() {
    }

    private static final Logger log = Logger.getLogger(ApplicationConfiguration.class);

    public static Configuration readAppConfig() {

        log.info("Info Log");

        Configuration configuration = null;
        try {
            String dataSourceDir = CarbonUtils.getCarbonConfigDirPath();
            File applicationConfig = new File(dataSourceDir + File.separator + "manageAppConfig.xml");
            if (applicationConfig.exists()) {
                JAXBContext jaxbContext = JAXBContext.newInstance(Configuration.class);
                Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                configuration = (Configuration) jaxbUnmarshaller.unmarshal(applicationConfig);
            }
        } catch (JAXBException e) {
            e.getMessage();
        }

        return configuration;
    }
}

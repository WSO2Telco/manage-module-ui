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

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Configuration {
    private String businessProcessEngineBaseUrl;

    private String adminUserName;

    private AllowedOperators allowedOperators;

    private String billingEnable;

    private String quotaServiceUrl;

    private String applicationContext;

    private String creditPlanEnable;

    private String authServerUrl;

    private String reportingUrl;

    private String rateServiceUrl;

    private String creditControlServiceUrl;

    private String adminPassword;

    private String serverPort;

    private String blackListWhiteListServiceUrl;

    private AllowedRoles allowedRoles;

    public String getBusinessProcessEngineBaseUrl() {
        return businessProcessEngineBaseUrl;
    }

    @XmlElement
    public void setBusinessProcessEngineBaseUrl(String businessProcessEngineBaseUrl) {
        this.businessProcessEngineBaseUrl = businessProcessEngineBaseUrl;
    }

    public String getAdminUserName() {
        return adminUserName;
    }

    @XmlElement
    public void setAdminUserName(String adminUserName) {
        this.adminUserName = adminUserName;
    }

    public AllowedOperators getAllowedOperators() {
        return allowedOperators;
    }

    @XmlElement
    public void setAllowedOperators(AllowedOperators allowedOperators) {
        this.allowedOperators = allowedOperators;
    }

    public String getBillingEnable() {
        return billingEnable;
    }

    @XmlElement
    public void setBillingEnable(String billingEnable) {
        this.billingEnable = billingEnable;
    }

    public String getQuotaServiceUrl() {
        return quotaServiceUrl;
    }

    @XmlElement
    public void setQuotaServiceUrl(String quotaServiceUrl) {
        this.quotaServiceUrl = quotaServiceUrl;
    }

    public String getApplicationContext() {
        return applicationContext;
    }

    @XmlElement
    public void setApplicationContext(String applicationContext) {
        this.applicationContext = applicationContext;
    }

    public String getCreditPlanEnable() {
        return creditPlanEnable;
    }

    @XmlElement
    public void setCreditPlanEnable(String creditPlanEnable) {
        this.creditPlanEnable = creditPlanEnable;
    }

    public String getAuthServerUrl() {
        return authServerUrl;
    }

    @XmlElement
    public void setAuthServerUrl(String authServerUrl) {
        this.authServerUrl = authServerUrl;
    }

    public String getReportingUrl() {
        return reportingUrl;
    }

    @XmlElement
    public void setReportingUrl(String reportingUrl) {
        this.reportingUrl = reportingUrl;
    }

    public String getRateServiceUrl() {
        return rateServiceUrl;
    }

    @XmlElement
    public void setRateServiceUrl(String rateServiceUrl) {
        this.rateServiceUrl = rateServiceUrl;
    }

    public String getCreditControlServiceUrl() {
        return creditControlServiceUrl;
    }

    @XmlElement
    public void setCreditControlServiceUrl(String creditControlServiceUrl) {
        this.creditControlServiceUrl = creditControlServiceUrl;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    @XmlElement
    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public String getServerPort() {
        return serverPort;
    }

    @XmlElement
    public void setServerPort(String serverPort) {
        this.serverPort = serverPort;
    }

    public String getBlackListWhiteListServiceUrl() {
        return blackListWhiteListServiceUrl;
    }

    @XmlElement
    public void setBlackListWhiteListServiceUrl(String blackListWhiteListServiceUrl) {
        this.blackListWhiteListServiceUrl = blackListWhiteListServiceUrl;
    }

    public AllowedRoles getAllowedRoles() {
        return allowedRoles;
    }

    @XmlElement
    public void setAllowedRoles(AllowedRoles allowedRoles) {
        this.allowedRoles = allowedRoles;
    }

}

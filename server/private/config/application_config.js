/**
 * Created by sumudu on 1/18/17.
 */
'use strict';

var appConfig = {
    applicationContext: process.env.wm_context || 'manage',
    serverPort: process.env.wm_server_port || '3060',
    authServerURL: process.env.wm_auth_server_url || 'https://localhost:9443/services',
    rateServiceURL: process.env.wm_rate_service_url || 'http://localhost:7080/provisionAPI/test',
    reportingUrl : process.env.wm_reporting_url || 'https://localhost:9443/apihostobject',
    businessProcessEngineBaseUrl: process.env.wm_business_process_engine_url || 'http://localhost:9763/activiti-rest/service',
    businessProcessEngineUserName : process.env.wm_business_process_engine_user || 'kermit',
    businessProcessEnginePassword : process.env.wm_business_process_engine_password || 'kermit',
    allowedRoles: process.env.wm_allowed_roles || "admin,subscriber,operator1-admin-role,operator2-admin-role,operator2-cc-role",
    apiContext: 'api'

};

module.exports = appConfig;

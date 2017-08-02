/**
 * Created by sumudu on 1/18/17.
 */
'use strict';

var appConfig = {
    applicationContext: process.env.wm_context || 'manage',
    serverPort: process.env.wm_server_port || '3060',
    authServerURL: process.env.wm_auth_server_url || 'https://localhost:9443/services',
    rateServiceURL: process.env.wm_rate_service_url || 'http://localhost:9763/ratecard-service-2.2.5-SNAPSHOT/ratecardservice/',
    reportingUrl : process.env.wm_reporting_url || 'https://localhost:9443/apihostobject',
    blacklistWhitelistServiceURL: process.env.wm_blacklist_whitelist_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/',
    businessProcessEngineBaseUrl: process.env.wm_business_process_engine_url || 'http://localhost:9763/activiti-rest/service',
    businessProcessEngineUserName : process.env.wm_business_process_engine_user || 'kermit',
    businessProcessEnginePassword : process.env.wm_business_process_engine_password || 'kermit',
    allowedRoles: process.env.wm_allowed_roles || "admin,subscriber,operator1-admin-role,operator2-admin-role,operator2-cc-role",
    apiContext: 'api'

};

module.exports = appConfig;

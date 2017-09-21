/**
 * Created by sumudu on 1/18/17.
 */
'use strict';

//require('dotenv').config();

var appConfig = {
    applicationContext: process.env.wm_context || 'manage',
    serverPort: process.env.wm_server_port || '3060',
    authServerURL: process.env.wm_auth_server_url || 'https://localhost:9443/services',
    rateServiceURL: process.env.wm_rate_service_url || 'http://localhost:9763/ratecard-service/ratecardservice/',
    reportingUrl : process.env.wm_reporting_url || 'https://localhost:9443/workflow-service/workflow/history',
    blacklistWhitelistServiceURL: process.env.wm_blacklist_whitelist_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/',
    apiListURL: process.env.wm_blacklist_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/apis',
    blacklistPerApiURL: process.env.wm_blacklist_numbers_url || 'http://localhost:9763/blacklist-whitelist-service/queries/GetBlacklistPerApi',
    removeBlacklistURL: process.env.wm_blacklist_remove_url || 'http://localhost:9763/blacklist-whitelist-service/queries/RemoveFromBlacklist',
    addNewToBlacklistURL: process.env.wm_blacklist_add_url || 'http://localhost:9763/blacklist-whitelist-service/queries/Blacklist',
    apiSubscriberURL: process.env.wm_whitelist_subscribers_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/subscribers',
    apiAppsURL: process.env.wm_whitelist_apps_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/apps',
    apiApisURL: process.env.wm_whitelist_apis_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/apis',
    quotaServiceUrl: process.env.wm_quota_service_url || 'http://localhost:9763/quota-service/services/',
    businessProcessEngineBaseUrl: process.env.wm_business_process_engine_url || 'http://localhost:9763/activiti-rest/service',
    businessProcessEngineUserName : process.env.wm_business_process_engine_user || 'kermit',
    businessProcessEnginePassword : process.env.wm_business_process_engine_password || 'kermit',
    adminUserName : process.env.user || 'admin',
    adminPassword: process.env.password || 'admin',
    apiContext: 'api',
    allowedRoles: process.env.wm_allowed_roles || ['admin', 'subscriber', 'operator1-admin-role', 'operator2-admin-role', 'dialog-admin-role']
};

module.exports = appConfig;

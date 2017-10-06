/**
 * Created by sumudu on 1/18/17.
 */
'use strict';

require('dotenv').config();

var appConfig = {
    /** the first parameter of the url http://localhost:3060/mamage
     * */
    applicationContext: process.env.wm_context || 'manage',
    /** the port the node environment will run
     * */
    serverPort: process.env.wm_server_port || '3060',
    /** the url wich is used to call the admin services
     * */
    authServerURL: process.env.wm_auth_server_url || 'https://localhost:9443/services',
    /** the url used to access the rate services
     * */
    rateServiceURL: process.env.wm_rate_service_url || 'http://localhost:9763/ratecard-service/ratecardservice/',
    /** the url used to load the app history details
     * */
    reportingUrl: process.env.wm_reporting_url || 'https://localhost:9443/workflow-service/workflow/history',
    /** the url for blacklist whitelist services
     * */
    blacklistWhitelistServiceURL: process.env.wm_blacklist_whitelist_service_url || 'http://localhost:9763/blacklist-whitelist-service/queries/',
    /** the url used for quota services
     * */
    quotaServiceUrl: process.env.wm_quota_service_url || 'http://localhost:9763/quota-service/services/',
    /** the url of the activity engine
     * */
    businessProcessEngineBaseUrl: process.env.wm_business_process_engine_url || 'http://localhost:9763/activiti-rest/service',
    /**this url is used to load the credit plan
     * */
    creditControlServiceURL: process.env.wm_credit_control_service_url || 'http://localhost:9763/credit-control-service/services/',
    /**credentials of the activity engine
     * */
    businessProcessEngineUserName: process.env.wm_business_process_engine_user || 'kermit',
    businessProcessEnginePassword: process.env.wm_business_process_engine_password || 'kermit',
    /** credentials of the hub admin
     * */
    adminUserName: process.env.user || 'admin',
    adminPassword: process.env.password || 'admin',
    /**the array of allowed roles which can log in to the manage app. If we create a new user with a new role the add that value to this list
     * */
    allowedRoles: process.env.wm_allowed_roles || ['admin', 'subscriber', 'ivorycoast-admin-role', 'senegal-admin-role', 'operator1-admin-role'],
    /**the key value pair shows the allowed role and its related user. If you are adding new user with now role update this field,
     * if not the quota service will fail to execute
     * */
    allowedOperators: process.env.wm_allowed_operators || ['ivorycoast-admin-role:IvoryCoast', 'senegal-admin-role:Senegal', 'operator1-admin-role:Operator1'],
    /**to enable disable rate, quota in the view use true or false
     */
    billingEnable: process.env.wm_billing_enable || true
};

module.exports = appConfig;
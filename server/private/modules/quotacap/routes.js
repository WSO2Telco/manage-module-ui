'use strict';
const quotaCapService = require('./quotacap_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/quotacap/getsubscribers',
        handler: quotaCapService.getSubscribers
    },
    {
        method: 'POST',
        path: '/api/quotacap/getapps',
        handler: quotaCapService.getApps
    },
    {
        method: 'POST',
        path: '/api/quotacap/getapis',
        handler: quotaCapService.getApis
    },
    {
        method: 'POST',
        path: '/api/quotacap/addnewquotalimit',
        handler: quotaCapService.addNewQuotaLimit
    },
    {
        method: 'POST',
        path: '/api/quotacap/removefromwhitelist',
        handler: quotaCapService.removeFromWhitelist
    },
    {
        method: 'POST',
        path: '/api/quotacap/getquotalimitinfo',
        handler: quotaCapService.getQuotaLimitInfo
    },
    {
        method: 'POST',
        path: '/api/quotacap/getvalidityperiod',
        handler: quotaCapService.getValidityPeriod
    }

];

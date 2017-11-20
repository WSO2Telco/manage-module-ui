'use strict';
const quotaCapService = require('./quotacap_service');

module.exports = [
    {
        method: 'GET',
        path: '/api/quotacap/getsubscribers/{operator}',
        handler: quotaCapService.getSubscribers
    },
    {
        method: 'GET',
        path: '/api/quotacap/getapps/{subscriberID}/{operator}',
        handler: quotaCapService.getApps
    },
    {
        method: 'GET',
        path: '/api/quotacap/getapis/{subscriberID}/{appID}',
        handler: quotaCapService.getApis
    },
    {
        method: 'POST',
        path: '/api/quotacap/addnewquotalimit',
        handler: quotaCapService.addNewQuotaLimit
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
    },
    {
        method: 'GET',
        path: '/api/quotacap/getoperatorlist',
        handler: quotaCapService.getOperatorList
    },
    {
        method: 'GET',
        path: '/api/quotacap/getoperatorofsubscriber/{subscriberID}',
        handler: quotaCapService.getOperatorOfsubscriber
    }

];

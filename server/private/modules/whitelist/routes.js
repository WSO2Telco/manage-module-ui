/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const  whitelistService = require('./whitelist_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/whitelist/getsubscribers',
        handler: whitelistService.getSubscribers
    },
    {
        method: 'POST',
        path: '/api/whitelist/getapps',
        handler: whitelistService.getApps
    },
    {
        method: 'POST',
        path: '/api/whitelist/getapis',
        handler: whitelistService.getApis
    }

];

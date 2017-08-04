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
    },
    {
        method: 'POST',
        path: '/api/whitelist/getwhitelist',
        handler: whitelistService.getWhitelist
    },
    {
        method: 'POST',
        path: '/api/whitelist/addnewwhitelist',
        handler: whitelistService.addNewWhitelist
    },
    {
        method: 'POST',
        path: '/api/whitelist/removefromwhitelist',
        handler: whitelistService.removeFromWhitelist
    }

];

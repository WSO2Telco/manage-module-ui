'use strict';
const  whitelistService = require('./whitelist_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/whitelist/getsubscribers',
        handler: whitelistService.getSubscribers
    },
    {
        method: 'GET',
        path: '/api/whitelist/getwhitelist/{subscriberID}/{apiID}/{appID}',
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

/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const  blacklistService = require('./blacklist_service');

module.exports = [
    {
        method: 'GET',
        path: '/api/blacklist',
        handler: blacklistService.getApiList
    },
    {
        method : 'POST',
        path : '/api/blacklist/list/{id}',
        handler : blacklistService.getBlackListNumberList
    },
    {
        method: 'POST',
        path : '/api/blacklist/remove/{msisdn}',
        handler : blacklistService.removeBlackListNumber
    },
    {
        method: 'POST',
        path: '/api/blacklist',
        handler: blacklistService.addBlackNumbers
    }
];

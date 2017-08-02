'use strict';
const rateService = require('./rate_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/rate/addsubcategory',
        handler: rateService.addSubcategory
    },
    {
        method: 'POST',
        path: '/api/rate/addcurrency',
        handler: rateService.addCurrency
    },
    {
        method: 'POST',
        path: '/api/rate/addratecard',
        handler: rateService.addRateCard
    },
    {
        method: 'GET',
        path: '/api/rate/gettarifflist',
        handler: rateService.getTariffList
    },
    {
        method: 'GET',
        path: '/api/rate/getcurrencylist',
        handler: rateService.getCurrencyList
    },
    {
        method: 'GET',
        path: '/api/rate/getratetypelist',
        handler: rateService.getRateTypeList
    },
    {
        method: 'GET',
        path: '/api/rate/getcategorylist',
        handler: rateService.getCategoryList
    }

];

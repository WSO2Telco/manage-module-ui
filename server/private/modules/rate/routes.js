'use strict';
const rateService = require('./rate_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/rate/categories',
        handler: rateService.addCategory
    },
    {
        method: 'POST',
        path: '/api/rate/tariffs',
        handler: rateService.addTariff
    },
    {
        method: 'POST',
        path: '/api/rate/currencies',
        handler: rateService.addCurrency
    },
    {
        method: 'POST',
        path: '/api/rate/addratecard',
        handler: rateService.addRateCard
    },
    {
        method: 'POST',
        path: '/api/rate/assignrates/{apiName}/{apiOperationId}/{operatorId}',
        handler: rateService.assignRates
    },
    {
        method: 'GET',
        path: '/api/rate/tariffs',
        handler: rateService.getTariffList
    },
    {
        method: 'GET',
        path: '/api/rate/currencies',
        handler: rateService.getCurrencyList
    },
    {
        method: 'GET',
        path: '/api/rate/ratetypes',
        handler: rateService.getRateTypeList
    },
    {
        method: 'GET',
        path: '/api/rate/getratecards',
        handler: rateService.getRateCards
    },
    {
        method: 'GET',
        path: '/api/rate/categories',
        handler: rateService.getCategoryList
    },
    {
        method: 'GET',
        path: '/api/rate/ratedefinitions',
        handler: rateService.getRateDefinitionList
    },
    {
        method: 'GET',
        path: '/api/rate/taxes',
        handler: rateService.getTaxList
    },
    {
        method: 'GET',
        path: '/api/rate/apis',
        handler: rateService.getApiList
    },
    {
        method: 'GET',
        path: '/api/rate/getapioperationrates/{apiName}/{apiOperationId}/{operatorId}',
        handler: rateService.getAPIOperationRates
    },
    {
        method: 'GET',
        path: '/api/rate/getapioperations/{api}',
        handler: rateService.getApiOperations
    }

];

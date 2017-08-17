'use strict';

const boom = require('boom');
const Messages = require('../common/messages');
const rateWebService = require('./rate_webservice');  //if a soap service is required
const rateRestService = require('./rate_rest_service');
const logger=require('../../config/logger');

logger.debugLevel = 'warn';

const validateAddRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddCurrencyRequest = function (request) {
    let param = request.payload;
    if (!!param && param.currencyCode && param.currencyDescription) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddCategoryRequest = function (request) {
    let param = request.payload;
    if (!!param && param.categoryName && param.categoryCode && param.categoryDescription && param.createdBy) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

function rateService() {

    /**
     * Addd SubCategory tariff relationship Action
     * @param request
     * @param callback
     * @private
     */
    let _addRateCategory = function (request, callback) {

        logger.log('INFO', "hit at rate service end point");

        request.server.log('info', 'ADD SUB CATEGORY REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign(addSubcategoryResult, {success: true, message:"sub name created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddRequest(request)) {
            rateRestService.invokeAddRateCategoryRest(request, request.params.id).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    /**
     * Add new currency
     * @param request
     * @param callback
     * @private
     */
    let _addCurrency = function (request, callback) {

        logger.log('INFO', "hit at rate service end point add new currency");

        request.server.log('info', 'ADD Currency REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"currency added successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddCurrencyRequest(request)) {
            rateRestService.invokeAddCurrencyRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };


    /**
     * Add new category or sub category
     * @param request
     * @param callback
     * @private
     */
    let _addCategory = function (request, callback) {

        logger.log('INFO', "hit at rate service add category end point");

        request.server.log('info', 'ADD CATEGORY REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"category created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddCategoryRequest(request)) {
            rateRestService.invokeAddCategoryRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _addTariff = function (request, callback) {

        logger.log('INFO', "hit at rate service add category end point");

        request.server.log('info', 'ADD CATEGORY REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"category created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddRequest(request)) {
            rateRestService.invokeAddTariffRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };


    /**
     * Add new rate card
     * @param request
     * @param callback
     * @private
     */
    let _addRateCard = function (request, callback) {
        logger.log('INFO', "hit at rate service add rate card end point");

        request.server.log('info', 'ADD RATE CARD REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"rate card created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddRequest(request)) {
            rateRestService.invokeAddRateCardRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }


    };

    /**
     * get tariff list
     * @param request
     * @param callback
     * @private
     */
    let _getTariffList = function (request, callback) {
        logger.log('INFO', "hit at rate get tariff service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetTariffListRest( ).then(onSuccess, onFailture);
    }

    /**
     * get currency list
     * @param request
     * @param callback
     * @private
     */
    let _getCurrencyList = function (request, callback) {
        logger.log('INFO', "hit at rate get currency service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetCurrencyListRest( ).then(onSuccess, onFailture);
    }

    let _getRateTypeList = function (request, callback) {
        logger.log('INFO', "hit at rate get rate type service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetRateTypeListRest( ).then(onSuccess, onFailture);
    }

    let _getCategoryList = function (request, callback) {

        logger.log('INFO', "hit at rate get categories service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetCategoryListRest( ).then(onSuccess, onFailture);
    }

    let _getRateDefinitionList = function (request, callback) {

        logger.log('INFO', "hit at rate get categories service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetRateDefinitionListRest( ).then(onSuccess, onFailture);
    }

    let _getTaxList = function (request, callback) {

        logger.log('INFO', "hit at rate get Taxes service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetRateTaxListRest().then(onSuccess, onFailture);

    }


    let _addRateCards = function (request, callback) {
        logger.log('INFO', "--------- RK add Rate cards rate_service ");

        request.server.log('info', 'RK add Rate cards rate_service: ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addRateCards) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addRateCards, {success: true, message:"rate card created successfully"}));
        };

        let onFailture = function (addRateCards) {
            logger.log('ERROR', 'faliture');
            callback(addRateCards);
        };

        if (validateAddRequest(request)) {
            rateRestService.invokeAddRateRateCardsRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }


    };

    return {
        addRateCategory: _addRateCategory,
        addCurrency: _addCurrency,
        addCategory: _addCategory,
        addRateCard: _addRateCard,
        addTariff: _addTariff,
        getTariffList: _getTariffList,
        getCurrencyList: _getCurrencyList,
        getRateTypeList: _getRateTypeList,
        getCategoryList: _getCategoryList,
        getRateDefinitionList: _getRateDefinitionList,
        getTaxList:_getTaxList,
        addRateCards:_addRateCards
    };

    //commet 22
}

module.exports = rateService();

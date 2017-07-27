'use strict';

const boom = require('boom');
const Messages = require('../common/messages');
const rateWebService = require('./rate_webservice');  //if a soap service is required
const rateRestService = require('./rate_rest_service');
const logger=require('../../config/logger');

logger.debugLevel = 'warn';

const validateAddSubcategoryRequest = function (request) {
    let param = request.payload;
    if (!!param && param.category && param.subcategory && param.tariff) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddCurrencyRequest = function (request) {
    let param = request.payload;
    if (!!param && param.currencycode && param.currencydesc) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddNewTypeRequest = function (request) {
    let param = request.payload;
    if (!!param && param.name && param.code && param.description && param.type) {
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
    let _addSubcategory = function (request, callback) {

        logger.log('INFO', "hit at rate service end point");

        request.server.log('info', 'ADD SUB CATEGORY REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"sub name created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddSubcategoryRequest(request)) {
            rateRestService.invokeAddSubCategoryRest(request).then(onSuccess, onFailture);
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

        logger.log('INFO', "hit at rate service end point for currency- Rk");

        request.server.log('info', 'ADD Currency REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"sub category created successfully"}));
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
     * Add new category, tariff or sub category
     * @param request
     * @param callback
     * @private
     */
    let _addNewType = function (request, callback) {

        logger.log('INFO', "hit at rate service new type end point");

        request.server.log('info', 'ADD NEW TYPE REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"sub name created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddNewTypeRequest(request)) {
            if(request.payload.type == "category"){

                //write service

            }else if(request.payload.type == "subcategory"){

                //write service

            }else if(request.payload.type == 'tariff'){

                //write service

            }else{
                callback(boom.badRequest(Messages['BAD_REQUEST']));
            }

            rateRestService.invokeAddSubCategoryRest(request).then(onSuccess, onFailture);
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
            callback(Object.assign({}, addSubcategoryResult, {success: true, message:"sub name created successfully"}));
        };

        let onFailture = function (addSubCategoryError) {
            logger.log('ERROR', 'faliture');
            callback(addSubCategoryError);
        };

        if (validateAddNewTypeRequest(request)) {
            rateRestService.invokeAddRateCardRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }


    };

    /**
     *  Return available currency list
     * @param request
     * @param callback
     * @private
     */
    let _getCurrency = function (request, callback) {
        logger.log('INFO', "get currency at rate service end point");

    }

    //add more rate services here

    return {
        addSubcategory: _addSubcategory,
        addCurrency: _addCurrency,
        addNewType: _addNewType,
        addRateCard: _addRateCard
    };

    //commet 22
}

module.exports = rateService();

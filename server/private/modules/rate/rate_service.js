'use strict';

const boom = require('boom');
const Messages = require('../common/messages');
const rateRestService = require('./rate_rest_service');
const logger = require('../../config/logger');

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


    let rateDefinitionResult;

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
            callback(Object.assign(addSubcategoryResult, {success: true, message: "sub name created successfully"}));
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
            callback(Object.assign({}, addSubcategoryResult, {
                success: true,
                message: "New Currency Added Successfully"
            }));
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
            callback(Object.assign({}, addSubcategoryResult, {
                success: true,
                message: "New Category Created Successfully"
            }));
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
            callback(Object.assign({}, addSubcategoryResult, {
                success: true,
                message: "New Tariff Created Successfully"
            }));
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

    let _assignRates = function (request, callback) {

        logger.log('INFO', "hit at rate service add category end point");

        request.server.log('info', 'ADD CATEGORY REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addSubcategoryResult) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addSubcategoryResult, {
                success: true,
                message: "New Tariff Created Successfully"
            }));
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
            callback(Object.assign({}, addSubcategoryResult, {
                success: true,
                message: "Rate Card Created Successfully"
            }));
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

        rateRestService.invokeGetTariffListRest().then(onSuccess, onFailture);
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

        rateRestService.invokeGetCurrencyListRest().then(onSuccess, onFailture);
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

        rateRestService.invokeGetRateTypeListRest().then(onSuccess, onFailture);
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

        rateRestService.invokeGetCategoryListRest().then(onSuccess, onFailture);
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

        rateRestService.invokeGetRateDefinitionListRest().then(onSuccess, onFailture);
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

    let _getAPIOperationRates = function (request, callback) {

        // logger.log('INFO', "hit at Get Rates for API Operation service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (rateDefinitions) {
            rateDefinitionResult = rateDefinitions;
            logger.log('INFO', 'success');
            if (request.params.operatorId != 'null') {
                rateRestService.invokeGetAPIOperationRates(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'operator-assign').then(onAssignSuccess, onAssignFailture);
            } else {
                rateRestService.invokeGetAPIOperationRates(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'admin-assign').then(onAssignSuccess, onAssignFailture);
            }
        };

        let onAssignSuccess = function (operationRates) {
            logger.log('INFO', 'success');
            callback(
                {
                    source: rateDefinitionResult,
                    destination: operationRates
                }
            );
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        let onAssignFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (request.params.operatorId != 'null') {
            rateRestService.invokeGetAPIOperationRates(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'operator').then(onSuccess, onFailture);
        } else {
            console.log('%%%%>>' + request.params.operatorId);
            rateRestService.invokeGetAPIOperationRates(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'admin').then(onSuccess, onFailture);
        }


    }

    let _getApiOperations = function (request, callback) {

        logger.log('INFO', "hit at rate get Api Operations service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        rateRestService.invokeGetApiOperationsRest(request.params.api).then(onSuccess, onFailture);
    }

    return {
        addRateCategory: _addRateCategory,
        addCurrency: _addCurrency,
        addCategory: _addCategory,
        addRateCard: _addRateCard,
        addTariff: _addTariff,
        assignRates: _assignRates,
        getTariffList: _getTariffList,
        getCurrencyList: _getCurrencyList,
        getRateTypeList: _getRateTypeList,
        getCategoryList: _getCategoryList,
        getRateDefinitionList: _getRateDefinitionList,
        getTaxList: _getTaxList,
        getApiOperations: _getApiOperations,
        getAPIOperationRates: _getAPIOperationRates,
    };
}

module.exports = rateService();

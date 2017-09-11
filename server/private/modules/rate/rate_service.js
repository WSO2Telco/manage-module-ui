'use strict';

const boom = require('boom');
const Messages = require('../common/messages');
const rateRestService = require('./rate_rest_service');
const logger = require('../../config/logger');

logger.debugLevel = 'warn';

const validateAddRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        return true;
    }
    return false;
};

const validateAddCurrencyRequest = function (request) {
    let param = request.payload;
    if (!!param && param.currencyCode && param.currencyDescription) {
        return true;
    }
    return false;
};

const validateAddCategoryRequest = function (request) {
    let param = request.payload;
    if (!!param && param.categoryName && param.categoryCode && param.categoryDescription && param.createdBy) {
        return true;
    }
    return false;
};

function rateService() {


    let rateDefinitionResult;

    /**
     * Add new currency
     * @param request
     * @param callback
     * @private
     */
    let _addCurrency = function (request, callback) {

        let onSuccess = function (result) {
            callback(
                {
                    result: result,
                    success: true,
                    message: "New Currency Added Successfully"
                });
        };

        let onFailture = function (error) {
            callback(error);
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

        let onSuccess = function (addSubcategoryResult) {
            callback(
                {
                    addSubcategoryResult: addSubcategoryResult,
                    success: true,
                    message: "New Category Created Successfully"
                });
        };

        let onFailture = function (addSubCategoryError) {
            callback(addSubCategoryError);
        };

        if (validateAddCategoryRequest(request)) {
            rateRestService.invokeAddCategoryRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    /**
     * Add new tariff
     * @param request
     * @param callback
     * @private
     */
    let _addTariff = function (request, callback) {

        let onSuccess = function (addSubcategoryResult) {
            callback(
                {
                    addSubcategoryResult: addSubcategoryResult,
                    success: true,
                    message: "New Tariff Created Successfully"
                }
            );
        };

        let onFailture = function (addSubCategoryError) {
            callback(addSubCategoryError);
        };

        if (validateAddRequest(request)) {
            rateRestService.invokeAddTariffRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    /**
     * assign api operation rates
     * @param request
     * @param callback
     * @private
     */
    let _assignRates = function (request, callback) {

        let onSuccess = function (result) {
            callback(
                {
                    result: result,
                    success: true,
                    message: 'Rate Values Assigned Successfully'
                });
        };

        let onFailture = function (addSubCategoryError) {
            callback(addSubCategoryError);
        };

        if (validateAddRequest(request)) {
            if (request.params.operatorId != 'null') {
                rateRestService.invokeAssignRatesRest(request, request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'operator').then(onSuccess, onFailture);
            } else {
                rateRestService.invokeAssignRatesRest(request, request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'admin').then(onSuccess, onFailture);
            }
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
        let onSuccess = function (addSubcategoryResult) {
            callback(
                {
                    addSubcategoryResult: addSubcategoryResult,
                    success: true,
                    message: "Rate Card Created Successfully"
                });
        };

        let onFailture = function (addSubCategoryError) {
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
        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Tariff List'
            });
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
        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Currency List'
            });
        };

        rateRestService.invokeGetCurrencyListRest().then(onSuccess, onFailture);
    }

    let _getRateTypeList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Rate Type List'
            });
        };

        rateRestService.invokeGetRateTypeListRest().then(onSuccess, onFailture);
    }

    let _getCategoryList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Tariff List'
            });
        };

        rateRestService.invokeGetCategoryListRest().then(onSuccess, onFailture);
    }

    let _getRateDefinitionList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Rate Definition List'
            });
        };

        rateRestService.invokeGetRateDefinitionListRest().then(onSuccess, onFailture);
    }

    let _getTaxList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error: getResponseError,
                success: false,
                message: 'Error Loading Rate Tax List'
            });
        };

        rateRestService.invokeGetRateTaxListRest().then(onSuccess, onFailture);

    }

    let _getAPIOperationRates = function (request, callback) {

        let onSuccess = function (rateDefinitions) {
            rateDefinitionResult = rateDefinitions;
            if (request.params.operatorId != 'null') {
                rateRestService.invokeGetAPIOperationRatesRest(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'operator-assign').then(onAssignSuccess, onAssignFailture);
            } else {
                rateRestService.invokeGetAPIOperationRatesRest(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'admin-assign').then(onAssignSuccess, onAssignFailture);
            }
        };

        let onAssignSuccess = function (operationRates) {
            callback(
                {
                    source: rateDefinitionResult,
                    destination: operationRates,
                }
            );
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        let onAssignFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (request.params.operatorId != 'null') {
            rateRestService.invokeGetAPIOperationRatesRest(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'operator').then(onSuccess, onFailture);
        } else {
            rateRestService.invokeGetAPIOperationRatesRest(request.params.apiName, request.params.apiOperationId, request.params.operatorId, 'admin').then(onSuccess, onFailture);
        }
    }

    let _getApiOperations = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        rateRestService.invokeGetApiOperationsRest(request.params.api).then(onSuccess, onFailture);
    }

    return {
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

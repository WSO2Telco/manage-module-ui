'use strict';
const logger = require('../../config/logger');
const quotaCapRestService = require('./quotacap_rest_service');

logger.debugLevel = 'warn';


const validateGetAppsRequest = function (request) {
    let param = request.payload;
    if (!!param && param.id) {
        return true;
    }
    return false;
};

const validateGetQuotaLimitInfoRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        return true;
    }
    return false;
};

const validateAddNewQuotaLimitRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        return true;
    }
    return false;
};

const validateRemoveWhitelistRequest = function (request) {
    let param = request.payload;
    if (!!param && param.msisdn) {
        return true;
    }
    return false;
};

function quotaCapService() {

    let _getSubscribers = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        quotaCapRestService.invokeGetSubscribersRest(request).then(onSuccess, onFailture);

    };

    let _getOperatorOfsubscriber = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        quotaCapRestService.invokegetOperatorOfsubscriber(request).then(onSuccess, onFailture);

    };


    let _getApps = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateGetAppsRequest(request)) {
            quotaCapRestService.invokeGetAppsRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };


    let _getApis = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateGetAppsRequest(request)) {
            quotaCapRestService.invokeGetApisRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getQuotaLimitInfo = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateGetQuotaLimitInfoRequest(request)) {
            quotaCapRestService.invokeGetQoutalistRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getValidityPeriod = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateGetQuotaLimitInfoRequest(request)) {
            quotaCapRestService.invokegetValidityPeriodRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getOperatorList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        quotaCapRestService.invokegetOperatorListRest(request).then(onSuccess, onFailture);

    };


    let _addNewQuotaLimit = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateAddNewQuotaLimitRequest(request)) {
            quotaCapRestService.invokeAddNewQuotaLimit(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    return {
        getSubscribers: _getSubscribers,
        getApps: _getApps,
        getApis: _getApis,
        getQuotaLimitInfo: _getQuotaLimitInfo,
        addNewQuotaLimit: _addNewQuotaLimit,
        getValidityPeriod: _getValidityPeriod,
        getOperatorList: _getOperatorList,
        getOperatorOfsubscriber: _getOperatorOfsubscriber
    }
}

module.exports = quotaCapService();
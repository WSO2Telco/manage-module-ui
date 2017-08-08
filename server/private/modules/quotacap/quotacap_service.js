'use strict';
const logger = require('../../config/logger');
const quotaCapRestService = require('./quotacap_rest_service');

logger.debugLevel = 'warn';


const validateGetAppsRequest = function (request) {
    let param = request.payload;
    if (!!param && param.id) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateGetQuotaLimitInfoRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};


const validateAddNewWhitelistRequest = function (request) {
    let param = request.payload;
    if (!!param && param.appId && param.apiId && param.userID) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddNewQuotaLimitRequest = function (request) {
    let param = request.payload;
    if (!!param) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateRemoveWhitelistRequest = function (request) {
    let param = request.payload;
    if (!!param && param.msisdn) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

function quotaCapService() {

    let _getSubscribers = function (request, callback) {

        logger.log('INFO', "hit at whitelist get subscriber service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        quotaCapRestService.invokeGetSubscribersRest().then(onSuccess, onFailture);

    };


    let _getApps = function (request, callback) {

        logger.log('INFO', "hit at whitelist get apps service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateGetAppsRequest(request)) {
            quotaCapRestService.invokeGetAppsRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };


    let _getApis = function (request, callback) {

        logger.log('INFO', "hit at whitelist get apis service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateGetAppsRequest(request)) {
            quotaCapRestService.invokeGetApisRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getQuotaLimitInfo = function (request, callback) {

        logger.log('INFO', "hit at Quotaservice get getQuotaLimitInfo service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateGetQuotaLimitInfoRequest(request)) {
            quotaCapRestService.invokeGetQoutalistRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getWhitelist = function (request, callback) {

        logger.log('INFO', "hit at whitelist get whitelist service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        quotaCapRestService.invokeGetWhitelistRest().then(onSuccess, onFailture);

    };


    let _addNewQuotaLimit = function (request, callback) {

        logger.log('INFO', "hit at QuotaLimit add QuotaLimit service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateAddNewQuotaLimitRequest(request)) {
            quotaCapRestService.invokeAddNewQuotaLimit(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _removeFromWhitelist = function (request, callback) {

        logger.log('INFO', "hit at whitelist remove whitelist service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateRemoveWhitelistRequest(request)) {
            quotaCapRestService.invokeRemoveFromWhitelistRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    return {
        getSubscribers: _getSubscribers,
        getApps: _getApps,
        getApis: _getApis,
        getWhitelist: _getWhitelist,
        getQuotaLimitInfo: _getQuotaLimitInfo,
        addNewQuotaLimit: _addNewQuotaLimit,
        removeFromWhitelist: _removeFromWhitelist
    }
}

module.exports = quotaCapService();
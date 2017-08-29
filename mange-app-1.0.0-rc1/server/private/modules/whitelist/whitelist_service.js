'use strict';
const logger=require('../../config/logger');
const whiteListRestService = require('./whitelist_rest_service');

logger.debugLevel = 'warn';


const validateGetAppsRequest = function (request) {
    let param = request.payload;
    if (!!param && param.id) {
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

const validateRemoveWhitelistRequest = function (request) {
    let param = request.payload;
    if (!!param && param.msisdn) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

function whitelistService() {

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

        whiteListRestService.invokeGetSubscribersRest( ).then(onSuccess, onFailture);

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
            whiteListRestService.invokeGetAppsRest(request ).then(onSuccess, onFailture);
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
            whiteListRestService.invokeGetApisRest(request ).then(onSuccess, onFailture);
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

        whiteListRestService.invokeGetWhitelistRest( ).then(onSuccess, onFailture);

    };


    let _addNewWhitelist = function (request, callback) {

        logger.log('INFO', "hit at whitelist add whitelist service end point");

        request.server.log('info', 'REQUEST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        if (validateAddNewWhitelistRequest(request)) {
            whiteListRestService.invokeAddNewWhitelist(request ).then(onSuccess, onFailture);
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
            whiteListRestService.invokeRemoveFromWhitelistRest(request ).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    return {
        getSubscribers: _getSubscribers,
        getApps: _getApps,
        getApis: _getApis,
        getWhitelist: _getWhitelist,
        addNewWhitelist: _addNewWhitelist,
        removeFromWhitelist: _removeFromWhitelist
    }
}

module.exports = whitelistService();
'use strict';
const whiteListRestService = require('./whitelist_rest_service');



const validateGetAppsRequest = function (request) {
    let param = request.payload;
    if (!!param && param.id) {
        return true;
    }
    return false;
};


const validateAddNewWhitelistRequest = function (request) {
    let param = request.payload;
    if (!!param && param.appId && param.apiId && param.userID) {
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

function whitelistService() {

    let _getSubscribers = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        whiteListRestService.invokeGetSubscribersRest( ).then(onSuccess, onFailture);

    };


    let _getApps = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        if (validateGetAppsRequest(request)) {
            whiteListRestService.invokeGetAppsRest(request ).then(onSuccess, onFailture);
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
            whiteListRestService.invokeGetApisRest(request ).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _getWhitelist = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        whiteListRestService.invokeGetWhitelistRest( ).then(onSuccess, onFailture);

    };


    let _addNewWhitelist = function (request, callback) {
        
        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback({
                error:getResponseError,
                success: false,
                message: 'Error Adding New Whitelist'
            });
        };

        if (validateAddNewWhitelistRequest(request)) {
            whiteListRestService.invokeAddNewWhitelist(request ).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    let _removeFromWhitelist = function (request, callback) {
        
        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(
                {
                    error:getResponseError,
                    success: false,
                    message: 'Error Removing MSISDN From Whitelist'
                });
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
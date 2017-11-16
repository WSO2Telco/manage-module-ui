/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const logger = require('../../config/logger');
const blackListRestService = require('./blacklist_rest_service');
const boom = require('boom');
const Messages = require('../common/messages');
logger.debugLevel = 'warn';

const validateApiID = function (request) {
    let param = request.payload;
    if (!!param && param.apiId) {
        return true;
    }
    return false;
};

const validateAddBlackListNumbers = function (request) {
    let param = request.payload;
    if (!!param && param.apiID && param.apiName && param.userID && param.msisdnList) {
        return true;
    }
    return false;
};

function blacklistService() {

    let _getApiList = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            callback(getResponseError);
        };

        blackListRestService.invokeGetApiListRest(request).then(onSuccess, onFailture);

    };

    /**
     * Get The list of BlackLists Numbers
     * @param request
     * @param callback
     * @private
     */
    let _getBlackListNumbers = function (request, callback) {

        let onSuccess = function (getResponse) {
            callback(getResponse);
        };

        let onFailure = function (getResponseError) {
            callback(getResponseError);
        };

        blackListRestService.invokeGetBlackListNumberRest(request).then(onSuccess, onFailure);
    };

    /**
     * Remove BlackListed Number
     * @param request
     * @param callback
     * @private
     */
    let _removeBlackListNumber = function (request, callback) {

        let onSuccess = function (removeBlackListNumber) {
            callback(Object.assign({}, removeBlackListNumber));
        };

        let onFailture = function (removeBlackListNumberError) {
            callback(removeBlackListNumberError);
        };


        if (validateApiID(request)) {
            blackListRestService.invokeRemoveBlackListNumberRest(request, request.params.msisdn).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }


    };

    /**
     * Add New BlackList Numbers
     * @param request
     * @param callback
     * @private
     */
    let _addBlackListNumber = function (request, callback) {

        let onSuccess = function (result) {
            callback(
                {
                    result: result,
                    success: true,
                    message: "Number Blacklisted SuccessFully"
                });
        };

        let onFailture = function (error) {
            callback({
                error: error,
                success: false,
                message: 'Error in BlackList Service'
            });
        };

        if (validateAddBlackListNumbers(request)) {
            blackListRestService.invokeAddBlackListNumbersRest(request).then(onSuccess, onFailture);
        } else {
            callback({
                error: boom.badRequest(Messages['BAD_REQUEST']),
                success: false,
                message: 'Error in BlackList Service'
            });
        }


    };

    return {
        getApiList: _getApiList,
        getBlackListNumberList: _getBlackListNumbers,
        removeBlackListNumber: _removeBlackListNumber,
        addBlackNumbers: _addBlackListNumber
    }
}

module.exports = blacklistService();
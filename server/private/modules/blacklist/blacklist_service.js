/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const logger=require('../../config/logger');
const blackListRestService = require('./blacklist_rest_service');
const boom = require('boom');
const Messages = require('../common/messages');
logger.debugLevel = 'warn';

const validateGetNumbersRequest = function (request) {
    let param = request.payload;
    if (!!param && param.id) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};


const validateApiID = function (request) {
    let param = request.payload;
    if (!!param && param.apiId) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

const validateAddBlackListNumbers = function (request) {
    let param = request.payload;
    if (!!param && param.apiID && param.apiName && param.userID && param.msisdnList) {
        logger.log('INFO', 'REQUEST VALIDATED');
        return true;
    }
    return false;
};

function blacklistService() {

    let _getApiList = function (request, callback) {

        logger.log('INFO', "hit at blacklist service end point");

        request.server.log('info', 'GET API LIST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            console.log('here');
            callback(getResponse);
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'faliture');
            callback(getResponseError);
        };

        blackListRestService.invokeGetApiListRest( ).then(onSuccess, onFailture);

    };

    /**
     * Get The list of BlackLists Numbers
     * @param request
     * @param callback
     * @private
     */
    let _getBlackListNumbers = function (request, callback) {

        logger.log('INFO', 'hit at blacklist number service end point');

        request.server.log('info', 'GET Number Lists : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            callback(getResponse);
        };

        let onFailure = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

            blackListRestService.invokeGetBlackListNumberRest(request.params.id).then(onSuccess, onFailure);
    };

    /**
     * Remove BlackListed Number
     * @param request
     * @param callback
     * @private
     */
    let _removeBlackListNumber = function (request, callback) {

        logger.log('INFO', 'hit remove blackList number');

        request.server.log('info', 'Remove Blacklist Number :' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (removeBlackListNumber) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, removeBlackListNumber));
        };

        let onFailture = function (removeBlackListNumberError) {
            logger.log('ERROR', 'faliture');
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

        logger.log('INFO', 'hit Add blackList number');

        request.server.log('info', 'Remove Blacklist Number :' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (addBlackListNumber) {
            logger.log('INFO', 'success');
            callback(Object.assign({}, addBlackListNumber));
        };

        let onFailture = function (addBlackListNumberError) {
            logger.log('ERROR', 'faliture');
            callback(addBlackListNumberError);
        };

        if (validateAddBlackListNumbers(request)) {
            blackListRestService.invokeAddBlackListNumbersRest(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
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
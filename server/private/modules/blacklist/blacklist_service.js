/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const logger=require('../../config/logger');
const blackListRestService = require('./blacklist_rest_service');

logger.debugLevel = 'warn';

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
            console.log('here');
            callback(getResponse);
        };

        let onFailure = function (getResponseError) {
            logger.log('ERROR', 'failure');
            callback(getResponseError);
        };

        blackListRestService.invokeGetBlackListNumberRest( ).then(onSuccess, onFailure);

    };


    return {
        getApiList: _getApiList,
        getBlackListNumberList: _getBlackListNumbers
    }
}

module.exports = blacklistService();
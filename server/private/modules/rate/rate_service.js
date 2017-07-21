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

function rateService() {

    /**
     * Addd SubCategory Action
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
            rateRestService.Invoke(request).then(onSuccess, onFailture);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    //add more rate services here

    return {
        addSubcategory: _addSubcategory
    };
}

module.exports = rateService();

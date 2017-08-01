/**
 * Created by rajithk on 7/26/17.
 */
const Q = require('q');
const wreck = require('wreck');
const config = require('../../config/application_config');
const boom = require('boom');
const Messages = require('../common/messages');

/**
 * Rest for get api lists
 * @param request
 * @returns {Q.Promise<T>}
 * @private
 */
const _invokeGetApiListRest = function ( ) {

    console.log("blacklist rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'apis';
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
            // payload: request.payload
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if (error) {
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + JSON.stringify(payload));

    deferred.resolve(payload);
         }
    });
    return deferred.promise;
};

module.exports = {
    invokeGetApiListRest: _invokeGetApiListRest
};

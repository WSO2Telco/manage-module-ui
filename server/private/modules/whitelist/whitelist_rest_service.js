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
const _invokeGetSubscribersRest = function ( ) {

    console.log("whitelist get subscribers rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.apiSubscriberURL;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
        };
    };

    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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



const _invokeGetAppsRest = function (request) {

    console.log("whitelist get apps rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.apiAppsURL;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {},
            payload: request.payload
        };
    };

    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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


const _invokeGetApisRest = function (request) {

    console.log("whitelist get apis rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.apiApisURL;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {},
            payload: request.payload
        };
    };

    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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
    invokeGetSubscribersRest: _invokeGetSubscribersRest,
    invokeGetAppsRest: _invokeGetAppsRest,
    invokeGetApisRest: _invokeGetApisRest
};

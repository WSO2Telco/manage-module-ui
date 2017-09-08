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
const _invokeGetSubscribersRest = function () {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'subscribers';
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
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeGetAppsRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'apps';
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
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeGetApisRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'apis';
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
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeGetWhitelistRest = function () {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'GetWhiteList';
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
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

const _invokeAddNewWhitelist = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'Whitelist';
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
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

const _invokeRemoveFromWhitelistRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'RemoveFromWhiteList/' + request.payload.msisdn;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {},
        };
    };

    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

module.exports = {
    invokeGetSubscribersRest: _invokeGetSubscribersRest,
    invokeGetAppsRest: _invokeGetAppsRest,
    invokeGetApisRest: _invokeGetApisRest,
    invokeGetWhitelistRest: _invokeGetWhitelistRest,
    invokeAddNewWhitelist: _invokeAddNewWhitelist,
    invokeRemoveFromWhitelistRest: _invokeRemoveFromWhitelistRest
};

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
const _invokeGetSubscribersRest = function (operator) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'getSubscribersByOperator?operatorName=' + operator;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

const _invokegetOperatorOfsubscriber = function (subscriberID) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'getOperatorsBySubscriber?subscriberName=' + subscriberID;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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


const _invokegetOperatorListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'operators';
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {'Authorization': request.headers.authorization}
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeGetQoutalistRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'getQuotaLimitInfo';
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


const _invokegetValidityPeriodRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'checkIfDatesOverlap';
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


const _invokeAddNewQuotaLimit = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'applyQuotaLimit';
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
    invokegetOperatorOfsubscriber: _invokegetOperatorOfsubscriber,
    invokeGetAppsRest: _invokeGetAppsRest,
    invokeGetApisRest: _invokeGetApisRest,
    invokeAddNewQuotaLimit: _invokeAddNewQuotaLimit,
    invokeRemoveFromWhitelistRest: _invokeRemoveFromWhitelistRest,
    invokeGetQoutalistRest: _invokeGetQoutalistRest,
    invokegetValidityPeriodRest: _invokegetValidityPeriodRest,
    invokegetOperatorListRest: _invokegetOperatorListRest
};

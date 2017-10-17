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
const _invokeGetSubscribersRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'getSubscribersByOperator?operatorName=' + request.params.operator;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {'Authorization': request.headers.authorization}
        };
    };

    return _invokeGETRequest(deferred, getEndpointUrl(), getRequestOptions());
};

const _invokegetOperatorOfsubscriber = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.quotaServiceUrl + 'getOperatorsBySubscriber?subscriberName=' + request.params.subscriberID;
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {'Authorization': request.headers.authorization}
        };
    };

    return _invokeGETRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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

    return _invokeGETRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
};

const _invokePOSTRequest = function (deferred, endpointUrl, requestOptions) {

    wreck.post(endpointUrl, requestOptions, (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            if (res.statusCode == 200) {
                deferred.resolve(payload);
            } else {
                deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
            }
        }
    });

    return deferred.promise;
}

const _invokeGETRequest = function (deferred, endpointUrl, requestOptions) {

    wreck.get(endpointUrl, requestOptions, (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            if (res.statusCode == 200) {
                deferred.resolve(payload);
            } else {
                deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
            }
        }
    });

    return deferred.promise;
}


module.exports = {
    invokeGetSubscribersRest: _invokeGetSubscribersRest,
    invokegetOperatorOfsubscriber: _invokegetOperatorOfsubscriber,
    invokeGetAppsRest: _invokeGetAppsRest,
    invokeGetApisRest: _invokeGetApisRest,
    invokeAddNewQuotaLimit: _invokeAddNewQuotaLimit,
    invokeGetQoutalistRest: _invokeGetQoutalistRest,
    invokegetValidityPeriodRest: _invokegetValidityPeriodRest,
    invokegetOperatorListRest: _invokegetOperatorListRest
};

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
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + JSON.stringify(payload));

            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokegetOperatorListRest = function ( ) {

    console.log("get operator list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'operators';
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
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : ");

            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeGetQoutalistRest = function (request) {

    console.log("Quota get quota rest end point call")

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
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + JSON.stringify(payload));
            deferred.resolve(payload);
}
});
    return deferred.promise;
};


const _invokegetValidityPeriodRest = function (request) {

    console.log("Quota validity end point call>>>>>" + JSON.stringify(request.payload));

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
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + JSON.stringify(payload));
    deferred.resolve(payload);
}
});
    return deferred.promise;
};







const _invokeAddNewQuotaLimit = function (request) {

    console.log("QuotaLimit add QuotaLimit rest end point call")

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
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + JSON.stringify(payload));

            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

const _invokeRemoveFromWhitelistRest = function (request) {

    console.log("whitelist remove whitelist rest end point call")

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
    invokeGetApisRest: _invokeGetApisRest,
    invokeAddNewQuotaLimit: _invokeAddNewQuotaLimit,
    invokeRemoveFromWhitelistRest: _invokeRemoveFromWhitelistRest,
    invokeGetQoutalistRest: _invokeGetQoutalistRest,
    invokegetValidityPeriodRest: _invokegetValidityPeriodRest,
    invokegetOperatorListRest: _invokegetOperatorListRest
};

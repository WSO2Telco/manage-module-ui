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
const _invokeGetApiListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'apis';
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

const _invokeGetBlackListNumbers = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'GetBlacklistPerApi/' + request.params.id;
    }

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


const _invokeRemoveBlackListNumber = function (request, msisdn) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'RemoveFromBlacklist/' + msisdn;
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {'Authorization': request.headers.authorization},
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(msisdn), getRequestOptions());
};

/**
 *  rest request to add new BlackList Number/s
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddNewBlackListNumber = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.blacklistWhitelistServiceURL + 'Blacklist';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {'Authorization': request.headers.authorization},
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
            console.log(res.statusCode);
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
    invokeGetApiListRest: _invokeGetApiListRest,
    invokeGetBlackListNumberRest: _invokeGetBlackListNumbers,
    invokeRemoveBlackListNumberRest: _invokeRemoveBlackListNumber,
    invokeAddBlackListNumbersRest: _invokeAddNewBlackListNumber
};

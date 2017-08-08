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

const _invokeGetBlackListNumbers = function (id) {

    console.log("blacklist Number rest endpoint rk");

    let deferred = Q.defer();

    let getEndpointUrl = function (id) {
        console.log(config.removeBlacklistURL + '/' + id);
        return config.blacklistPerApiURL + '/' + id ;
    }

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
        };
    };

    wreck.post(getEndpointUrl(id), getRequestOptions(), (error, res, payload) => {
       if (error) {
           console.log("response failed");
           deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
       } else {
            console.log("response success : " + payload);
    deferred.resolve(payload);

     }
   });

    return deferred.promise;
};


const _invokeRemoveBlackListNumber = function (request, msisdn) {

    console.log("blacklist Number rest endpoint");

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.removeBlacklistURL + '/' +msisdn;
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {},
            payload: request.payload
        };
    };

    wreck.post(getEndpointUrl(msisdn), getRequestOptions(), (error, res, payload) => {
        if (error) {
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            console.log("response success : " + payload);
            deferred.resolve(payload);

}
});

    return deferred.promise;

};

/**
 *  rest request to add new BlackList Number/s
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddNewBlackListNumber = function (request) {

    console.log("ADD New BlackList Number Endpoint ");

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.addNewToBlacklistURL;
    };

    let getRequestOptions = function () {
        return {
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
            console.log("response success : " + payload);
    deferred.resolve(payload);

    }
});
    return deferred.promise;

};


module.exports = {
    invokeGetApiListRest: _invokeGetApiListRest,
    invokeGetBlackListNumberRest: _invokeGetBlackListNumbers,
    invokeRemoveBlackListNumberRest: _invokeRemoveBlackListNumber,
    invokeAddBlackListNumbersRest: _invokeAddNewBlackListNumber
};

/**
 * Created by manoj on 8/15/17.
 */
const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');

function invokeOperationRatesRest(apiName) {
    let deferred = Q.defer();

    let getEndpointUrl = function (apiName) {
        return config.rateServiceURL + 'apis/' + apiName + '/operations/operationrates';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {}
        };
    };

    console.log("here==========");

    wreck.get(getEndpointUrl(apiName), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
}

module.exports = {
    Invoke: invokeOperationRatesRest
};


/**
 * Created by manoj on 8/15/17.
 */
const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');

function _invokeCreditPlanRest(request) {
    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.creditControlServiceURL + 'getCreditLimitInfo';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {}
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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
    invokeCreditPlanRest: _invokeCreditPlanRest
};


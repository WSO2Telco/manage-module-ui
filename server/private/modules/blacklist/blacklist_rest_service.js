/**
 * Created by rajithk on 7/26/17.
 */
const Q = require('q');
const wreck = require('wreck');

/**
 * Rest for get api lists
 * @param request
 * @returns {Q.Promise<T>}
 * @private
 */
const _invokeGetApiListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.apiListURL;
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
            console.log("response success");
    deferred.resolve(payload);
         }
    });
    return deferred.promise;
};

module.exports = {
    invokeGetApiListRest: _invokeGetApiListRest
};

const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');


const _invokeAddSubCategoryRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function (taskId) {
        return config.rateServiceURL;
    };

    let getRequestOptions = function () {
        return {
            json : true,
            headers: { },
            payload: request.payload
        };
    };


    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if(error){
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        }else{
            console.log("response success");
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

const _invokeAddCurrencyRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function (taskId) {
        return config.rateServiceURL;
    };

    let getRequestOptions = function () {
        return {
            json : true,
            headers: { },
            payload: request.payload
        };
    };


    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
        if(error){
            console.log("response failed");
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        }else{
            console.log("response success");
    deferred.resolve(payload);
}
});
    return deferred.promise;
};
module.exports = {
    invokeAddSubCategoryRest : _invokeAddSubCategoryRest,
    invokeAddCurrencyRest:_invokeAddCurrencyRest

};

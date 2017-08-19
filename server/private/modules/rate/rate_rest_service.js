const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');


/**
 * rest request to add category
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddCategoryRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'categories';
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
            console.log("response success");
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


const _invokeAddTariffRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'tariffs';
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
            console.log("response success");
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


/**
 * rest request to add a new sub category
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddRateCategoryRest = function (request, id) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratedefinitions/' + id +'/ratecategories';
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
            console.log("response success");
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};

/**
 * rest request to add new currency
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddCurrencyRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'currencies';
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
            console.log("response success");
            deferred.resolve(payload);
        }
    });
    return deferred.promise;
};


/**
 * rest request to add new rate card
 * @param request
 * @returns {Promise<T>}
 * @private
 */
const _invokeAddRateCardRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratecards';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {},
            payload: request.payload
        };
    };

    console.log('$$$$'+JSON.stringify(request.payload));


    wreck.post(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
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

const _invokeGetTariffListRest = function ( ) {

    console.log("rate get tariff list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'tariffs';
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

const _invokeGetCurrencyListRest = function ( ) {

    console.log("rate get tariff list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'currencies';
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

const _invokeGetRateTypeListRest = function ( ) {

    console.log("rate get rate type list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratetypes';
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

const _invokeGetCategoryListRest = function ( ) {

    console.log("rate get category list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'categories';
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

const _invokeGetRateDefinitionListRest = function ( ) {

    console.log("rate get rate definition list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratedefinitions';
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


const _invokeGetRateTaxListRest = function () {

    console.log("rate get rate Taxes list rest end point call")

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'taxes';
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json: true,
            headers: {}
        };
    };

    wreck.get(getEndpointUrl(), getRequestOptions(), (error, res, payload) => {
            if(error) {
                console.log("response failed");
                deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
            } else {
            console.log("response success : "+ payload);
            deferred.resolve(payload);
        }
    });

    return deferred.promise;

};

module.exports = {
    invokeAddCategoryRest: _invokeAddCategoryRest,
    invokeAddRateCategoryRest: _invokeAddRateCategoryRest,
    invokeAddCurrencyRest: _invokeAddCurrencyRest,
    invokeAddRateCardRest: _invokeAddRateCardRest,
    invokeAddTariffRest: _invokeAddTariffRest,
    invokeGetTariffListRest: _invokeGetTariffListRest,
    invokeGetCurrencyListRest: _invokeGetCurrencyListRest,
    invokeGetRateTypeListRest: _invokeGetRateTypeListRest,
    invokeGetCategoryListRest: _invokeGetCategoryListRest,
    invokeGetRateDefinitionListRest: _invokeGetRateDefinitionListRest,
    invokeGetRateTaxListRest: _invokeGetRateTaxListRest
};

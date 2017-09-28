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
            headers: {
                'Authorization': request.headers.authorization,
                'Content-Type': request.headers.content-type
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
};


const _invokeAddTariffRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'tariffs';
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {
                'Authorization': request.headers.authorization,
                'Content-Type': request.headers.content-type
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization,
                'Content-Type': request.headers.content-type
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
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
            headers: {
                'Authorization': request.headers.authorization,
                'Content-Type': request.headers.content-type
            },
            payload: request.payload
        };
    };

    return _invokePOSTRequest(deferred, getEndpointUrl(), getRequestOptions());
};

const _invokeAssignRatesRest = function (request, type) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        switch (type) {
            case 'admin':
                return config.rateServiceURL + 'apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/operationrates';
                break;
            case 'operator':
                return config.rateServiceURL + 'operators/' + request.params.operatorId + '/apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/operatorrates';
                break;
        }
    };

    let getRequestOptions = function () {
        return {
            json: true,
            headers: {
                'Authorization': request.headers.authorization,
                'Content-Type': request.headers.content-type
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
            if (res.statusCode == 201) {
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

const _invokeGetTariffListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'tariffs';
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

const _invokeGetCurrencyListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'currencies';
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

const _invokeGetRateTypeListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratetypes';
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

const _invokeGetCategoryListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'categories';
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

const _invokeGetRateDefinitionListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratedefinitions';
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

const _invokeGetRateCardsRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'ratecards?schema=full';
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

const _invokeGetRateTaxListRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'taxes';
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

const _invokeGetApiOperationsRest = function (request) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        return config.rateServiceURL + 'apis/' + request.params.api + '/operations';
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

const _invokeGetAPIOperationRatesRest = function (request, type) {

    let deferred = Q.defer();

    let getEndpointUrl = function () {
        switch (type) {
            case 'admin':
                return config.rateServiceURL + 'apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/ratedefinitions';
                break;
            case 'operator':
                return config.rateServiceURL + 'operators/' + request.params.operatorId + '/apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/ratedefinitions';
                break;
            case 'admin-assign':
                return config.rateServiceURL + 'apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/operationrates';
                break;
            case 'operator-assign':
                return config.rateServiceURL + 'operators/' + request.params.operatorId + '/apis/' + request.params.apiName + '/operations/' + request.params.apiOperationId + '/operatorrates';
                break;
        }

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

module.exports = {
    invokeAddCategoryRest: _invokeAddCategoryRest,
    invokeAddCurrencyRest: _invokeAddCurrencyRest,
    invokeAddRateCardRest: _invokeAddRateCardRest,
    invokeAddTariffRest: _invokeAddTariffRest,
    invokeGetTariffListRest: _invokeGetTariffListRest,
    invokeGetCurrencyListRest: _invokeGetCurrencyListRest,
    invokeGetRateTypeListRest: _invokeGetRateTypeListRest,
    invokeGetCategoryListRest: _invokeGetCategoryListRest,
    invokeGetRateDefinitionListRest: _invokeGetRateDefinitionListRest,
    invokeGetRateCardsRest: _invokeGetRateCardsRest,
    invokeGetRateTaxListRest: _invokeGetRateTaxListRest,
    invokeGetAPIOperationRatesRest: _invokeGetAPIOperationRatesRest,
    invokeGetApiOperationsRest: _invokeGetApiOperationsRest,
    invokeAssignRatesRest: _invokeAssignRatesRest
};

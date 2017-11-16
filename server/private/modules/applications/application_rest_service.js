const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');

function _getOparatorApprovedApps(applicationIds, request) {
    let deferred = Q.defer();

    let getEndpointUrl = function (applicationIds) {

        let x= config.reportingUrl + '/operator/approved/apps?appids='+applicationIds;
        console.log('URL ---------------------> ' + x);
        return x;
    };

    let getRequestOptions = function () {
        console.log('getting getRequestOptions ----------------------------->' + request.headers.authorization);
        return {
            json: true,
            headers: {'Authorization': request.headers.authorization}
        };
    };

    wreck.get(getEndpointUrl(applicationIds), getRequestOptions(), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            if(payload == null){
                deferred.resolve({});
            } else{
                deferred.resolve(payload);
            }
        }
    });
    return deferred.promise;
}



module.exports = {
    invokeOparatorApprovedApps: _getOparatorApprovedApps

};


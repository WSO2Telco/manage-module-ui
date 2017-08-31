const wreck = require('wreck');
const parseString = require('xml2js').parseString;
const boom = require('boom');
const config = require('../../config/application_config');
const Messages = require('../common/messages');
const Q = require('q');

const getLoginRequest = function (params) {
    return '<mgt:getUserProfile xmlns:mgt="http://mgt.profile.user.identity.carbon.wso2.org">'+
        '<mgt:username>' +params +'</mgt:username>'
        '<mgt:profileName>default</mgt:profileName>'
    '</mgt:getUserProfile>';
};


const invokeUserDetailWebService = function (userName) {
    let deferred = Q.defer();

    let authRequestOptions = {
        rejectUnauthorized: false,
        payload: getLoginRequest(userName)
    };

    wreck.post(config.authServerURL+'/UserProfileMgtService', authRequestOptions, (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SOAP_CALL_FAIL']));
        } else {

            parseString(payload, function (err, result) {
                if (!!err) {
                    deferred.reject(boom.unauthorized(Messages['INVALID_LOGIN']));
                }

                console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzz");

                try {
                    let isSuccess = result['soapenv:Envelope']['soapenv:Body'][0]['ns:loginResponse'][0]['ns:return'][0];
                    if (JSON.parse(isSuccess)) {
                        deferred.resolve({isLoggedIn: true});
                    } else {
                        deferred.reject(boom.unauthorized(Messages['INVALID_LOGIN']));
                    }
                } catch (e) {
                    deferred.reject(boom.unauthorized(Messages['INVALID_LOGIN']));
                }
            });
        }
    });

    return deferred.promise;
};

module.exports = {
    Invoke  : invokeUserDetailWebService
};

'use strict';

const boom = require('boom');
const Messages = require('../common/messages');
const loginWebService = require('./login_webservice');
const roleWebService = require('./role_webservice');
const userDetailWebService = require('./userdetail_webservice');
const config = require('../../config/application_config');

const validateLoginRequest = function (request) {
    let param = request.payload;
    if (!!param && param.userName && param.password) {
        return true;
    }
    return false;
};

function authenticationService() {

    /**
     * Do Login Action
     * @param request
     * @param callback
     * @private
     */
    let _doLogin = function (request, callback) {

        let loginResult;

        let onRoleSuccess = function (roleResults) {

            let status = false;
            let isAdmin = false;
            let operator = '';

            for (const entry of roleResults.roles) {
                for (const role of config.allowedRoles) {
                    if (entry == role) {
                        status = true;
                    }
                }

            }

            /** this for loop decide the operator field in the session storage*/
            for (const entry of roleResults.roles) {
                if (!isAdmin) {
                    if (entry == 'manage-app-admin') {
                        operator = '';
                        isAdmin = true;
                    }
                }else {
                    break;
                }
            }

            if(!isAdmin){
                for (const entry of roleResults.roles) {
                    for(const item of config.allowedOperators ){
                        const splited = item.split(':');
                        if (entry == splited[0]) {
                            operator = splited[1];
                            break;
                        }
                    }
                }
            }


            if (status) {
                callback(Object.assign({}, loginResult, roleResults, {
                    userName: request.payload.userName,
                    token: new Buffer(request.payload.userName+':'+ request.payload.password).toString('base64'),
                    isAdmin: isAdmin,
                    operator: operator,
                    success: true,
                    message: "user verified successfully"
                }));
            } else {
                callback(Object.assign({
                    userName: request.payload.userName,
                    success: false,
                    message: 'user do not have privilege to login'
                }));
            }

        };

        let onRoleError = function (roleError) {
            callback(roleError);
        };

        let onLoginSuccess = function (_loginResult) {
            loginResult = _loginResult;
            roleWebService.Invoke(request.payload.userName).then(onRoleSuccess, onRoleError);
        };

        let onLoginFailed = function (loginError) {
            callback(loginError);
        };

        if (validateLoginRequest(request)) {
            loginWebService.Invoke(request).then(onLoginSuccess, onLoginFailed);
        } else {
            callback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    };

    /**
     * Do Logout Action
     * @param request
     * @param callback
     * @private
     */
    let _doLogout = function (request, callback) {
        callback(_logoutLogic(request));
    };

    /**
     * Get details of the user
     * @param request
     * @param callback
     * @private
     */
    let _getUserDetails = function (request, callback) {

        let onSuccess = function (result) {
            callback(result);
        };

        let onFailed = function (error) {
            callback(error);
        };

        if (request.params.userName) {
            userDetailWebService.Invoke(request.params.userName).then(onSuccess, onFailed);
        } else {
            allback(boom.badRequest(Messages['BAD_REQUEST']));
        }
    }


    return {
        doLogin: _doLogin,
        doLogout: _doLogout,
        getUserDetails: _getUserDetails
    };
}

module.exports = authenticationService();

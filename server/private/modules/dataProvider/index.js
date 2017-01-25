'use strict';

const authClient = require('./soap_client')

exports.register = function (server, options, next) {

  const _doLogin = function (request,callback) {
    authClient.doLogin();
  };

  server.expose({
    doLogin : _doLogin
  });
  return next();
};

exports.register.attributes = {
  name: 'dataProvider',
  version: '1.0.0'
};

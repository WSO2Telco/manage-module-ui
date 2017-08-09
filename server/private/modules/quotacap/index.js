/**
 * Created by sahanK on 5/08/17.
 */
'use strict';

const authenticationRoutes = require('./routes.js');

exports.register = function (server, options, next) {
    server.route(authenticationRoutes);
    return next();
};

exports.register.attributes = {
    name: 'quotacap',
    version: '1.0.0'
};

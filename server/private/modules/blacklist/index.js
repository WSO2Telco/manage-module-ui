/**
 * Created by rajithk on 7/26/17.
 */
'use strict';

const authenticationRoutes = require('./routes.js');

exports.register = function (server, options, next) {
    server.route(authenticationRoutes);
    return next();
};

exports.register.attributes = {
    name: 'blacklist',
    version: '1.0.0'
};

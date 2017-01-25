'use strict';

const subscriptionRoutes = require('./routes.js');

exports.register = function (server, options, next) {
   // server.route(subscriptionRoutes);
    return next();
};

exports.register.attributes = {
    name: 'subscriptions',
    version: '1.0.0'
};

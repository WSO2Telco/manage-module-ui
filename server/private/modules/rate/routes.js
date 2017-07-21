'use strict';
const rateService = require('./rate_service');

module.exports = [
  {
    method: 'POST',
    path: '/api/rate/addsubcategory',
    handler: rateService.addSubcategory
  },
    {
        method: 'POST',
        path: '/api/rate/addcurrency',
        handler: rateService.addCurrency
    }

];

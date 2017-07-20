'use strict';
const rateService = require('./rate_service');

module.exports = [
  {
    method: 'POST',
    path: '/api/rate/addsubcategory',
    handler: rateService.addSubcategory
  }

];

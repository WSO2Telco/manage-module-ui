const ApplicationService = require('./application_service');

module.exports = [
  {
    method: 'POST',
    path: '/api/applications/search',
    handler: ApplicationService.searchApplicationsForApproval,
  },
  {
    method:'POST',
    path : '/api/applications/statistics',
    handler : ApplicationService.getApplicationStatistics
  }

];

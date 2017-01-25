const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const applicationREST = require('./application_tasks_rest_service');
const applicationDetailsREST = require('./application_details_rest_service');


/**
 * Search Applications for Approval
 * @param request
 * @param reply
 * @private
 */
const _getApplications = function (request, reply) {

  let appTaskResult;

  let validateApplicationRequest = function (request) {
    let param = request.payload;
    if (param &&
      param.processType &&
      (param.processType == 'APPLICATION_CREATION' || param.processType == 'SUBSCRIPTION_CREATION') &&
      (param.candidateGroups || param.assignee)) {
      return true;
    } else {
      return false;
    }
  };

  let responseAdaptor = function (appTaskResult, appDetailsResult) {
    let adapted = appTaskResult.map((task, index) => {
      let details = appDetailsResult[index].reduce((pre, curr) => {
        pre[curr.name] = curr.value;
        return pre;
      }, {});

      return {
        id: task.id,
        assignee: task.assignee,
        createTime: task.createTime,
        taskDescription: task.description,
        applicationId: details['applicationId'] || '',
        applicationName: details['applicationName'] || '',
        applicationDescription: details['description'] || details['applicationDescription'] || '',
        operators: details['operators'],
        tier: details['tier'],
        tiersStr: details['tiersStr'],
        userName: details['userName'],
        apiVersion: details['apiVersion'],
        apiContext: details['apiContext'],
        subscriber: details['subscriber']
      }
    });
    return adapted;
  };

  let onAppDetailSuccess = function (appsDetails) {
    reply(responseAdaptor(appTaskResult, appsDetails));
  };

  let onAppDetailsError = function (appDetailsError) {
    reply(appDetailsError);
  };


  let onApplicationSuccess = function (applicationTasksResult) {
    let appDetailsPromises;
    if (applicationTasksResult && applicationTasksResult.data) {
      appTaskResult = applicationTasksResult.data;
      appDetailsPromises = applicationTasksResult.data.map((appTask) => {
        return applicationDetailsREST.Invoke(appTask.id);
      });

      Q.all(appDetailsPromises).then(onAppDetailSuccess, onAppDetailsError);

    } else {
      reply(boom.badImplementation(Messages['INTERNAL_SERVER_ERROR']));
    }
  };

  let onApplicationError = function (appError) {
    reply(appError);
  };

  if (validateApplicationRequest(request)) {
    applicationREST.Invoke(request.payload).then(onApplicationSuccess, onApplicationError);
  } else {
    reply(boom.badRequest(Messages['BAD_REQUEST']));
  }
};


/**
 * Get Application and Application Subscription statistics
 * @param request
 * @param reply
 * @private
 */
const _getAppStat = function (request, reply) {
  let param = request.payload;
  let promises = [];

  let requestValidator = function (request) {
    let data = request.payload;
    if (data && data.assignee && data.candidateGroups) {
      return true;
    } else {
      return false;
    }
  };

  let responseAdaptor = function (result) {
    let adapted = result.reduce((acc, curr, index) => {
      switch (index) {
        case 0 : {
          acc['appCreationsForUser'] = curr.total;
          break;
        }
        case 1 : {
          acc['appCreationsForGroup'] = curr.total;
          acc['totalAppCreations'] = curr.total + acc['appCreationsForUser'];
          break;
        }
        case 2 : {
          acc['subCreationsForUser'] = curr.total;
          break;
        }
        case 3 : {
          acc['subCreationsForGroup'] = curr.total;
          acc['totalSubCreations'] = curr.total + acc['subCreationsForUser'];
          break;
        }
      }
      return acc;
    }, {});
    return adapted;
  };

  let onSuccess = function (results) {
    reply(responseAdaptor(results));
  };

  let onError = function (error) {
    reply(error);
  };


  if (!requestValidator(request)) {
    reply(boom.badRequest(Messages['BAD_REQUEST']));
  }

  //Application Creations for user
  promises.push(applicationREST.Invoke({
    assignee: param.assignee,
    candidateGroups: null,
    processType: 'APPLICATION_CREATION'
  }));

  //Application Creations for Group
  promises.push(applicationREST.Invoke({
    assignee: null,
    candidateGroups: param.candidateGroups,
    processType: 'APPLICATION_CREATION'
  }));

  //Subscription Creations for User
  promises.push(applicationREST.Invoke(
    {
      assignee: param.assignee,
      candidateGroups: null,
      processType: 'SUBSCRIPTION_CREATION'
    }));

  //Subscription Creations for Group
  promises.push(applicationREST.Invoke(
    {
      assignee: null,
      candidateGroups: param.candidateGroups,
      processType: 'SUBSCRIPTION_CREATION'
    }));

  Q.all(promises).then(onSuccess, onError);

};


function applicationService() {
  return {
    searchApplicationsForApproval: _getApplications,
    getApplicationStatistics: _getAppStat
  };
}

module.exports = applicationService();

const Q = require('q');
const moment = require('moment');
const boom = require('boom');
const Messages = require('../common/messages');
const applicationREST = require('./application_tasks_rest_service');
const applicationDetailsREST = require('./application_details_rest_service');
const applicationAssignREST = require('./application_assign_rest_service');
const applicationCompleteRest = require('./application_task_complete_rest_service');
const subscriptionCompleteRest = require('./subscription_task_complete_rest_service');
const applicationHistoryREST = require('./application_history_rest_service');
const operationRatesREST = require('./operation_rates_rest_service');
const creditPlanREST = require('./credit_plan_rest_service');
const APP_CONSTANT = require('./appication_const');


/**
 * Search Applications for Approval
 * @param request
 * @param reply
 * @private
 */
const _getApplications = function (request, reply) {

    let appTaskResult;
    let appsDetailsResult;

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

    let responseAdaptor = function (appTaskResult, appDetailsResult, operationReatesDetails) {
        let adapted = {
            applicationTasks: [],
            metadata: {
                order: appTaskResult.order,
                size: appTaskResult.size,
                sort: appTaskResult.sort,
                start: appTaskResult.start,
                total: appTaskResult.total
            }
        };

        if (appTaskResult && appTaskResult.data) {

            adapted.applicationTasks = appTaskResult.data.map((task, index) => {

                let details = appDetailsResult[index].reduce((pre, curr) => {
                    pre[curr.name] = curr.value;
                    return pre;
                }, {});


                let relevantRates = [];

                if (operationReatesDetails && operationReatesDetails[index].api) {

                    let operationRates = operationReatesDetails[index].api.operations;
                    let count = 0;
                    for (const entry of operationRates) {

                        let count2 = 0;
                        let rateDefinitions = []
                        for (const entry2 of entry.rates) {

                            rateDefinitions[count2] = {
                                rateDefId: entry2.operationRateId,
                                rateDefName: entry2.rateDefName,
                                rateDefDescription: entry2.rateDefDescription
                            }
                            count2++;
                        }
                        relevantRates[count] = {
                            apiOperation: entry.apiOperationName,
                            rateDefinitions: rateDefinitions
                        };


                        count++;
                    }
                }


                let moCreated;
                let isValidDate = false;
                if (!!task.createTime) {
                    moCreated = moment(task.createTime);
                    isValidDate = moCreated.isValid();
                }

                let getTiers = (tierString) => tierString.split(',').filter((item) => !!item);


                return {
                    id: task.id,
                    assignee: task.assignee,
                    apiName: details['apiName'] || '',
                    createTime: {
                        date: (isValidDate && moCreated.format('DD-MMM-YYYY') ) || '',
                        time: (isValidDate && moCreated.format('HH:mm:ss') ) || '',
                        offset: (isValidDate && moCreated.format('Z') ) || '',
                        unformatted: task.createTime
                    },
                    taskDescription: task.description,
                    applicationId: details['applicationId'] || '',
                    applicationName: details['applicationName'] || '',
                    applicationDescription: details['description'] || details['applicationDescription'] || '',
                    operators: details['operators'],
                    tier: details['tier'] || details['tierName'],
                    tiersStr: getTiers(details['tiersStr'] || details['apiTiers']),
                    userName: details['userName'],
                    apiVersion: details['apiVersion'],
                    apiContext: details['apiContext'],
                    subscriber: details['subscriber'],
                    relevantRates: relevantRates,
                    selectedRate: '',
                    creditPlan: ''
                }
            });
        }

        return adapted;
    };

    let onOperationReatesSuccess = function (operationReatesDetails) {
        reply(responseAdaptor(appTaskResult, appsDetailsResult, operationReatesDetails));
    };

    let onOperationReatesError = function (operationReatesError) {
        reply(operationReatesError);
    };

    let onAppDetailSuccess = function (appsDetails) {
        let OperationReatesPromises;
        if (appsDetails) {
            appsDetailsResult = appsDetails;
            OperationReatesPromises = appsDetails.map((appDetail, index) => {
                let details = appsDetails[index].reduce((pre, curr) => {
                    pre[curr.name] = curr.value;
                    return pre;
                }, {});


                if (details['apiName']) {
                    if (request.payload.isAdmin) {
                        return operationRatesREST.invokeOperationRatesRestAdmin(details['apiName'], request);
                    } else {
                        return operationRatesREST.invokeOperationRatesRest(details['apiName'], request);
                    }
                } else {
                    reply(responseAdaptor(appTaskResult, appsDetails, null));
                }
            });

            Q.all(OperationReatesPromises).then(onOperationReatesSuccess, onOperationReatesError);

        } else {
            reply(boom.badImplementation(Messages['INTERNAL_SERVER_ERROR']));
        }


    };


    let onAppDetailsError = function (appDetailsError) {
        reply(appDetailsError);
    };


    let onApplicationSuccess = function (applicationTasksResult) {
        let appDetailsPromises;
        if (applicationTasksResult && applicationTasksResult.data) {
            appTaskResult = applicationTasksResult;
            appDetailsPromises = applicationTasksResult.data.map((appTask) => {
                return applicationDetailsREST.Invoke(appTask.id, request);
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
        applicationREST.Invoke(request).then(onApplicationSuccess, onApplicationError);
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


    if (requestValidator(request)) {
        /**Application Creations for user */
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
    } else {
        reply(boom.badRequest(Messages['BAD_REQUEST']));
    }
};

/**
 * Assign Application Task to User
 * @private
 */
const _assignApplicationTaskToUser = function (request, reply) {

    let validateRequest = function (request) {
        let data = request.payload;
        if (data && data.assignee && data.taskId) {
            return true;
        }
        return false;
    };

    let onAssignSuccess = function (result) {
        reply(result);
    };

    let onAssignFail = function (error) {
        reply(error);
    };

    if (validateRequest(request)) {
        applicationAssignREST.Invoke(request).then(onAssignSuccess, onAssignFail);
    } else {
        reply(boom.badRequest(Messages['BAD_REQUEST']));
    }


};


/**
 * Approve Application Creation task handler
 * @param request
 * @param reply
 * @private
 */
const _approveApplicationCreation = function (request, reply) {

    let validateRequest = function (request) {
        let data = request.payload;
        if (data && data.taskId && data.selectedTier && data.status) {
            return true;
        }
        return false;
    };

    let onApproveSuccess = function (result) {
        reply(result);
    };

    let onApproveError = function (error) {
        reply(error);
    };

    if (validateRequest(request)) {

        let param = request.payload;

        if (param.role) {
            /** if hub admin */
            param.adminApprovalLevel = APP_CONSTANT.APPROVAL_TYPES.HUB_ADMIN_APPROVAL;
            applicationCompleteRest.invokeApplicationCompleteTask(request).then(onApproveSuccess, onApproveError);
        } else {
            /** if operator admin */
            param.adminApprovalLevel = APP_CONSTANT.APPROVAL_TYPES.OPERATOR_ADMIN_APPROVAL;
            param.selectedTier = null;
            applicationCompleteRest.invokeApplicationCompleteTask(request).then(onApproveSuccess, onApproveError);
        }

    } else {
        reply(boom.badRequest(Messages['BAD_REQUEST']));
    }


};

/**
 * Approve Subscriptioin creation task handler
 * @private
 */
const _approveSubscriptionCreation = function (request, reply) {
    let validateRequest = function (request) {
        let data = request.payload;
        if (data && data.taskId && data.selectedTier && data.status) {
            return true;
        }
        return false;
    };

    let onApproveSuccess = function (result) {
        reply(result);
    };

    let onApproveError = function (error) {
        reply(error);
    };

    if (validateRequest(request)) {
        let param = request.payload;

        if (param.role) {
            param.adminApprovalLevel = APP_CONSTANT.APPROVAL_TYPES.HUB_ADMIN_APPROVAL;
        } else {
            param.adminApprovalLevel = APP_CONSTANT.APPROVAL_TYPES.OPERATOR_ADMIN_APPROVAL;
            param.selectedTier = null;
        }
        subscriptionCompleteRest.Invoke(request).then(onApproveSuccess, onApproveError);
    } else {
        reply(boom.badRequest(Messages['BAD_REQUEST']));
    }
};


const _getGraphData = function (request, reply) {

    if (request &&
        request.params &&
        request.params.type &&
        (request.params.type == 'applications' || request.params.type == 'subscriptions' )) {
        let onSuccess = function (result) {
            reply(result);
        };

        let onError = function (error) {
            reply(error);
        };

        applicationHistoryREST.Invoke(request.params.type, request.params.user,request).then(onSuccess, onError);
    } else {
        reply(boom.badRequest(Messages['BAD_REQUEST']));
    }
};

const _getCreditPlan = function (request, reply) {
    let onSuccess = function (result) {
        reply(result);
    };

    let onError = function (error) {
        reply(error);
    };

    creditPlanREST.invokeCreditPlanRest(request).then(onSuccess, onError);
};


function applicationService() {
    return {
        assignApplicationTaskToUser: _assignApplicationTaskToUser,
        approveApplicationCreation: _approveApplicationCreation,
        approveSubscriptionCreation: _approveSubscriptionCreation,
        getApplicationStatistics: _getAppStat,
        getGraphData: _getGraphData,
        getCreditPlan: _getCreditPlan,
        searchApplicationsForApproval: _getApplications
    };
}

module.exports = applicationService();

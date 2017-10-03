const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');
const logger = require('nodejslogger')

function invokeSubscriptionCompleteTask(request) {
    let deferred = Q.defer();

    let getEndpointUrl = function (params) {
        return config.businessProcessEngineBaseUrl + '/runtime/tasks/' + params.taskId;
    };

    let getPayload = function (params) {

        //console.log("Operator ID " +  params.user);

        if(params.selectedTier){
            if(params.selectedRate.length == 0){
                return {
                    action: "complete",
                    variables: [
                        {
                            name: params.adminApprovalLevel,
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: params.selectedTier,
                            value: params.selectedTier,
                            type: "string"
                        },
                        {
                            name: 'completedByUser',
                            value: params.user,
                            type: "string"
                        },
                        {
                            name: 'status',
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedOn',
                            value: new Date(),
                            type: "string"
                        },
                        {
                            name: 'description',
                            value: params.description,
                            type: "string"
                        },
                        {
                            name: 'selectedTier',
                            value: params.selectedTier,
                            type: "string"
                        },
                        {
                            name: 'selectedRate',
                            value: "",
                            type: "string"
                        }
                    ]
                }

            }else{
                return {
                    action: "complete",
                    variables: [
                        {
                            name: params.adminApprovalLevel,
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: params.selectedTier,
                            value: params.selectedTier,
                            type: "string"
                        },
                        {
                            name: 'completedByUser',
                            value: params.user,
                            type: "string"
                        },
                        {
                            name: 'status',
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedOn',
                            value: new Date(),
                            type: "string"
                        },
                        {
                            name: 'description',
                            value: params.description,
                            type: "string"
                        },
                        {
                            name: 'selectedTier',
                            value: params.selectedTier,
                            type: "string"
                        },
                        {
                            name: 'selectedRate',
                            value: params.selectedRate,
                            type: "string"
                        }
                    ]
                }

            }


        }else {

            if(params.selectedRate.length == 0){
                return {
                    action: "complete",
                    variables: [
                        {
                            name: params.adminApprovalLevel,
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedByUser',
                            value: params.user,
                            type: "string"
                        },
                        {
                            name: 'status',
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedOn',
                            value: new Date(),
                            type: "string"
                        },
                        {
                            name: 'description',
                            value: params.description,
                            type: "string"
                        },
                        {
                            "name" : 'selectedRate',
                            "value" : "",
                            "type" : "string"
                        }
                    ]
                }

            }else{
                return {
                    action: "complete",
                    variables: [
                        {
                            name: params.adminApprovalLevel,
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedByUser',
                            value: params.user,
                            type: "string"
                        },
                        {
                            name: 'status',
                            value: params.status,
                            type: "string"
                        },
                        {
                            name: 'completedOn',
                            value: new Date(),
                            type: "string"
                        },
                        {
                            name: 'description',
                            value: params.description,
                            type: "string"
                        },
                        {
                            "name" : 'selectedRate',
                            "value" : params.selectedRate,
                            "type" : "string"
                        }
                    ]
                }

            }

        }

    };


    let getRequestOptions = function (params) {

        return {
            rejectUnauthorized: false,
            json: true,
            payload: getPayload(params),
            headers: {
                'Authorization': request.headers.authorization
            },
        };
    };

    wreck.post(getEndpointUrl(request.payload), getRequestOptions(request.payload), (error, res, payload) => {
        if (error) {
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        } else {
            if(payload && payload.exception){
                logger.error(payload.exception);
                deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
            }else{
                deferred.resolve({
                    success: true,
                    error: null
                });
            }
        }
    });

    return deferred.promise;
}

module.exports = {
    Invoke: invokeSubscriptionCompleteTask
};
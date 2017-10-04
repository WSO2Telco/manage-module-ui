const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');

function invokeAssignApplicationTask(request){
    let deferred = Q.defer();

    let getEndpointUrl = function (params) {
        return config.businessProcessEngineBaseUrl + '/runtime/tasks/'+params.taskId;
    };

    let getRequestOptions = function (params) {
        let _payload = {
            action : 'claim',
            assignee : params.assignee.toLowerCase()
        };
        return {
            rejectUnauthorized: false,
            json : true,
            payload : _payload,
            headers: {
                'Authorization': request.headers.authorization
            },
        };
    };

    wreck.post(getEndpointUrl(request.payload), getRequestOptions(request.payload), (error, res, payload) => {
        if(error){
            deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
        }else{
            deferred.resolve({
                success:true,
                error:null
            });
        }
    });
    return deferred.promise;
}

module.exports = {
    Invoke : invokeAssignApplicationTask
};

const Q = require('q');
const boom = require('boom');
const Messages = require('../common/messages');
const config = require('../../config/application_config');
const wreck = require('wreck');
const moment = require('moment');

const historyREST = function(){

    let last6Months  = [];
    let promiseCol = [];

    let adapted ={
        graphData : [
            {
                data : [],
                label: 'Applications'
            },
            {
                data : [],
                label: 'Subscriptions'
            }],
        xAxisLabels : []
    };

    let deferred = Q.defer();

    let getEndpointUrl = function (month) {
        return config.businessProcessEngineBaseUrl + 'history/historic-task-instances?taskCreatedAfter='+month.start.format()+'&taskCreatedBefore='+month.end.format()+'processDefinitionKey=application_creation_approval_process';
    };

    let getRequestOptions = function () {
        return {
            rejectUnauthorized: false,
            json : true,
            headers: {
                Authorization: 'Basic ' + new Buffer(config.businessProcessEngineUserName+':'+ config.businessProcessEnginePassword).toString('base64')
            },
        };
    };

    let responseAdaptor = function (responseCol) {
        if(!!responseCol){
            responseCol.forEach((response,key)=>{
                adapted.graphData[0].data.push(response.total || 0);
            });
        }

        return adapted;
    };

    for (var i = 0; i < 6; i++) {
        let month = moment().subtract(i, 'months');
        last6Months[i] = {
            start : month.startOf('month').set({'hour':'00','minute':'00','second':'00'}),
            end : month.endOf('month').set({'hour':'00','minute':'00','second':'00'})
        };
        adapted.xAxisLabels.push(month.format('MMM'));
    }

    last6Months.forEach((month)=>{
        let deferred = Q.defer();
        wreck.get(getEndpointUrl(month), getRequestOptions(), (error, res, payload) => {
            if(error){
                deferred.reject(boom.serverUnavailable(Messages['SERVER_FAILED']));
            }else{
                deferred.resolve(payload);
            }
        });
        promiseCol.push(deferred.promise);
    });

    Q.all(promiseCol).then(
        (resultCol)=>{
            deferred.resolve(responseAdaptor(resultCol));
        },
        (error)=>{
            deferred.reject(error);
        }
    );

    return deferred.promise;

};

module.exports = {
    Invoke : historyREST
};
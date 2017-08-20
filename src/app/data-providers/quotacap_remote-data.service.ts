/**
 * Created by sahanK on 08/02/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {AuthenticationService} from '../commons/services/authentication.service';


@Injectable()
export class QuotacapRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});
    private loginInfo;


    private apiEndpoints: Object = {
        getSubscribers: this.apiContext + '/quotacap/getsubscribers',
        getOperatorOfsubscriber: this.apiContext + '/quotacap/getoperatorofsubscriber',
        getApps: this.apiContext + '/quotacap/getapps',
        getApis: this.apiContext + '/quotacap/getapis',
        getQuotaLimitInfo: this.apiContext + '/quotacap/getquotalimitinfo',
        addNewQuotaLimit: this.apiContext + '/quotacap/addnewquotalimit',
        getValidityPeriod: this.apiContext + '/quotacap/getvalidityperiod',
        getOperatorList: this.apiContext + '/quotacap/getoperatorlist'

    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

    }

    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getSubscribers(operatorName: string) {
        const data = {};
        return this.http.get(this.apiEndpoints['getSubscribers'] + '/' + operatorName, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getOperatorOfsubscriber(subscriberID: string) {
        const data = {};
        return this.http.get(this.apiEndpoints['getOperatorOfsubscriber'] + '/' + subscriberID, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get all operator
     * @returns {Observable<R>}
     */
    getOperatorList() {
        const data = {};
        return this.http.get(this.apiEndpoints['getOperatorList'], this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * To get all the apps of the subscriber
     * @param subscriberID
     * @returns {Observable<R>}
     */
    getApps(subscriberID: string) {
        const data = {id: subscriberID};
        return this.http.post(this.apiEndpoints['getApps'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * to get all the apis related to the selected app and subscriber
     * @param id
     * @returns {Observable<R>}
     */
    getApis(id: string) {
        const data = {id: id};
        return this.http.post(this.apiEndpoints['getApis'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to add new quota value to the DB
     * @param subscriberId
     * @param appId
     * @param apiId
     * @param quoatavalue
     * @returns {Observable<R>}
     */
    addNewQuotaLimit(subscriberID: string, appId: string, apiId: string, quotaValue: string, fromDate: string, toDate: string) {

        if (appId.length == 0) {
            appId = null;
        }
        if (apiId.length == 0) {
            apiId = null;
        }


        const data = {
            'operator': 'DIALOG',
            'serviceProvider': subscriberID + '@carbon.super',
            'applicationName': appId,
            'apiName': apiId,
            'quotaLimit': quotaValue,
            'fromDate': fromDate,
            'toDate': toDate
        };

        return this.http.post(this.apiEndpoints['addNewQuotaLimit'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get quota value related to the selected subscriber
     * @param id
     * @returns {Observable<R>}
     */
    getQuotaLimitInfo(subscriberID: string) {
        const data = {
            'byFlag': 'byServiceProvider',
            'info': subscriberID + '@carbon.super'
        };

        return this.http.post(this.apiEndpoints['getQuotaLimitInfo'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * to get quota value related to the selected App
     * @param id
     * @returns {Observable<R>}
     */
    getQuotaLimitInfoApp(appID: string) {
        const data = {
            'byFlag': 'byApplication',
            'info': appID
        };

        return this.http.post(this.apiEndpoints['getQuotaLimitInfo'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get quota value related to the selected API
     * @param id
     * @returns {Observable<R>}
     */
    getQuotaLimitInfoApi(apiID: string) {
        const data = {
            'byFlag': 'byApi',
            'info': apiID
        };

        return this.http.post(this.apiEndpoints['getQuotaLimitInfo'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get validity related to the selected SUBSCRIBER
     * @param id
     * @returns {Observable<R>}
     */
    getValidityPeriodForSubscriober(subscriberID: string, fromDate: string, toDate: string) {
        const data = {
            'byFlag': 'byServiceProvider',
            'info': subscriberID + '@carbon.super',
            'fromDate': fromDate,
            'toDate': toDate
        };

        return this.http.post(this.apiEndpoints['getValidityPeriod'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * to get validity related to the selected App
     * @param id
     * @returns {Observable<R>}
     */
    getValidityPeriodForApp(appID: string, fromDate: string, toDate: string) {
        const data = {
            'byFlag': 'byApplication',
            'info': appID,
            'fromDate': fromDate,
            'toDate': toDate
        };

        return this.http.post(this.apiEndpoints['getValidityPeriod'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * to get validity related to the selected API
     * @param id
     * @returns {Observable<R>}
     */
    getValidityPeriodForApi(apiID: string, fromDate: string, toDate: string) {
        const data = {
            'byFlag': 'byApi',
            'info': apiID,
            'fromDate': fromDate,
            'toDate': toDate
        };

        return this.http.post(this.apiEndpoints['getValidityPeriod'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


}

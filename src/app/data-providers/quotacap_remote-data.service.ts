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
        getApps: this.apiContext + '/quotacap/getapps',
        getApis: this.apiContext + '/quotacap/getapis',
        getQuotaLimitInfo: this.apiContext + '/quotacap/getquotalimitinfo',
        addNewQuotaLimit: this.apiContext + '/quotacap/addnewquotalimit',
        getValidityPeriod: this.apiContext + '/quotacap/getvalidityperiod'

    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

    }

    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getSubscribers() {
        const data = {};
        console.log('hit in the quota remote data service');
        return this.http.post(this.apiEndpoints['getSubscribers'], data, this.options)
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
        console.log('hit in the quota remote data service');
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
        console.log('hit in the quota remote data service');
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
    addNewQuotaLimit(subscriberID: string, appId: string, apiId: string, quotaValue: string) {

        if (appId.length == 0) {
            appId = null;
        }
        if (apiId.length == 0) {
            apiId = null;
        }

        console.log('appid,api-----' + apiId, appId);

        const data = {
            'operator': 'DIALOG',
            'serviceProvider': subscriberID + '@carbon.super',
            'applicationName': appId,
            'apiName': apiId,
            'quotaLimit': quotaValue
        };

        console.log(JSON.stringify(data));
        console.log('hit in the quota remote data service');
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
        console.log('hit in the quota remote data service');
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
        console.log('hit in the quota remote data service');
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
        console.log('hit in the quota remote data service');
        return this.http.post(this.apiEndpoints['getQuotaLimitInfo'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * to get validityperiod related to the selected SUBSCRIBER
     * @param id
     * @returns {Observable<R>}
     */
    getValidityPeriodForSubscriober(subscriberID: string, fromDate: string, toDate: string ) {
        const data = {
            'byFlag': 'byServiceProvider',
            'info': subscriberID + '@carbon.super',
            'fromDate': fromDate,
            'toDate': toDate
        };
        console.log(data);
        return this.http.post(this.apiEndpoints['getValidityPeriod'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


}

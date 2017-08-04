/**
 * Created by manoj on 7/27/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {AuthenticationService} from '../commons/services/authentication.service';
import {SubCategory, Currency, ServerResponse, Category, RateCard} from '../commons/models/common-data-models';


@Injectable()
export class WhitelistRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});
    private loginInfo;


    private apiEndpoints: Object = {
        getSubscribers: this.apiContext + '/whitelist/getsubscribers',
        getApps: this.apiContext + '/whitelist/getapps',
        getApis: this.apiContext + '/whitelist/getapis',
        getWhitelist: this.apiContext + '/whitelist/getwhitelist',
        addNewWhitelist: this.apiContext + '/whitelist/addnewwhitelist',
        removeFromWhiteList: this.apiContext + '/whitelist/removefromwhitelist'

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
        console.log('hit in the whitelist remote data service');
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
        const data = { id: subscriberID};
        console.log('hit in the whitelist remote data service');
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
        const data = { id: id};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['getApis'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                console.log(result);
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * get white list number list
     * @returns {Observable<R>}
     */
    getWhitelist() {
        const data = {};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['getWhitelist'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * remove a msisdn from whitelist
     * @param msisdn
     * @returns {Observable<R>}
     */
    removeFromWhiteList(msisdn: string) {
        const data = {msisdn : msisdn};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['removeFromWhiteList'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * to add new whitelist msisdn list
     * @param appId
     * @param apiId
     * @param msisdnList
     * @returns {Observable<R>}
     */
    addNewToWhitelist(appId: string, apiId: string, msisdnList: string[]) {

        const data = {
            'appId' : appId,
            'apiId' : apiId,
            'userID': this.loginInfo.userName,
            'msisdnList': msisdnList
        };

        console.log(JSON.stringify(data));
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['addNewWhitelist'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


}

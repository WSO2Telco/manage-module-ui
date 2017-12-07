/**
 * Created by manoj on 7/27/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {AuthenticationService} from '../commons/services/authentication.service';


@Injectable()
export class WhitelistRemoteDataService {

    private apiContext = 'api';
    private loginInfo;


    private apiEndpoints: Object = {
        getSubscribers: this.apiContext + '/whitelist/getsubscribers',
        getApps: this.apiContext + '/whitelist/getapps',
        getApis: this.apiContext + '/whitelist/getapis',
        getWhitelist: this.apiContext + '/whitelist/getwhitelist/',
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
        return this.http.post(this.apiEndpoints['getSubscribers'], data, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Subscribers',
                error: error
            }));
    }


    /**
     * get white list number list
     * @returns {Observable<R>}
     */
    getWhitelist(subscriberID: string, appID: string, apiID,) {
        return this.http.get(this.apiEndpoints['getWhitelist'] + subscriberID + '/' + apiID + '/' + appID, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Whitelist',
                error: error
            }));
    }

    /**
     * remove a msisdn from whitelist
     * @param msisdn
     * @returns {Observable<R>}
     */
    removeFromWhiteList(msisdn: string) {
        const data = {msisdn: msisdn};
        return this.http.post(this.apiEndpoints['removeFromWhiteList'], data, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Removing Whitelist Number',
                error: error
            }));
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
            'appId': appId,
            'apiId': apiId,
            'userID': this.loginInfo.userName,
            'msisdnList': msisdnList
        };

        return this.http.post(this.apiEndpoints['addNewWhitelist'], data, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Whitelist',
                error: error
            }));
    }

    getOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }


}

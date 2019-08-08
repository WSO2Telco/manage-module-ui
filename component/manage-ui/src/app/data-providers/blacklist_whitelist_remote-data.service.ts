/**
 * Created by manoj on 7/27/17.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { AuthenticationService } from '../commons/services/authentication.service';


@Injectable()
export class BlackListWhiteListRemoteDataService {

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/blacklist-whitelist-service/queries/';
    private externalApiContext = this.url.protocol + '//' + this.url.host + '/manage-service/public/api/';
    private loginInfo;


    private apiEndpoints: Object = {
        subscribers: this.apiContext + 'subscribers',
        apps: this.apiContext + 'apps/',
        apis: this.apiContext + 'apis/',
        whitelist: this.apiContext + 'GetWhiteList/',
        blacklist: this.apiContext + 'GetBlacklistPerApi/',
        blacklistCount: this.apiContext + 'count/',
        searchBlacklist: this.apiContext + 'search/',
        downloadBlacklist: this.apiContext + 'downloadAsZip/',
        addNewWhitelist: this.apiContext + 'Whitelist',
        addNewBlacklist: this.apiContext + 'add/',
        addBulkToBlacklist: this.apiContext + 'bulkAdd/',
        removeFromWhiteList: this.apiContext + 'RemoveFromWhiteList/',
        removeFromBlackList: this.apiContext + 'remove/',
        msisdnValidation: this.externalApiContext + 'validation/msisdn'
    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

    }

    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getSubscribers() {
        return this.http.get(this.apiEndpoints['subscribers'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Subscriber List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Subscriber List',
                error: error
            }));
    }

    /**
     * To get all the apps of the subscriber
     * @param subscriberID
     * @returns {Observable<R>}
     */
    getApps(subscriberID: string) {
        let operator;
        if (this.loginInfo.isAdmin) {
            operator = '_ALL_';
        } else {
            operator = this.loginInfo.operator;
        }
        return this.http.get(this.apiEndpoints['apps'] + subscriberID + '/' + operator, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Application List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Application List',
                error: error
            }));
    }

    /**
     * to get all the apis related to the selected app and subscriber
     * @param id
     * @returns {Observable<R>}
     */
    getApis(subscriberID: string, appID: string) {
        return this.http.get(this.apiEndpoints['apis'] + subscriberID + '/' + appID, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'API List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Api List',
                error: error
            }));
    }


    /**
     * to get all the apis related to the selected app and subscriber
     * @returns {Observable<R|T>}
     */
    getApiList() {
        return this.http.get(this.apiEndpoints['apis'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'API List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Api List',
                error: error
            }));
    }


    /**
     * get white list number list
     * @returns {Observable<R>}
     */
    getWhitelist(subscriberID: string, appID: string, apiID, ) {
        return this.http.get(this.apiEndpoints['whitelist'] + subscriberID + '/' + apiID + '/' + appID, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Whitelist Number List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Whitelist',
                error: error
            }));
    }


    /**
     * load blacklist numbers for api
     * @param id
     * @returns {Observable<R|T>}
     */
    getBlacklist(id: string) {
        return this.http.get(this.apiEndpoints['blacklist'] + id, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Blacklist Number List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Blacklist',
                error: error
            }));
    }


    /**
     * load blacklist numbers count for api
     * @param appid/apiid
     * @returns {Observable<R|T>}
     */
    getBlacklistNumberCount(apiid: string, appid: string, subscriber: string, action: string) {
        return this.http.get(this.apiEndpoints['blacklistCount'] + appid + '/' + apiid + '?action=' + action + '&sp=' + subscriber, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: action + ' Number count Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading ' + action + ' Count',
                error: error
            }));
    }

    /**
    * load blacklist/whitelist numbers exsits for api
    * @param appid/apiid/msisdn
    * @returns {Observable<R|T>}
    */
    getBlacklistNumberExit(apiid: string, appid: string, msisdn: string, subscriber: string, action: string) {
        return this.http.get(this.apiEndpoints['searchBlacklist'] + appid + '/' + apiid + '?msisdn=' + encodeURIComponent(msisdn) + '&action=' + action + '&sp=' + subscriber, this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: action + ' Number count Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading ' + action + ' numbers',
                error: error
            }));
    }


    /**
    * Download blacklist/whitelist numbers list for api
    * @param appid/apiid
    * @returns {Observable<R|T>}
    */
    downloadBlacklistNumberList(apiid: string, appid: string, sp: string, action: string) {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        return this.http.get(this.apiEndpoints['downloadBlacklist'] + appid + '/' + apiid + '?action=' + action + '&sp=' + sp, {
            responseType: ResponseContentType.Blob,
            headers: new Headers({
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'multipart/form-data',
                'cache-control': 'no-cache',
                'Accept': 'application/zip',
                'observe': 'response',
                'reportProgress': true,
            })
        })
            .map((response: Response) => {
                return new Blob([response.blob()], { type: 'application/zip' })
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading ' + action + ' numbers file',
                error: error
            }));
    }


    /**
     * remove a msisdn from whitelist
     * @param msisdn
     * @returns {Observable<R>}
     */
    removeFromWhiteList(msisdn: string) {
        return this.http.post(this.apiEndpoints['removeFromWhiteList'] + msisdn, '', this.getOptions())
            .map((response: Response) => {
                if (response.status == 200) {
                    return {
                        success: true,
                        message: 'MSISDN Removed Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Removing MSISDN',
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Removing MSISDN',
                error: error
            }));
    }


    /**
     * Remove BlackListed/Whitelisted Numbers
     * @param appId
     * @param apiId
     * @param mssidns
     * @returns {Observable<R>}
     */
    removeFromBlackList(msisdn: string, appId: string, apiId: string, subscriber: string, action: string) {
        const data = {
            'apiId': apiId
        };
        return this.http.delete(this.apiEndpoints['removeFromBlackList'] + appId + '/' + apiId + '?msisdn=' + msisdn + '&action=' + action + '&sp=' + subscriber, this.getOptions())
            .map((response: Response) => {
                if (response.status == 204) {
                    return {
                        success: true,
                        message: 'MSISDN Removed Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Removing MSISDN',
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Removing MSISDN',
                error: error
            }));

    };

    /**
     * to add new whitelist msisdn list
     * @param appId
     * @param apiId
     * @param msisdnList
     * @returns {Observable<R>}
     */
    addNewToWhitelist(appId: string, apiId: string, msisdnList: string[], validationRegex: string, validationPrefixGroup: number, validationDigitsGroup: number) {

        const data = {
            'appId': appId,
            'apiId': apiId,
            'userID': this.loginInfo.userName,
            'msisdnList': msisdnList,
            'validationRegex': validationRegex,
            'validationPrefixGroup': validationPrefixGroup,
            'validationDigitsGroup': validationDigitsGroup
        };

        return this.http.post(this.apiEndpoints['addNewWhitelist'], data, this.getOptions())
            .map((response: Response) => {
                if (response.status == 200) {
                    return {
                        success: true,
                        message: 'New Whitelist Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding Whitelist',
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding Whitelist',
                error: error
            }));
    }

    /**
     * Add New BlackList/whitelist Number
     * @param apiId
     * @param appId
     * @param msisdn
     * @returns {Observable<R>}
     */
    addNewToBlacklist(appId: string, apiId: string, msisdnList: string, action: string) {
        const data = {
            'sp': this.loginInfo.userName,
            'msisdn': msisdnList,
            'action': action,
            'user': this._authenticationService.loginUserInfo.getValue().userName
        };

        return this.http.post(this.apiEndpoints['addNewBlacklist'] + appId + '/' + apiId + '?', data, this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'New ' + action + ' Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding' + action,
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding ' + action,
                error: error
            }));
    }



    /**
     * Add bulk BlackList/Whitelist Number
     * @param apiId
     * @param appId
     * @param msisdnList
     * @returns {Observable<R>}
     */
    addBulkToBlacklist(appId: string, apiId: string, msisdnfile: FormData) {
        msisdnfile.append('user', this._authenticationService.loginUserInfo.getValue().userName);

        return this.http.post(this.apiEndpoints['addBulkToBlacklist'] + appId + '/' + apiId, msisdnfile, this.getDownloadOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'New Blacklist Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding Blacklist',
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding Blacklist',
                error: error
            }));
    }

    /**
     * Validate msisdns against regex
     * @param {string[]} msisdnList
     */
    msisdnValidateService(msisdnList: string[]) {

        const data = {
            'msisdnList': msisdnList
        };

        return this.http.post(this.apiEndpoints['msisdnValidation'], data, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error in executing validation Service',
                error: error
            }));

    }

    getOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({ headers: headers });
    }

    getDownloadOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'multipart/form-data',
                'cache-control': 'no-cache',
            });
        return new RequestOptions({ headers: headers });
    }


}

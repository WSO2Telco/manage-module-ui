/**
 * Created by manoj on 7/27/17.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
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
        addNewWhitelist: this.apiContext + 'Whitelist',
        addNewBlacklist: this.apiContext + 'Blacklist',
        removeFromWhiteList: this.apiContext + 'RemoveFromWhiteList/',
        removeFromBlackList: this.apiContext + 'RemoveFromBlacklist/',
        msisdnValidation: this.externalApiContext + 'validation/msisdn',
        subscriptionTier: this.externalApiContext + 'subscription/'
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
     * To get all the apps of the subscriber
     * @param subscriberID
     * @returns {Observable<R>}
     */
    getAppsForEditSub(subscriberID: string) {
        return this.http.get(this.apiEndpoints['apps'] + subscriberID ,  this.getOptions())
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
     * Remove BlackListed Numbers
     * @param apiId
     * @param mssidns
     * @returns {Observable<R>}
     */
    removeFromBlackList(mssidn: string, apiId: string) {
        const data = {
            'apiId': apiId
        };
        return this.http.post(this.apiEndpoints['removeFromBlackList'] + mssidn, data, this.getOptions())
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
     * Add New BlackListNumber/s
     * @param apiId
     * @param apiName
     * @param msisdnList
     * @returns {Observable<R>}
     */
    addNewToBlacklist(apiId: string, apiName: string, msisdnList: string[], validationRegex: string, validationPrefixGroup: number, validationDigitsGroup: number) {
        const data = {
            'apiID': apiId,
            'apiName': apiName,
            'userID': this.loginInfo.userName,
            'msisdnList': msisdnList,
            'validationRegex': validationRegex,
            'validationPrefixGroup': validationPrefixGroup,
            'validationDigitsGroup': validationDigitsGroup
        };

        return this.http.post(this.apiEndpoints['addNewBlacklist'], data, this.getOptions())
            .map((response: Response) => {
                if (response.status == 200) {
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

    getSubscriptionTiers(apiName: string, version: string, apiProvider: string) {
        return this.http.get(this.apiEndpoints['subscriptionTier'] + apiName + '/' + version + '/' + apiProvider + '/tiers', this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Subscription Tier loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Subscription Tiers',
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


}

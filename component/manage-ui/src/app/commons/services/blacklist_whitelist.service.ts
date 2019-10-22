/**
 * Created by manoj on 7/27/17.
 */
import {Injectable} from '@angular/core';
import {BlackListWhiteListRemoteDataService} from '../../data-providers/blacklist_whitelist_remote-data.service';


@Injectable()
export class BlackListWhiteListService {

    constructor(private _remoteService: BlackListWhiteListRemoteDataService) {
    }

    getSubscribers(callback: Function) {
        this._remoteService.getSubscribers()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getApps(subscriberID: string, callback: Function) {
        this._remoteService.getApps(subscriberID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getApis(subscriberID: string, appID: string, callback: Function) {
        this._remoteService.getApis(subscriberID, appID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getApiList(callback: Function) {
        this._remoteService.getApiList()
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getWhitelist(subscriberID: string, appID: string, apiID, callback: Function) {
        this._remoteService.getWhitelist(subscriberID, appID, apiID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getBlacklist(id: string, callback: Function) {
        this._remoteService.getBlacklist(id)
            .subscribe(
                data => {
                    callback(data);
                },
                (error: string) => {
                    callback(error);
                }
            );
    }

    removeFromWhiteList(msisdn: string, callback: Function) {
        this._remoteService.removeFromWhiteList(msisdn)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    removeFromBlackList(msisdn, id, callback: Function) {
        this._remoteService.removeFromBlackList(msisdn, id)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    addNewToWhitelist(appId: string, apiId: string, msisdnList: string[],
                      validationRegex: string, validationPrefixGroup: number, validationDigitsGroup: number, callback: Function) {
       this._remoteService.addNewToWhitelist(appId, apiId, msisdnList, validationRegex, validationPrefixGroup, validationDigitsGroup)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    addNewToBlacklist(apiId: string, apiName: string, msisdnList: string[],
                          validationRegex: string, validationPrefixGroup: number, validationDigitsGroup: number, callback: Function) {
        this._remoteService.addNewToBlacklist(apiId, apiName, msisdnList, validationRegex, validationPrefixGroup, validationDigitsGroup)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    validationService(msisdnList: string[], callback: Function) {
        this._remoteService.msisdnValidateService(msisdnList)
            .subscribe(
                data => {
                    callback(data, true)
                },
                error => {
                    callback(error, false)
                }
            );
    }

        /**
     * get Subscription tier list
     * @param api
     * @param callback
     */
    getSubscriptionTierOperations(apiName:string,version:string,apiProvider:string, callback: Function) {
        this._remoteService.getSubscriptionTiers(apiName,version,apiProvider)
                .subscribe(
                    data => {
                        callback(data);
                    },
                    error => {
                        callback(error);
                    }
                );
        
    }

}

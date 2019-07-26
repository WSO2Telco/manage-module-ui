/**
 * Created by manoj on 7/27/17.
 */
import { Injectable } from '@angular/core';
import { BlackListWhiteListRemoteDataService } from '../../data-providers/blacklist_whitelist_remote-data.service';
import 'rxjs/Rx';


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

    getBlacklistCount(apiid: string, appid: string, subscriber: string, callback: Function) {
        this._remoteService.getBlacklistNumberCount(appid, apiid, subscriber)
            .subscribe(
                data => {
                    callback(data);
                },
                (error: string) => {
                    callback(error);
                }
            );
    }

    getBlacklistNumberExit(apiid: string, appid: string, msisdn: string, subscribe: string, callback: Function) {
        this._remoteService.getBlacklistNumberExit(appid, apiid, msisdn, subscribe)
            .subscribe(
                data => {
                    callback(data);
                },
                (error: string) => {
                    callback(error);
                }
            );
    }

    downloadBlacklistNumberList(apiid: string, appid: string, sp: string, callback: Function) {
        this._remoteService.downloadBlacklistNumberList(apiid, appid, sp)
            .subscribe(
                data => {
                    this.downloadFile(data)
                },
                (error: string) => {
                    callback(error);
                }
            );
    }

    downloadFile(data: any) {
        const blob = new Blob([data], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);

        var a = document.createElement('a');
        a.href = url;
        var dd = new Date();
        var today = dd.getDay()+'-'+dd.getMonth()+'-'+dd.getFullYear();
        a.download = 'blacklist_'+today+'.zip';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
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

    removeFromBlackList(msisdn, appId, apiId, subscribe, callback: Function) {
        this._remoteService.removeFromBlackList(msisdn, appId, apiId, subscribe)
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

    addNewToBlacklist(appId: string, apiId: string, msisdnList: string, callback: Function) {
        this._remoteService.addNewToBlacklist(appId, apiId, msisdnList)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    addBulkToBlacklist(appId: string, apiId: string, msisdnfile: FormData, callback: Function) {
        this._remoteService.addBulkToBlacklist(appId, apiId, msisdnfile)
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

}

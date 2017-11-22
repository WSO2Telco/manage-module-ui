/**
 * Created by manoj on 7/27/17.
 */
import {Injectable} from '@angular/core';
import {WhitelistRemoteDataService} from '../../data-providers/whitelist_remote-data.service';


@Injectable()
export class WhitelistService {

    constructor(private _remoteService: WhitelistRemoteDataService) {
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

    addNewToWhitelist(appId: string, apiId: string, msisdnList: string[], callback: Function) {
      this._remoteService.addNewToWhitelist(appId, apiId, msisdnList)
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

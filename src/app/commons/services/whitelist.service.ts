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
        console.log('get subscribers of provider service called');
        this._remoteService.getSubscribers()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getApps(subscriberID: string, callback: Function) {
        console.log('get apps of subscriber service called');
        this._remoteService.getApps(subscriberID)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getApis(id: string, callback: Function) {
        console.log('get apps of subscriber service called');
        this._remoteService.getApis(id)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getWhitelist(callback: Function) {
        console.log('get list of white list service called');
        this._remoteService.getWhitelist()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    removeFromWhiteList(msisdn: string, callback: Function) {
        console.log('remove white list service called');
        this._remoteService.removeFromWhiteList(msisdn)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    addNewToWhitelist(appId: string, apiId: string, msisdnList: string[], callback: Function) {
        console.log('get apps of subscriber service called');
        this._remoteService.addNewToWhitelist(appId, apiId, msisdnList)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }
}

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
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getApps(subscriberID: string, callback: Function) {
        console.log('get apps of subscriber service called');
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

    getApis(id: string, callback: Function) {
        console.log('get apps of subscriber service called');
        this._remoteService.getApis(id)
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

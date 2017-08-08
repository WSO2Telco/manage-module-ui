/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';
import {errorHandler} from "@angular/platform-browser/src/browser";

@Injectable()
export class BlackListService {

    constructor(private _remoteService: BlackListRemoteDataService) {}

    getApiList(callback: Function) {
        console.log('get apilist called');
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

    getBlackListNumberList(id: string, callback: Function) {
        console.log('get blacklist Number Lists');
        this._remoteService.getBlackListNumberList(id)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    removeBlackListNumber(msisdn, id, callback: Function) {
        console.log('remove blackList Number ');
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

    addNewToBlackListList(apiId: string, apiName: string, msisdnList: string[], callback: Function) {
        console.log('Add new Blacklist number service ');
        this._remoteService.addNewBlackListList(apiId, apiName, msisdnList)
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

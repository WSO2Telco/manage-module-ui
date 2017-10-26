import {Injectable} from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';
import {errorHandler} from "@angular/platform-browser/src/browser";

@Injectable()
export class BlackListService {

    constructor(private _remoteService: BlackListRemoteDataService) {}

    getApiList(callback: Function) {
        this._remoteService.getApiList()
            .subscribe(
                data => {
                    callback(data, data.success);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getBlackListNumberList(id: string, callback: Function) {
        this._remoteService.getBlackListNumberList(id)
            .subscribe(
                data => {
                    callback(data, true);
                },
                (error: string) => {
                    callback(error, false);
                }
            );
    }

    removeBlackListNumber(msisdn, id, callback: Function) {
       this._remoteService.removeFromBlackList(msisdn, id)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    addNewToBlackListList(apiId: string, apiName: string, msisdnList: string[], callback: Function) {
       // console.log('Add new Blacklist number service ');
        this._remoteService.addNewBlackListList(apiId, apiName, msisdnList)
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

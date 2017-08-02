/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';

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

}

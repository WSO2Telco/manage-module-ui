/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';
import {ServerResponse} from '../models/common-data-models';


@Injectable()
export class BlackListService {

    constructor(private _remoteService: BlackListRemoteDataService) {}

    getApiList(callback: Function) {
        console.log('get apilist called');
        this._remoteService.getApiList()
            .subscribe(
                (response: ServerResponse) => {
                    console.log('good response' + response.messsage);
                },
                (error: string) => {
                    callback(error);
                }
            );
    }
}

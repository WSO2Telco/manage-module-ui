/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {BlackListRemoteDataService} from '../../data-providers/blacklist_remote-data.service';

@Injectable()
export class BlackListService {

    constructor(private _remoteService: BlackListRemoteDataService) {}

    getApiList() {
        console.log('get apilist called');
        this._remoteService.getApiList()
            .subscribe();
    }

}

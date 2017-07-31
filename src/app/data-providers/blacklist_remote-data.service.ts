/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ApiList, ServerResponse} from '../commons/models/common-data-models';

@Injectable()
export class BlackListRemoteDataService {
    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});


    private apiEndpoints: Object = {
        getApis: this.apiContext + '/blacklist/list'
    };

    constructor(private http: Http) {
    }

    getApiList() {
        console.log('hit in the rate remote data service');
        return this.http.get(this.apiEndpoints['getApis'], this.options)
            .map((response: Response) => {
            const result = response.json();
            return result;
             })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getBlackListNumberList(id) {
        console.log('hit the blacklist remote number data service');
        // return this.http.post()
    }
}


/**
 * Created by manoj on 7/27/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SubCategory, Currency, ServerResponse, NewType, RateCard} from '../commons/models/common-data-models';


@Injectable()
export class WhitelistRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});


    private apiEndpoints: Object = {
        getSubscribers: this.apiContext + '/whitelist/getsubscribers',
        getApps: this.apiContext + '/whitelist/getapps',
        getApis: this.apiContext + '/whitelist/getapis'
    };

    constructor(private http: Http) {
    }

    getSubscribers() {
        const data = {};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['getSubscribers'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getApps(subscriberID: string) {
        const data = { id: subscriberID};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['getApps'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getApis(id: string) {
        const data = { id: id};
        console.log('hit in the whitelist remote data service');
        return this.http.post(this.apiEndpoints['getApis'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                console.log(result);
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }
}

/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SubCategory, LoginResponse, Currency} from '../commons/models/common-data-models';
import {log} from "util";


@Injectable()
export class RateRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        addsubcategory: this.apiContext + '/rate/addsubcategory',
        logout: this.apiContext + '/authentication/logout',
        addCurrency: this.apiContext + '/rate/addcurrency'
    };

    constructor(private http: Http) {
    }


    /**
     *
     * @param data
     * @returns {Observable<SubCategory>}
     */
    addSubcategory(data: SubCategory): Observable<LoginResponse> {
        console.log('hit in the rate remote data service');
        return this.http.post(this.apiEndpoints['addsubcategory'], data, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }

    /**
     * Add a new currency
     * @param data
     * @returns {Observable<R>}
     */
    addCurrency(data: Currency): Observable<LoginResponse> {
        console.log('currency service ---');
        console.log(JSON.stringify(data)) ;
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }
}

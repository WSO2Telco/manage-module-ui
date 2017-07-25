/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SubCategory, Currency, ServerResponse, NewType, RateCard} from '../commons/models/common-data-models';


@Injectable()
export class RateRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        addRateCard: this.apiContext + '/rate/addratecard',
        addsubcategory: this.apiContext + '/rate/addsubcategory',
        addnewtype: this.apiContext + '/rate/addnewtype',
        addCurrency: this.apiContext + '/rate/addcurrency'
    };

    constructor(private http: Http) {
    }

    /**
     * To add new sub category tariff relationship
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addSubcategory(data: SubCategory): Observable<ServerResponse> {
        console.log('hit in the rate remote data service');
        return this.http.post(this.apiEndpoints['addsubcategory'], data, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }

    /**
     * To add new category, subcategory or a tariff
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addNewType(data: NewType): Observable<ServerResponse> {
        console.log('hit in the rate remote data service');
        return this.http.post(this.apiEndpoints['addnewtype'], data, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }


    /**
     * Add a new currency
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addCurrency(data: Currency): Observable<ServerResponse> {
        console.log('currency service ---');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }


    /**
     * Add new rate card
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addNewRateCard(data: RateCard): Observable<ServerResponse> {
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message));
    }
}

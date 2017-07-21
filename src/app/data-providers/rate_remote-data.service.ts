/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SubCategory, LoginResponse, ServerResponse, NewType} from '../commons/models/common-data-models';


@Injectable()
export class RateRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        addsubcategory: this.apiContext + '/rate/addsubcategory',
        addnewtype: this.apiContext + '/rate/addnewtype',
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



}

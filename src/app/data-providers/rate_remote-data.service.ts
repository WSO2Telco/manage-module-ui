/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {
    SubCategory, Currency, ServerResponse, Category, Tariff,
    Rate, RateCategory
} from '../commons/models/common-data-models';


@Injectable()
export class RateRemoteDataService {

    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        addRateCard: this.apiContext + '/rate/addratecard',
        addRateCategory: this.apiContext + '/rate/addratecategory/',
        addCategory: this.apiContext + '/rate/addcategory',
        addCurrency: this.apiContext + '/rate/addcurrency',
        addTariff: this.apiContext + '/rate/addtariff',
        getTariffList: this.apiContext + '/rate/gettarifflist',
        getCurrencyList: this.apiContext + '/rate/getcurrencylist',
        getRateTypeList: this.apiContext + '/rate/getratetypelist',
        getCategoryList: this.apiContext + '/rate/getcategorylist',
        getRateDefinitionList: this.apiContext + '/rate/getratedefinitionList'
    };

    constructor(private http: Http) {
    }

    /**
     * To add new rate category tariff relationship
     * @param data
     * @returns {Observable<R>}
     */
    addRateCategory(data: RateCategory, id: number) {
        console.log('hit in the rate remote data service to add rate-category');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addRateCategory'] + id, JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * To add new category or subcategory
     * @param data
     * @returns {Observable<R>}
     */
    addCategory(data: Category) {
        console.log('hit in the rate remote data service to add category');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addCategory'], JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * To add new tariff
     * @param data
     * @returns {Observable<R>}
     */
    addTariff(data: Tariff) {
        console.log('hit in the rate remote data service to add tariff');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addTariff'], JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * Add a new currency
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addCurrency(data: Currency) {
        console.log('hit in the rate remote data service to add currency');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }


    /**
     * Add new rate card
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addNewRateCard(data: Rate){
        console.log('hit in the rate remote data service to add new rate card');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addRateCard'], JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * get list of tariff values
     * @returns {Observable<R>}
     */
    getTariffList() {
        const data = {};
        console.log('hit in the rate remote data service to get tariff');
        return this.http.get(this.apiEndpoints['getTariffList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * get list of available currency values
     * @returns {Observable<R>}
     */
    getCurrencyList() {
        const data = {};
        console.log('hit in the rate remote data service to get currency');
        return this.http.get(this.apiEndpoints['getCurrencyList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * get list of available rate types
     * @returns {Observable<R>}
     */
    getRateTypeList() {
        const data = {};
        console.log('hit in the rate remote data service to get rate type');
        return this.http.get(this.apiEndpoints['getRateTypeList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getCategoryList() {
        const data = {};
        console.log('hit in the rate remote data service to get categories');
        return this.http.get(this.apiEndpoints['getCategoryList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getRateDefinitionList() {
        const data = {};
        console.log('hit in the rate remote data service to get rate definitions');
        return this.http.get(this.apiEndpoints['getRateDefinitionList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }
}

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
        addCategory: this.apiContext + '/rate/categories',
        addCurrency: this.apiContext + '/rate/currencies',
        addTariff: this.apiContext + '/rate/tariffs',
        assignRatesForAPIOperation: this.apiContext + '/rate/assignrates',
        getTariffList: this.apiContext + '/rate/gettarifflist',
        getCurrencyList: this.apiContext + '/rate/currencies',
        getRateTypeList: this.apiContext + '/rate/getratetypelist',
        getCategoryList: this.apiContext + '/rate/categories',
        getRateDefinitionList: this.apiContext + '/rate/getratedefinitionlist',
        getRateTaxList: this.apiContext + '/rate/getTaxList',
        getApiOperations: this.apiContext + '/rate/getapioperations',
        getAPIOperationRates: this.apiContext + '/rate/getapioperationrates'
    };

    constructor(private http: Http) {
    }

    /**
     * To add new rate category tariff relationship
     * @param data
     * @returns {Observable<R>}
     */
    addRateCategory(data: RateCategory, id: number) {
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
    addNewRateCard(data: Rate) {
        return this.http.post(this.apiEndpoints['addRateCard'], JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number,  operatorId: number){
        return this.http.post(this.apiEndpoints['assignRatesForAPIOperation'] + '/' + apiName + '/' + apiOperationId + '/' + operatorId ,
            JSON.stringify(data), this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }


    /**
     * get list of tariff values
     * @returns {Observable<R>}
     */
    getTariffList() {
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
        return this.http.get(this.apiEndpoints['getRateTypeList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getCategoryList() {
        return this.http.get(this.apiEndpoints['getCategoryList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getRateDefinitionList() {
        return this.http.get(this.apiEndpoints['getRateDefinitionList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    getRateTax() {
        return this.http.get(this.apiEndpoints['getRateTaxList'])
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }

    getAPIOperationRates(apiName: string, apiOperationId: number, operatorId: number) {
        return this.http.get(this.apiEndpoints['getAPIOperationRates'] + '/' + apiName + '/' + apiOperationId + '/' + operatorId )
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }

    getApiOperations(api: string){
        return this.http.get(this.apiEndpoints['getApiOperations'] + '/' + api)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }
}

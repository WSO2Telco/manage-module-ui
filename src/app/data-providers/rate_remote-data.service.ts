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
import {AuthenticationService} from "../commons/services/authentication.service";


@Injectable()
export class RateRemoteDataService {

    private apiContext = 'api';

    private apiEndpoints: Object = {
        addRateCard: this.apiContext + '/rate/addratecard',
        addRateCategory: this.apiContext + '/rate/addratecategory/',
        addCategory: this.apiContext + '/rate/categories',
        addCurrency: this.apiContext + '/rate/currencies',
        addTariff: this.apiContext + '/rate/tariffs',
        assignRatesForAPIOperation: this.apiContext + '/rate/assignrates',
        getTariffList: this.apiContext + '/rate/tariffs',
        getCurrencyList: this.apiContext + '/rate/currencies',
        getRateTypeList: this.apiContext + '/rate/ratetypes',
        getCategoryList: this.apiContext + '/rate/categories',
        getRateDefinitionList: this.apiContext + '/rate/ratedefinitions',
        getRateTaxList: this.apiContext + '/rate/taxes',
        getApis: this.apiContext + '/rate/apis',
        getApiOperations: this.apiContext + '/rate/getapioperations',
        getAPIOperationRates: this.apiContext + '/rate/getapioperationrates',
        getRateCards: this.apiContext + '/rate/getratecards'
    };

    constructor(private http: Http, private authService: AuthenticationService) {
    }

    /**
     * To add new rate category tariff relationship
     * @param data
     * @returns {Observable<R>}
     */
    addRateCategory(data: RateCategory, id: number) {
        return this.http.post(this.apiEndpoints['addRateCategory'] + id, JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Rate Category',
                error: error
            }));
    }

    /**
     * To add new category or subcategory
     * @param data
     * @returns {Observable<R>}
     */
    addCategory(data: Category) {
        return this.http.post(this.apiEndpoints['addCategory'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Category',
                error: error
            }));
    }

    /**
     * To add new tariff
     * @param data
     * @returns {Observable<R>}
     */
    addTariff(data: Tariff) {
        return this.http.post(this.apiEndpoints['addTariff'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Tariff',
                error: error
            }));
    }

    /**
     * Add a new currency
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addCurrency(data: Currency) {
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Currency',
                error: error
            }));
    }

    /**
     * Add new rate card
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addNewRateCard(data: Rate) {
        return this.http.post(this.apiEndpoints['addRateCard'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Rate Card',
                error: error
            }));
    }

    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number, operatorId: number) {
        return this.http.post(this.apiEndpoints['assignRatesForAPIOperation'] + '/' + apiName + '/' + apiOperationId + '/' + operatorId,
            JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Assigning Rates',
                error: error
            }));
    }


    /**
     * get list of tariff values
     * @returns {Observable<R>}
     */
    getTariffList() {
        return this.http.get(this.apiEndpoints['getTariffList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Tariff List',
                error: error
            }));
    }

    /**
     * get list of available currency values
     * @returns {Observable<R>}
     */
    getCurrencyList() {
        return this.http.get(this.apiEndpoints['getCurrencyList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Currency List',
                error: error
            }));
    }

    /**
     * get list of available rate types
     * @returns {Observable<R>}
     */
    getRateTypeList() {
        return this.http.get(this.apiEndpoints['getRateTypeList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Type List',
                error: error
            }));
    }

    getCategoryList() {
        return this.http.get(this.apiEndpoints['getCategoryList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Category List',
                error: error
            }));
    }

    getRateDefinitionList() {
        return this.http.get(this.apiEndpoints['getRateDefinitionList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Definition List',
                error: error
            }));
    }

    getRateCards() {
        return this.http.get(this.apiEndpoints['getRateCards'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Definition List',
                error: error
            }));
    }


    getRateTax() {
        return this.http.get(this.apiEndpoints['getRateTaxList'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Tax List',
                error: error
            }));
    }

    /**
     * Get Api List
     * @returns {Observable<R>}
     */
    getApiList() {
        return this.http.get(this.apiEndpoints['getApis'], this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API List',
                error: error
            }));
    }

    getAPIOperationRates(apiName: string, apiOperationId: number, operatorId: number) {
        return this.http.get(this.apiEndpoints['getAPIOperationRates'] + '/'
            + apiName + '/' + apiOperationId + '/' + operatorId, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operation Rates',
                error: error
            }));
    }

    getApiOperations(api: string) {
        return this.http.get(this.apiEndpoints['getApiOperations'] + '/' + api, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operations',
                error: error
            }));
    }

    getOptions(): RequestOptions {
        const token = this.authService.loginUserInfo.getValue().token;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }
}

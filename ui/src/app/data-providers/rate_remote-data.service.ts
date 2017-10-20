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
        rateCards: this.apiContext + '/rate/ratecards',
        tariffs: this.apiContext + '/rate/tariffs',
        rateTypes: this.apiContext + '/rate/ratetypes',
        categories: this.apiContext + '/rate/categories',
        currencies: this.apiContext + '/rate/currencies',
        rateDefinitions: this.apiContext + '/rate/ratedefinitions',
        rateTaxes: this.apiContext + '/rate/taxes',
        assignRatesForAPIOperation: this.apiContext + '/rate/assignrates',
        getApiOperations: this.apiContext + '/rate/getapioperations',
        getAPIOperationRates: this.apiContext + '/rate/getapioperationrates',
        addRateCategory: this.apiContext + '/rate/addratecategory/'
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
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Rate Category',
                error: error.json()
            }));
    }

    /**
     * To add new category or subcategory
     * @param data
     * @returns {Observable<R>}
     */
    addCategory(data: Category) {
        return this.http.post(this.apiEndpoints['categories'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Category',
                error: error.json()
            }));
    }

    /**
     * To add new tariff
     * @param data
     * @returns {Observable<R>}
     */
    addTariff(data: Tariff) {
        return this.http.post(this.apiEndpoints['tariffs'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Tariff',
                error: error.json()
            }));
    }

    /**
     * Add a new currency
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addCurrency(data: Currency) {
        return this.http.post(this.apiEndpoints['currencies'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Currency',
                error: error.json()
            }));
    }

    /**
     * Add new rate card
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    addNewRateCard(data: Rate) {
        return this.http.post(this.apiEndpoints['rateCards'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Rate Card',
                error: error.json()
            }));
    }

    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number, operatorId: number) {
        return this.http.post(this.apiEndpoints['assignRatesForAPIOperation'] + '/' + apiName + '/' + apiOperationId + '/' + operatorId,
            JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Assigning Rates',
                error: error.json()
            }));
    }


    /**
     * get list of tariff values
     * @returns {Observable<R>}
     */
    getTariffList() {
        return this.http.get(this.apiEndpoints['tariffs'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Tariff List',
                error: error.json()
            }));
    }

    /**
     * get list of available currency values
     * @returns {Observable<R>}
     */
    getCurrencyList() {
        return this.http.get(this.apiEndpoints['currencies'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Currency List',
                error: error.json()
            }));
    }

    /**
     * get list of available rate types
     * @returns {Observable<R>}
     */
    getRateTypeList() {
        return this.http.get(this.apiEndpoints['rateTypes'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Type List',
                error: error.json()
            }));
    }

    getCategoryList() {
        return this.http.get(this.apiEndpoints['categories'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Category List',
                error: error.json()
            }));
    }

    getRateDefinitionList() {
        return this.http.get(this.apiEndpoints['rateDefinitions'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Definition List',
                error: error.json()
            }));
    }

    getRateCards() {
        return this.http.get(this.apiEndpoints['rateCards'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Definition List',
                error: error.json()
            }));
    }


    getRateTax() {
        return this.http.get(this.apiEndpoints['rateTaxes'], this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Tax List',
                error: error.json()
            }));
    }

    getAPIOperationRates(apiName: string, apiOperationId: number, operatorId: number) {
        return this.http.get(this.apiEndpoints['getAPIOperationRates'] + '/' + apiName + '/' + apiOperationId + '/' + operatorId, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operation Rates',
                error: error.json()
            }));
    }

    getApiOperations(api: string) {
        return this.http.get(this.apiEndpoints['getApiOperations'] + '/' + api, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operations',
                error: error.json()
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
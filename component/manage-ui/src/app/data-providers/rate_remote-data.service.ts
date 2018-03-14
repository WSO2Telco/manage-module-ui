import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Category, Currency, Rate, ServerResponse, Tariff, UpdatedRate} from '../commons/models/common-data-models';
import {AuthenticationService} from '../commons/services/authentication.service';


@Injectable()
export class RateRemoteDataService {

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/ratecard-service/ratecardservice/';

    private apiEndpoints: Object = {
        rateCards: this.apiContext + 'ratecards?schema=full',
        tariffs: this.apiContext + 'tariffs',
        rateTypes: this.apiContext + 'ratetypes',
        categories: this.apiContext + 'categories',
        currencies: this.apiContext + 'currencies',
        operators: this.apiContext + 'operators',
        rateDefinitions: this.apiContext + 'ratedefinitions',
        rateTaxes: this.apiContext + 'taxes',
        apis: this.apiContext + 'apis',
        assignRatesForAPIOperation: this.apiContext + '/rate/assignrates',
        apiOperations: this.apiContext + 'apis/',
        apiOperationRates: this.apiContext + '/rate/apioperationrates',
        addRateCategory: this.apiContext + '/rate/addratecategory/',
        approvedApiOperationRate: this.apiContext + 'applications/',
    };

    constructor(private http: Http, private authService: AuthenticationService) {
    }

    /**
     * To add new category or subcategory
     * @param data
     * @returns {Observable<R>}
     */
    addCategory(data: Category) {
        return this.http.post(this.apiEndpoints['categories'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'New Category Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding New Category',
                        payload: null
                    };
                }
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
        return this.http.post(this.apiEndpoints['tariffs'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'New Tariff Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding New Tariff',
                        payload: null
                    };
                }
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
        return this.http.post(this.apiEndpoints['currencies'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'New Currency Added Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding New Currency',
                        payload: null
                    };
                }
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
        return this.http.post(this.apiEndpoints['rateCards'], JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'Rate Card Created Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Adding New Rate Card',
                        payload: null
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Adding New Rate Card',
                error: error
            }));
    }


    /**
     * Update ratecard for API operation
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    updateAPIOperationRate(appID: number, operatorId: string, apiname: string, apiversion: string, direction: string, data: UpdatedRate[]) {
        if (direction == "NBsubscriptions") {
            return this.http.post(this.apiEndpoints['approvedApiOperationRate'] + appID + '/apis/' + apiname + '/apiversion/' + apiversion + '/' + direction, data, this.getOptions())
                .map((response: Response) => {
                    if (response.status == 201) {
                        return {
                            success: true,
                            message: 'API operation Rate updated Successfully',
                            payload: response.json()
                        };
                    } else {
                        return {
                            success: false,
                            message: 'Error update API operation Rate',
                            payload: null
                        };
                    }
                })
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error update API operation Rate',
                    error: error
                }));
        } else {
            return this.http.post(this.apiEndpoints['approvedApiOperationRate'] + appID + '/operators/' + operatorId + '/apis/' + apiname + '/apiversion/' + apiversion + '/' + direction, data, this.getOptions())
                .map((response: Response) => {
                    if (response.status == 201) {
                        return {
                            success: true,
                            message: 'API operation Rate updated Successfully',
                            payload: response.json()
                        };
                    } else {
                        return {
                            success: false,
                            message: 'Error update API operation Rate',
                            payload: null
                        };
                    }
                })
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error update API operation Rate',
                    error: error
                }));
        }
    }


    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number, operatorId: number) {

        let url = '';

        if (operatorId) {
            url = this.apiContext + 'operators/' + operatorId + '/apis/' + apiName + '/operations/' + apiOperationId + '/operatorrates';
        } else {
            url = this.apiEndpoints['apiOperations'] + apiName + '/operations/' + apiOperationId + '/operationrates';
        }

        return this.http.post(url, JSON.stringify(data), this.getOptions())
            .map((response: Response) => {
                if (response.status == 201) {
                    return {
                        success: true,
                        message: 'Rate Values Assigned Successfully',
                        payload: response.json()
                    };
                } else {
                    return {
                        success: false,
                        message: 'Error Assigning Rates',
                        payload: null
                    };
                }
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
        return this.http.get(this.apiEndpoints['tariffs'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Tariff List Loaded Successfully',
                    payload: response.json()
                };
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
        return this.http.get(this.apiEndpoints['currencies'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Currency List Loaded Successfully',
                    payload: response.json()
                };
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
        return this.http.get(this.apiEndpoints['rateTypes'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Type List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Type List',
                error: error
            }));
    }

    /**
     * get categories
     * @returns {Observable<R|T>}
     */
    getCategoryList() {
        return this.http.get(this.apiEndpoints['categories'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Category List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Category List',
                error: error
            }));
    }

    /**
     * get rate definitions
     * @returns {Observable<R|T>}
     */
    getRateDefinitionList() {
        return this.http.get(this.apiEndpoints['rateDefinitions'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Definition List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => {
                return Observable.throw({
                    success: false,
                    message: 'Error Loading Rate Definition List',
                    error: error
                });
            });
    }

    /**
     * get rate cards
     * @returns {Observable<R|T>}
     */
    getRateCards() {
        return this.http.get(this.apiEndpoints['rateCards'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Card List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Rate Card List',
                error: error
            }));
    }


    /**
     * get rate tax
     * @returns {Observable<R|T>}
     */
    getRateTax() {
        return this.http.get(this.apiEndpoints['rateTaxes'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Rate Tax List Loaded Successfully',
                    payload: response.json()
                };
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
        return this.http.get(this.apiEndpoints['apis'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'API List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API List',
                error: error
            }));
    }

    /**
     * get rates for api, api operation, operator
     * @param apiName
     * @param apiOperationId
     * @param operatorId
     * @param type
     * @returns {Observable<R|T>}
     */
    getAPIOperationRates(apiName: string, apiOperationId: number, operatorId: number, type: string) {

        let url = '';

        switch (type) {
            case 'admin':
                url = this.apiEndpoints['apiOperations'] + apiName + '/operations/' + apiOperationId + '/ratedefinitions';
                break;
            case 'operator':
                url = this.apiContext + 'operators/' + operatorId + '/apis/' + apiName + '/operations/' + apiOperationId + '/ratedefinitions';
                break;
            case 'admin-assign':
                url = this.apiEndpoints['apiOperations'] + apiName + '/operations/' + apiOperationId + '/operationrates';
                break;
            case 'operator-assign':
                url = this.apiContext + 'operators/' + operatorId + '/apis/' + apiName + '/operations/' + apiOperationId + '/operatorrates';
                break;
        }

        return this.http.get(url, this.getOptions())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operation Rates',
                error: error
            }));
    }

    /**
     * get api operation for operator
     * @param api
     * @returns {Observable<R|T>}
     */
    getApiOperations(api: string) {
        return this.http.get(this.apiEndpoints['apiOperations'] + api + '/operations', this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Operator List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading API Operations',
                error: error
            }));
    }

    /**
     * to get all operator
     * @returns {Observable<R>}
     */
    getOperatorList() {
        return this.http.get(this.apiEndpoints['operators'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Operator List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Operators',
                error: error
            }));
    }


    /**
     * to get rate api operations
     * @returns {Observable<R>}
     */
    getApprovedAPIOperationRate(appID: number, apiname: string, apiversion: string, operatorId: string, direction: string) {
        if (direction == "NBsubscriptions") {
            return this.http.get(this.apiEndpoints['approvedApiOperationRate'] + appID + '/apis/' + apiname + '/apiversion/' + apiversion + '/' + direction, this.getOptions())
                .map((response: Response) => {
                    return {
                        success: true,
                        message: 'Operator List Loaded Successfully',
                        payload: response.json()
                    };
                })
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading Operators',
                    error: error
                }));
        }
        else {
            return this.http.get(this.apiEndpoints['approvedApiOperationRate'] + appID + '/operators/' + operatorId + '/apis/' + apiname + '/apiversion/' + apiversion + '/' + direction, this.getOptions())
                .map((response: Response) => {
                    return {
                        success: true,
                        message: 'Operation Rate list Loaded Successfully',
                        payload: response.json()
                    };
                })
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading Operation Rate list',
                    error: error
                }));
        }
    }

    /**
     * generate request headers
     * @returns {RequestOptions}
     */
    getOptions(): RequestOptions {
        const token = this.authService.loginUserInfo.getValue().token;
        const useName = this.authService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }
}
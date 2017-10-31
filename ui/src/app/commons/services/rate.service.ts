/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {RateRemoteDataService} from '../../data-providers/rate_remote-data.service';
import {
    SubCategory, Currency, ServerResponse, Category, Tariff, Rate,
    RateCategory, AssignRates
} from '../models/common-data-models';
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class RateService {

    constructor(private _remoteService: RateRemoteDataService, private authService: AuthenticationService) {
    }

    /**
     * this method call the rate remote service to create new tariff
     * @param tariff
     * @param callback
     */
    addTariff(tariff: Tariff, callback: Function) {
        this._remoteService.addTariff(tariff)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    /**
     * This method call the remote service to create a new category, subcategory or a tariff
     * @param type
     * @param name
     * @param code
     * @param description
     * @param callback
     */
    addCategory(name: string, code: string, description: string, created: string, callback: Function) {
        const model: Category = new Category();
        model.categoryName = name;
        model.categoryCode = code;
        model.categoryDescription = description;
        model.createdBy = created;
        this._remoteService.addCategory(model)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    /**
     * This method call the remote service to add new currency type
     * @param code
     * @param description
     * @param callback
     */
    addCurrency(code: string, description: string, createdby: string, callback: Function) {
        const model: Currency = new Currency();
        model.currencyCode = code;
        model.currencyDescription = description;
        model.createdBy = createdby;
        this._remoteService.addCurrency(model)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }


    /**
     * This method call the remote service to add new rate card
     * @param rateCard
     * @param callback
     */
    addNewRateCard(rateCard: Rate, callback: Function) {
        this._remoteService.addNewRateCard(rateCard)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }


    /**
     * get tariff
     * @param callback
     */
    getTariffList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getTariffList()
                .subscribe(
                    data => {
                        callback(data, true);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get currency
     * @param callback
     */
    getCurrencyList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getCurrencyList()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get rate types
     * @param callback
     */
    getRateTypeList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getRateTypeList()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get category
     * @param callback
     */
    getCategoryList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getCategoryList()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get rate definitions
     * @param callback
     */
    getRateDefinitionList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getRateDefinitionList()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, error.success);
                    }
                );
        }
    }

    /**
     * get rate cards
     * @param callback
     */
    getRateCards(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getRateCards()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get rate tax
     * @param callback
     */
    getRateTaxList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getRateTax()
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, false);
                    }
                );
        }
    }

    /**
     * get api operations of the selected api
     * @param api
     * @param callback
     */
    getApiOperations(api: string, callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getApiOperations(api)
                .subscribe(
                    data => {
                        callback(data, data.success);
                    },
                    error => {
                        callback(error, error.success);
                    }
                );
        }
    }

    /**
     * get rates of selected api, api operation, operator
     * @param apiName
     * @param apiOperationId
     * @param operatorId
     * @param callback
     */
    getAPIOperationRates(apiName: string, apiOperationId: number, operatorId: number, callback: Function) {
        if (this.authService.validateSession()) {
            if (operatorId) {
                this._remoteService.getAPIOperationRates(apiName, apiOperationId, operatorId, 'operator')
                    .subscribe(
                        data => {
                            let source = data;
                            this._remoteService.getAPIOperationRates(apiName, apiOperationId, operatorId, 'operator-assign')
                                .subscribe(
                                    data => {
                                        let response = {
                                            success: true,
                                            message: 'Api Operation Rates List Loaded Successfully',
                                            payload: {
                                                source: source,
                                                destination: data
                                            }
                                        };
                                        callback(response, response.success);
                                    },
                                    error => {
                                        callback(error, false);
                                    }
                                );
                        },
                        error => {
                            callback(error, error.success);
                        }
                    );
            } else {
                this._remoteService.getAPIOperationRates(apiName, apiOperationId, operatorId, 'admin')
                    .subscribe(
                        data => {
                            let source = data;
                            this._remoteService.getAPIOperationRates(apiName, apiOperationId, operatorId, 'admin-assign')
                                .subscribe(
                                    data => {
                                        let response = {
                                            success: true,
                                            message: 'Api Operation Rates List Loaded Successfully',
                                            payload: {
                                                source: source,
                                                destination: data
                                            }
                                        };
                                        callback(response, response.success);
                                    },
                                    error => {
                                        callback(error, false);
                                    }
                                );
                        },
                        error => {
                            callback(error, false);
                        }
                    );
            }
        }
    }

    /**
     * get available operators
     * @param callback
     */
    getOperatorList(callback: Function) {
        this._remoteService.getOperatorList()
            .subscribe(
                data => {
                    callback(data, data.success);
                },
                error => {
                    callback(error, error.success);
                }
            );
    }

    /**
     * assign rates for api, api operation, operator
     * @param data
     * @param apiName
     * @param apiOperationId
     * @param operatorId
     * @param callback
     */
    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number, operatorId: number, callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.assignRatesForAPIOperation(data, apiName, apiOperationId, operatorId)
                .subscribe(
                    data => {
                        callback(data);
                    },
                    error => {
                        callback(error);
                    }
                );
        }

    }
}


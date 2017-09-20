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
     * This method call the remode data service to create a new category, subcategory, tariff relationship
     * @param category
     * @param subcategory
     * @param tariff
     * @param callback
     */
    addRateCategory(rateCategory: RateCategory, id: number, callback: Function) {
        this._remoteService.addRateCategory(rateCategory, id)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
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
                    callback(data, data.success);
                },
                error => {
                    callback(error, false);
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
                    callback(data, data.success);
                },
                error => {
                    callback(error, false);
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
                    callback(data, data.success);
                },
                error => {
                    callback(error, false);
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
                    callback(data, data.success);
                },
                error => {
                    callback(error, false);
                }
            );
    }


    getTariffList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getTariffList()
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

    getRateDefinitionList(callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getRateDefinitionList()
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

    getApiOperations(api: string, callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getApiOperations(api)
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

    getRatesForAPIOperation(apiName: string, apiOperationId: number, operatorId: number, callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.getAPIOperationRates(apiName, apiOperationId, operatorId)
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

    assignRatesForAPIOperation(data, apiName: string, apiOperationId: number, operatorId: number, callback: Function) {
        if (this.authService.validateSession()) {
            this._remoteService.assignRatesForAPIOperation(data, apiName, apiOperationId, operatorId)
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
}


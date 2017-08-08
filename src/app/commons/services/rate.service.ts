/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {RateRemoteDataService} from '../../data-providers/rate_remote-data.service';
import {
    SubCategory, Currency, ServerResponse, Category, Tariff, Rate,
    RateCategory
} from '../models/common-data-models';


@Injectable()
export class RateService {

    constructor(private _remoteService: RateRemoteDataService) {
    }


    /**
     * This method call the remode data service to create a new category, subcategory, tariff relationship
     * @param category
     * @param subcategory
     * @param tariff
     * @param callback
     */
    addRateCategory(rateCategory: RateCategory, id: number, callback: Function) {
        console.log('add rate category service called');
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
        console.log('add new tariff service called');
        this._remoteService.addTariff(tariff)
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
     * This method call the remote service to create a new category, subcategory or a tariff
     * @param type
     * @param name
     * @param code
     * @param description
     * @param callback
     */
    addCategory(name: string, code: string, description: string, callback: Function) {
        console.log('add new category service called');
        const model: Category = new Category();
        model.categoryName = name;
        model.categoryCode = code;
        model.categoryDesc = description;
        this._remoteService.addCategory(model)
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
     * This method call the remote service to add new currency type
     * @param code
     * @param description
     * @param callback
     */
    addCurrency(code: string, description: string, callback: Function) {
        console.log('add new currency service called');
        const model: Currency = new Currency();
        model.currencyCode = code;
        model.currencyDescription = description;
        this._remoteService.addCurrency(model)
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
     * This method call the remote service to add new rate card
     * @param rateCard
     * @param callback
     */
    addNewRateCard(rateCard: Rate, callback: Function) {
        console.log('add new rate card service called');
        this._remoteService.addNewRateCard(rateCard)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }


    getTariffList(callback: Function) {
        console.log('get list of tariff service called');
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

    getCurrencyList(callback: Function) {
        console.log('get list of currency service called');
        this._remoteService.getCurrencyList()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getRateTypeList(callback: Function) {
        console.log('get list of rate types service called');
        this._remoteService.getRateTypeList()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getCategoryList(callback: Function) {
        console.log('get list of category types service called');
        this._remoteService.getCategoryList()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getRateDefinitionList(callback: Function) {
        console.log('get list of rate definitions service called');
        this._remoteService.getRateDefinitionList()
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


/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {RateRemoteDataService} from '../../data-providers/rate_remote-data.service';
import {SubCategory, Currency, ServerResponse, NewType, RateCard} from '../models/common-data-models';


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
    addSubcategory(category: string, subcategory: string, tariff: string, callback: Function) {
        console.log('add sub category service called');
        const model: SubCategory = new SubCategory();
        model.category = category;
        model.subcategory = subcategory;
        model.tariff = tariff;
        console.log(model.category);
        this._remoteService.addSubcategory(model)
            .subscribe(
                (response: ServerResponse) => {
                    console.log('good response');
                },
                (error: string) => {
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
    addNewType(type: string, name: string, code: string, description: string, callback: Function) {
        console.log('add new ' + type + ' service called');
        const model: NewType = new NewType();
        model.type = type;
        model.name = name;
        model.code = code;
        model.description = description;
        this._remoteService.addNewType(model)
            .subscribe(
                (response: ServerResponse) => {
                    console.log('good response' + response.messsage);
                },
                (error: string) => {
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
     * @param name
     * @param description
     * @param date
     * @param currency
     * @param rateType
     * @param tariff
     * @param callback
     */
    addNewRateCard(name: string, description: string, date: string,
                   currency: string, rateType: string, tariff: string, callback: Function) {
        console.log('add new rate card service called');
        const model: RateCard = new RateCard();
        model.name = name;
        model.description = description;
        model.date = date;
        model.currency = currency;
        model.rateType = rateType;
        model.tariff = tariff;
        this._remoteService.addNewRateCard(model)
            .subscribe(
                (response: ServerResponse) => {
                    console.log('good response' + response.messsage);
                },
                (error: string) => {
                    callback(error);
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


}


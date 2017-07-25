import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {RateService} from '../../commons/services/rate.service';
const currencyCodes = require('./currencies');


@Component({
    selector: 'app-rate-main',
    templateUrl: './rate-main.component.html',
    styleUrls: ['./rate-main.component.scss']
})
export class RateMainComponent implements OnInit {

    // var for currency
    currencycode: string;
    currencydesc: string;
    submissionError: string;


    private isSubcategory: boolean;
    private isValidCurrency: boolean;
    private isDescriptionEmpty: boolean;
    private isNameEmpty: boolean;
    private isDateEmpty: boolean;
    private isCurrencyEmpty: boolean;
    private isRateTypeEmpty: boolean;
    private isTariffEmpty: boolean;

    private name: string;
    private description: string;
    private date: string;
    private currency: string;
    private rateType: string;
    private tariff: string;

    constructor(private reportingService: ReportingRemoteDataService, private rateService: RateService) {
    }

    viewSubcategory() {
        if (this.isSubcategory) {
            this.isSubcategory = false;
        } else {
            this.isSubcategory = false;
        }
    }

    onRateCardSubmit(ratecardForm) {

        this.clearErrors();

        if (!this.isEmpty()) {
            console.log('submited rate card form ' + this.name + ':' + this.description
                + ':' + this.date + ':' + this.currency + ':' + this.rateType + ':' + this.tariff);
            this.rateService.addNewRateCard(this.name, this.description, this.date, this.currency,
                this.rateType, this.tariff, (errorMsg) => {
                this.submissionError = errorMsg;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);
            });
        } else {
            console.log('invalid fields');
            if (this.name.length == 0) {
                this.isNameEmpty = true;
            }
            if (this.description.length == 0) {
                this.isDescriptionEmpty = true;
            }
            if (this.date.length == 0) {
                this.isDateEmpty = true;
            }
            if (this.currency.length == 0) {
                this.isCurrencyEmpty = true;
            }
            if (this.rateType.length == 0) {
                this.isRateTypeEmpty = true;
            }
            if(this.tariff.length == 0){
                this.isTariffEmpty =true;
            }
        }


    }


    ngOnInit() {
        this.isSubcategory = false;
        this.clearErrors();

        this.name = '';
        this.description = '';
        this.date = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';
    }

    clearErrors() {
        this.isDateEmpty = false;
        this.isDescriptionEmpty = false;
        this.isNameEmpty = false;
        this.isCurrencyEmpty = false;
        this.isRateTypeEmpty = false;
        this.isTariffEmpty = false;
    }

    isEmpty() : boolean{
        if (this.name.length != 0 && this.description.length != 0 &&
            this.date.length != 0 && this.currency.length != 0 && this.rateType.length != 0 && this.tariff.length != 0)
            return false;
        else
            return true;
    }


    onSubmit(currencyForm) {
        console.log('form submitted : ' + this.currencycode + '  ' + this.currencydesc);

        this.rateService.addCurrency(this.currencycode, this.currencydesc, (errorMsg) => {
            this.submissionError = errorMsg;
            setTimeout(() => {
                this.submissionError = null;
            }, 5000);
        });
    }

    isCountryCode(name) {

        if (currencyCodes.indexOf(name) < 0) {
            this.isValidCurrency = true;
        } else {
            this.isValidCurrency = false;
        }
    }

    showModal() {
        console.log('clicked here');
        this.isSubcategory = true;
    }

}

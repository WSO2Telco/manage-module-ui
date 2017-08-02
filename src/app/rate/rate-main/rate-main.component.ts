import {Component, OnInit} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';

@Component({
    selector: 'app-rate-main',
    templateUrl: './rate-main.component.html',
    styleUrls: ['./rate-main.component.scss']
})
export class RateMainComponent implements OnInit {

    submissionError: string;

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

    private showSubcategory: boolean;
    private showAddCurrency: boolean;
    private showAddTariff: boolean;

    private dialogactionTitile: string;

    public tariffList: string[];

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        this.showSubcategory = false;
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.clearErrors();

        this.name = '';
        this.description = '';
        this.date = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';

        this.tariffList[];
        this.getTarifList();
    }

    getTarifList(){

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
            if (this.tariff.length == 0) {
                this.isTariffEmpty = true;
            }
        }


    }

    clearErrors() {
        this.isDateEmpty = false;
        this.isDescriptionEmpty = false;
        this.isNameEmpty = false;
        this.isCurrencyEmpty = false;
        this.isRateTypeEmpty = false;
        this.isTariffEmpty = false;
    }

    isEmpty(): boolean {
        if (this.name.length != 0 && this.description.length != 0 &&
            this.date.length != 0 && this.currency.length != 0 && this.rateType.length != 0 && this.tariff.length != 0)
            return false;
        else
            return true;
    }

    changeDialogTitle() {
        if (this.showAddCurrency)
            return this.dialogactionTitile = 'Add new Currency code';
        else
            return this.dialogactionTitile = 'Add new Tariff code';
    }

    public currencyList: string[] = [
        'AED',
        'AFN',
        'ALL',
        'AMD',
        'ANG',
        'AOA',
        'ARS',
        'AUD',
        'AWG',
        'AZN',
    ];


    public rateTypeList: string[] = [
        'Constant',
        'Precentage',
        'Commis',
        'Annual'
    ];
}

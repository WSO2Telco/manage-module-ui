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

    private tariffList: string[];
    private currencyList: string[];
    private rateTypeList: string[];
    private categoryList: string[];
    private categoryCodeList: string[];

    private showChildNewCategory: boolean;
    private showChildNewSubCategory: boolean;
    private showChildNewTariff: boolean;

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        this.showSubcategory = false;
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
        this.clearErrors();

        this.name = '';
        this.description = '';
        this.date = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';

        this.tariffList = [];
        this.currencyList = [];
        this.rateTypeList = [];
        this.categoryList = [];
        this.categoryCodeList = [];

        this.getTariffList();
        this.getCurrencyList();
        this.getRateTypeList();
        this.getCategoryList();
    }

    getTariffList() {
        this.rateService.getTariffList((response, status) => {
            if (status) {
                let count = 0;
                for (const entry of response) {
                    this.tariffList[count] = response[count].tariffName;
                    count++;
                }

            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });

    }

    getCurrencyList() {
        this.rateService.getCurrencyList((response, status) => {
            if (status) {
                let count = 0;
                for (const entry of response) {
                    this.currencyList[count] = response[count].currencyCode;
                    count++;
                }

            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });

    }

    getRateTypeList(){
        this.rateService.getRateTypeList((response, status) => {
            if (status) {
                let count = 0;
                for (const entry of response) {
                    this.rateTypeList[count] = response[count].rateTypeCode;
                    count++;
                }

            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });

    }

    getCategoryList(){
        this.rateService.getCategoryList((response, status) => {
            if (status) {
                let count = 0;
                for (const entry of response) {
                    this.categoryList[count] = response[count].categoryName;
                    this.categoryCodeList[count] = response[count].categoryCode;
                    count++;
                }

            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });

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
        else if (this.showAddTariff || this.showChildNewTariff)
            return this.dialogactionTitile = 'Add new Tariff code';
        else if (this.showChildNewCategory || this.showChildNewSubCategory)
            return this.dialogactionTitile = 'Add new Category';
    }

    onmodalfireHandler(event: string) {
        if (event === 'addNewCategory') {
            this.showChildNewCategory = true;
        } else if (event === 'addNewSubCategory') {
            this.showChildNewSubCategory = true;
        } else {
            this.showChildNewTariff = true;
        }

    }

    clearModalContent() {
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
    }

    /**
     * event handler method which is triggered when a new currency is added
     * @param event
     */
    onAddCurrencyHandler(event: boolean){
        console.log('add currency event called');
        if (event) {
            this.getCurrencyList();
        }
    }

    /**
     * event handler method which is triggered when a new category added, to refresh list
     * @param event
     */
    onAddCategoryHandler(event: boolean){
        console.log('add category event called');
        if (event) {
            this.getCategoryList();
        }
    }

    /**
     * event handler method which is triggered when a new tariff added, to refresh list
     * @param event
     */
    onAddTariffHandler(event :boolean){
        console.log('add tariff event called');
        if (event) {
            this.getTariffList();
        }
    }

}

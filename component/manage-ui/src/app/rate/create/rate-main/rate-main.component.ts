import {Component, OnInit} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {
    Category, Currency, Mapping, Rate, RateCategory, RateDefinition, RateTax, RateType,
    Tariff, Tax
} from '../../../commons/models/common-data-models';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-rate-main',
    templateUrl: './rate-main.component.html',
    styleUrls: ['./rate-main.component.scss']
})
export class RateMainComponent implements OnInit {

    public isDescriptionError:boolean;
    public isNameError:boolean;
    public isDateEmpty:boolean;
    public isCurrencyError:boolean;
    public isRateTypeError:boolean;
    public isTariffError:boolean;

    public currencyError:string;
    public rateTypeError:string;
    public tariffError:string;

    public nameError:string;
    public descriptionError:string;

    public rateDefName:string;
    public rateDefDescription:string;
    public currency:string;
    public rateType:string;
    public tariff:string;
    public rateTax:string;
    public rateTax2:string;
    public rateTax3:string;
    public rateTax4:string;
    public rateTax5:string;
    public taxId:number;

    public showSubcategory:boolean;
    public showAddCurrency:boolean;
    public showAddTariff:boolean;
    public isTariffSelect:boolean;
    public showAddTax:boolean;

    public dialogactionTitile:string;
    public selectedtariff:string[];

    public tariffList:Tariff[];
    public currencyList:Currency[];
    public rateTypeList:RateType[];
    public categoryList:Category[];
    public rateCategories:RateCategory[];
    public rateTaxList:RateTax[];
    public mappingList:Mapping[];
    public rateDefinitions:RateDefinition [];

    public showChildNewCategory:boolean;
    public showChildNewSubCategory:boolean;
    public showChildNewTariff:boolean;
    public taxValidityDatesArray:string[];
    public multiselect:string[];

    constructor(private rateService:RateService, private _router:Router,
                private authService:AuthenticationService, private message:MessageService) {
    }

    ngOnInit() {
        this.authService.validateSession();
        this.showSubcategory = false;
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.showAddTax = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
        this.isTariffSelect = false;
        this.clearErrors();

        this.rateDefName = '';
        this.rateDefDescription = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';
        this.rateTax = '';
        this.rateTax2 = '';
        this.rateTax3 = '';
        this.rateTax4 = '';
        this.rateTax5 = '';
        this.taxId = 0;

        this.tariffList = [];
        this.currencyList = [];
        this.rateTypeList = [];
        this.categoryList = [];
        this.mappingList = [];
        this.rateDefinitions = [];
        this.rateTaxList = [];
        this.rateCategories = [];
        this.selectedtariff = [];
        this.taxValidityDatesArray = [];
        this.multiselect = [];

        this.getTariffList();
        this.getCurrencyList();
        this.getRateTypeList();
        this.getCategoryList();
        this.getRateDefinitionList();
        this.getRateTaxList();
    }

    /**
     * this function will load the existing tariff list
     */
    getTariffList() {
        this.rateService.getTariffList((response) => {
            if (response.success) {
                this.tariffList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * this function will load the existing currency list
     */
    getCurrencyList() {
        this.rateService.getCurrencyList((response) => {
            if (response.success) {
                this.currencyList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * this function will load the existing rate types
     */
    getRateTypeList() {
        this.rateService.getRateTypeList((response) => {
            if (response.success) {
                this.rateTypeList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });

    }

    private getValidityText(taxesValidityDates) {
        let name = "";
        for (let m = 0; m < taxesValidityDates.length; m++) {
            name += " | Value : ";
            name += taxesValidityDates[m].taxValidityval;
            name += " Valid from ";
            name += taxesValidityDates[m].taxValidityactdate;
            name += " To ";
            name += taxesValidityDates[m].taxValiditydisdate;
        }
        return name;
    }

    /**
     * this function will load the existing rate taxes list
     */
    getRateTaxList() {
        this.rateService.getRateTaxList((response) => {
            if (response.success) {
                this.rateTaxList = response.payload.map((item:RateTax) => Object.assign({}, item,
                    {
                        id: item.taxId,
                        text: item.taxName + this.getValidityText(item.taxesValidityDates)
                    }));

            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * this function will load the available categories
     */
    getCategoryList() {
        this.rateService.getCategoryList((response) => {
            if (response.success) {
                this.categoryList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });

    }

    /**
     * load available rate definitions
     */
    getRateDefinitionList() {
        this.rateService.getRateDefinitionList((response) => {
            if (response.success) {
                this.rateDefinitions = response.payload;
            } else {
                this.message.error(response.message);
            }
        });

    }


    /**
     * when rate card is submitted
     * @param ratecardForm
     */
    onRateCardSubmition(ratecardForm) {

        const loginInfo = this.authService.loginUserInfo.getValue();
        let currency:Currency;
        let tariff:Tariff;
        let rateType:RateType;
        let rateTaxes:RateTax[] = [];
        let rateCard:Rate;
        let rateDefCategoryBase:number;
        let ratedefinition:RateDefinition;

        let validCurrency = false;
        let validTariff = false;
        let validRateType = false;


        /** for loop to assign currency id */
        for (const entry of this.currencyList) {
            if (entry.currencyCode == this.currency) {
                currency = new Currency();
                currency.currencyId = entry.currencyId;
                validCurrency = true;
            }
        }

        /** for loop to assign rateType id */
        for (const entry of this.rateTypeList) {
            if (entry.rateTypeCode == this.rateType) {
                rateType = new RateType();
                rateType.rateTypeId = entry.rateTypeId;
                validRateType = true;
            }
        }

        /** for loop to assign tariff id */
        for (const entry of this.tariffList) {
            if (entry.tariffName == this.tariff) {
                tariff = new Tariff();
                tariff.tariffId = entry.tariffId;
                validTariff = true;
            }
        }

        let count2 = 0;
        /** for loop to assign rate tax values*/
        for (const item of this.rateTax) {
            let temp = new RateTax();
            let temTax = new Tax();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            temp.level = 1;
            rateTaxes.push(temp);
            }
        for (const item of this.rateTax2) {
            let temp = new RateTax();
            let temTax = new Tax();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            temp.level = 2;
            rateTaxes.push(temp);
        }
        for (const item of this.rateTax3) {
            let temp = new RateTax();
            let temTax = new Tax();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            temp.level = 3;
            rateTaxes.push(temp);
        }
        for (const item of this.rateTax4) {
            let temp = new RateTax();
            let temTax = new Tax();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            temp.level = 4;
            rateTaxes.push(temp);
        }
        for (const item of this.rateTax5) {
            let temp = new RateTax();
            let temTax = new Tax();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            temp.level = 5;
            rateTaxes.push(temp);
        }
    

        /** assign value to rateDefCategoryBase */
        if (this.showSubcategory && this.rateCategories.length > 0) {
            rateDefCategoryBase = 1;
        } else {
            rateDefCategoryBase = 0;
        }

        if (this.rateType === 'PERCENTAGE') {
            rateDefCategoryBase = 1;
        }

        if (!this.isEmpty() && tariff != null && currency != null &&
            rateType != null && validTariff && validCurrency && validRateType) {
            rateCard = new Rate();

            ratedefinition = new RateDefinition();
            /** assign values for the rate definition */
            ratedefinition.rateDefName = this.rateDefName;
            ratedefinition.rateDefDescription = this.rateDefDescription;
            ratedefinition.rateDefDefault = 0;
            ratedefinition.currency = currency;
            ratedefinition.rateType = rateType;
            ratedefinition.rateDefCategoryBase = rateDefCategoryBase;
            ratedefinition.tariff = tariff;

            rateCard.rateDefinition = ratedefinition;

            if (rateDefCategoryBase == 0) {
                rateCard.rateCategories = [];
            } else {
                rateCard.rateCategories = this.rateCategories;
            }

            rateCard.rateTaxes = rateTaxes;
            rateCard.createdBy = loginInfo.userName;

            this.rateService.addNewRateCard(rateCard, (response) => {
                if (response.success) {
                    this.message.success(response.message);
                    this.reloadPage();
                } else {
                    this.message.error(response.message);
                }
            });
        } else {
            if (this.rateDefName.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name Cannot be Empty'
            }
            if (this.rateDefDescription.length == 0) {
                this.isDescriptionError = true;
            }
            if (!validRateType) {
                this.isRateTypeError = true;
                this.rateTypeError = 'Invalid Rate Type';
            }
            if (!validTariff) {
                this.isTariffError = true;
                this.tariffError = 'Invalid Tariff';
            }
            if (!validCurrency) {
                this.isCurrencyError = true;
                this.currencyError = 'Invalid Currency';
            }
            if (this.currency.length == 0) {
                this.isCurrencyError = true;
                this.currencyError = 'Currency can not be empty';
            }
            if (this.rateType.length == 0) {
                this.isRateTypeError = true;
                this.rateTypeError = 'Rate Type can not be empty';
            }
            if (this.tariff.length == 0) {
                this.isTariffError = true;
                this.tariffError = 'Tariff can not be empty';
            }
        }

    }

    /**
     * check for empty fields
     * @returns {boolean}
     */
    isEmpty():boolean {
        if (this.rateDefName.length != 0 && this.rateDefDescription.length != 0 && !this.isNameError && !this.isDescriptionError) {
            return false;
        } else {
            return true;
        }

    }

    /**
     * clear error labels
     */
    clearErrors() {
        this.isDateEmpty = false;
        this.isDescriptionError = false;
        this.isNameError = false;
        this.isCurrencyError = false;
        this.isRateTypeError = false;
        this.isTariffError = false;

        this.currencyError = '';
        this.rateTypeError = '';
        this.tariffError = '';
    }

    changeDialogTitle() {
        if (this.showAddCurrency)
            return this.dialogactionTitile = 'Add new Currency code';
        else if (this.showAddTariff || this.showChildNewTariff)
            return this.dialogactionTitile = 'Add new Tariff code';
        else if (this.showChildNewCategory || this.showChildNewSubCategory)
            return this.dialogactionTitile = 'Add new Category';
        else if (this.showAddTax)
            return this.dialogactionTitile = 'Add new Tax';
    }

    /**
     * event trigger to handle modal fire
     * @param event
     */
    onmodalfireHandler(event:string) {
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
        this.showAddTax = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
    }

    /**
     * event handler method which is triggered when a new currency is added
     * @param event
     */
    onAddCurrencyHandler(event:boolean) {
        // console.log('add currency event called');
        if (event) {
            this.getCurrencyList();
        }
    }

     /**
     * event handler method which is triggered when a new tax is added
     * @param event
     */
    onAddTaxHandler(event:boolean) {
        if (event) {
            this.getRateTaxList();
        }
    }

    /**
     * event handler method which is triggered when a new category added, to refresh list
     * @param event
     */
    onAddCategoryHandler(event:boolean) {
        // console.log('add category event called');
        if (event) {
            this.getCategoryList();
        }
    }

    /**
     * event handler mehod which assign category, sub category and tariff values.
     * @param event
     */
    onRateCategorySubmitionHandler(event:Mapping[]) {

        let count = 0;
        this.rateCategories = [];

        for (const maping of event) {

            let rateCategory = new RateCategory();

            /** for loop to assign category id */
            for (const entry of this.categoryList) {
                if (entry.categoryName == maping.category) {
                    const category = new Category();
                    category.categoryId = entry.categoryId;
                    rateCategory.category = category
                }
            }


            /** for loop to assign sub category id */
            for (const entry of this.categoryList) {
                if (maping.subcategory) {
                    if (entry.categoryName == maping.subcategory) {
                        const subcategory = new Category();
                        subcategory.categoryId = entry.categoryId;
                        rateCategory.subCategory = subcategory;
                    }
                } else {
                    const subcategory = new Category();
                    subcategory.categoryId = null;
                    rateCategory.subCategory = subcategory;

                }

            }


            /** for loop to assign tariff id */
            for (const entry of this.tariffList) {
                if (entry.tariffName == maping.tariff) {
                    const tariff = new Tariff();
                    tariff.tariffId = entry.tariffId;
                    rateCategory.tariff = tariff;
                }
            }

            this.rateCategories[count] = rateCategory;

            count++;
        }
    }

    /**
     * event handler method which is triggered when a new tariff added, to refresh list
     * @param event
     */
    onAddTariffHandler(event:boolean) {
        if (event) {
            this.getTariffList();
        }
    }

    /**
     * to check real time the name is not duplicated
     * @param name
     */
    isNameUnique(name) {

        let exists = false;
        this.isNameError = false;

        for (const entry of this.rateDefinitions) {
            if (this.rateDefName.trim() == entry.rateDefName.trim()) {
                exists = true;
            }
        }
        if (exists) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        } else if (this.rateDefName.length == 0) {
            this.isNameError = true;
            this.nameError = 'Name Cannot Be Empty';
        } else if (this.rateDefName.length > 45) {
            this.isNameError = true;
            this.nameError = 'Ony 45 Characters Allowed';
        } else {
            this.isNameError = false;
            this.nameError = '';
        }
    }

    descriptionEmpty(description) {
        if (description.length == 0) {
            this.isDescriptionError = true;
            this.descriptionError = 'Description can not be empty';
        } else if (description.length > 45) {
            this.isDescriptionError = true;
            this.descriptionError = 'Ony 45 Characters Allowed';
        } else {
            this.isDescriptionError = false;
            this.descriptionError = '';
        }
    }

    isCurrencyValid() {
        let invalid = true;
        this.isCurrencyError = false;
        for (const item of this.currencyList) {
            if (item.currencyCode == this.currency) {
                invalid = false;
            }
        }

        if (invalid) {
            this.isCurrencyError = true;
            this.currencyError = 'Invalid Currency';
        }
    }

    isRateTypeValid() {
        let invalid = true;
        this.isRateTypeError = false;
        for (const item of this.rateTypeList) {
            if (item.rateTypeCode == this.rateType) {
                invalid = false;
            }
        }

        if (invalid) {
            this.isRateTypeError = true;
            this.rateTypeError = 'Invalid Rate Type';
        }

        if (this.rateType === 'PERCENTAGE') {
            this.showSubcategory = true;
        }
    }

    isTariffValid() {
        let invalid = true;
        this.isTariffError = false;
        for (const item of this.tariffList) {
            if (item.tariffName == this.tariff) {
                invalid = false;
                this.isTariffSelect = true;


                this.selectedtariff[0] = item.tariffName;
                this.selectedtariff[1] = item.tariffDescription;
                this.selectedtariff[2] = item.tariffDefaultVal.toString();
                this.selectedtariff[3] = item.tariffMaxCount.toString();
                this.selectedtariff[4] = item.tariffExcessRate.toString();
                this.selectedtariff[5] = item.tariffDefRate.toString();
                this.selectedtariff[6] = item.tariffSPCommission.toString();
                this.selectedtariff[7] = item.tariffAdsCommission.toString();
                this.selectedtariff[8] = item.tariffOpcoCommission.toString();
                this.selectedtariff[9] = item.tariffSurChargeval.toString();
                this.selectedtariff[10] = item.tariffSurChargeAds.toString();
                this.selectedtariff[11] = item.tariffSurChargeOpco.toString();
            }
        }

        if (invalid) {
            this.isTariffError = true;
            this.tariffError = 'Invalid Tariff';
        }
    }


    /**
     * when sub category check box is changed
     */
    onCheckBox() {
        if (this.showSubcategory) {
            this.showSubcategory = false;
            this.mappingList = [];
        } else {
            this.showSubcategory = true;
        }
    }

    reloadPage() {

        /** reinitialize all the variables */

        this.rateDefName = '';
        this.rateDefDescription = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';
        this.rateTax = '';
        this.taxId = 0;
        this.rateCategories = [];
        this.mappingList = [];

        /** reload all the service values */
        this.getTariffList();
        this.getCurrencyList();
        this.getRateTypeList();
        this.getCategoryList();
        this.getRateDefinitionList();
        this.getRateTaxList();

        this.clearErrors();

    }
}

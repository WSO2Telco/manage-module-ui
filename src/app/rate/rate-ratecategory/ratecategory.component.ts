import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {Mapping, RateCategory} from '../../commons/models/common-data-models';

@Component({
    selector: 'app-ratecategory',
    templateUrl: './ratecategory.component.html',
    styleUrls: ['./ratecategory.component.scss']
})
export class RateCategoryComponent implements OnInit {

    private category: string;
    private subcategory: string;
    private tariff: string;
    private type: string;

    private submissionError: string;

    private isCategoryError: boolean;
    private isSubcategoryError: boolean;
    private isTariffError: boolean;
    private isMappigError: boolean;

    private categoryError: string;
    private subcategoryError: string;
    private tariffError: string;

    private isSubmitted: boolean;
    private showNewCategory: boolean;
    private showNewSubCategory: boolean;
    private showNewTariff: boolean;

    private rateCategories: Mapping[];

    @Input()
    private categoryList: string[];

    @Input()
    private tariffList: string[];

    @Output()
    private modalfire: EventEmitter<string> = new EventEmitter();

    @Output()
    private rateCatetgorySubmition: EventEmitter<Mapping[]> = new EventEmitter();

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        console.log('Sub name window loaded');
        this.category = '';
        this.subcategory = '';
        this.tariff = '';
        this.type = 'Sub Category';
        this.showNewCategory = false;
        this.showNewSubCategory = false;
        this.showNewTariff = false;
        this.clearErrors();
        this.rateCategories = [];
    }


    onSubmit(subcategoryForm) {

        console.log('$$on submit' + this.category + ' ' + this.subcategory + ' ' + this.tariff)

        this.clearErrors();

        if (this.category.length != 0 && this.tariff.length != 0) {
            let status = true;
            let mapping = new Mapping();
            if (this.checkCategory(this.category)) {
                mapping.category = this.category;
            } else {
                status = false;
                this.isCategoryError = true;
                this.categoryError = 'Not a valid category';
            }

            if (this.subcategory.length > 0){
                if(this.checkCategory(this.subcategory)) {
                    mapping.subcategory = this.subcategory;
                } else {
                    status = false;
                    this.isSubcategoryError = true;
                    this.subcategoryError = 'Not a valid category';
                }
            }else{
                mapping.subcategory = null;
            }

            if (this.checkTariff(this.tariff)) {
                mapping.tariff = this.tariff;
            } else {
                status = false;
                this.isTariffError = true;
                this.tariffError = 'Not a valid tariff';
            }
            if (status) {
                if (this.checkSimilarMapping()) {
                    this.rateCategories[this.rateCategories.length] = mapping;
                    this.rateCatetgorySubmition.emit(this.rateCategories);
                    this.category = '';
                    this.subcategory = '';
                    this.tariff = '';
                }else {
                    this.isMappigError =true;
                }
            }


        } else {
            console.log('invalid fields');
            if (this.category.length == 0) {
                this.isCategoryError = true;
                this.categoryError = 'Category can not be empty';
            }
            if (this.tariff.length == 0) {
                this.isTariffError = true;
                this.tariffError = 'Tariff can not be empty';
            }
        }

    }

    /**
     * this function will validate of invalid categories
     * @param category
     * @returns {boolean}
     */
    checkCategory(category: string): boolean {
        let status = false;

        for (const entry of this.categoryList) {
            if (entry == category) {
                status = true;
            }
        }
        return status;

    }

    /**
     * this function will validate of invalid tariffs
     * @param tariff
     * @returns {boolean}
     */
    checkTariff(tariff: string): boolean {
        let status = false;

        for (const entry of this.tariffList) {
            if (entry == tariff) {
                status = true;
            }
        }
        return status;
    }

    /**
     * this function will validate the mapping
     * @returns {boolean}
     */
    checkSimilarMapping(): boolean {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$' + JSON.stringify(this.rateCategories));
        if (this.rateCategories.length > 0) {
            for (const entry of this.rateCategories) {

                if(this.subcategory.length > 0){
                    if (this.category == entry.category) {
                        if (this.subcategory == entry.subcategory){
                            console.log('Error');
                            this.isSubcategoryError = true;
                            this.subcategoryError = 'Category Sub-Category mapping already exists';
                            return false;
                        }
                    }
                }else{
                    if (this.category == entry.category && entry.subcategory == null) {
                        this.isTariffError = true;
                        this.tariffError = 'Cannot add new Tariff to Existing Category' + this.subcategory.length;
                        return false;
                    }
                }
            }
            return true;
        }else {
            return true;
        }
    }


    onAddNewModalFire(actionName: string) {
        this.modalfire.emit(actionName);
    }

    clearErrors() {
        this.isSubcategoryError = false;
        this.isCategoryError = false;
        this.isTariffError = false;
        this.isMappigError = false;
        this.categoryError = '';
        this.submissionError = '';
        this.tariffError = '';
    }

}

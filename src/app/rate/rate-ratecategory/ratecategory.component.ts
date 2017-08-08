import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {Mapping} from '../../commons/models/common-data-models';

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

    private isCategoryEmpty: boolean;
    private isSubcategoryEmpty: boolean;
    private isTariffEmpty: boolean;

    private isSubmitted: boolean;
    private showNewCategory: boolean;
    private showNewSubCategory: boolean;
    private showNewTariff: boolean;

    @Input()
    private categoryList: string[];

    @Input()
    private tariffList: string[];

    @Output()
    private modalfire: EventEmitter<string> = new EventEmitter();

    @Output()
    private rateCatetgorySubmition: EventEmitter<Mapping> = new EventEmitter();

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
    }


    onSubmit(subcategoryForm) {

        this.clearErrors();

        if (this.category.length != 0 && this.tariff.length != 0) {
            let mapping = new Mapping();
            mapping.category= this.category;
            if(this.subcategory){
                mapping.subcategory = this.subcategory;
            }
            mapping.tariff = this.tariff;
            this.rateCatetgorySubmition.emit(mapping);

        } else {
            console.log('invalid fields');
            if (this.category.length == 0) {
                this.isCategoryEmpty = true;
            }
            if (this.tariff.length == 0) {
                this.isTariffEmpty = true;
            }
        }

    }

    onAddNewModalFire(actionName: string) {
        this.modalfire.emit(actionName);
    }

    clearErrors() {
        this.isSubcategoryEmpty = false;
        this.isCategoryEmpty = false;
        this.isTariffEmpty = false;
    }

}

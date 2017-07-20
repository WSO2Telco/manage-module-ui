import {Component, OnInit} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

    category: string;
    subcategory: string;
    tariff: string;

    submissionError: string;

    isCategoryEmpty: boolean;
    isSubcategoryEmpty: boolean;
    isTariffEmpty: boolean;

    isSubmitted: boolean;

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        console.log('Sub category window loaded');
        this.category = '';
        this.subcategory = '';
        this.tariff = '';
        this.clearErrors();
    }


    onSubmit(subcategoryForm) {
        this.clearErrors();

        if (this.category.length != 0 && this.subcategory.length != 0 && this.tariff.length != 0) {
            console.log('form submitted : ' + this.category + '  ' + this.subcategory + '  ' + this.tariff);
            this.rateService.addSubcategory(this.category, this.subcategory, this.tariff, (errorMsg) => {
                this.submissionError = errorMsg;
                setTimeout(() => {
                    this.submissionError = null
                }, 5000);
            });
        } else {
            if (this.category.length == 0) {
                this.isCategoryEmpty = true;
            }
            if (this.subcategory.length == 0) {
                this.isSubcategoryEmpty = true;
            }
            if (this.tariff.length == 0) {
                this.isTariffEmpty = true;
            }
        }

    }

    clearErrors() {
        this.isSubcategoryEmpty = false;
        this.isCategoryEmpty = false;
        this.isTariffEmpty = false;
    }

}

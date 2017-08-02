import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

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

        console.log("on submit" + this.category.length+ ":" +this.subcategory.length+":"+this.tariff.length);
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
            console.log("invalid fields");
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

    onAddNewModalFire(actionName: string) {
        this.modalfire.emit(actionName);
    }

    clearErrors() {
        this.isSubcategoryEmpty = false;
        this.isCategoryEmpty = false;
        this.isTariffEmpty = false;
    }

}

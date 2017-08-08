import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {Category} from "../../commons/models/common-data-models";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    name: string;
    code: string;
    description: string;

    @Input()
    private type: string;

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    private submissionError: string;

    private isNameError: boolean;
    private isCodeError: boolean;
    private isDescriptionError: boolean;

    private nameError: string;
    private codeError: string;
    private descriptionError: string;

    @Input()
    private existingCategories: Category[];

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        console.log('Sub name window loaded');
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
    }


    onSubmit(addCategoryForm) {
        this.clearErrors();

        if (this.name.length != 0 && this.code.length != 0 && this.description.length != 0) {
            console.log('form submitted : ' + this.name + '  ' + this.code + '  ' + this.description);
            this.rateService.addCategory(this.name, this.code, this.description, (response, status) => {
                if (status) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                } else {
                    this.submissionError = response;
                    setTimeout(() => {
                        this.submissionError = null;
                    }, 5000);

                }
            });
        } else {
            if (this.name.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name can not be empty';
            }
            if (this.code.length == 0) {
                this.isCodeError = true;
                this.codeError = 'Code can not be empty';
            }
            if (this.description.length == 0) {
                this.isDescriptionError = true;
                this.descriptionError = 'Description can not be empty';
            }
        }

    }

    clearErrors() {
        this.isCodeError = false;
        this.isNameError = false;
        this.isDescriptionError = false;

        this.nameError= '';
        this.codeError = '';
        this.descriptionError = '';
    }

    isNameUnique(name) {
        let state = false;
        for (const entry of this.existingCategories) {
            if (name == entry.categoryName) {
                state = true;
            }
        }
        if (state) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        } else {
            this.isNameError = false;
            this.nameError = '';
        }
    }

    isCodeUnique(code) {
        let state = false;
        for (const entry of this.existingCategories) {
            if (code == entry.categoryCode) {
                state = true;
            }
        }
        if (state) {
            this.isCodeError = true;
            this.codeError = 'Code Already Existing';
        } else {
            this.isCodeError = false;
            this.codeError = '';
        }

    }

}

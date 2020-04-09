import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {Category} from '../../../commons/models/common-data-models';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    name: string;
    code: string;
    description: string;

    @Input() type: string;

    @Output() onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output() modalClose: EventEmitter<boolean> = new EventEmitter();

    public submissionError: string;

    public isNameError: boolean;
    public isCodeError: boolean;
    public isDescriptionError: boolean;

    public nameError: string;
    public codeError: string;
    public descriptionError: string;

    @Input() existingCategories: Category[];

    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
    }


    /**
     * add button is clicked and on form submission
     * @param addCategoryForm
     */
    onSubmit(addCategoryForm) {
        const loginInfo = this.authService.loginUserInfo.getValue();
        if (this.name.length != 0 && this.code.length != 0 && this.description.length != 0 && !this.isDescriptionError
            && !this.isNameError && !this.isCodeError) {
           this.rateService.addCategory(this.name, this.code, this.description, loginInfo.userName, (response) => {
                if (response.success) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                    this.message.success(response.message);
                } else {
                    this.message.error(response.message);
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

    /**
     * clear all the error fields
     */
    clearErrors() {
        this.isCodeError = false;
        this.isNameError = false;
        this.isDescriptionError = false;

        this.nameError= '';
        this.codeError = '';
        this.descriptionError = '';
    }

    /**
     * check for duplicate category names
     * @param name
     */
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
        }else if (name.length == 0) {
            this.isNameError = true;
            this.nameError = 'Name Cannot Be Empty';
        } else if (name.length > 45) {
            this.isNameError = true;
            this.nameError = 'Ony 45 Characters Allowed';
        } else {
            this.isNameError = false;
            this.nameError = '';
        }
    }

    /**
     * check for duplicate category codes
     * @param code
     */
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

    /**
     * clear all the fields in the form
     */
    clearForm() {
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
    }

    /**
     * if the description is invalid
     * @param description
     */
    descriptionInvalid(description) {
        if (description.length == 0) {
            this.isDescriptionError = true;
            this.descriptionError = 'Description can not be empty';
        } else if(description.length > 45) {
            this.isDescriptionError = true;
            this.descriptionError = 'Ony 45 Characters Allowed';
        }else{
            this.isDescriptionError = false;
            this.descriptionError = '';
        }
    }

}

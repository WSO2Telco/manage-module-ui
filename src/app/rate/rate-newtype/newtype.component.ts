import {Component, OnInit, Input} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';

@Component({
    selector: 'app-newtype',
    templateUrl: './newtype.component.html',
    styleUrls: ['./newtype.component.scss']
})
export class NewtypeComponent implements OnInit {

    name: string;
    code: string;
    description: string;

    @Input()
    private type: string;

    submissionError: string;

    isNameEmpty: boolean;
    isCodeEmpty: boolean;
    isDescriptionEmpty: boolean;

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        console.log('Sub name window loaded');
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
        // this.type = '';
    }


    onSubmit(subcategoryForm) {
        this.clearErrors();

        if (this.name.length != 0 && this.code.length != 0 && this.description.length != 0) {
            console.log('form submitted : ' + this.name + '  ' + this.code + '  ' + this.description);
            this.rateService.addNewType(this.type, this.name, this.code, this.description, (errorMsg) => {
                this.submissionError = errorMsg;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);
            });
        } else {
            if (this.name.length == 0) {
                this.isNameEmpty = true;
            }
            if (this.code.length == 0) {
                this.isCodeEmpty = true;
            }
            if (this.description.length == 0) {
                this.isDescriptionEmpty = true;
            }
        }

    }

    clearErrors() {
        this.isCodeEmpty = false;
        this.isNameEmpty = false;
        this.isDescriptionEmpty = false;
    }

}

import {Component, OnInit, Input} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';

@Component({
    selector: 'app-addtariff',
    templateUrl: './tariff.component.html',
    styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

    name: string;
    description: string;

    @Input()
    private type: string;

    submissionError: string;

    isNameEmpty: boolean;
    isDescriptionEmpty: boolean;

    constructor(private rateService: RateService) {
    }

    ngOnInit() {
        console.log('Sub name window loaded');
        this.name = '';
        this.description = '';
        this.clearErrors();
        // this.type = '';
    }


    onSubmit(addTariffForm) {
        this.clearErrors();

        if (this.name.length != 0 && this.description.length != 0) {
            console.log('form submitted : ' + this.name + '  ' + this.description);
        } else {
            if (this.name.length == 0) {
                this.isNameEmpty = true;
            }
            if (this.description.length == 0) {
                this.isDescriptionEmpty = true;
            }
        }

    }

    clearErrors() {
        this.isNameEmpty = false;
        this.isDescriptionEmpty = false;
    }

}

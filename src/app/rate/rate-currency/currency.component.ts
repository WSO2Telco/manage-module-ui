/**
 * Created by rajithk on 7/25/17.
 */
import {Component, OnInit} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
const currencyCodes = require('./currencies');

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html'
})

export class CurrencyComponent implements OnInit {

    currencycode: string;
    currencydesc: string;
    submissionError: string;
    private isValidCurrency: boolean;

    constructor(private rateService: RateService){}

    ngOnInit(): void {}


    onCurrencyValueSubmit(currencyForm) {
        console.log('form submitted : ' + this.currencycode + '  ' + this.currencydesc);
        this.rateService.addCurrency(this.currencycode, this.currencydesc, (errorMsg) => {
            this.submissionError = errorMsg;
            setTimeout(() => {
                this.submissionError = null;
            }, 5000);
        });
    }

    // Check currency code against valid currency list
    isCurrencyCode(name) {
        if (currencyCodes.indexOf(name) < 0) {
            this.isValidCurrency = true;
        }else {
            this.isValidCurrency = false;
        }
    }

    // Todo: Validate existing currency list from database
}

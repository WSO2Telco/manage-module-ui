/**
 * Created by rajithk on 7/25/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {Currency} from "../../commons/models/common-data-models";
const currencyCodes = require('./currencies');

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent implements OnInit {

    private currency: Currency;

    private currencycode: string;
    private currencydesc: string;
    private submissionError: string;
    private isValidCurrency: boolean;

    private isEmpty: boolean;
    private currencyError: string;

    private desError: string;
    private isDesEmpty: boolean;

    @Input()
    private existingCodes: string[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    private currencyCodeError: string;

    constructor(private rateService: RateService, private authService: AuthenticationService) {
    }

    ngOnInit() {

        this.currencyCodeError = '';
        this.isValidCurrency = false;
        this.isEmpty = false;
        this.isDesEmpty = false;
        this.clearErrors();
    }

    /**
     * when form submitted
     * @param currencyForm
     */
    onCurrencyValueSubmit(currencyForm) {
        this.clearErrors();
        const loginInfo = this.authService.loginUserInfo.getValue();

        if (this.currencycode != null && this.currencydesc != null) {

            this.rateService.addCurrency(this.currencycode, this.currencydesc, loginInfo.userName, (response, status) => {
                if (status) {
                    const result = response;
                    console.log(JSON.stringify(result));
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
                if (this.currencycode == null ) {
                    this.isEmpty = true;
                    this.currencyError = 'This field is Required';
                }
                if (this.currencydesc == null ) {
                    this.isDesEmpty = true;
                    this.desError = 'This field is Required';
                }

        }
    }


    /**
     *  Check currency code against valid currency list
     * @param name
     */
    isCurrencyCode(name) {
        if (currencyCodes.indexOf(name) < 0) {
            this.clearErrors();
            this.isValidCurrency = true;
            this.currencyCodeError = 'Not a Valid Currency Type';
        } else {
            let state = false
            for (const entry of this.existingCodes) {
                if (name == entry) {
                    state = true;
                }
            }
            if (state) {
                this.isValidCurrency = true;
                this.currencyCodeError = 'Currency Type Already Existing';
            } else {
                this.isValidCurrency = false;
                this.currencyCodeError = '';
            }
        }
    }


    clearErrors() {
        this.isEmpty = false;
        this.isValidCurrency = false;
        this.currencyCodeError = '';
        this.currencyError = '';
        this.isDesEmpty = false;
        this.desError = '';
    }

    checkForError() {
        if (this.currencydesc != null) {
            this.isDesEmpty = false;
            this.desError = '';
        }
    }
}

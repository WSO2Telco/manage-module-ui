/**
 * Created by rajithk on 7/25/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';
import {Currency} from '../../../commons/models/common-data-models';
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

    private isCurrencyError: boolean;
    private isCurrencyDescError: boolean;

    private currencyDescError: string;
    private currencyCodeError: string;

    private isEmpty: boolean;
    private currencyError: string;

    private desError: string;
    private isDesEmpty: boolean;
    private list: string[];

    @Input()
    private existingCurrencyList: Currency[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();


    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        this.list = currencyCodes;
        this.currencycode = '';
        this.currencydesc = '';

        this.clearErrors();
    }

    /**
     * when form submitted
     * @param currencyForm
     */
    onCurrencyValueSubmit(currencyForm) {
        this.clearErrors();
        const loginInfo = this.authService.loginUserInfo.getValue();
        this.clearErrors();

        if (this.currencycode.length != 0 && this.currencydesc.length != 0) {
            this.rateService.addCurrency(this.currencycode, this.currencydesc, loginInfo.userName, (response, status) => {
                if (status) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                    this.message.success(response.message);
                } else {
                    this.message.error(response.message);
                }
            });
        } else {
            if (this.currencycode.length == 0) {
                this.currencyCodeError = 'Currency Cannot Be Empty';
                this.isCurrencyError = true;
            }
            if (this.currencydesc.length == 0) {
                this.currencyDescError = 'Currency Description Cannot Be Empty';
                this.isCurrencyDescError = true;
            }
        }
    }


    /**
     *  Check currency code against valid currency list
     * @param name
     */
    isCurrencyCode(val) {
        this.currencycode = val;
        if (currencyCodes.indexOf(this.currencycode) < 0) {
            this.isCurrencyError = true;
            this.currencyCodeError = 'Not a Valid Currency Type';
        } else {
            let state = false
            for (const entry of this.existingCurrencyList) {
                if (this.currencycode == entry.currencyCode) {
                    state = true;
                }
            }
            if (state) {
                this.isCurrencyError = true;
                this.currencyCodeError = 'Currency Type Already Existing';
            } else {
                this.isCurrencyError = false;
                this.currencyCodeError = '';
            }
        }
    }

    /**
     * clear error fields
     */
    clearErrors() {
        this.currencyCodeError = '';
        this.currencyDescError = '';

        this.isCurrencyError = false;
        this.isCurrencyDescError = false;
    }

    /**
     * clear all the fields in the form
     */
    clearForm() {
        this.currencycode = '';
        this.currencydesc = '';
        this.clearErrors();
    }
}

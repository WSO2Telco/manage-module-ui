/**
 * Created by sahanK on 10/01/17/18.
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-operatoronboarding-main',
    templateUrl: './operatoronboarding.component.html',
    styleUrls: ['./operatoronboarding.component.scss']
})
export class OperatorOnboardingMainComponent implements OnInit {

    private country: string;
    private mcc: string;
    private mnc: string;
    private operatorName: string;
    private operatorDes: string;
    private mncList: string[];

    private countyError: string;
    private mncError: string;
    private nameError: string;

    private countryList;
    private apiList: string[];

    private is_edit: boolean;
    private isSubscriberSelect: boolean;
    private isAppSelect: boolean;
    private isApiSelect: boolean;
    private isCalenderEnable: boolean;
    private appID: string;

    private operatorsList: string[];

    private isNameEmpty: boolean;
    private isInvalidquota: boolean;
    private name: string;
    private resultLabel: string;


    private isCountryError: boolean;
    private isApplicationError: boolean;
    private isMncError: boolean;
    private isNameError: boolean;

    private isCalendarEmpty: boolean;

    private showOperatorListPermissions: string;
    data;

    constructor(private message: MessageService,
                private authService: AuthenticationService) {

    }

    ngOnInit() {
        this.name = '';
        this.countryList = [];
        this.mncList = [];
        this.operatorsList = ['_All_'];
        this.apiList = [];

        this.country = '';
        this.mcc = '';
        this.mnc = '';
        this.operatorName = '';
        this.operatorDes = '';
        this.is_edit = false;
        this.isSubscriberSelect = false;
        this.isAppSelect = false;
        this.isApiSelect = false;
        this.isCalenderEnable = true;
        this.appID = '';
        this.getCountryList();
        this.clearErrors();

        this.showOperatorListPermissions = "quota:operatorList";
    }


    /**
     * to load the country list
     */
    getCountryList() {
        const mcc_mnc_list = require('mcc-mnc-list');

        let records = mcc_mnc_list.all();

        for (const entry of records) {
            if (entry.countryName !== null || entry.countryName !== '' || entry.countryName !== 'null') {
                this.countryList.push(entry.countryName);
            }
        }

        this.countryList = this.remove_duplicates(this.countryList);

    }


    remove_duplicates(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        arr = [];
        for (let key in obj) {
            arr.push(key);
        }
        return arr;
    }

    /**
     * this method is triggered when a country is selected
     * @param event
     */
    onCountrySelected() {
        this.mcc = '';
        this.mncList = [];
        this.mnc = '';

        const mcc_mnc_list = require('mcc-mnc-list');

        let mcclist = mcc_mnc_list.filter({countryName: this.country});


        if (mcclist.length != 0) {

            this.mcc = mcclist[0].mcc;

            for (const entry of mcclist) {
                this.mncList.push(entry.operator);
            }
        }


    }


    clearErrors() {
        this.isNameEmpty = false;
        this.isCalendarEmpty = false;
        this.isCountryError = false;
        this.isInvalidquota = false;
        this.isApplicationError = false;
        this.isMncError = false;
        this.isNameError = false;

        this.countyError = '';
        this.mncError = '';
        this.nameError = '';
    }


    /* isEmpty(): boolean {
     if (this.quotaInputValue != null && this.quotaInputValue.length != 0 &&
     this.quotaInputValue != '' && (Number(this.quotaInputValue) >= 0) ) {
     return false;
     } else {
     return true;
     }
     } */

    OpOnboardingFormSubmit(OpOnboardingForm) {

        let validCountry = false;
        let validMnc = false;
        this.clearErrors();

        for (const entry of this.countryList) {
            if (this.country == entry) {
                validCountry = true;
            }
        }


        for (const entry of this.mncList) {
            if (this.mnc == entry) {
                validMnc = true;
            }
        }


        if (validCountry && validMnc) {

            const data = {
                country: this.country,
                mcc: this.mcc,
                mnc: this.mnc
            };

            /*  this.operatorService.addNewOperator(data, (response) => {
             if (response.success) {
             this.message.success(response.message);
             //  this.resetDefault();
             } else {
             this.message.error(response.message);
             }
             }); */
        } else {
            this.message.error('Invalid Fields Please Check Again');
            if (!validCountry) {
                this.isCountryError = true;
                this.countyError = 'Invalid Country Selected';
            }
            if (!validMnc) {
                this.isMncError = true;
                this.mncError = 'Invalid MNC Selected';
            }


        }


    }

    validate(selected: boolean, valid: boolean) {
        if (selected && valid) {
            return true;
        } else if (!selected && !valid) {
            return true;
        } else {
            return false;
        }


    }


    clearForm() {
        this.clearErrors();

        this.country = '';
        this.mcc = '';
        this.mnc = '';
        this.mncList = [];
        this.operatorName = '';
        this.operatorDes = '';

        this.isCountryError = false;
        this.isCalenderEnable = true;
        this.resultLabel = '';
    }
}


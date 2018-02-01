/**
 * Created by sahanK on 10/01/18.
 */
import {Component, OnInit} from '@angular/core';
import {TokenData} from '../../../commons/models/operator-onboarding-data-models';
import {OperatorOnboardingDataService} from 'app/data-providers/operator-onboarding-data.service';
import {FieldSet} from 'app/commons/models/common-data-models';

@Component({
    selector: 'app-token-main',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss']
})
export class SetTokenComponent implements OnInit {
    constructor(private service: OperatorOnboardingDataService) {
    }

    tokenName: string;
    accessValidity: string;
    created: string;
    accessendpoint: string;

    refershtokenName: string;
    refreshValidity: string;
    refreshcreated: string;
    refreshendpoint: string;

    tokendata: TokenData[] = [];

    tokenFieldSet: FieldSet[] = [
        {columnName: 'Id', fieldName: 'id'},
        {columnName: 'Token', fieldName: 'name'},
        {columnName: 'Validity Time', fieldName: 'validity'},
        {columnName: 'Date', fieldName: 'date'},
        {columnName: 'Type', fieldName: 'type'},
        {columnName: 'EndPoint Url', fieldName: 'url'}
    ];


    ngOnInit() {
        this.clearErrors();
        this.service.TokenProvider.subscribe((res) => {
            this.tokendata = res;
        });

        this.service.getToken();
    }

    public refreshTokenFormSubmit(form, type) {
        if (form.valid) {
            this.service.addToken({
                name: this.refershtokenName,
                validity: this.refreshValidity,
                date: this.refreshcreated,
                url: this.refreshendpoint,
                type: type
            });
            form.reset();
        }
    }

    clearErrors() {
    }


    clearForm() {
        this.clearErrors();
    }
}


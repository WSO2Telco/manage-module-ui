/**
 * Created by sahanK on 10/01/18.
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {TokenData} from '../../../commons/models/operator-onboarding-data-models';
import {MessageService} from '../../../commons/services/message.service';
import {FieldSet} from 'app/commons/models/common-data-models';

@Component({
    selector: 'app-token-main',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss']
})
export class SetTokenComponent implements OnInit {
    constructor(private message: MessageService,
                private authService: AuthenticationService) {

    }

    tokendata: TokenData[] = [];

    tokenFieldSet: FieldSet[] = [
        {columnName: 'Token', fieldName: 'token'},
        {columnName: 'Validity Time', fieldName: 'validity'},
        {columnName: 'Date', fieldName: 'date'},
        {columnName: 'EndPoint Url', fieldName: 'url'}
    ];


    ngOnInit() {
        this.clearErrors();
    }


    clearErrors() {
    }


    clearForm() {
        this.clearErrors();
    }
}


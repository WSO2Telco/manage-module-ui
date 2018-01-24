/**
 * Created by sahanK on 10/01/18.
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-token-main',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss']
})
export class AddTokenComponent implements OnInit {
    constructor(private message: MessageService,
                private authService: AuthenticationService) {

    }

    ngOnInit() {
        this.clearErrors();
    }


    clearErrors() {
    }


    clearForm() {
        this.clearErrors();
    }
}


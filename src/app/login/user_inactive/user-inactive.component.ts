import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../commons/services/authentication.service';

@Component({
    selector: 'app-user-inactive',
    templateUrl: './user-inactive.component.html',
    styleUrls: ['./user-inactive.component.scss']
})
export class UserInactiveComponent implements OnInit {

    constructor(private _authenticationService: AuthenticationService) {
    }

    ngOnInit() {

    }

    logOut() {
        this._authenticationService.doLogout();
    }

}

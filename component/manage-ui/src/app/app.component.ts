import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './commons/services/authentication.service';
import {AppCommonService} from './commons/services/app-common.service';
import {LoginResponse} from './commons/models/common-data-models';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    private isLoggedIn = false;
    private isMenuExpanded = false;

    constructor(private _authenticationService: AuthenticationService,
                private _appCommonService: AppCommonService) {
    }

    ngOnInit() {
        this.isLoggedIn = this._authenticationService.isLoggedIn();
        this._authenticationService.loginUserInfo.subscribe((userInfo: LoginResponse) => {
            this.isLoggedIn = !!userInfo;
        });
        this._appCommonService.menuToggleStream.subscribe((isExpand: boolean) => this.isMenuExpanded = isExpand);

    }
}

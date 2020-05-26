import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './commons/services/authentication.service';
import { AppCommonService } from './commons/services/app-common.service';
import { LoginResponse } from './commons/models/common-data-models';
import { ThemeService } from './../app/commons/services/theme.service';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styles: [`:host {
        background-color: blue
    }`],
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    private isLoggedIn = false;
    private isMenuExpanded = false;
    private themeName;

    constructor(private _authenticationService: AuthenticationService,
        private _appCommonService: AppCommonService, private _themeService: ThemeService) {
    }

    ngOnInit() {
        this.isLoggedIn = this._authenticationService.isLoggedIn();
        this._authenticationService.loginUserInfo.subscribe((userInfo: LoginResponse) => {
            this.isLoggedIn = !!userInfo;

        });
        if (this.isLoggedIn) {
            this.themeName = this._authenticationService.loginUserInfo.getValue().theme
        }

        if (this.themeName) {
            this._themeService.toggleTheme(this.themeName.substring(0, this.themeName.indexOf("_")).replace(/[^a-zA-Z ]/g, ""));
        }

        this._appCommonService.menuToggleStream.subscribe((isExpand: boolean) => this.isMenuExpanded = isExpand);

    }
}

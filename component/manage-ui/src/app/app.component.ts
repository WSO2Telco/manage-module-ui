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
    private menuBackImage: boolean = false;

    constructor(private _authenticationService: AuthenticationService,
        private _appCommonService: AppCommonService,
        private _themeService: ThemeService) {
    }

    ngOnInit() {
        this.isLoggedIn = this._authenticationService.isLoggedIn();
        this._authenticationService.loginUserInfo.subscribe((userInfo: LoginResponse) => {
            this.isLoggedIn = !!userInfo;
        });

        if (this.isLoggedIn) {
            this._themeService.getThemeValue((response) => {
                if (response.success) {
                    this.themeName = response.payload.theme;
                    this._themeService.toggleTheme(this.themeName.substring(0, this.themeName.indexOf("_")).replace(/[^a-zA-Z ]/g, ""));
                    this.menuBackImage = JSON.parse(this.themeName.slice(this.themeName.indexOf("_") + 1));
                }
            });
        }

        this._appCommonService.menuToggleStream.subscribe((isExpand: boolean) => this.isMenuExpanded = isExpand);


    }


    onChangeMenuBackground(falg) {
        this.menuBackImage = falg;
    }
}

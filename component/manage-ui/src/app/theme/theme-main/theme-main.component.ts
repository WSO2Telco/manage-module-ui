import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../commons/services/authentication.service';
import { ThemeService } from '../../commons/services/theme.service';
import { AppComponent } from '../../app.component';
import { MessageService } from '../../commons/services/message.service';

@Component({
    selector: 'app-theme-main',
    templateUrl: './theme-main.component.html',
    styleUrls: ['./theme-main.component.scss']
})
export class ThemeComponent implements OnInit {

    public selectedTheme: string = 'none';
    public particleAnimation: boolean;
    public meunBackImage: boolean = false;
    public username: string = null;

    public allThemes = [
        {
            name: 'Default Theme',
            className: 'theme-one-light',
            primary: '#283593',
            accent: '#FFAB40',
            secondary: '#bf245f'
        },
        {
            name: 'Apigate Green',
            className: 'theme-apigate-green',
            primary: '#2E7D32',
            accent: '#FF6E40',
            secondary: '#6dc229'
        },
        {
            name: 'Apigate Blue',
            className: 'theme-apigate-blue',
            primary: '#14354C',
            accent: '#e19131',
            secondary: '#32c5d2'
        },
    ];

    constructor(private _authenticationService: AuthenticationService,
        private _themeService: ThemeService,
        private mainCom: AppComponent,
        private message: MessageService) {
    }

    ngOnInit() {
        let globalTheme
        this._themeService.getThemeValue((response) => {
            if (response.success) {
                globalTheme = response.payload.theme;
                this.selectedTheme = globalTheme.substring(0, globalTheme.indexOf("_"));
                this.meunBackImage = JSON.parse(globalTheme.slice(globalTheme.indexOf("_") + 1));
            } else {
                this.message.error(response.message);
            }
        });

    }


    themeChanged(themeName) {
        this.selectedTheme = themeName;
        this.updateThemeService();
        this._themeService.toggleTheme(themeName.replace(/[^a-zA-Z ]/g, ""));
    }

    onBackgroundToggle(e: any) {
        this.meunBackImage = e.currentTarget.checked;
        this.updateThemeService();
        this.mainCom.onChangeMenuBackground(e.currentTarget.checked);
    }

    updateThemeService() {
        const data = {
            value: this.selectedTheme + '_' + String(this.meunBackImage)
        };
        this._themeService.updateThemeValue(data, (response) => {
            if (response.success) {
                this.message.success(response.message);
            } else {
                this.message.error(response.message);
            }
        });
    }

}


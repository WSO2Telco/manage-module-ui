import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ThemeRemoteDataService } from '../../data-providers/theme_remote-data.service';


export const themeapigategreen = {
  'primary-color_main': '#2E7D32',
  'primary-color_menu': '#388E3C',
  'primary-color_light': '#4CAF50',
  'accent-light-color': '#bff5da',
  'accent-color': '#FF6E40',
  'accent-dark-color': '#3ea874',
  'secondary_color': '#6dc229',
  'menu-bg-url': 'url("/manage-service/public/images/menuBg_green.jpg")'

};

export const themeapigateblue = {
  'primary-color_main': '#283593',
  'primary-color_menu': '#303F9F',
  'primary-color_light': '#4f66e3',
  'accent-light-color': '#e1c237',
  'accent-color': '#FFAB40',
  'accent-dark-color': '#c1901d',
  'secondary_color': '#bf245f',
  'menu-bg-url': 'url("/manage-service/public/images/menuBg_blue.jpg")'
};

export const themeonelight = {
  'primary-color_main': '#14354C',
  'primary-color_menu': '#1b4665',
  'primary-color_light': '#164e6a',
  'accent-light-color': '#e1a637',
  'accent-color': '#e19131',
  'accent-dark-color': '#c1711d',
  'secondary_color': '#32c5d2',
  'menu-bg-url': 'url("/manage-service/public/images/menuBg_light.jpg")'
};

@Injectable()
export class ThemeService {

  constructor(private _remoteService: ThemeRemoteDataService,
    private slimLoadingBarService: SlimLoadingBarService) {
  }

  updateThemeValue(data, callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.updateTheme(data)
      .subscribe(
        response => {
          callback(response);
        },
        error => {
          callback(error);
        },
        () => {
          this.slimLoadingBarService.complete();
        }
      );
  }

  getThemeValue(callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.getTheme()
      .subscribe(
        response => {
          callback(response);
        },
        error => {
          callback(error);
        },
        () => {
          this.slimLoadingBarService.complete();
        }
      );
  }




  toggleTheme(themeName) {
    if (themeName == "themeapigategreen") {
      this.setTheme(themeapigategreen);
    } else if (themeName == "themeapigateblue") {
      this.setTheme(themeapigateblue);
    } else {
      this.setTheme(themeonelight)
    }
  }

  setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from '../commons/services/authentication.service';


@Injectable()
export class ThemeRemoteDataService {

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/manage-service/public/api/';
    private loginInfo;


    private apiEndpoints: Object = {
        updateTheme: this.apiContext + 'theme',
        getTheme: this.apiContext + 'theme/gettheme'
    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

    }

    /**
     * to update the theme
     * @param value
     * @returns {Observable<R>}
     */
    updateTheme(data) {
        return this.http.post(this.apiEndpoints['updateTheme'], data, this.getOptions())
            .map((response: Response) => {
                if (response.status == 200) {
                    return {
                        success: true,
                        message: 'Successfully Updated the Theme ',
                        payload: response.json()
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error While Updating Theme',
                error: error
            }));
    }


    /**
     * to get the theme
     * @returns {Observable<R>}
     */
    getTheme() {
        return this.http.get(this.apiEndpoints['getTheme'], this.getOptions())
            .map((response: Response) => {
                if (response.status == 200) {
                    return {
                        success: true,
                        message: 'Theme load Successfully',
                        payload: response.json()
                    };
                }
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error While loading Theme',
                error: error
            }));
    }

    getOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({ headers: headers });
    }


}

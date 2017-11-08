/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {AuthenticationService} from '../commons/services/authentication.service';

@Injectable()
export class BlackListRemoteDataService {
    private apiContext = 'https://localhost:9443/blacklist-whitelist-service/queries/';
    private loginInfo;

    private apiEndpoints: Object = {
        getApis: this.apiContext + 'apis',
        getBlackListNumbers: this.apiContext + 'GetBlacklistPerApi/',
        removeBlackListNumber: this.apiContext + 'RemoveFromBlacklist/',
        addBlackListNumbers: this.apiContext + 'Blacklist'
    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();
    }

    /**
     * Get Api List
     * @returns {Observable<R>}
     */
    getApiList() {
        return this.http.get(this.apiEndpoints['getApis'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'API List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => {
                return Observable.throw({
                    success: false,
                    message: 'Error Loading API List',
                    error: error
                });
            });
    }

    /**
     * Get List of BlackListed Numbers
     * @param id
     * @returns {Observable<R>}
     */
    getBlackListNumberList(id: string) {
        return this.http.get(this.apiEndpoints['getBlackListNumbers'] + id, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }


    /**
     * Remove BlackListed Numbers
     * @param apiId
     * @param mssidns
     * @returns {Observable<R>}
     */
    removeFromBlackList(mssidn: string, apiId: string) {
        const data = {
            'apiId': apiId
        };
        return this.http.post(this.apiEndpoints['removeBlackListNumber'] + mssidn, data, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    };

    /**
     * Add New BlackListNumber/s
     * @param apiId
     * @param apiName
     * @param msisdnList
     * @returns {Observable<R>}
     */
    addNewBlackListList(apiId: string, apiName: string, msisdnList: string[]) {
        const data = {
            'apiID': apiId,
            'apiName': apiName,
            'userID': this.loginInfo.userName,
            'msisdnList': msisdnList
        };
        // console.log(JSON.stringify(data));
        // console.log('hit in the blackList Number/s add remote data service');
        return this.http.post(this.apiEndpoints['addBlackListNumbers'], data, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().messages));
    }


    getOptions(): RequestOptions {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }
}


/**
 * Created by rajithk on 7/26/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ApiList, ServerResponse} from '../commons/models/common-data-models';
import {AuthenticationService} from '../commons/services/authentication.service';

@Injectable()
export class BlackListRemoteDataService {
    private apiContext = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});
    private loginInfo;

    private apiEndpoints: Object = {
        getApis: this.apiContext + '/blacklist/list',
        getBlackListNumbers: this.apiContext + '/blacklist/list/{id}',
        removeBlackListNumber: this.apiContext + '/blacklist',
        addBlackListNumbers: this.apiContext + '/blacklist'
    };

    constructor(private http: Http, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();
    }

    /**
     * Get Api List
     * @returns {Observable<R>}
     */
    getApiList() {
        console.log('hit in the rate remote data service');
        return this.http.get(this.apiEndpoints['getApis'], this.options)
            .map((response: Response) => {
            const result = response.json();
            console.log( result);
            return result;
             })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * Get List of BlackListed Numbers
     * @param id
     * @returns {Observable<R>}
     */
    getBlackListNumberList(id) {
        console.log('hit the blacklist remote number data service');

        return this.http.post(this.apiEndpoints['getApis'] + '/' + id, this.options)
            .map((response: Response) => {
            const result = response.json();
            return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }

    /**
     * Remove BlackListed Numbers
     * @param apiId
     * @param mssidn
     * @returns {Observable<R>}
     */
    removeFromBlackList(mssidn, apiId) {
            const data = {
                'apiId': apiId
            };
            console.log('hit in the BlackList remove data service');
            console.log(JSON.stringify(data));
            console.log(this.apiEndpoints['removeBlackListNumber'] + '/' , data);
            return this.http.post(this.apiEndpoints['removeBlackListNumber'] + '/' + mssidn, data, this.options)
                .map((response: Response) => {
                    const result = response.json();
                    return result;
                })
                .catch((error: Response) => Observable.throw(error.json().message()));
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
            'userID' : this.loginInfo.userName,
            'msisdnList': msisdnList
        };
        console.log(JSON.stringify(data));
        console.log('hit in the blackList Number/s add remote data service');
        return this.http.post(this.apiEndpoints['addBlackListNumbers'], data, this.options)
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw(error.json().message()));
    }
}


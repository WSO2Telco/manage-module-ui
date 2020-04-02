
import { throwError as observableThrowError, Observable } from 'rxjs';
/**
 * Created by sahanK on 08/02/17.
 */
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../commons/services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class QuotacapRemoteDataService {

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/quota-service/services/';
    private loginInfo;


    private apiEndpoints: Object = {
        subscribers: this.apiContext + 'getSubscribersByOperator?operatorName=',
        quotaLimitInfo: this.apiContext + 'getQuotaLimitInfo',
        operators: this.apiContext + 'getOperatorsBySubscriber?subscriberName=',
        validityPeriod: this.apiContext + 'checkIfDatesOverlap',
        addNewQuotaLimit: this.apiContext + 'applyQuotaLimit',

    };

    constructor(private http: HttpClient, private _authenticationService: AuthenticationService) {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

    }

    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getSubscribers(operatorName: string) {
        return this.http.get(this.apiEndpoints['subscribers'] + operatorName, this.getOptions())
            .pipe(
                map((response) => {
                    return {
                        success: true,
                        message: 'Subscribers Loaded Successfully',
                        payload: response
                    };
                }),
                catchError((error: Response) => observableThrowError({
                    success: false,
                    message: 'Error Loading Subscribers',
                    error: error
                }))
            )
    }

    /**
     * to get all available subscribers of provider
     * @returns {Observable<R>}
     */
    getOperatorOfsubscriber(subscriberID: string) {
        return this.http.get(this.apiEndpoints['operators'] + subscriberID, this.getOptions())
            .pipe(
                map((response) => {
                    return {
                        success: true,
                        message: 'Operators Loaded Successfully',
                        payload: response
                    };
                }),
                catchError((error: Response) => observableThrowError({
                    success: false,
                    message: 'Error Loading Operators',
                    error: error
                }))
            )
    }

    /**
     * to get quota values
     * @param id
     * @returns {Observable<R>}
     */
    getQuotaLimitInfo(data) {
        return this.http.post(this.apiEndpoints['quotaLimitInfo'], data, this.getOptions())
            .pipe(
                map((response) => {
                    return {
                        success: true,
                        message: 'Quota Limit Info Loaded Successfully',
                        payload: response
                    };
                }),
                catchError((error: Response) => observableThrowError({
                    success: false,
                    message: 'Error Loading Quota Limit Info',
                    error: error
                }))
            )
    }

    getValidityPeriod(data) {
        return this.http.post(this.apiEndpoints['validityPeriod'], data, this.getOptions())
            .pipe(
                map((response) => {
                    return {
                        success: true,
                        message: 'Period Validation Success',
                        payload: response
                    };
                }),
                catchError((error: Response) => observableThrowError({
                    success: false,
                    message: 'Error While Validating Time Period',
                    error: error
                }))
            )
    }

    /**
     * to add new quota value to the DB
     * @param subscriberId
     * @param appId
     * @param apiId
     * @param quoatavalue
     * @returns {Observable<R>}
     */
    addNewQuotaLimit(data) {
        return this.http.post(this.apiEndpoints['addNewQuotaLimit'], data, this.getOptions())
            .pipe(
                map((response) => {
                    return {
                        success: true,
                        message: 'New Quota Value Added Successfully',
                        payload: response
                    };
                }),
                catchError((error: Response) => observableThrowError({
                    success: false,
                    message: 'Error While Adding New Quota Limit',
                    error: error
                }))
            )
    }

    getOptions() {
        const token = this._authenticationService.loginUserInfo.getValue().token;
        const useName = this._authenticationService.loginUserInfo.getValue().userName;
        const headers = new HttpHeaders(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return { headers: headers };
    }


}

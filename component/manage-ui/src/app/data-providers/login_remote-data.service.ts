
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User, LoginResponse } from '../commons/models/common-data-models';


@Injectable()
export class LoginRemoteDataService {

    private httpBasicClient: HttpClient
    private apiContext: string = 'api';
    private apiEndpoints = {
        login: this.apiContext + '/authentication/login',
        logout: this.apiContext + '/authentication/logout',
        getUserDetails: this.apiContext + '/authentication/userdetails'
    };

    constructor(private http: HttpClient, handler: HttpBackend) {
        this.httpBasicClient = new HttpClient(handler);
    }

    /**
     * Login service api
     * @param data
     * @returns {Observable<User>}
     */
    login(data: User){
        const httpOption = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' + btoa(`${data.userName}:${data.userName}`),
                'Content-Type': 'application/json',
                'user-name': data.userName
            })
        };

        return this.httpBasicClient.get(this.apiEndpoints.login, httpOption).pipe(
            map((response) => {
                return {
                  success: true,
                  message: 'Login Successful',
                  payload: response
                };
              }),
              catchError((error: Response) => Observable.throw({
                success: false,
                message: 'Login Error',
                error: error
              }))
        )
    }

    /**
     * Logout Service api
     * @param userId
     * @returns {Observable<boolean>}
     */
    logout(userId: string): Observable<boolean> {
        return this.httpBasicClient.get(this.apiEndpoints.logout + '/' + userId).pipe(
            map((response: Response) => true), catchError((error: Response) => observableThrowError(error['message']))
        )
    }

    getUserDetails(userName: string) {
        return this.http.get(this.apiEndpoints.getUserDetails + '/' + userName)
    }

}

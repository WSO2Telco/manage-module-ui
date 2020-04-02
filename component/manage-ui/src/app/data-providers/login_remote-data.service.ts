
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User, LoginResponse } from '../commons/models/common-data-models';


@Injectable()
export class LoginRemoteDataService {

    private apiContext: string = 'api';
    private httpBasicClient: HttpClient;

    private apiEndpoints = {
        login: this.apiContext + '/authentication/login',
        logout: this.apiContext + '/authentication/logout',
        getUserDetails: this.apiContext + '/authentication/userdetails'
    };

    constructor(private http: HttpClient) {
    }

    /**
     * Login service api
     * @param data
     * @returns {Observable<User>}
     */
    login(data: User): Observable<LoginResponse> {
        const httpOption = {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' + btoa(`${data.userName}:${data.userName}`),
                'Content-Type': 'application/json',
                'user-name': data.userName
            })
        };

        return this.httpBasicClient.get<LoginResponse>(this.apiEndpoints.login, httpOption)
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

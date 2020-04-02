
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User, LoginResponse} from '../commons/models/common-data-models';


@Injectable()
export class LoginRemoteDataService {

  private apiContext: string = 'api';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private options: RequestOptions = new RequestOptions({headers: this.headers});

  private apiEndpoints: Object = {
    login: this.apiContext + '/authentication/login',
    logout: this.apiContext + '/authentication/logout',
    getUserDetails: this.apiContext + '/authentication/userdetails'
  };

  constructor(private http: Http) {
  }

  /**
   * Login service api
   * @param data
   * @returns {Observable<User>}
   */
  login(data: User) {
    return this.http.get(this.apiEndpoints['login'], this.getOptions(data))
        .map((response: Response) => {
          return {
            success: true,
            message: 'Login Successful',
            payload: response.json()
          };
        })
        .catch((error: Response) => observableThrowError({
          success: false,
          message: 'Login Error',
          error: error
        }));
  }

  /**
   * Logout Service api
   * @param userId
   * @returns {Observable<boolean>}
   */
  logout(userId: string): Observable<boolean> {
    return this.http.get(this.apiEndpoints['logout'] + '/' + userId)
      .map((response: Response) => response.json().success)
      .catch((error: Response) => observableThrowError(error.json().message))
  }

  getUserDetails(userName: string) {
    // console.log('hit in the rate remote data service to get currency');
    return this.http.get(this.apiEndpoints['getUserDetails'] + '/' + userName)
        .map((response: Response) => {
          const result = response.json();
          return result;
        })
        .catch((error: Response) => observableThrowError(error.json().message()));
  }

    /**
     * generate request headers
     * @returns {RequestOptions}
     */
    getOptions(data: User): RequestOptions {
        const token = btoa(data.userName + ':' + data.password);
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': data.userName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }

}

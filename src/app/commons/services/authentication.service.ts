import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {LoginRemoteDataService} from '../../data-providers/login_remote-data.service';
import {User, LoginResponse} from '../models/common-data-models';


@Injectable()
export class AuthenticationService {

    loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);

    constructor(private _router: Router, private _remoteService: LoginRemoteDataService) {
        const _loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        this.loginUserInfo.next(_loginUserInfo);
    }

    doLogin(userName: string, password: string, callback: Function) {
        const user: User = new User();
        user.userName = userName;
        user.password = password;
        this._remoteService.login(user)
            .subscribe(
                (loginInfo: LoginResponse) => {
                    if (loginInfo.success) {
                        this.loginUserInfo.next(loginInfo);
                        sessionStorage.setItem('loginUserInfo', JSON.stringify(loginInfo));
                        this._router.navigate(['home']);

                    } else {
                        this._remoteService.logout(loginInfo.userName);
                        callback(loginInfo.message);
                    }
                },
                (error: string) => {
                    callback(error);
                }
            );
    }

    doLogout() {
        const user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        if (!!user) {
            this._remoteService.logout(user.userName);
            sessionStorage.setItem('loginUserInfo', null);
            this.loginUserInfo.next(null);
            this._router.navigate(['login']);

        } else {
            this._router.navigate(['login']);
        }

    }

    isLoggedIn() {
        const loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
        return !!loginInfo;
    }

    isAdmin(){
        const loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
        return loginInfo.isAdmin;
    }

    getUserDetails(userName: string, callback: Function) {
        // console.log('get list of currency service called');
        this._remoteService.getUserDetails(userName)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }



}

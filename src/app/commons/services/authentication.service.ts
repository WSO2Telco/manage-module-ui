import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {LoginRemoteDataService} from '../../data-providers/login_remote-data.service';
import {User, LoginResponse} from '../models/common-data-models';
import {MessageService} from './message.service';


@Injectable()
export class AuthenticationService {

    loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);
    private timerHandle;

    constructor(private _router: Router, private _remoteService: LoginRemoteDataService,
                private message: MessageService) {
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
                        loginInfo.start = new Date().getTime();
                        this.loginUserInfo.next(loginInfo);
                        sessionStorage.setItem('loginUserInfo', JSON.stringify(loginInfo));
                        // this.startChecking();
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

    isAdmin() {
        const loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
        return loginInfo.isAdmin;
    }

    getUserDetails(userName: string, callback: Function) {
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

    validateSession() {
        // const loginInfo = this.loginUserInfo.getValue();
        // const diff = new Date().getTime() - loginInfo.start;
        // if (diff > 10000) {
        //     this.message.error('Session Expired Please Login');
        //     this.doLogout();
        // } else {
        //     return true;
        // }
        return true;
    }

    reloadPage() {
        const user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        if (!!user) {
            console.log('reloading');
            this._remoteService.logout(user.userName);
            sessionStorage.setItem('loginUserInfo', null);
            this.loginUserInfo.next(null);
            this._router.navigate(['login']);
        }
    }

    startChecking() {
        this.resetTimer();
        window.onload = this.resetTimer.bind(this);
        document.onmousemove = this.resetTimer.bind(this);
        document.onkeypress = this.resetTimer.bind(this);
        document.onmousewheel = this.resetTimer.bind(this);
        document.onclick = this.resetTimer.bind(this);
    }

    stopChecking() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        }

        window.onload = null;
        document.onmousemove = null;
        document.onkeypress = null;
        document.onmousewheel = null;
        document.onclick = null;
    }

    private resetTimer() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        }
        this.timerHandle = setTimeout(() => {
            // this.message.error('Session Expired Please Login');
            this.stopChecking();
            this.doShit();
        }, 10000);
    }

    doShit() {
        const user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        if (!!user) {
            this._remoteService.logout(user.userName);
            sessionStorage.setItem('loginUserInfo', null);
            this.loginUserInfo.next(null);
            this._router.navigate(['']);
            this._router.navigate(['#/login']);
        } else {
            this._router.navigate(['login']);
        }
    }

}

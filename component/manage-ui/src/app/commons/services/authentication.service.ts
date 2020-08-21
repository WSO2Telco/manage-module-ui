import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginRemoteDataService } from '../../data-providers/login_remote-data.service';
import { User, LoginResponse } from '../models/common-data-models';


@Injectable()
export class AuthenticationService {

    loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);
    isInactive: BehaviorSubject<boolean> = new BehaviorSubject(null);

    private timerHandle;

    constructor(private _router: Router, private _remoteService: LoginRemoteDataService) {
        const _loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        this.loginUserInfo.next(_loginUserInfo);
        this.isInactive.next(false);
    }

    doLogin(userName: string, password: string, callback: Function) {
        const user: User = new User();
        user.userName = userName;
        user.password = password;
        this._remoteService.login(user)
            .subscribe(
            data => {
                if (data.success) {
                    const loginInfo = new LoginResponse();
                    loginInfo.start = new Date().getTime();
                    loginInfo.userName = data.payload.userName;
                    loginInfo.permissions = data.payload.permissions;
                    loginInfo.operatorName = data.payload.operatorName
                    loginInfo.isAdmin = true;
                    loginInfo.operator = '';
                    loginInfo.theme= data.payload.theme
                    loginInfo.token = btoa(userName + ':' + password);

                    this.loginUserInfo.next(loginInfo);
                    sessionStorage.setItem('loginUserInfo', JSON.stringify(loginInfo));
                    this._router.navigate(['home']);
                } else {
                    this._remoteService.logout(data.payload.userName);
                    callback(data.message);
                }
            },
            error => {
                callback(error.message);
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
        return this.isInactive;
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
        window.onbeforeunload = (event) => {
            this.stopChecking();
            this.doLogout();
        };
    }

    stopChecking() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        }

        window.onload = null;
        document.onmousemove = null;
        document.onkeypress = this.showMessage.bind(this);
        document.onmousewheel = null;
        document.onclick = this.showMessage.bind(this);
    }

    showMessage() {
        this.doLogout();
        this.isInactive.next(true);
    }

    resetTimer() {
        this.isInactive.next(false);
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        }
        this.timerHandle = setTimeout(() => {
            this.stopChecking();
        }, 900000);
    }

    hasPermissions(patternStr: string): boolean {
        const pattern: string[] = patternStr.split(',');

        let permissionsExist = false;
        if (pattern.length) {
            const userInfo: LoginResponse = this.loginUserInfo.getValue();
            pattern.forEach((p: string) => {
                const propArray = p.split(':');
                if (propArray.indexOf('*') >= 0) {
                    permissionsExist = permissionsExist || true;
                } else {
                    permissionsExist = permissionsExist || this.isPropertyExist(userInfo.permissions, propArray);
                }
            });

        }
        return permissionsExist;

    }

    private isPropertyExist(obj: any, prp: string[]): boolean {
        if (obj && prp.length) {
            const next = prp.shift();
            return !!obj[next] && (!prp.length || this.isPropertyExist(obj[next], prp));
        } else {
            return false;
        }
    }

}

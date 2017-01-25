import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {RemoteDataService} from "./remote-data.service";
import {Response} from "@angular/http";

export class User {
  userName: string;
  password: string;
}

@Injectable()
export class AuthenticationService {

  loginUserInfo: Subject<User> = new Subject();

  constructor(private _router: Router, private _remoteService: RemoteDataService) {
  }

  doLogin(userName: string, password: string,callback:Function) {
    let user: User = new User();
    user.userName = userName;
    user.password = password;

    this._remoteService.login(user)
      .subscribe(
        (user: any) => {
          this.loginUserInfo.next(user);
          sessionStorage.setItem('loginUserInfo', JSON.stringify(user));
          this._router.navigate(['home']);
        },
        (error: string) => {
          callback(error)
        }
      );
  }

  doLogout() {
    let user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
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
    let user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
    return !!user;
  }

}

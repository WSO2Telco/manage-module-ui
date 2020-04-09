import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './commons/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    canActivate() {
        if (this._authenticationService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigate(['login']);
            return false;
        }
    }
}


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._authenticationService.isLoggedIn()) {
            this._router.navigate(['home']);
            return false;
        } else {
            return true;
        }
    }

}

@Injectable()
export class BillingGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    canActivate() {
        if (this._authenticationService.isLoggedIn()) {
            if (this._authenticationService.loginUserInfo.getValue().billing) {
                return true;
            } else {
                this._router.navigate(['home']);
                return false;
            }

        } else {
            this._router.navigate(['login']);
            return false;
        }
    }
}


@Injectable()
export class PermissionGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const permissions: string = route.data['permissions'];
        if (this._authenticationService.isLoggedIn()) {
            if (this._authenticationService.hasPermissions(permissions)) {
                return true;
            } else {
                return false;
            }

        } else {
            this._router.navigate(['login']);
            return false;
        }

    }

}



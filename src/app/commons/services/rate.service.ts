/**
 * Created by manoj on 7/19/17.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {RateRemoteDataService} from '../../data-providers/rate_remote-data.service';
import {SubCategory, LoginResponse} from '../models/common-data-models';


@Injectable()
export class RateService {

    loginUserInfo: BehaviorSubject<LoginResponse> = new BehaviorSubject(null);

    constructor(private _router: Router, private _remoteService: RateRemoteDataService) {
        const _loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        this.loginUserInfo.next(_loginUserInfo);
    }

    addSubcategory(category: string, subcategory: string, tariff: string, callback: Function) {
        console.log('hit in the rate service');
        const model: SubCategory = new SubCategory();
        model.category = category;
        model.subcategory = subcategory;
        model.tariff = tariff;
        console.log(model.category);
        this._remoteService.addSubcategory(model)
            .subscribe(
                (loginInfo: LoginResponse) => {
                    console.log('good response');
                },
                (error: string) => {
                    callback(error);
                }
            );
    }


}


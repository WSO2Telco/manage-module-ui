import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operator } from 'app/commons/models/operator-onboarding-data-models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MessageService } from 'app/commons/services/message.service';
import { apiEndpoints } from '../config/api.endpoints';
import { AuthenticationService } from 'app/commons/services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperatorOnboardingDataService {

  public OperatorsProvider: Subject<Operator[]> = new BehaviorSubject<Operator[]>(null);

  constructor(private http: Http,
    private slimLoadingBarService: SlimLoadingBarService,
    private authService: AuthenticationService,
    private message: MessageService) { }

  getOperators() {
    this.slimLoadingBarService.start();
    this.http.get(apiEndpoints.operatorOnboarding.getOperators, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Loading Operator List',
        error: error
      }))
      .subscribe(data => {
        this.OperatorsProvider.next(data);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  private getOptions(): RequestOptions {
    const token = this.authService.loginUserInfo.getValue().token;
    const useName = this.authService.loginUserInfo.getValue().userName;
    const headers = new Headers(
      {
        'Authorization': 'Basic ' + token,
        'user-name': useName,
        'Content-Type': 'application/json'
      });
    return new RequestOptions({ headers: headers });
  }

}

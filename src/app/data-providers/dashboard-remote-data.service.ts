import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {DashboardData, DashboardDataRequestParam} from "../commons/models/dashboard-data-models";

@Injectable()
export class DashboardRemoteDataService {

  private apiContext: string = 'api';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private options: RequestOptions = new RequestOptions({headers: this.headers});

  private apiEndpoints: Object = {
    dashboardData: this.apiContext + '/applications/statistics',
  };

  constructor(private http: Http) {
  }

  getDashboardData(): Observable<DashboardData> {
    let param = new DashboardDataRequestParam();
    param.assignee = 'admin';
    param.candidateGroups = 'Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin';

    return this.http.post(this.apiEndpoints['dashboardData'], param, this.options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().message))
  };

}

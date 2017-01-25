import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {ApplicationTask, ApplicationTaskSearchParam} from "../commons/models/application-data-models";

@Injectable()
export class ApprovalRemoteDataService {

  private apiContext: string = 'api';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private options: RequestOptions = new RequestOptions({headers: this.headers});

  private apiEndpoints: Object = {
    search: this.apiContext + '/applications/search',
  };

  constructor(private http: Http) {
  }

  getUserApplicationTasks(): Observable<ApplicationTask[]> {
    //TODO GET USER FROM AUTH SERVICE
    const param: ApplicationTaskSearchParam = {
      assignee: 'admin',
      size: 100,
      processType: "APPLICATION_CREATION",
      candidateGroups: null
    };
    return this.http.post(this.apiEndpoints['search'], param, this.options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().message))
  }

  getUserGroupApplicationTasks(): Observable<ApplicationTask[]> {
    //TODO GET GROUP FROM AUTH SERVICE
    const param: ApplicationTaskSearchParam = {
      assignee: null,
      processType: "APPLICATION_CREATION",
      size: 100,
      candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
    };
    return this.http.post(this.apiEndpoints['search'], param, this.options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().message))
  }

  getUserAppSubscriptionTasks(): Observable<ApplicationTask[]> {
    const param: ApplicationTaskSearchParam = {
      assignee: 'admin',
      size: 100,
      processType: "SUBSCRIPTION_CREATION",
      candidateGroups: null
    };
    return this.http.post(this.apiEndpoints['search'], param, this.options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().message))
  }

  getUserGroupAppSubscriptionTask(): Observable<ApplicationTask[]> {
    const param: ApplicationTaskSearchParam = {
      assignee: null,
      size: 100,
      processType: "SUBSCRIPTION_CREATION",
      candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
    };
    return this.http.post(this.apiEndpoints['search'], param, this.options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().message))
  }

}

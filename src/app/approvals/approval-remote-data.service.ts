import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable, Subject, ReplaySubject} from "rxjs";
import {
    ApplicationTask, ApplicationTaskSearchParam,
    AssignApplicationTaskParam, ApproveApplicationCreationTaskParam
} from "../commons/models/application-data-models";

@Injectable()
export class ApprovalRemoteDataService {

    public myApplicationCreationTasks: Subject<ApplicationTask[]> = new ReplaySubject();
    public groupApplicationCreationTasks: Subject<ApplicationTask[]> = new ReplaySubject();

    private modifiedApplicationTaskIDs:number[] = new Array();


    private apiContext: string = 'api';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        search: this.apiContext + '/applications/search',
        assign: this.apiContext + '/applications/assign',
        approveCreation: this.apiContext + '/applications/approve/creation',
    };

    constructor(private http: Http) {
    }

    getUserApplicationTasks(): void {
        //TODO GET USER FROM AUTH SERVICE
        const param: ApplicationTaskSearchParam = {
            assignee: 'admin',
            size: 100,
            processType: "APPLICATION_CREATION",
            candidateGroups: null
        };

        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map((response: Response) => response.json())
            .subscribe(
                (result:ApplicationTask[])=>{this.myApplicationCreationTasks.next(result)},
                (error: Response) => Observable.throw(error.json().message)
            )
    }

    getUserGroupApplicationTasks(): void {
        //TODO GET GROUP FROM AUTH SERVICE
        const param: ApplicationTaskSearchParam = {
            assignee: null,
            processType: "APPLICATION_CREATION",
            size: 100,
            candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
        };
        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map((response: Response) => response.json())
            .subscribe(
                (result:ApplicationTask[])=>{this.groupApplicationCreationTasks.next(result)},
                (error: Response) => Observable.throw(error.json().message))

    }

    getUserAppSubscriptionTasks(): Observable<ApplicationTask[]> {
        //TODO GET USER FROM AUTH SERVICE
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
        //TODO GET GROUP FROM AUTH SERVICE
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

    assignApplicationTaskToUser(taskId) {
        //TODO update to this if success
        this.modifiedApplicationTaskIDs.push(taskId);

        //TODO GET LOGIN USER FROM AUTH SERVICE
        const param = new AssignApplicationTaskParam();
        param.assignee = 'admin';
        param.taskId = taskId;

        return this.http.post(this.apiEndpoints['assign'], param, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))
    }

    getModifiedTaskIds():number[]{
        return this.modifiedApplicationTaskIDs;
    }

    approveApplicationCreationTask(param:ApproveApplicationCreationTaskParam):Observable<any>{
        return this.http.post(this.apiEndpoints['approveCreation'], param, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))

    }

}

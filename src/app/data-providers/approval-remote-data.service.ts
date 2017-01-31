import {Injectable, Inject} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable, Subject, ReplaySubject, BehaviorSubject} from "rxjs";
import {
    ApplicationTask, ApplicationTaskSearchParam,
    AssignApplicationTaskParam, ApproveApplicationCreationTaskParam, ApproveSubscriptionCreationTaskParam,
    ApplicationTaskFilter
} from "../commons/models/application-data-models";
import {AuthenticationService} from "../commons/services/authentication.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {MessageService} from "../commons/services/message.service";

@Injectable()
export class ApprovalRemoteDataService {

    public MyApplicationCreationTasksProvider: BehaviorSubject<ApplicationTask[]> = new BehaviorSubject([]);
    public GroupApplicationCreationTasksProvider: Subject<ApplicationTask[]> = new ReplaySubject();

    public MySubscriptionTasksProvider: Subject<ApplicationTask[]> = new ReplaySubject();
    public GroupSubscriptionTasksProvider: Subject<ApplicationTask[]> = new ReplaySubject();

    private modifiedApplicationTaskIDs: number[] = new Array();

    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private apiEndpoints: Object = {
        search: this.apiContext + '/applications/search',
        assign: this.apiContext + '/applications/assign',
        approveApplicationCreation: this.apiContext + '/applications/approve/application/creation',
        approveSubscriptionCreation: this.apiContext + '/applications/approve/subscription/creation'
    };

    constructor(private http: Http,
                @Inject('API_CONTEXT') private apiContext: string,
                private slimLoadingBarService: SlimLoadingBarService,
                private message: MessageService,
                private authService: AuthenticationService) {
    }

    private updateModifiedTask(result: ApplicationTask[], modified: number[]) {
        if (!!result) {
            return result.map((task: ApplicationTask) => {
                task.isModified = modified.indexOf(task.id) >= 0 ? true : false;
                return task;
            }).sort((taskOne, taskTwo) => {
                if (taskOne.isModified && !taskTwo.isModified) {
                    return -1;
                }

                if (!taskOne.isModified && taskTwo.isModified) {
                    return 1;
                }

                return 0;
            });
        } else {
            return [];
        }
    }

    private getFilteredResult(collection: ApplicationTask[], filter: ApplicationTaskFilter): Observable<ApplicationTask[]> {
        return Observable.from(collection)
            .filter((task: ApplicationTask) => {
                return (filter.ids.length == 0 || filter.ids.indexOf(task.id) >= 0)
            })
            .filter((task: ApplicationTask) => {
                return (filter.appNames.length == 0 || filter.appNames.indexOf(task.applicationName) >= 0)

            })
            .reduce((acc, curr) => {
                acc.push(curr);
                return acc;
            }, []);
    }

    getUserApplicationTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: loginInfo.userName,
                size: 100,
                processType: "APPLICATION_CREATION",
                candidateGroups: null
            };
            this.slimLoadingBarService.start();

            let doSubscribe = (obs:Observable<ApplicationTask[]>)=>{
                obs.subscribe(
                    (result: ApplicationTask[]) => {
                        this.MyApplicationCreationTasksProvider.next(this.updateModifiedTask(result, this.modifiedApplicationTaskIDs))
                    },
                    (error: Response) => {
                        this.slimLoadingBarService.stop();
                        return Observable.throw(error.json().message)
                    },
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                )
            };

            let observable = this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json());

            if (!!filter) {
                doSubscribe(observable
                    .flatMap((tasks:ApplicationTask[])=> Observable.from(tasks))
                    .filter((task: ApplicationTask) => filter.ids.length == 0 || filter.ids.indexOf(task.id) >= 0)
                    .filter((task: ApplicationTask) => filter.appNames.length == 0 || filter.appNames.indexOf(task.applicationName) >= 0)
                    .reduce((acc, curr) => {
                        acc.push(curr);
                        return acc;
                    }, []));

            }else{
                doSubscribe(observable);
            }
        }
    }

    getUserGroupApplicationTasks(): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                processType: "APPLICATION_CREATION",
                size: 100,
                candidateGroups: loginInfo.roles.toString()
            };
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json())
                .subscribe(
                    (result: ApplicationTask[]) => {
                        this.GroupApplicationCreationTasksProvider.next(result)
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                )
        }
    }

    getUserAppSubscriptionTasks(): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: loginInfo.userName,
                size: 100,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: null
            };
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json())
                .subscribe(
                    (result) => {
                        this.MySubscriptionTasksProvider.next(this.updateModifiedTask(result, this.modifiedApplicationTaskIDs))
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                );
        }
    }

    getUserGroupAppSubscriptionTask(): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                size: 100,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: loginInfo.roles.toString()
            };
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json())
                .subscribe(
                    (result: ApplicationTask[]) => {
                        this.GroupSubscriptionTasksProvider.next(result);
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.start();
                    }
                );
        }
    }

    assignApplicationTaskToUser(taskId) {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param = new AssignApplicationTaskParam();
            param.assignee = loginInfo.userName;
            param.taskId = taskId;

            return this.http.post(this.apiEndpoints['assign'], param, this.options)
                .map((response: Response) => {
                    this.modifiedApplicationTaskIDs.push(taskId);
                    return response.json();
                })
                .catch((error: Response) => Observable.throw(error.json().message))
        }
    }

    getModifiedTaskIds(): number[] {
        return this.modifiedApplicationTaskIDs;
    }

    approveApplicationCreationTask(param: ApproveApplicationCreationTaskParam): Observable<any> {
        return this.http.post(this.apiEndpoints['approveApplicationCreation'], param, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))
    }

    approveSubscriptionCreationTask(param: ApproveSubscriptionCreationTaskParam): Observable<any> {
        return this.http.post(this.apiEndpoints['approveSubscriptionCreation'], param, this.options)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))
    }

    getAllTasks(): void {
        this.getUserApplicationTasks();
        this.getUserAppSubscriptionTasks();
        this.getUserGroupAppSubscriptionTask();
        this.getUserGroupApplicationTasks();
    }


    applyFilter(filter: ApplicationTaskFilter): void {
        if (filter.dataType.dataCategory == "USER") {
            if (filter.dataType.dataType == "APPLICATION") {
                let col = this.MyApplicationCreationTasksProvider.getValue();
                this.getFilteredResult(col, filter).subscribe(
                    (task: ApplicationTask[]) => {
                        this.MyApplicationCreationTasksProvider.next(task);
                    }
                )
            }
        }
    }

}

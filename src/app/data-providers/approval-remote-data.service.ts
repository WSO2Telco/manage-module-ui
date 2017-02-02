import {Injectable, Inject} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable, Subject, BehaviorSubject} from "rxjs";
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

    /**
     * Application Creations assigned to USER Stream
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public MyApplicationCreationTasksProvider: Subject<ApplicationTask[]> = new BehaviorSubject<ApplicationTask[]>([]);

    /**
     * Application Creations assigned to GROUP user belongs to
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public GroupApplicationCreationTasksProvider: Subject<ApplicationTask[]> = new BehaviorSubject<ApplicationTask[]>([]);

    /**
     * Application Api subscription creations assigned to USER Stream
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public MySubscriptionTasksProvider: Subject<ApplicationTask[]> = new BehaviorSubject<ApplicationTask[]>([]);

    /**
     * Application Api subscription creations assigned to GROUP Stream
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public GroupSubscriptionTasksProvider: Subject<ApplicationTask[]> = new BehaviorSubject<ApplicationTask[]>([]);


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

    private getFilteredObservable(observable: Observable<ApplicationTask[]>, filter: ApplicationTaskFilter): Observable<ApplicationTask[]> {
        if (observable && filter) {
            return observable
                .flatMap((tasks: ApplicationTask[]) => Observable.from(tasks))
                .filter((task: ApplicationTask) => filter.ids.length == 0 || filter.ids.indexOf(task.id) >= 0)
                .filter((task: ApplicationTask) => filter.appNames.length == 0 || filter.appNames.indexOf(task.applicationName) >= 0)
                .filter((task: ApplicationTask) => filter.users.length == 0 || filter.users.indexOf(task.userName) >= 0)
                .reduce((acc, curr) => {
                    acc.push(curr);
                    return acc;
                }, [])
        } else {
            return observable;
        }

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

            let doSubscribe = (obs: Observable<ApplicationTask[]>) => {
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

            doSubscribe((!!filter) ? this.getFilteredObservable.call(this, observable, filter) : observable);
        }
    }

    getUserGroupApplicationTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                processType: "APPLICATION_CREATION",
                size: 100,
                candidateGroups: loginInfo.roles.toString()
            };
            this.slimLoadingBarService.start();

            let doSubscribe = (observable: Observable<ApplicationTask[]>) => {
                observable .subscribe(
                    (result: ApplicationTask[]) => {
                        this.GroupApplicationCreationTasksProvider.next(result)
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                )
            };

            let observable = this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json());

            doSubscribe((!!filter) ? this.getFilteredObservable.call(this, observable, filter) : observable);
        }
    }

    getUserAppSubscriptionTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: loginInfo.userName,
                size: 100,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: null
            };

            let doSubscribe = (observable: Observable<ApplicationTask[]>) => {
                observable.subscribe(
                    (result) => {
                        this.MySubscriptionTasksProvider.next(this.updateModifiedTask(result, this.modifiedApplicationTaskIDs))
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                );
            };

            this.slimLoadingBarService.start();
            let observable = this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json());

            doSubscribe((!!filter) ? this.getFilteredObservable.call(this, observable, filter) : observable);
        }
    }

    getUserGroupAppSubscriptionTask(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                size: 100,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: loginInfo.roles.toString()
            };

            let doSubscribe = (observable: Observable<ApplicationTask[]>) => {
                observable.subscribe(
                    (result: ApplicationTask[]) => {
                        this.GroupSubscriptionTasksProvider.next(result);
                    },
                    (error: Response) => Observable.throw(error.json().message),
                    () => {
                        this.slimLoadingBarService.complete();
                    }
                );
            };

            this.slimLoadingBarService.start();
            let observable = this.http.post(this.apiEndpoints['search'], param, this.options)
                .map((response: Response) => response.json());

            doSubscribe((!!filter) ? this.getFilteredObservable.call(this, observable, filter) : observable);
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

    getFilteredResult(filter: ApplicationTaskFilter): void {
        let actionMap = {
            USER: {
                APPLICATION: this.getUserApplicationTasks,
                SUBSCRIPTION: this.getUserAppSubscriptionTasks
            },
            GROUP: {
                APPLICATION: this.getUserGroupApplicationTasks,
                SUBSCRIPTION: this.getUserGroupAppSubscriptionTask
            }
        };

        actionMap[filter.dataType.dataCategory][filter.dataType.dataType] && actionMap[filter.dataType.dataCategory][filter.dataType.dataType].call(this, filter);
    }

}

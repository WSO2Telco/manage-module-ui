import {Injectable, Inject} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {
    ApplicationTask, ApplicationTaskSearchParam,
    AssignApplicationTaskParam, ApproveApplicationCreationTaskParam, ApproveSubscriptionCreationTaskParam,
    ApplicationTaskFilter, ApplicationTaskResult, PaginationInfo
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
    public MyApplicationApprovalTasksProvider: Subject<ApplicationTaskResult> = new BehaviorSubject<ApplicationTaskResult>(null);

    /**
     * Application Creations assigned to GROUP user belongs to
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public AllApplicationApprovalTasksProvider: Subject<ApplicationTaskResult> = new BehaviorSubject<ApplicationTaskResult>(null);

    /**
     * Application Api subscription creations assigned to USER Stream
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public MySubscriptionTasksProvider: Subject<ApplicationTaskResult> = new BehaviorSubject<ApplicationTaskResult>(null);

    /**
     * Application Api subscription creations assigned to GROUP Stream
     * @type {BehaviorSubject<ApplicationTask[]>}
     */
    public GroupSubscriptionTasksProvider: Subject<ApplicationTaskResult> = new BehaviorSubject<ApplicationTaskResult>(null);


    private modifiedApplicationTaskIDs: number[] = new Array();

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/workflow-service/workflow/';

    private apiEndpoints: Object = {
        applicationsSearch: this.apiContext + 'applications/search',
        subscriptionsSearch: this.apiContext + 'subscriptions/search',
        applicationAssign: this.apiContext + 'applications/assign',
        subscriptionAssign: this.apiContext + 'subscriptions/assign',
        approveApplicationCreation: this.apiContext + 'applications/approve',
        approveSubscriptionCreation: this.apiContext + 'subscriptions/approve'
    };

    private actionMap = {
        USER: {
            APPLICATION: this.getUserApplicationTasks,
            SUBSCRIPTION: this.getUserAppSubscriptionTasks
        },
        GROUP: {
            APPLICATION: this.getUserGroupApplicationTasks,
            SUBSCRIPTION: this.getUserGroupAppSubscriptionTask
        }
    };

    constructor(private http: Http,
                @Inject('API_CONTEXT') private apiContext2: string,
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

    private getFilteredObservable(appTask: ApplicationTask[], filter: ApplicationTaskFilter): ApplicationTask[] {
        if (appTask && filter) {
            return appTask
                .filter((task: ApplicationTask) => filter.apiNames.length == 0 || filter.apiNames.indexOf(task.apiName) >= 0)
                .filter((task: ApplicationTask) => filter.ids.length == 0 || filter.ids.indexOf(task.id) >= 0)
                .filter((task: ApplicationTask) => filter.appNames.length == 0 || filter.appNames.indexOf(task.applicationName) >= 0)
                .filter((task: ApplicationTask) => filter.users.length == 0 || filter.users.indexOf(task.userName) >= 0)
                .filter((task: ApplicationTask) => filter.subscribers.length == 0 || filter.subscribers.indexOf(task.subscriber) >= 0)
                .reduce((acc, curr) => {
                    acc.push(curr);
                    return acc;
                }, []);
        } else {
            return appTask;
        }
    }


    getUserApplicationTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: loginInfo.userName.toLowerCase(),
                isAdmin: loginInfo.isAdmin,
                operator: '',
                size: 100,
                start: 0,
                processType: "APPLICATION_CREATION",
                candidateGroups: null
            };

            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }

            this.slimLoadingBarService.start();

            const endPoint = this.apiEndpoints['applicationsSearch'] + '/' + loginInfo.userName.toLowerCase()
                + '?start=' + filter.startRecordNumber;

            this.http.get(endPoint, this.getOptions())
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading My Application List',
                    error: error
                }))
                .subscribe(
                    data => {
                        if (data.success) {
                            this.MyApplicationApprovalTasksProvider.next(data.payload);
                            this.slimLoadingBarService.complete();
                        } else {
                            this.message.error(data.message);
                            this.slimLoadingBarService.stop();
                        }
                    },
                    error => {
                        this.message.error(error.message);
                        this.slimLoadingBarService.stop();
                    }
                );
        }
    }


    getUserGroupApplicationTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                isAdmin: loginInfo.isAdmin,
                operator: '',
                processType: "APPLICATION_CREATION",
                size: 100,
                start: 0,
                candidateGroups: loginInfo.roles.toString()
            };

            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }


            this.slimLoadingBarService.start();

            const endPoint = this.apiEndpoints['applicationsSearch'] + '?start=' + filter.startRecordNumber;

            this.http.get(endPoint, this.getOptions())
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading All Application List',
                    error: error
                }))
                .subscribe(
                    data => {
                        if (data.success) {
                            this.AllApplicationApprovalTasksProvider.next(data.payload);
                            this.slimLoadingBarService.complete();
                        } else {
                            this.message.error(data.message);
                            this.slimLoadingBarService.stop();
                        }
                    },
                    error => {
                        this.message.error(error.message);
                        this.slimLoadingBarService.stop();
                    }
                );
        }
    }

    getUserAppSubscriptionTasks(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: loginInfo.userName.toLowerCase(),
                isAdmin: loginInfo.isAdmin,
                operator: loginInfo.operator,
                size: 100,
                start: 0,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: null
            };

            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }


            this.slimLoadingBarService.start();

            const endPoint = this.apiEndpoints['subscriptionsSearch'] + '/' + loginInfo.userName.toLowerCase()
                + '?start=' + filter.startRecordNumber;

            this.http.get(endPoint, this.getOptions())
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading My Subscription List',
                    error: error
                }))
                .subscribe(
                    data => {
                        if (data.success) {
                            this.MySubscriptionTasksProvider.next(data.payload);
                            this.slimLoadingBarService.complete();
                        } else {
                            this.message.error(data.message);
                            this.slimLoadingBarService.stop();
                        }
                    },
                    error => {
                        this.message.error(error.message);
                        this.slimLoadingBarService.stop();
                    }
                );
        }
    }


    getUserGroupAppSubscriptionTask(filter?: ApplicationTaskFilter): void {
        let loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            const param: ApplicationTaskSearchParam = {
                assignee: null,
                isAdmin: loginInfo.isAdmin,
                operator: loginInfo.operator,
                size: 100,
                start: 0,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: loginInfo.roles.toString()
            };

            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }


            this.slimLoadingBarService.start();

            const endPoint = this.apiEndpoints['subscriptionsSearch'] + '?start=' + filter.startRecordNumber;

            this.http.get(endPoint, this.getOptions())
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw({
                    success: false,
                    message: 'Error Loading All Subscription List',
                    error: error
                }))
                .subscribe(
                    data => {
                        if (data.success) {
                            this.GroupSubscriptionTasksProvider.next(data.payload);
                            this.slimLoadingBarService.complete();
                        } else {
                            this.message.error(data.message);
                            this.slimLoadingBarService.stop();
                        }
                    },
                    error => {
                        this.message.error(error.message);
                        this.slimLoadingBarService.stop();
                    }
                );

        }
    }

    assignApplicationTaskToUser(taskId) {
        const data = {
            taskId: taskId
        }

        return this.http.post(this.apiEndpoints['applicationAssign'], data, this.getOptions())
            .map((response: Response) => {
                this.modifiedApplicationTaskIDs.push(taskId);
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json().message));

    }

    assignSubscriptionTaskToUser(taskId) {
        const data = {
            taskId: taskId
        }

        return this.http.post(this.apiEndpoints['subscriptionAssign'], data, this.getOptions())
            .map((response: Response) => {
                this.modifiedApplicationTaskIDs.push(taskId);
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json().message));
    }

    getModifiedTaskIds(): number[] {
        return this.modifiedApplicationTaskIDs;
    }

    /**
     * this function will be called when we approve a application
     * */
    approveApplicationCreationTask(param: ApproveApplicationCreationTaskParam): Observable<any> {
        return this.http.post(this.apiEndpoints['approveApplicationCreation'], param, this.getOptions())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Approving Application',
                error: error
            }));
    }

    /**
     * this function will be called when we approve a subscription
     **/
    approveSubscriptionCreationTask(param: ApproveSubscriptionCreationTaskParam): Observable<any> {

        // console.log(JSON.stringify(param));
        return this.http.post(this.apiEndpoints['approveSubscriptionCreation'], param, this.getOptions())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))
    }

    getAllTasks(): void {
        this.getUserApplicationTasks();
        this.getUserAppSubscriptionTasks();
        this.getUserGroupApplicationTasks();
        this.getUserGroupAppSubscriptionTask();
    }

    getCreditPlan() {
        const endPoint = this.url.protocol + '//' + this.url.host + '/credit-control-service/services/getCreditLimitInfo';
        return this.http.get(endPoint, this.getOptions())
            .map((response: Response) => {
                const result = response.json();
                return result;
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Unable to Load Credit Plan',
                error: error
            }));
    }

    getFilteredResult(filter: ApplicationTaskFilter): void {
        this.actionMap[filter.dataType.dataCategory][filter.dataType.dataType] && this.actionMap[filter.dataType.dataCategory][filter.dataType.dataType].call(this, filter);
    }

    getOptions(): RequestOptions {
        const token = this.authService.loginUserInfo.getValue().token;
        const useName = this.authService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }

}

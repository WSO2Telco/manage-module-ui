import {Injectable, Inject} from '@angular/core';
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Subject, BehaviorSubject, Observable} from "rxjs";
import {MessageService} from "../commons/services/message.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {
    ApprovalHistory, ApprovalHistoryFilter, ApprovalHistoryDataset,
    Application, ApplicationHistory, AppHistoryResponse
} from "../commons/models/reporing-data-models";
import {AuthenticationService} from '../commons/services/authentication.service';

@Injectable()
export class ReportingRemoteDataService {

    /**
     * Subscribers stream
     * @type {BehaviorSubject<string[]>}
     */
    public SubscribersProvider: Subject<string[]> = new BehaviorSubject<string[]>([]);

    /**
     * Operators Stream
     * @type {BehaviorSubject<string[]>}
     */
    public OperatorsProvider: Subject<string[]> = new BehaviorSubject<string[]>([]);

    /**
     * Applications Stream
     * @type {BehaviorSubject<any[]>}
     */
    public ApplicationsProvider: Subject<Application[]> = new BehaviorSubject<Application[]>([])

    public ApplicationDetailProvider: Subject<ApplicationHistory[]> = new BehaviorSubject<ApplicationHistory[]>([]);

    /**
     * Approval History stream
     * @type {BehaviorSubject<ApprovalHistory[]>}
     */
    public ApprovalHistoryProvider: Subject<AppHistoryResponse> = new BehaviorSubject<AppHistoryResponse>(null);

    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    private options: RequestOptions = new RequestOptions({headers: this.headers});

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/workflow-service/workflow/';

    private apiEndpoints: Object = {
        subscribers: this.apiContext + 'history/subscribers',
        operators: this.apiContext + 'history/operators',
        depType: this.apiContext + 'history/deptype',
        approvalHistory: this.apiContext + 'history/approval',
        applications: this.apiContext + 'history/applications',
        applicationHistory: this.apiContext + 'applications/history',
        subscriptionHistory: this.apiContext + 'history/subscriptions'
    };

    constructor(private http: Http,
                private message: MessageService,
                private slimLoadingBarService: SlimLoadingBarService,
                private authService: AuthenticationService) {
    }

    getApplicationDetail(id: number, callback: Function) {
        this.http.get(this.apiEndpoints['approvalHistory'] + '/' + id, this.getOptions())
            .map((response: Response) => response.json())
            .subscribe(
                (applications: ApplicationHistory[]) => {
                    this.ApplicationDetailProvider.next(applications);
                    callback(applications, true);
                },
                (error) => {
                    this.message.error(error);
                    callback(error, false);
                }
            );
    }


    getSubscriptionDetail(id: number,opId:string,apiid:string, callback: Function) {
        this.http.get(this.apiEndpoints['approvalHistory'] + '/' + id + '/operators/' + opId + '/apis/' + apiid + '/start/0/size/50'  , this.getOptions())
            .map((response: Response) => response.json())
            .subscribe(
                (applications: ApplicationHistory[]) => {
                    this.ApplicationDetailProvider.next(applications);
                    callback(applications, true);
                },
                (error) => {
                    this.message.error(error);
                    callback(error, false);
                }
            );
    }

    getSubscribers() {
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['subscribers'], this.getOptions())
            .map((response: Response) => response.json())
            .subscribe(
                (subscribers) => {
                    this.SubscribersProvider.next(subscribers)
                },
                (error) => {
                    this.message.error(error);
                    this.slimLoadingBarService.complete();
                },
                () => {
                    this.slimLoadingBarService.complete()
                }
            )
    }

    getOperators() {
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['operators'], this.getOptions())
            .map((response: Response) => response.json())
            .subscribe(
                (operators) => {
                    this.OperatorsProvider.next(operators)
                },
                (error) => {
                    this.message.error(error);
                    this.slimLoadingBarService.complete();
                },
                () => {
                    this.slimLoadingBarService.complete()
                }
            )
    }

    getApplicationsBySubscriber(subscriber: string) {
        if (!!subscriber) {
            this.slimLoadingBarService.start();
            this.http.get(this.apiEndpoints['applications'] + '/' + subscriber, this.getOptions())
                .map((response: Response) => response.json())
                .subscribe(
                    (applications: Application[]) => {
                        this.ApplicationsProvider.next(applications)
                    },
                    (error) => {
                        this.message.error(error);
                        this.slimLoadingBarService.complete();
                    },
                    () => {
                        this.slimLoadingBarService.complete()
                    }
                )
        } else {
            this.ApplicationsProvider.next([]);
        }

    }

    getApprovalHistory(filter?: ApprovalHistoryFilter) {

        let historyFilter = new ApprovalHistoryFilter();

        if (!!filter) {
            historyFilter = filter;
        }

        this.slimLoadingBarService.start();

        const endPoint = this.apiEndpoints['applicationHistory']
            + '?start=' + historyFilter.offset + '&filterBy=' + historyFilter.filterString;

        this.http.get(endPoint, this.getOptions())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Application History List',
                error: error
            }))
            .subscribe(
                data => {
                    if (data.success) {
                        this.ApprovalHistoryProvider.next(data.payload);
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

    getDeploymentType(): Promise<any> {
        return this.http.get(this.apiEndpoints['depType'], this.getOptions())
            .toPromise()
            .then((res: Response)=>{
                return res.json();
            });
    }

    getSubscriptionHistory(): Promise<any> {
        return this.http.get(this.apiEndpoints['subscriptionHistory'], this.getOptions())
            .toPromise()
            .then((res: Response)=>{
                return res.json();
            });
    }
}

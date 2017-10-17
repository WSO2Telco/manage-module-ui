import {Injectable, Inject} from '@angular/core';
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Observable, ReplaySubject, BehaviorSubject} from "rxjs";
import {DashboardData, DashboardDataRequestParam, HistoryBarGraphData} from "../commons/models/dashboard-data-models";
import {ApprovalRemoteDataService} from "./approval-remote-data.service";
import {ApplicationTask, ApplicationTaskResult} from "../commons/models/application-data-models";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {AuthenticationService} from '../commons/services/authentication.service';

@Injectable()
export class DashboardRemoteDataService {

    /**
     * Application Creation History Graph Data Stream
     * @type {BehaviorSubject<HistoryBarGraphData>}
     */
    public ApplicationCreationHistoryDataProvider: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    /**
     * Subscription Creation History Graph Data Stream
     * @type {BehaviorSubject<HistoryBarGraphData>}
     */
    public SubscriptionCreationHistoryDataProvider: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions = new RequestOptions({headers: this.headers});
    private _dashboardStatisticsData = new DashboardData();

    private apiEndpoints: Object = {
        dashboardData: this.apiContext + '/applications/statistics',
        graph: this.apiContext + '/applications/graph',
    };

    constructor(private http: Http,
                @Inject('API_CONTEXT') private apiContext: string,
                private approvalService: ApprovalRemoteDataService,
                private slimLoadingBarService: SlimLoadingBarService,
                private authenticationService: AuthenticationService) {

        approvalService.MyApplicationCreationTasksProvider.subscribe(
            (result) => {
                this.updateDashboardData(result, 'appCreationsForUser')
            }
        );

        approvalService.MySubscriptionTasksProvider.subscribe(
            (result) => {
                this.updateDashboardData(result, 'subCreationsForUser')
            }
        );

        approvalService.GroupApplicationCreationTasksProvider.subscribe(
            (result) => {
                this.updateDashboardData(result, 'appCreationsForGroup')
            }
        );

        approvalService.GroupSubscriptionTasksProvider.subscribe(
            (result) => {
                this.updateDashboardData(result, 'subCreationsForGroup')
            }
        );
    }

    public DashboardDataProvider: ReplaySubject<DashboardData> = new ReplaySubject();


    getDashboardData(): Observable<DashboardData> {
        let param = new DashboardDataRequestParam();
        param.assignee = 'admin';
        param.candidateGroups = 'Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin';

        return this.http.post(this.apiEndpoints['dashboardData'], param, this.getOptions())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json().message))
    };

    updateDashboardData(result: ApplicationTaskResult, type: string): void {
        let changeObj = {};
        changeObj[type] = (result && result.applicationTasks && result.applicationTasks.length) || 0;
        this._dashboardStatisticsData = Object.assign({}, this._dashboardStatisticsData, changeObj);
        this._dashboardStatisticsData.totalAppCreations = this._dashboardStatisticsData.appCreationsForGroup + this._dashboardStatisticsData.appCreationsForUser;
        this._dashboardStatisticsData.totalSubCreations = this._dashboardStatisticsData.subCreationsForGroup + this._dashboardStatisticsData.subCreationsForUser;

        this.DashboardDataProvider.next(this._dashboardStatisticsData);
    }

    getCreationHistoryGraphData(type: string): void {
        this.slimLoadingBarService.start();

        const user = this.authenticationService.loginUserInfo.getValue().userName;
        this.http.get(this.apiEndpoints['graph'] + '/' + type + '/' + user, this.getOptions())
            .map((response: Response) => response.json())
            .subscribe(
                (graphData) => {
                    if (type == 'applications') {
                        this.ApplicationCreationHistoryDataProvider.next(graphData);
                    } else if (type == 'subscriptions') {
                        this.SubscriptionCreationHistoryDataProvider.next(graphData);
                    }

                },
                (error: Response) => Observable.throw(error.json().message),
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
    }

    getOptions(): RequestOptions {
        const token = this.authenticationService.loginUserInfo.getValue().token;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }

}

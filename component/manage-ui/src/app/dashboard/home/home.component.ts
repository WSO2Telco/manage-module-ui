import { Component, OnInit } from '@angular/core';
import {
    ApplicationTask, ApprovalEvent, ApplicationTaskFilter,
    ApplicationTaskResult
} from '../../commons/models/application-data-models';
import { ApprovalRemoteDataService } from '../../data-providers/approval-remote-data.service';
import { DashboardData } from '../../commons/models/dashboard-data-models';
import { DashboardRemoteDataService } from '../../data-providers/dashboard-remote-data.service';
import { MessageService } from '../../commons/services/message.service';
import { ApprovalHelperService } from '../../approvals/approval-helper.service';
import { TableDataType } from '../../commons/models/common-data-models';
import { ThemeService } from '../../commons/services/theme.service';
import { AuthenticationService } from '../../commons/services/authentication.service';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private myApplications: ApplicationTaskResult;

    private myAppSubscriptionTask: ApplicationTaskResult;

    private allApplications: ApplicationTaskResult;

    private allSubscriptions: ApplicationTaskResult;

    private dashboardData: DashboardData;

    private myApplicationFilter: ApplicationTaskFilter;
    private mySubscriptionFilter: ApplicationTaskFilter;
    private groupApplicationFilter: ApplicationTaskFilter;
    private groupSubscriptionFilter: ApplicationTaskFilter;

    private themeName;
    private menuBackImage:boolean = false;

    constructor(private approvalService: ApprovalRemoteDataService,
        private approvalHelperService: ApprovalHelperService,
        private dashboardService: DashboardRemoteDataService,
        private message: MessageService,
        private _authenticationService: AuthenticationService,
        private _themeService: ThemeService,
        private mainCom: AppComponent) {
    }

    ngOnInit() {

        this.myApplicationFilter = new ApplicationTaskFilter(new TableDataType('USER', 'APPLICATION'));
        this.mySubscriptionFilter = new ApplicationTaskFilter(new TableDataType('USER', 'SUBSCRIPTION'));
        this.groupApplicationFilter = new ApplicationTaskFilter(new TableDataType('GROUP', 'APPLICATION'));
        this.groupSubscriptionFilter = new ApplicationTaskFilter(new TableDataType('GROUP', 'SUBSCRIPTION'));

        this.approvalService.MyApplicationApprovalTasksProvider.subscribe(
            (response: ApplicationTaskResult) => {
                this.myApplications = response;
            },
            (error) => this.message.error(error));

        this.approvalService.MySubscriptionTasksProvider.subscribe(
            (response: ApplicationTaskResult) => {
                this.myAppSubscriptionTask = response;
            },
            (error) => this.message.error(error));

        this.approvalService.AllApplicationApprovalTasksProvider.subscribe(
            (response: ApplicationTaskResult) => {
                this.allApplications = response;
            },
            (error) => this.message.error(error));


        this.approvalService.GroupSubscriptionTasksProvider.subscribe(
            (response: ApplicationTaskResult) => {
                this.allSubscriptions = response;
            },
            (error) => {
                this.message.error(error);
            });


        this.dashboardService.DashboardDataProvider.subscribe(
            (response) => this.dashboardData = response,
            (error) => this.message.error(error));

        this.approvalService.getAllTasks();

        this.themeName = this._authenticationService.loginUserInfo.getValue().theme

        if (this.themeName) {
            this._themeService.toggleTheme(this.themeName.substring(0, this.themeName.indexOf("_")).replace(/[^a-zA-Z ]/g, ""));
            this.menuBackImage = JSON.parse(this.themeName.slice(this.themeName.indexOf("_") + 1));
        }
        this.mainCom.ngOnInit();
    }

    onAssignTaskHandler(event: ApprovalEvent): void {
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id, () => {
            this.approvalService.getAllTasks();
        });
    }

    onApproveRejectHandler(event: ApprovalEvent): void {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    }

    onFilterChangeHandler(event: ApplicationTaskFilter): void {
        this.approvalService.getFilteredResult(event);
    }

}

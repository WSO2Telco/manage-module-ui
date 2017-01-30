import {Component, OnInit} from '@angular/core';
import {ApplicationTask, ApprovalEvent} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../data-providers/approval-remote-data.service";
import {DashboardData} from "../../commons/models/dashboard-data-models";
import {DashboardRemoteDataService} from "../../data-providers/dashboard-remote-data.service";
import {DashboardHelperService} from "../dashboard-helper.service";
import {MessageService} from "../../commons/services/message.service";
import {ApprovalHelperService} from "../../approvals/approval-helper.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private myApplications: ApplicationTask[];

    private myAppSubscriptionTask: ApplicationTask[];

    private allApplications: ApplicationTask[];

    private allSubscriptions: ApplicationTask[];

    private dashboardData: DashboardData;

    constructor(private approvalService: ApprovalRemoteDataService,
                private approvalHelperService:ApprovalHelperService,
                private dashboardService: DashboardRemoteDataService,
                private dashboardHelper: DashboardHelperService,
                private message: MessageService) {
    }

    ngOnInit() {

        this.approvalService.MyApplicationCreationTasksProvider.subscribe(
            (response: ApplicationTask[]) => this.myApplications = this.dashboardHelper.updateModifiedApplications(response),
            (error) => this.message.error(error));

        this.approvalService.GroupApplicationCreationTasksProvider.subscribe(
            (response: ApplicationTask[]) => this.allApplications = response,
            (error) => this.message.error(error));

        this.approvalService.MySubscriptionTasksProvider.subscribe(
            (response: ApplicationTask[]) => this.myAppSubscriptionTask = this.dashboardHelper.updateModifiedApplications(response),
            (error) => this.message.error(error));

        this.approvalService.GroupSubscriptionTasksProvider.subscribe(
            (response) => this.allSubscriptions = response,
            (error) => this.message.error(error));

        this.dashboardService.DashboardDataProvider.subscribe(
            (response) => this.dashboardData = response,
            (error) => this.message.error(error));

        this.approvalService.getAllTasks();
    }

    onAssignTaskHandler(event:ApprovalEvent):void{
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType,event.task.id);
    }

    onApproveRejectHandler(event:ApprovalEvent):void{
        this.approvalHelperService.approveRejectTask(event.dataType,event.task,event.status);
    }

}

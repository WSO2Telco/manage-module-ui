import {Component, OnInit} from '@angular/core';
import {ApplicationTask} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../data-providers/approval-remote-data.service";
import {DashboardData} from "../../commons/models/dashboard-data-models";
import {DashboardRemoteDataService} from "../../data-providers/dashboard-remote-data.service";
import {DashboardHelperService} from "../dashboard-helper.service";

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
                private dashboardService: DashboardRemoteDataService,
                private dashboardHelper: DashboardHelperService) {
    }

    ngOnInit() {

        this.approvalService.myApplicationCreationTasks.subscribe(
            (response: ApplicationTask[]) => {
                this.myApplications = this.dashboardHelper.updateModifiedApplications(response);
            },
            (error) => {
                alert(error)
            }
        );

        this.approvalService.groupApplicationCreationTasks.subscribe(
            (response: ApplicationTask[]) => {
                this.allApplications = response
            },
            (error) => {
                alert(error)
            }
        );

        this.approvalService.getUserApplicationTasks();
        this.approvalService.getUserGroupApplicationTasks();

        this.approvalService.getUserAppSubscriptionTasks().subscribe(
            (response: ApplicationTask[]) => {
                this.myAppSubscriptionTask = response
            },
            (error) => {
                alert(error)
            }
        );


        this.approvalService.getUserGroupAppSubscriptionTask().subscribe(
            (response: ApplicationTask[]) => {
                this.allSubscriptions = response
            },
            (error) => {
                alert(error)
            }
        );

        this.dashboardService.getDashboardData().subscribe(
            (response: DashboardData) => {
                this.dashboardData = response
            },
            (error) => {
                alert(error)
            }
        )
    }

}

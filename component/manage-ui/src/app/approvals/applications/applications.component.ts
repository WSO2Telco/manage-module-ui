import {Component, OnInit} from '@angular/core';
import {
    ApplicationTaskFilter,
    ApplicationTaskResult,
    ApprovalEvent
} from '../../commons/models/application-data-models';
import {ApprovalRemoteDataService} from '../../data-providers/approval-remote-data.service';
import {MessageService} from '../../commons/services/message.service';
import {ApprovalHelperService} from '../approval-helper.service';
import {TableDataType} from '../../commons/models/common-data-models';
import {AuthenticationService} from '../../commons/services/authentication.service';

@Component({
    selector: 'app-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

    private myApplications: ApplicationTaskResult;

    private allApplications: ApplicationTaskResult;

    private userApplicationFilter: ApplicationTaskFilter;

    private groupApplicationFilter: ApplicationTaskFilter;

    public creditPlan: string[];

    constructor(private message: MessageService,
                private approvalHelperService: ApprovalHelperService,
                private approvalService: ApprovalRemoteDataService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.userApplicationFilter = new ApplicationTaskFilter(new TableDataType('USER', 'APPLICATION'), 10);

        this.groupApplicationFilter = new ApplicationTaskFilter(new TableDataType('GROUP', 'APPLICATION'), 10);

        this.approvalService.MyApplicationApprovalTasksProvider.subscribe(
            (apps: ApplicationTaskResult) => {
                this.myApplications = apps;
            },
            (error) => {
                this.message.error(error.message);
            }
        );

        this.approvalService.AllApplicationApprovalTasksProvider.subscribe(
            (apps: ApplicationTaskResult) => {
                this.allApplications = apps;
            },
            (error) => {
                this.message.error(error.message);
            }
        );

        this.creditPlan = [];

        this.getData();
        if (this.authService.loginUserInfo.getValue().permissions.application && this.authService.loginUserInfo.getValue().permissions.application.creditPlan) {
            this.getCreditPlan();
        }

    }

    private getData() {
        this.approvalService.getFilteredResult(this.userApplicationFilter);
        this.approvalService.getUserGroupApplicationTasks(this.groupApplicationFilter);
    }

    private getCreditPlan() {
        this.approvalService.getCreditPlan()
            .subscribe(
                data => {
                    this.creditPlan = [];
                    const response = data.Success.text;
                    let count = 0;
                    for (const item of response) {
                        this.creditPlan[count] = item.code;
                        count++;
                    }
                },
                error => {
                    this.creditPlan = [];
                    this.message.error(error.message);
                }
            );
    }

    onAssignTaskHandler(event: ApprovalEvent): void {
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id, () => {
            this.getData();
        });
    }

    onApproveRejectHandler(event: ApprovalEvent): void {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    }

    onFilterChangeHandler(event: ApplicationTaskFilter): void {
        this.approvalService.getFilteredResult(event);
    }

}

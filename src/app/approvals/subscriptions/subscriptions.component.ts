import {Component, OnInit} from '@angular/core';
import {
    ApplicationTask, ApprovalEvent, ApplicationTaskFilter,
    ApplicationTaskResult
} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../data-providers/approval-remote-data.service";
import {MessageService} from "../../commons/services/message.service";
import {ApprovalHelperService} from "../approval-helper.service";

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

    private mySubscriptions: ApplicationTask[];
    private allSubscriptions: ApplicationTask[];

    constructor(private message: MessageService,
                private approvalHelperService: ApprovalHelperService,
                private approvalService: ApprovalRemoteDataService) {
    }

    ngOnInit() {
        this.approvalService.MySubscriptionTasksProvider.subscribe(
            (subs: ApplicationTaskResult) => {
                this.mySubscriptions = subs && subs.applicationTasks;
            },
            (error) => {
                this.message.error(error)
            }
        );

        this.approvalService.GroupSubscriptionTasksProvider.subscribe(
            (subs: ApplicationTaskResult) => {
                this.allSubscriptions = subs && subs.applicationTasks;
            },
            (error) => {
                this.message.error(error)
            }
        );

        this.approvalService.getUserAppSubscriptionTasks();
        this.approvalService.getUserGroupAppSubscriptionTask();
    }


    onAssignTaskHandler(event: ApprovalEvent): void {
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id);
    }

    onApproveRejectHandler(event: ApprovalEvent): void {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    }

    onFilterChangeHandler(event: ApplicationTaskFilter): void {
        this.approvalService.getFilteredResult(event);
    }

}

import {Component, OnInit} from '@angular/core';
import {
    ApplicationTask, ApprovalEvent, ApplicationTaskFilter,
    ApplicationTaskResult, RelevantRates, ApplicationTaskResults
} from '../../commons/models/application-data-models';
import {ApprovalRemoteDataService} from '../../data-providers/approval-remote-data.service';
import {MessageService} from '../../commons/services/message.service';
import {ApprovalHelperService} from '../approval-helper.service';
import {TableDataType} from '../../commons/models/common-data-models';
import {SubscriptionRemoteDataService} from "../../data-providers/subscription-remote-data.service";

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

    private mySubscriptions: ApplicationTaskResult;
    private allSubscriptions: ApplicationTaskResult;

    private mySubscriptionFilter: ApplicationTaskFilter;
    private groupSubscriptionFilter: ApplicationTaskFilter;

    constructor(private message: MessageService,
                private approvalHelperService: ApprovalHelperService,
                private subscriptionService: SubscriptionRemoteDataService,
                private approvalService: ApprovalRemoteDataService) {
    }

    ngOnInit() {

        this.mySubscriptionFilter = new ApplicationTaskFilter(new TableDataType('USER', 'SUBSCRIPTION'), 10);

        this.groupSubscriptionFilter = new ApplicationTaskFilter(new TableDataType('GROUP', 'SUBSCRIPTION'), 10);

        this.subscriptionService.SubscriptionApprovalTaskProvider.subscribe(
            (subs: ApplicationTaskResults) => {
                this.mySubscriptions = subs.myApplicationTasks;
                this.allSubscriptions = subs.allApplicationTasks;
                if (this.mySubscriptions != null) {
                    this.setDefaultOperationRates();
                }
                if(this.allSubscriptions != null){
                    this.setDefaultAllOperationRates();
                }
            },
            (error) => {
                this.message.error(error.message);
            }
        );

        this.getData();


    }

    setDefaultOperationRates() {
        if (this.mySubscriptions != null) {
            let count = 0;
            for (const entry of this.mySubscriptions.applicationTasks) {
                let selectedRate = '';
                for (const entry2 of entry.relevantRates) {
                    if (entry2.rateDefinitions.length > 0) {
                        let id = entry2.rateDefinitions[0].rateDefId;

                        if (selectedRate.length == 0) {
                            selectedRate += id;
                        } else {
                            selectedRate += '-' + id;
                        }
                    }
                }
                this.mySubscriptions.applicationTasks[count].selectedRate = selectedRate;
                count++;
            }
        }


    }

    setDefaultAllOperationRates() {

        if (this.allSubscriptions != null) {
            let count = 0;
            for (const entry of this.allSubscriptions.applicationTasks) {
                let selectedRate = '';
                for (const entry2 of entry.relevantRates) {
                    if (entry2.rateDefinitions.length > 0) {
                        let id = entry2.rateDefinitions[0].rateDefId;

                        if (selectedRate.length == 0) {
                            selectedRate += id;
                        } else {
                            selectedRate += '-' + id;
                        }
                    }

                }
                this.allSubscriptions.applicationTasks[count].selectedRate = selectedRate;
                count++;
            }
        }


    }

    private getData() {
        // this.approvalService.getUserAppSubscriptionTasks(this.mySubscriptionFilter);
        // this.approvalService.getUserGroupAppSubscriptionTask(this.groupSubscriptionFilter);
        this.subscriptionService.getSubscriptionTasks();
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

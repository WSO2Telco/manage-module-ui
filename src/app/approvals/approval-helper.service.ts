import {Injectable} from '@angular/core';
import {ApprovalRemoteDataService} from "../data-providers/approval-remote-data.service";
import {MessageService} from "../commons/services/message.service";
import {
    ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam, ApplicationTask
} from "../commons/models/application-data-models";
import {TableDataType} from "../commons/models/common-data-models";

@Injectable()
export class ApprovalHelperService {

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService) {
    }


    assignApplicationTask(dataType: string, taskId: number):void {
        this.approvalService.assignApplicationTaskToUser(taskId).subscribe(
            () => {
                if (dataType == "APPLICATION") {
                    this.message.success(this.message.APPROVAL_MESSAGES.APPLICATION_CREATION_ASSIGN_SUCCESS);
                } else if (dataType == "SUBSCRIPTION") {
                    this.message.success(this.message.APPROVAL_MESSAGES.SUBSCRIPTION_CREATION_ASSIGN_SUCCESS);
                }
                this.approvalService.getAllTasks();
            },
            (error) => {
                this.message.error(error);
            }
        );
    }

    approveRejectTask(dataType:TableDataType,appTask:ApplicationTask,status):void{

        let applicationActions = (status:'APPROVED' | 'REJECTED') => {

            let param: ApproveApplicationCreationTaskParam = new ApproveApplicationCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.toString();
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = 'admin';
            param.taskType = "application";

            this.approvalService.approveApplicationCreationTask(param).subscribe(
                () => {
                    this.message.success((status == 'APPROVED') ? this.message.APPROVAL_MESSAGES.APP_CREATION_APPROVE_SUCCESS : this.message.APPROVAL_MESSAGES.APP_CREATION_REJECT_SUCCESS);
                    this.approvalService.getAllTasks();
                },
                (error) => {
                    this.message.error(error);
                }
            );
        };

        let subscriptionActions = (status:'APPROVED' | 'REJECTED') => {
            let param: ApproveSubscriptionCreationTaskParam = new ApproveSubscriptionCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.toString();
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = 'admin';
            param.taskType = "subscription";

            this.approvalService.approveSubscriptionCreationTask(param).subscribe(
                () => {
                    this.message.success((status == 'APPROVED')? this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_APPROVE_SUCCESS : this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_REJECT_SUCCESS);
                    this.approvalService.getAllTasks();
                },
                (error) => {
                    this.message.error(error);
                }
            );
        };

        let approveActions = {};
        approveActions['APPLICATION'] = applicationActions;
        approveActions['SUBSCRIPTION'] = subscriptionActions;

        approveActions[dataType.dataType] && approveActions[dataType.dataType](status);
    }

}

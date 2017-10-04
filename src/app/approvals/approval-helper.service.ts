import {Injectable} from '@angular/core';
import {ApprovalRemoteDataService} from '../data-providers/approval-remote-data.service';
import {MessageService} from '../commons/services/message.service';
import {
    ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam, ApplicationTask
} from '../commons/models/application-data-models';
import {TableDataType} from '../commons/models/common-data-models';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class ApprovalHelperService {

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService,
                private slimLoadingBarService: SlimLoadingBarService) {
    }


    /**
     * this function is used to assign applications/ subscriptions to the logged in user.
     * @param dataType
     * @param taskId
     * @param callBack
     */
    assignApplicationTask(dataType: string, taskId: number, callBack): void {

        this.slimLoadingBarService.start();

        this.approvalService.assignApplicationTaskToUser(taskId).subscribe(
            () => {
                if (dataType == 'APPLICATION') {
                    this.message.success(this.message.APPROVAL_MESSAGES.APPLICATION_CREATION_ASSIGN_SUCCESS);
                } else if (dataType == 'SUBSCRIPTION') {
                    this.message.success(this.message.APPROVAL_MESSAGES.SUBSCRIPTION_CREATION_ASSIGN_SUCCESS);
                }
                callBack();
            },
            (error) => {
                this.message.error(error);
            },
            () => {
                this.slimLoadingBarService.complete();
            }
        );
    }


    /**
     * this function is used to approve or reject applications and subscriptions
     * @param dataType
     * @param appTask
     * @param status
     */
    approveRejectTask(dataType: TableDataType, appTask: ApplicationTask, status): void {

        const roleList = JSON.parse(sessionStorage.getItem('loginUserInfo')).roles;
        const billing = JSON.parse(sessionStorage.getItem('loginUserInfo')).billing;
        let role = false;

        const completedByUser = JSON.parse(sessionStorage.getItem('loginUserInfo')).userName;

        /** for loop will set the user role */
        for (const entry of roleList) {
            if (entry == 'manage-app-admin') {
                role = true;
            }
        }

        this.slimLoadingBarService.start();

        /**
         * for applications approval or rejections
         * @param status
         */
        const applicationActions = (status: 'APPROVED' | 'REJECTED') => {

            if (!billing) {
                appTask.creditPlan = '';
            }

            const param: ApproveApplicationCreationTaskParam = new ApproveApplicationCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.applicationDescription;
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = completedByUser;
            param.taskType = 'application';
            param.role = role;
            param.creditPlan = appTask.creditPlan;

            this.approvalService.approveApplicationCreationTask(param).subscribe(
                () => {

                    if (status == 'APPROVED') {
                        this.message.success(this.message.APPROVAL_MESSAGES.APP_CREATION_APPROVE_SUCCESS);
                    } else {
                        this.message.info(this.message.APPROVAL_MESSAGES.APP_CREATION_REJECT_SUCCESS);
                    }

                    this.approvalService.getAllTasks();
                },
                (error) => {
                    this.message.error(error);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
        };

        /**
         * for subscription approval or rejection
         * @param status
         */
        const subscriptionActions = (status: 'APPROVED' | 'REJECTED') => {

            if (!billing) {
                appTask.selectedRate = '';
            }
            const param: ApproveSubscriptionCreationTaskParam = new ApproveSubscriptionCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.applicationDescription;
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = completedByUser;
            param.taskType = 'subscription';
            param.role = role;
            param.selectedRate = appTask.selectedRate;

            this.approvalService.approveSubscriptionCreationTask(param).subscribe(
                () => {
                    if (status == 'APPROVED') {
                        this.message.success(this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_APPROVE_SUCCESS);
                    } else {
                        this.message.info(this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_REJECT_SUCCESS);
                    }

                    this.approvalService.getAllTasks();
                },
                (error) => {
                    this.message.error(error);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
        };

        const approveActions = {};
        approveActions['APPLICATION'] = applicationActions;
        approveActions['SUBSCRIPTION'] = subscriptionActions;

        approveActions[dataType.dataType] && approveActions[dataType.dataType](status);
    }

}

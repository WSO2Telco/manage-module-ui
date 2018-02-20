import {Injectable} from '@angular/core';
import {ApprovalRemoteDataService} from '../data-providers/approval-remote-data.service';
import {MessageService} from '../commons/services/message.service';
import {
    ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam, ApplicationTask
} from '../commons/models/application-data-models';
import {TableDataType} from '../commons/models/common-data-models';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {AuthenticationService} from '../commons/services/authentication.service';

@Injectable()
export class ApprovalHelperService {

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService,
                private slimLoadingBarService: SlimLoadingBarService,
                private authService: AuthenticationService) {
    }


    /**
     * this function is used to assign applications/ subscriptions to the logged in user.
     * @param dataType
     * @param taskId
     * @param callBack
     */
    assignApplicationTask(dataType: string, taskId: number, callBack): void {

        this.slimLoadingBarService.start();

        if (dataType == 'APPLICATION') {
            this.approvalService.assignApplicationTaskToUser(taskId).subscribe(
                () => {
                    this.message.success(this.message.APPROVAL_MESSAGES.APPLICATION_CREATION_ASSIGN_SUCCESS);
                    callBack();
                },
                (error) => {
                    this.message.error(error);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
        } else if (dataType == 'SUBSCRIPTION') {
            this.approvalService.assignSubscriptionTaskToUser(taskId).subscribe(
                () => {

                    this.message.success(this.message.APPROVAL_MESSAGES.SUBSCRIPTION_CREATION_ASSIGN_SUCCESS);
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
    }


    /**
     * this function is used to approve or reject applications and subscriptions
     * @param dataType
     * @param appTask
     * @param status
     */
    approveRejectTask(dataType: TableDataType, appTask: ApplicationTask, status): void {

        this.slimLoadingBarService.start();

        /**
         * for applications approval or rejections
         * @param status
         */
        const applicationActions = (status: 'APPROVED' | 'REJECTED') => {

            if (!this.authService.hasPermissions('application:creditPlan')) {
                appTask.creditPlan = '';
            }

            const param: ApproveApplicationCreationTaskParam = new ApproveApplicationCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.applicationDescription;
            param.selectedTier = appTask.tier;
            param.status = status;
            param.creditPlan = appTask.creditPlan;

            this.approvalService.approveApplicationCreationTask(param).subscribe(
                data => {
                    if (data.success) {
                        if (status == 'APPROVED') {
                            this.message.success(this.message.APPROVAL_MESSAGES.APP_CREATION_APPROVE_SUCCESS);
                        } else {
                            this.message.info(this.message.APPROVAL_MESSAGES.APP_CREATION_REJECT_SUCCESS);
                        }
                        this.approvalService.getAllTasks();
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
        };

        /**
         * for subscription approval or rejection
         * @param status
         */
        const subscriptionActions = (status: 'APPROVED' | 'REJECTED') => {

            if (!this.authService.hasPermissions('subscription:changeRates')) {
                appTask.selectedRate = '';
            }
            const param: ApproveSubscriptionCreationTaskParam = new ApproveSubscriptionCreationTaskParam();
            param.taskId = appTask.id;
            param.description = appTask.applicationDescription;
            param.selectedTier = appTask.tier;
            param.status = status;
            param.selectedRate = appTask.selectedRate;

            this.approvalService.approveSubscriptionCreationTask(param).subscribe(
                data => {
                    if (data.success) {
                        if (status == 'APPROVED') {
                            this.message.success(this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_APPROVE_SUCCESS);
                        } else {
                            this.message.info(this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_REJECT_SUCCESS);
                        }
                        this.approvalService.getAllTasks();
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
        };

        const approveActions = {};
        approveActions['APPLICATION'] = applicationActions;
        approveActions['SUBSCRIPTION'] = subscriptionActions;

        approveActions[dataType.dataType] && approveActions[dataType.dataType](status);
    }

}

import {Component, OnInit, Input} from '@angular/core';
import {
    ApplicationTask, ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam
} from "../../models/application-data-models";
import {ApprovalRemoteDataService} from "../../../data-providers/approval-remote-data.service";
import {MessageService} from "../../services/message.service";
import {TableDataType} from "../../models/common-data-models";
import {Router} from "@angular/router";

@Component({
    selector: 'application-data-table',
    templateUrl: './application-data-table.component.html',
    styleUrls: ['./application-data-table.component.scss']
})
export class ApplicationDataTableComponent implements OnInit {


    @Input()
    private tableTitle: string;

    @Input()
    private recordLimit: string;

    @Input()
    private dataSource: ApplicationTask;

    @Input()
    private recordsType: TableDataType;

    @Input()
    private moreLinkPath: string;

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    onViewAll(): void {
        if(!!this.moreLinkPath){
            this._router.navigate([this.moreLinkPath]);
        }
    }

    onAction(actionType: string, appTask: ApplicationTask, typeInfo: TableDataType): void {
        switch (actionType) {
            case 'ASSIGN' : {
                this.approvalService.assignApplicationTaskToUser(appTask.id).subscribe(
                    () => {
                        if (typeInfo.dataType == "APPLICATION") {
                            this.message.success(this.message.APPROVAL_MESSAGES.APPLICATION_CREATION_ASSIGN_SUCCESS);
                        } else if (typeInfo.dataType == "SUBSCRIPTION") {
                            this.message.success(this.message.APPROVAL_MESSAGES.SUBSCRIPTION_CREATION_ASSIGN_SUCCESS);
                        }
                        this.approvalService.getAllTasks();
                    },
                    (error) => {
                        this.message.error(error);
                    }
                );
                break;
            }

            case 'APPROVE' : {

                let approveApplicationActions = () => {
                    let param: ApproveApplicationCreationTaskParam = new ApproveApplicationCreationTaskParam();
                    param.taskId = appTask.id;
                    param.description = appTask.applicationDescription;
                    param.selectedTier = appTask.tier;
                    param.status = "APPROVED";
                    param.user = 'admin';
                    param.taskType = "application";

                    this.approvalService.approveApplicationCreationTask(param).subscribe(
                        () => {
                            this.message.success(this.message.APPROVAL_MESSAGES.APP_CREATION_APPROVE_SUCCESS);
                            this.approvalService.getAllTasks();
                        },
                        (error) => {
                            this.message.error(error);
                        }
                    );
                };

                let approveSubscriptionActions = () => {
                    let param: ApproveSubscriptionCreationTaskParam = new ApproveSubscriptionCreationTaskParam();
                    param.taskId = appTask.id;
                    param.description = appTask.applicationDescription;
                    param.selectedTier = appTask.tier;
                    param.status = "APPROVED";
                    param.user = 'admin';
                    param.taskType = "subscription";

                    this.approvalService.approveSubscriptionCreationTask(param).subscribe(
                        () => {
                            this.message.success(this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_APPROVE_SUCCESS);
                            this.approvalService.getAllTasks();
                        },
                        (error) => {
                            this.message.error(error);
                        }
                    );
                };

                let approveActions = {};
                approveActions['APPLICATION'] = approveApplicationActions;
                approveActions['SUBSCRIPTION'] = approveSubscriptionActions;

                approveActions[typeInfo.dataType] && approveActions[typeInfo.dataType]();

                break;
            }


        }
    }

}

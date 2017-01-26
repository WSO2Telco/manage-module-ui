import {Component, OnInit, Input} from '@angular/core';
import {ApplicationTask, ApproveApplicationCreationTaskParam} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../data-providers/approval-remote-data.service";
import {Response} from "@angular/http";
import {MessageService} from "../../commons/services/message.service";

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
    private recordsType: 'USER' | 'GROUP';

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService) {
    }

    ngOnInit() {
    }

    onAction(actionType: string, appTask: ApplicationTask) {
        switch (actionType) {
            case 'ASSIGN' : {
                this.approvalService.assignApplicationTaskToUser(appTask.id).subscribe(
                    (result: any) => {
                        this.approvalService.getUserApplicationTasks();
                        this.approvalService.getUserGroupApplicationTasks();
                    },
                    (error) => {
                        alert(error);
                    }
                );
                break;
            }

            case 'APPROVE_APP' : {
                let param = new ApproveApplicationCreationTaskParam();
                param.taskId = appTask.id;
                param.description = '';
                param.selectedTier = appTask.tier;
                param.status = "APPROVED";
                param.user = 'admin';
                this.approvalService.approveApplicationCreationTask(param).subscribe(
                    (result: any) => {
                        this.message.success('Application successfully approved','');
                        this.approvalService.getUserApplicationTasks();
                    },
                    (error) => {
                        alert(error);
                    }
                );
                break;
            }


        }
    }

}

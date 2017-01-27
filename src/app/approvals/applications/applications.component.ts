import {Component, OnInit} from '@angular/core';
import {ApplicationTask} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../data-providers/approval-remote-data.service";
import {MessageService} from "../../commons/services/message.service";

@Component({
    selector: 'app-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

    private myApplications: ApplicationTask[];
    private allApplications: ApplicationTask[];

    constructor(private message: MessageService,
                private approvalService: ApprovalRemoteDataService) {
    }

    ngOnInit() {
        this.approvalService.MyApplicationCreationTasksProvider.subscribe(
            (apps) => {
                this.myApplications = apps;
            },
            (error) => {
                this.message.error(error);
            }
        );

        this.approvalService.GroupApplicationCreationTasksProvider.subscribe(
            (apps) => {
                this.allApplications = apps;
            },
            (error) => {
                this.message.error(error)
            }
        );

        this.approvalService.getUserApplicationTasks();
        this.approvalService.getUserGroupApplicationTasks();
    }

}

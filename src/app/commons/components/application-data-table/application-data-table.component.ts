import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {
    ApplicationTask, ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam, ApprovalEvent, ApplicationTaskFilter
} from "../../models/application-data-models";
import {ApprovalRemoteDataService} from "../../../data-providers/approval-remote-data.service";
import {MessageService} from "../../services/message.service";
import {TableDataType} from "../../models/common-data-models";
import {Router} from "@angular/router";
import {TypeaheadMatch} from "ng2-bootstrap";

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

    @Output()
    private onAssignTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    @Output()
    private onApproveRejectTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    private filter:ApplicationTaskFilter;

    private filterId:number;
    private filterAppName:string;
    private filterUser:string;
    private filterFromDate:string;
    private filterToDate:string;

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService,
                private _router: Router) {
    }

    ngOnInit() {
        this.filter = new ApplicationTaskFilter();
    }

    onViewAll(): void {
        if (!!this.moreLinkPath) {
            this._router.navigate([this.moreLinkPath]);
        }
    }

    onOptionChange(event, item) {
        item.tier = event.target.value;
    }

    onAction(actionType: string, appTask: ApplicationTask, typeInfo: TableDataType): void {
        switch (actionType) {
            case 'ASSIGN' : {
                this.onAssignTask.emit(new ApprovalEvent(appTask, typeInfo));
                break;
            }

            case 'APPROVE' : {
                this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'APPROVED'));
                break;
            }

            case 'REJECT' : {
                this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'REJECTED'));
                break;
            }
        }
    }

    onFilterItemAdded(event:TypeaheadMatch,type:string){
        let task:ApplicationTask = <ApplicationTask>event.item;

        switch(type){
            case 'ID' : {
                this.filter.ids.push(task.id);
                this.filterId = null;
                break;
            }

            case 'APP_NAME' : {
                this.filter.appNames.push(task.applicationName);
                this.filterAppName = null;
                break;
            }

            case 'USER' : {
                this.filter.users.push(task.userName);
                this.filterUser = null;
                break;
            }
        }

    }

}

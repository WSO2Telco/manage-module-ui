import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {
    ApplicationTask,
    ApplicationTaskFilter,
    ApplicationTaskResult,
    ApprovalEvent
} from '../../models/application-data-models';
import {MessageService} from '../../services/message.service';
import {TableDataType} from '../../models/common-data-models';
import {Router} from '@angular/router';

@Component({
    selector: 'application-data-table',
    templateUrl: './application-data-table.component.html',
    styleUrls: ['./application-data-table.component.scss']
})
export class ApplicationDataTableComponent implements OnInit {


    @Input() tableTitle: string;

    @Input() summeryModeRecordLimit: string;

    @Input() dataSource: ApplicationTaskResult;

    @Input() moreLinkPath: string;

    @Input() filter: ApplicationTaskFilter;

    @Input() showTiersPermissions: string;

    @Input() showCreditPlanPermissions: string;

    @Output() onAssignTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    @Output() onApproveRejectTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    @Output() onFilterChange: EventEmitter<ApplicationTaskFilter> = new EventEmitter();

    private FilterFieldsDataSource: ApplicationTask[];

    public filterString: string;

    private apiNamesList: string[] = [''];
    private userNamesList: string[] = [''];

    // Flag to determine whether to filtering is active or not
    private isFilterActivated = false;

    // Flag to determine whether to show or hide filtering panel
    public isFilterVisible = false;

    public currentPage = 1;

    constructor(private message: MessageService,
                private _router: Router) {
    }

    @Input()
    private creditPlan: string[];

    private tableID: string;

    private comment: string;
    private isCommentEmpty: boolean;

    @Input()
    private unAssigned: boolean;

    @Input()
    private isSubscriptionOnly: boolean;

    ngOnInit() {
        this.comment = '';
        this.filterString = '';
        this.isCommentEmpty = false;
    }


    ngOnChanges(changeObj: SimpleChanges) {
        if (!this.isFilterActivated && changeObj && changeObj['dataSource']
            && (changeObj['dataSource'].currentValue != changeObj['dataSource'].previousValue)) {
            const res: ApplicationTaskResult = changeObj['dataSource'].currentValue;
            this.FilterFieldsDataSource = (res && res.applicationTasks) || [];

            for (const appTask of this.FilterFieldsDataSource) {
                if (this.apiNamesList.indexOf(appTask.apiName) === -1) {
                    this.apiNamesList.push(appTask.apiName);
                }
                if (this.userNamesList.indexOf(appTask.userName) === -1) {
                    this.userNamesList.push(appTask.userName);
                }
                if (this.userNamesList.indexOf(appTask.subscriber) === -1) {
                    this.userNamesList.push(appTask.subscriber);
                }
            }
        }
    }

    onViewAll(): void {
        if (!!this.moreLinkPath) {
            this._router.navigate([this.moreLinkPath]);
        }
    }

    onOptionChange(event, item) {
        if (this.unAssigned) {
            this.message.warning('Please assign the task to yourself before editing');
        }
        item.tier = event.target.value;
    }

    onCreditPlanChange(event, item) {
        if (this.unAssigned) {
            this.message.warning('Please assign the task to yourself before editing');
        }
        item.creditPlan = event.target.value;
    }

    onToggleFilter() {
        this.isFilterVisible = !this.isFilterVisible;
        if (!this.isFilterVisible) {
            this.onClear();
        }
    }

    onAction(actionType: string, appTask: ApplicationTask, typeInfo: TableDataType): void {

        switch (actionType) {
            case 'ASSIGN': {
                this.onAssignTask.emit(new ApprovalEvent(appTask, typeInfo));
                break;
            }

            case 'APPROVE': {
                if (this.creditPlan.length == 1) {
                    appTask.creditPlan = this.creditPlan[0];
                }
                if (appTask.comment) {
                    this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'APPROVED'));
                } else {
                    this.isCommentEmpty = true;
                }
                break;
            }

            case 'REJECT': {
                if (appTask.comment) {
                    this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'REJECTED'));
                } else {
                    this.isCommentEmpty = true;
                }
                break;
            }
        }

    }

    onFilterItemAdded() {
        let stringValue = this.filterString.replace(/\s/g, '');
        this.filter.filerString = stringValue;
        this.filter.startRecordNumber = 0;
        this.currentPage = 1;
        this.onFilterChange.emit(this.filter);
    }

    onClear() {
        this.filterString = '';
        this.filter.filerString = this.filterString;
        this.onFilterChange.emit(this.filter);
    }

    onPageChanged(event) {
        this.filter.startRecordNumber = (<number>event.page - 1) * (this.filter.numberOfRecordsPerPage || 0);
        this.onFilterChange.emit(this.filter);
    }
}

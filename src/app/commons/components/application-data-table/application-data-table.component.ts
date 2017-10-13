import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {
    ApplicationTask, ApproveApplicationCreationTaskParam,
    ApproveSubscriptionCreationTaskParam, ApprovalEvent, ApplicationTaskFilter, ApplicationTaskResult, PaginationInfo
} from '../../models/application-data-models';
import {ApprovalRemoteDataService} from '../../../data-providers/approval-remote-data.service';
import {MessageService} from '../../services/message.service';
import {TableDataType} from '../../models/common-data-models';
import {Router} from '@angular/router';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {AuthenticationService} from "../../services/authentication.service";
import {element} from "protractor";

@Component({
    selector: 'application-data-table',
    templateUrl: './application-data-table.component.html',
    styleUrls: ['./application-data-table.component.scss']
})
export class ApplicationDataTableComponent implements OnInit {


    @Input()
    private tableTitle: string;

    @Input()
    private summeryModeRecordLimit: string;

    @Input()
    private dataSource: ApplicationTaskResult;

    @Input()
    private moreLinkPath: string;

    @Input()
    private filter: ApplicationTaskFilter;

    @Output()
    private onAssignTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    @Output()
    private onApproveRejectTask: EventEmitter<ApprovalEvent> = new EventEmitter();

    @Output()
    private onFilterChange: EventEmitter<ApplicationTaskFilter> = new EventEmitter();

    private FilterFieldsDataSource: ApplicationTask[];

    @Input()
    private apiName: string;

    private filterId: number;
    private filterAppName: string;
    private filterUser: string;
    private filterFromDate: string;
    private filterToDate: string;
    private filterApiName: string;
    private apis: string;
    private arr: string[];

    private apiNamesList: string[] = [''];
    private userNamesList: string[] = [''];

    // Flag to determine whether to filtering is active or not
    private isFilterActivated = false;

    // Flag to determine whether to show or hide filtering panel
    private isFilterVisible = false;

    private currentPage = 1;

    constructor(private approvalService: ApprovalRemoteDataService,
                private message: MessageService,
                private _router: Router,
                private authService: AuthenticationService) {

    }

    private showTiers: boolean;

    private billing: boolean;
    private iscreditPlan: boolean;

    @Input()
    private isSubscription: boolean;

    @Input()
    private creditPlan: string[];

    private roleList: string[];
    private tableID: string;

    private comment: string;
    private isCommentEmpty: boolean;

    private opsp: string;

    @Input()
    private isApplicationOnly: boolean;

    @Input()
    private isSubscriptionOnly: boolean;

    ngOnInit() {
        this.arr = [];
        this.roleList = JSON.parse(sessionStorage.getItem('loginUserInfo')).roles;
        this.billing = this.authService.loginUserInfo.getValue().billing;
        this.iscreditPlan = this.authService.loginUserInfo.getValue().creditPlan;
        this.showTiers = false;

        for (const entry of this.roleList) {
            if (entry == 'manage-app-admin') {
                this.showTiers = true;
            }
        }
        this.comment = '';
        this.isCommentEmpty = false;
        this.tableID = this.getId();
        this.creatorName();
    }


    ngOnChanges(changeObj: SimpleChanges) {
        if (!this.isFilterActivated && changeObj && changeObj['dataSource'] && (changeObj['dataSource'].currentValue != changeObj['dataSource'].previousValue)) {
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
        if (this.isApplicationOnly === true || this.isSubscriptionOnly === true) {
            this.message.warning('Please assign the task to you before editing');
        }
        item.tier = event.target.value;
    }

    onCreditPlanChange(event, item) {
        if (this.isApplicationOnly === true || this.isSubscriptionOnly === true) {
            this.message.warning('Please assign the task to you before editing');
        }
        item.creditPlan = event.target.value;
    }

    onOperationRateChange(event, item, apiOperation) {

        if (this.isApplicationOnly === true || this.isSubscriptionOnly === true) {
            this.message.warning('Please assign the task to you before editing');
        }

        let count = 0;
        for (const entry of item.relevantRates) {
            if (entry.apiOperation == apiOperation) {
                let id;
                for (const entry2 of entry.rateDefinitions) {
                    if (entry2.rateDefName == event.target.value) {
                        id = entry2.rateDefId;
                    }
                }
                const splitted = item.selectedRate.split('-');
                splitted[count] = id;
                item.selectedRate = splitted.join('-');
            }
            count++;
        }
    }

    onToggleFilter() {
        this.isFilterVisible = !this.isFilterVisible;
        if (!this.isFilterVisible) {
            this.onClear('ALL');
        }
    }

    onAction(actionType: string, appTask: ApplicationTask, typeInfo: TableDataType): void {

        switch (actionType) {
            case 'ASSIGN' : {
                this.onAssignTask.emit(new ApprovalEvent(appTask, typeInfo));
                break;
            }

            case 'APPROVE' : {
                if(!this.isSubscription && this.creditPlan.length == 1){
                    appTask.creditPlan = this.creditPlan[0];
                }
                if (appTask.comment) {
                    this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'APPROVED'));
                } else {
                    this.isCommentEmpty = true;
                }
                break;
            }

            case 'REJECT' : {
                if (appTask.comment) {
                    this.onApproveRejectTask.emit(new ApprovalEvent(appTask, typeInfo, 'REJECTED'));
                } else {
                    this.isCommentEmpty = true;
                }
                break;
            }
        }

    }

    onFilterItemAdded(event: TypeaheadMatch, type: string) {
        const task: ApplicationTask = <ApplicationTask>event.item;
        this.isFilterActivated = true;

        switch (type) {
            case 'ID' : {
                if (this.filter.apiNames.indexOf(this.filterApiName) < 0) {
                    this.filter.apiNames.push(this.filterApiName);
                }
                this.filterApiName = null;
                break;
            }

            case 'APP_NAME' : {
                if (this.filter.appNames.indexOf(task.applicationName) < 0) {
                    this.filter.appNames.push(task.applicationName);
                }
                this.filterAppName = null;
                break;
            }

            case 'userName' : {
                if (this.filter.users.indexOf(this.filterUser) < 0) {
                    this.filter.users.push(this.filterUser);
                }
                this.filterUser = null;
                break;
            }

            case 'subscriber' : {
                if (this.filter.subscribers.indexOf(this.filterUser) < 0) {
                    this.filter.subscribers.push(this.filterUser);
                }

                this.filterUser = null;
                break;
            }


        }
        this.onFilterChange.emit(this.filter);
    }

    onClear(type: string) {
        switch (type) {
            case 'ID': {
                this.filter.apiNames.length = 0;
                this.filterApiName = null;
                break;
            }
            case 'NAME': {
                this.filter.appNames.length = 0;
                this.filterAppName = null;
                break;
            }
            case 'USER': {
                this.filter.users.length = 0;
                this.filterUser = null;
                break;
            }
            case 'SUBS': {
                this.filter.subscribers.length = 0;
                this.filterUser = null;
                break;
            }
            case 'ALL': {
                this.filter.ids.length = 0;
                this.filter.appNames.length = 0;
                this.filter.users.length = 0;
                this.filterId = null;
                this.filterAppName = null;
                this.filterUser = null;
                break;
            }
        }

        if (this.filter.apiNames.length == 0 || this.filter.appNames.length == 0 || this.filter.users.length == 0) {
            this.isFilterActivated = false;
        }

        this.onFilterChange.emit(this.filter);
    }

    onPageChanged(event) {
        this.filter.startRecordNumber = (<number>event.page - 1) * (this.filter.numberOfRecordsPerPage || 0);
        this.onFilterChange.emit(this.filter);
    }

    /**
     * this function load the details of the specific user.
     * @param event
     */
    getUserDetails(event) {
        this.authService.getUserDetails(event, (response, status) => {
            if (status) {
                console.log(JSON.stringify(response));
            } else {
                this.message.error(response);
            }
        });
    }


    displayu() {
        console.log(JSON.stringify(this.dataSource));
    }

    /**
     * Display API Name in Subscriptions page
     * @param val
     * @returns {boolean}
     */
    showApiName(val) {
        if (this._router.url === val) {
            return true;
        } else {
            return false;
        }
    }

    creatorName() {
        if (this._router.url === '/approvals/applications') {
            this.opsp = 'userName';
        } else {
            this.opsp = 'subscriber';
        }
    }

    /**
     * this method will set the table class and id
     * @returns {any}
     */
    getId() {
        if (this._router.url === '/approvals/subscriptions') {
            return 'subscriptionTable';
        } else {
            return 'applicationTable';
        }
    }
}

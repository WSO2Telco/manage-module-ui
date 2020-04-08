import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {SubscriptionRemoteDataService} from "../../data-providers/subscription-remote-data.service";
import {
    ApprovalHistoryFilter, ApprovalHistory,
    ApprovalHistoryDataset, AppHistoryResponse, SubscriptionHistoryResponse, SubscriptionHistoryFilter
} from "../../commons/models/reporing-data-models";
import {AuthenticationService} from "../../commons/services/authentication.service";

@Component({
    selector: 'app-history-main',
    templateUrl: './history-main.component.html',
    styleUrls: ['./history-main.component.scss']
})
export class HistoryMainComponent implements OnInit {

    constructor(private reportingService: ReportingRemoteDataService, private subscriptionService: SubscriptionRemoteDataService,
                private authService: AuthenticationService) {
    }

    private filter: ApprovalHistoryFilter;
    private subFilter: SubscriptionHistoryFilter;

    private fieldSet = ["applicationId", "applicationName", "applicationDescription", "createdBy", "status", "approvedOn", "Application"];

    private approvalHistoryData: AppHistoryResponse;

    private subscriptionHistoryData : SubscriptionHistoryResponse;

    private totalItems: number = 0;
    private subTotalItems: number = 0;

    private currentPage: number = 1;
    private subCurrentPage: number = 1;
    public subViewPermission: boolean;
    public appViewPermission: boolean;
    public depType: string;

    ngOnInit() {
        this.filter = new ApprovalHistoryFilter();
        this.subFilter = new SubscriptionHistoryFilter();

        this.filter.count = 10;
        this.subFilter.count = 10;

        this.filter.count;
        this.subFilter.count;

        this.filter.filterString = '';
        this.subFilter.filterString = '';

        this.reportingService.ApprovalHistoryProvider.subscribe((history) => {
            this.approvalHistoryData = history;
            this.totalItems = (this.approvalHistoryData && this.approvalHistoryData.total) || this.totalItems;
        });

        this.subscriptionService.SubApprovalHistoryProvider.subscribe((subHistory) => {
            this.subscriptionHistoryData = subHistory;
            this.subTotalItems = (this.subscriptionHistoryData && this.subscriptionHistoryData.total) || this.subTotalItems;
        });

        if (this.authService.hasPermissions('subscription:visible')) {
            this.subViewPermission = true;
        }

        if (this.authService.hasPermissions('application:visible')) {
            this.appViewPermission = true;
        }

        this.reportingService.getSubscribers();
        this.reportingService.getOperators();
        this.reportingService.getApprovalHistory(this.filter);
        this.subscriptionService.getSubscriptionHistory(this.subFilter);

        this.reportingService.getDeploymentType().then((result) => {
            this.depType = result.depType;
        }).catch((err) => {
            console.log(err);
        });
    }

    onFilterChangeHandler(event: ApprovalHistoryFilter) {
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onSubFilterChangeHandler(event: SubscriptionHistoryFilter) {
        this.subFilter = event;
        this.subscriptionService.getSubscriptionHistory(this.subFilter);
    }

    onPageChanged(event) {
        this.filter.offset = (event.page - 1) * this.filter.count;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onSubPageChanged(event) {
        this.subFilter.offset = (event.page - 1) * this.subFilter.count;
        this.subscriptionService.getSubscriptionHistory(this.subFilter);
    }
}

import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {
    ApprovalHistoryFilter, ApprovalHistory,
    ApprovalHistoryDataset, AppHistoryResponse, SubscriptionHistoryResponse, SubscriptionHistoryFilter
} from "../../commons/models/reporing-data-models";

@Component({
    selector: 'app-history-main',
    templateUrl: './history-main.component.html',
    styleUrls: ['./history-main.component.scss']
})
export class HistoryMainComponent implements OnInit {

    constructor(private reportingService: ReportingRemoteDataService) {
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

        this.reportingService.SubApprovalHistoryProvider.subscribe((subHistory) => {
            this.subscriptionHistoryData = subHistory;
            this.subTotalItems = (this.subscriptionHistoryData && this.subscriptionHistoryData.total) || this.subTotalItems;
        });

        this.reportingService.getSubscribers();
        this.reportingService.getOperators();
        this.reportingService.getApprovalHistory(this.filter);
        this.reportingService.getSubscriptionHistory(this.subFilter);
    }

    onFilterChangeHandler(event: ApprovalHistoryFilter) {
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onSubFilterChangeHandler(event: SubscriptionHistoryFilter) {
        this.subFilter = event;
        this.reportingService.getSubscriptionHistory(this.subFilter);
    }

    onPageChanged(event) {
        this.filter.offset = (event.page - 1) * this.filter.count;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onSubPageChanged(event) {
        this.subFilter.offset = (event.page - 1) * this.subFilter.count;
        this.reportingService.getSubscriptionHistory(this.subFilter);
    }
}

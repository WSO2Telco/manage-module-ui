import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {
    ApprovalHistoryFilter, ApprovalHistory,
    ApprovalHistoryDataset, AppHistoryResponse
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

    private fieldSet = ["applicationId", "applicationName", "applicationDescription", "createdBy", "status", "approvedOn", "Application"];

    private approvalHistoryData: AppHistoryResponse;

    private totalItems: number = 0;
    private currentPage: number = 1;

    ngOnInit() {
        this.filter = new ApprovalHistoryFilter();
        this.filter.count = 10;
        this.filter.filterString = '';

        this.reportingService.ApprovalHistoryProvider.subscribe((history) => {
            this.approvalHistoryData = history;
            this.totalItems = (this.approvalHistoryData && this.approvalHistoryData.total) || this.totalItems;
        });

        this.reportingService.getSubscribers();
        this.reportingService.getOperators();
        this.reportingService.getApprovalHistory(this.filter);
    }

    onFilterChangeHandler(event: ApprovalHistoryFilter) {
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onPageChanged(event) {
        this.filter.offset = (event.page - 1) * this.filter.count;
        this.reportingService.getApprovalHistory(this.filter);
    }

}

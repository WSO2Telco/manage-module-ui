import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {
    ApprovalHistoryFilter, ApprovalHistory,
    ApprovalHistoryDataset
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

    private fieldSet = ["applicationId", "applicationName", "applicationDescription", "status","approvedOn"];

    private approvalHistoryData: ApprovalHistoryDataset;

    private totalItems:number = 500;
    private currentPage:number = 1;
    private itemsPerPage:number = 10;

    ngOnInit() {
        this.filter = new ApprovalHistoryFilter();

        this.reportingService.ApprovalHistoryProvider.subscribe((history) => {
            this.approvalHistoryData = history;
            this.totalItems = (this.approvalHistoryData && this.approvalHistoryData.noOfRecords) || this.totalItems;
        });

        this.reportingService.getSubscribers();
        this.reportingService.getApprovalHistory(this.filter);
    }

    onFilterChangeHandler(event:ApprovalHistoryFilter){
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onPageChanged(event){
        console.log(this.currentPage);
        this.filter.offset = (this.currentPage) * this.itemsPerPage;
        this.reportingService.getApprovalHistory(this.filter);
       // alert(JSON.stringify(event) + 'OFF : '+this.filter.offset);
    }

}

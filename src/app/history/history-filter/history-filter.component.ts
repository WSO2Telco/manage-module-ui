import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {ApprovalHistoryFilter} from "../../commons/models/reporing-data-models";

@Component({
    selector: 'app-history-filter',
    templateUrl: './history-filter.component.html',
    styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

    private subscribers: string[];

    @Input()
    private filter:ApprovalHistoryFilter;

    @Output()
    private onFilterChange:EventEmitter<ApprovalHistoryFilter> = new EventEmitter();


    constructor(private reportingService: ReportingRemoteDataService) {
    }

    ngOnInit() {

        this.reportingService.SubscribersProvider.subscribe((subscribers) => {
            this.subscribers = subscribers;
        });
    }

    onFilterCriteriaChange(){
        this.onFilterChange.emit(this.filter);
    }
}

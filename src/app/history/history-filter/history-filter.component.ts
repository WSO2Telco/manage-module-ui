import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {ApprovalHistoryFilter, Application} from "../../commons/models/reporing-data-models";

@Component({
    selector: 'app-history-filter',
    templateUrl: './history-filter.component.html',
    styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

    private subscribers: string[];
    private operators: string[];
    private applications: Application[];
    private selectedApplication:Application;


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

        this.reportingService.OperatorsProvider.subscribe((operators) => {
            this.operators = operators;
        });

        this.reportingService.ApplicationsProvider.subscribe((apps)=>{
            this.applications = apps;
        });
    }

    onFilterCriteriaChange(type:string,event?){
        if(type == 'SUBSCRIBER' && !!this.filter.subscriber){
            this.reportingService.getApplicationsBySubscriber(this.filter.subscriber);
        }else if(type == 'APPLICATION'){
            this.filter.applicationId = (<Application>event.item).id || 0;
        }

        this.onFilterChange.emit(this.filter);
    }

    onClearFilter(){
        this.filter.operator = '';
        this.filter.subscriber= '';
        this.filter.api= '';
        this.filter.applicationId = 0;
        this.selectedApplication = null;
        this.onFilterChange.emit(this.filter);
    }
}

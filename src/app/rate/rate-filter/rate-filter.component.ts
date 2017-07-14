import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {ApprovalRateFilter, Application} from "../../commons/models/reporing-data-models";

@Component({
    selector: 'app-rate-filter',
    templateUrl: './rate-filter.component.html',
    styleUrls: ['./rate-filter.component.scss']
})
export class RateFilterComponent implements OnInit {

    private subscribers: string[];
    private operators: string[];
    private applications: Application[];
    private selectedApplication: Application;


    @Input()
    private filter: ApprovalRateFilter;

    @Output()
    private onFilterChange: EventEmitter<ApprovalRateFilter> = new EventEmitter();


    constructor(private reportingService: ReportingRemoteDataService) {
    }

    ngOnInit() {
        this.reportingService.SubscribersProvider.subscribe((subscribers) => {
            this.subscribers = subscribers;
        });

        this.reportingService.OperatorsProvider.subscribe((operators) => {
            this.operators = operators;
        });

        this.reportingService.ApplicationsProvider.subscribe((apps) => {
            this.applications = apps;
            this.selectedApplication = null;
        });
    }

    onNoApplicationSelected(event){
        if(!event){
            this.filter.applicationId = 0;
            this.selectedApplication = null;
        }
    }

    onNoSubscriberSelected(event){
        if(!event){
            this.filter.subscriber = '';
            this.reportingService.getApplicationsBySubscriber('');
        }
    }

    onFilterCriteriaChange() {
        this.onFilterChange.emit(this.filter);
    }

    onSubscriberChange() {
        if (!!this.filter.subscriber) {
            this.reportingService.getApplicationsBySubscriber(this.filter.subscriber);
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    }

    onApplicationChange(event) {
        if (!!event.item) {
            this.filter.applicationId = (<Application>event.item).id || 0;
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    }

    onOperatorChange() {
        if (!!this.filter.operator) {
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    }

    onClearFilter() {
        this.filter.operator = '';
        this.filter.subscriber = '';
        this.filter.api = '';
        this.filter.applicationId = 0;
        this.selectedApplication = null;
        this.onFilterChange.emit(this.filter);
    }
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApprovalHistoryFilter, Application} from '../../commons/models/reporing-data-models';
import {AuthenticationService} from '../../commons/services/authentication.service';

@Component({
    selector: 'app-history-filter',
    templateUrl: './history-filter.component.html',
    styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

    public subscribers: string[];
    public applications: Application[];
    public selectedApplication: Application;
    public operators: string[];
    public loggedUser;
    public isAdmin: boolean;

    @Input() filter: ApprovalHistoryFilter;

    @Output() onFilterChange: EventEmitter<ApprovalHistoryFilter> = new EventEmitter();


    constructor(private reportingService: ReportingRemoteDataService, private authService: AuthenticationService) {
    }

    ngOnInit() {

        this.loggedUser = this.authService.loginUserInfo.getValue();
        this.isAdmin = this.loggedUser.isAdmin;

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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    AppHistory,
    ApplicationHistory,
    ApprovalHistoryFilter
} from '../../commons/models/reporing-data-models';
import { Router } from '@angular/router';
import { ReportingRemoteDataService } from "../../data-providers/reporting-remote-data.service";
import { AuthenticationService } from "../../commons/services/authentication.service";

@Component({
    selector: 'app-history-table',
    templateUrl: './application-history-table.component.html',
    styleUrls: ['./application-history-table.component.scss']
})
export class ApplicationHistoryTableComponent implements OnInit {

    @Input() tableHeader: string;

    @Input() dataSource: AppHistory[];

    @Input() filter: ApprovalHistoryFilter;

    @Output() applicationDetail: ApplicationHistory;

    @Output() onFilterChange: EventEmitter<ApprovalHistoryFilter> = new EventEmitter();

    public operatorApprovals: ApplicationHistory[];
    public subscriptions: ApplicationHistory[];
    public depType: string;

    public isFilterVisible: boolean;
    public filterString: string;
    public showApprovedOn: string;
    public name: string;
    public loggedUser: any;


    constructor(private router: Router, private reportingService: ReportingRemoteDataService, private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.dataSource = [];
        this.applicationDetail = null;
        this.operatorApprovals = [];
        this.subscriptions = [];
        this.isFilterVisible = true;
        this.filterString = '';
        this.showApprovedOn = 'workFlowHistory:showApprovedOn';
        this.name = 'test';

        this.reportingService.getDeploymentType().then((result) => {
            this.depType = result.depType;
        }).catch((err) => {
            console.log(err);
        });

    }

    onNavApplication(id: number) {
        this.router.navigateByUrl('/history/application/' + id + '/' + this.name);
    }

    onFilterItemAdded() {
        let stringValue = this.filterString.replace(/\s/g, '');
        this.filter.filterString = stringValue;
        this.onFilterChange.emit(this.filter);
    }

    onClear() {
        this.filterString = '';
        this.filter.filterString = this.filterString;
        this.onFilterChange.emit(this.filter);
    }
}

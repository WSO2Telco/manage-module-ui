import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    SubscriptionHistoryFilter,
    SubscriptionsHistory
} from '../../commons/models/reporing-data-models';
import { Router } from '@angular/router';
import { ReportingRemoteDataService } from "../../data-providers/reporting-remote-data.service";
import { AuthenticationService } from "../../commons/services/authentication.service";


@Component({
    selector: 'sub-history-table',
    templateUrl: './subscription-history-table.component.html',
    styleUrls: ['./subscription-history-table.component.scss']
})
export class SubscriptionHistoryTableComponent implements OnInit {

    @Input()
    private subscriptionDataSource: SubscriptionsHistory[];

    @Input()
    private subsFilter: SubscriptionHistoryFilter;

    @Output()
    private onSubFilterChange: EventEmitter<SubscriptionHistoryFilter> = new EventEmitter();

    private isSubFilterVisible: boolean;

    private filterSubString: string;

    private subViewPermission: boolean;


    constructor(private router: Router, private reportingService: ReportingRemoteDataService, private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.subscriptionDataSource = [];
        this.subViewPermission = null;
        this.isSubFilterVisible = true;
        this.filterSubString = '';

        if (this.authService.hasPermissions('subscription:visible')) {
            console.log(this.authService.hasPermissions('subscription:visible'));
            this.subViewPermission = true;
        }

    }

    onSubFilterItemAdded() {
        let stringValue = this.filterSubString.replace(/\s/g, '');
        this.subsFilter.filterString = stringValue;
        this.onSubFilterChange.emit(this.subsFilter);
    }

    onSubsClear() {
        this.filterSubString = '';
        this.subsFilter.filterString = this.filterSubString;
        this.onSubFilterChange.emit(this.subsFilter);
    }
}

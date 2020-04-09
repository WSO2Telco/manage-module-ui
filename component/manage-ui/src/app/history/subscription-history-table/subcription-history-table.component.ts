import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    SubscriptionHistoryFilter,
    SubscriptionsHistory
} from '../../commons/models/reporing-data-models';
import { Router } from '@angular/router';
import { ReportingRemoteDataService } from "../../data-providers/reporting-remote-data.service";
import { AuthenticationService } from "../../commons/services/authentication.service";
import {SubscriptionRemoteDataService} from "../../data-providers/subscription-remote-data.service";


@Component({
    selector: 'sub-history-table',
    templateUrl: './subscription-history-table.component.html',
    styleUrls: ['./subscription-history-table.component.scss']
})
export class SubscriptionHistoryTableComponent implements OnInit {

    @Input() subscriptionDataSource: SubscriptionsHistory[];

    @Input() subsFilter: SubscriptionHistoryFilter;

    @Output() onSubFilterChange: EventEmitter<SubscriptionHistoryFilter> = new EventEmitter();

    public isSubFilterVisible: boolean;

    public filterSubString: string;

    public subViewPermission: boolean;


    constructor(private router: Router, private reportingService: ReportingRemoteDataService, private subscriptionService: SubscriptionRemoteDataService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.subscriptionDataSource = [];
        this.subViewPermission = null;
        this.isSubFilterVisible = true;
        this.filterSubString = '';

        if (this.authService.hasPermissions('subscription:visible')) {
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

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

    private subscriptionDataSource: SubscriptionsHistory[];

    @Input()
    private subsFilter: SubscriptionHistoryFilter;

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

        this.getSubscriptionHistory(this.filterSubString);

        if (this.authService.hasPermissions('subscription:visible')) {
            console.log(this.authService.hasPermissions('subscription:visible'));
            this.subViewPermission = true;
        }

    }

    onSubFilterItemAdded() {
        let stringValue = this.filterSubString.replace(/\s/g, '');
        this.getSubscriptionHistory(stringValue);
    }

    onSubsClear() {
        this.filterSubString = '';
        this.getSubscriptionHistory(this.filterSubString);
    }

    getSubscriptionHistory = function(filterStringValue){
        this.reportingService.getSubscriptionHistory(filterStringValue).then((result) => {
            this.subscriptionDataSource = result.payload.subscriptions;
        }).catch((err) => {
            console.log(err);
        });
    }
}

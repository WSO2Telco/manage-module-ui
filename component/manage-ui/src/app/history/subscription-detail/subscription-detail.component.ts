import {Component, Input, OnInit, Output} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApplicationHistory, Subscriptions} from '../../commons/models/reporing-data-models';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-subscription-detail',
    templateUrl: './subscription-detail.component.html',
    styleUrls: ['./subscription-detail.component.scss']
})
export class SubscriptionDetailComponent implements OnInit {

    @Input() private applicationDetail: ApplicationHistory;
    private subscriptions: Subscriptions[];
    private operatorApprovals: ApplicationHistory[];
    private id: number;
    private show: boolean;
    public directionList;
    public direction;
    public IfNorthBound: boolean;

    constructor(private reportingService: ReportingRemoteDataService,
                private route: ActivatedRoute, private message: MessageService) {
    }

    ngOnInit() {
        this.applicationDetail = null;
        this.subscriptions = [];
        this.operatorApprovals = [];
        this.show = false;
        this.IfNorthBound = true;
        this.directionList = ['NorthBound', 'SouthBound'];
        this.direction = '';

        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.onApplication(this.id);
        });
    }

    onApplication(id: number) {
        this.reportingService.getApplicationDetail(id, (response, status) => {
            if (status) {
                this.applicationDetail = response;
                if (response.operatorApprovals != null) {
                    this.operatorApprovals = response.operatorApprovals;
                    this.subscriptions = response.subscriptions;
                    this.show = true;
                } else {
                    this.show = false;
                }
            } else {
                this.message.error('Error Loading Application History Data');
            }
        });
    }


    /**
     * this method is triggered when a subscriber is selected or input field is changed
     * @param event
     */
    onDirectionSelected() {

        if (this.direction == 'NorthBound'){
            this.IfNorthBound = false;
        } else{
            this.IfNorthBound = true;
        }


    }

}

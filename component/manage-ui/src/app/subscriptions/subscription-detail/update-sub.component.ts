import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApprovedApiOperationRate} from '../../commons/models/reporing-data-models';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../commons/services/message.service';
import {TabsetComponent} from 'ngx-bootstrap';
import {RateService} from "../../commons/services/rate.service";
import {API, APIOperation, AssignRates, Operator, RateDefinition} from '../../commons/models/common-data-models';

@Component({
    selector: 'app-update-sub',
    templateUrl: './update-sub.component.html',
    styleUrls: ['./update-sub.component.scss']
})
export class UpdateSubComponent implements OnInit {


    private subscriptionsrate: ApprovedApiOperationRate[];
    private id: number;
    private show: boolean;
    public title: string;
    public direction: string;
    private apiOperationList: APIOperation[];
    private apiList: API[];
    public editRateOperation: boolean;

    private sourceList: RateDefinition[];
    private destinationList: RateDefinition[];
    private assignedList: RateDefinition[];

    constructor(private reportingService: ReportingRemoteDataService,
                private rateService: RateService,
                private route: ActivatedRoute, private message: MessageService) {
    }

    ngOnInit() {
        this.subscriptionsrate = [];
        this.show = false;
        this.direction = 'NBsubscriptions';
        this.editRateOperation = false;
        this.assignedList = [];

        this.route.params.subscribe(params => {
            this.title = params['apiname'];
            this.id = params['appid'];
            this.getApprovedAPIOperationRate(this.id, 4, this.direction);
        });
    }


    /*onApplication(id: number) {
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
     } */


    /**
     * to load the Operator list
     */
    getApprovedAPIOperationRate(appID: number, apiid: number, direction: string) {
        this.rateService.getApprovedAPIOperationRate(appID, apiid, direction, (response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    this.subscriptionsrate.push(entry);
                }

            } else {
                this.message.error(response.message);
            }
        });
    }


    /**
     * to get api operations according to selected API
     */
    getApiOperations() {
        this.rateService.getApiOperations(this.title, (response) => {
            if (response.success) {
                this.apiOperationList = response.payload;
                this.editRateOperation = true;
                if (this.apiOperationList.length == 0) {
                    this.message.warning('No API Operations Available for The Selected API');
                }else{
                    let apiOperationId;
                    for (const item of this.apiOperationList) {
                        apiOperationId = item.apiOperationId;
                        console.log('hit this location');
                        this.loadRates(apiOperationId);
                    }
                }

            } else {
                this.apiOperationList = [];
                this.message.error(response.message);
            }
        });
    }


    /**
     * load the Available and Assigned Rates For selected API Operation
     */
    loadRates(apiOperationId:number) {
        if (this.title.length != 0 && this.apiOperationList.length != 0) {
         /*   let apiOperationId;
            let operatorId;
            /**for loop to set the api operation id
            for (const item of this.apiOperationList) {
                    apiOperationId = item.apiOperationId;
                    console.log('hit this location');
            }
*/
            /**condition to set the operator id*/
      /*      if (this.isAdmin && this.operator == 'Admin') {
                operatorId = null;
            } else {
                for (const entry of this.operatorList) {
                    if (entry.operatorName == this.operator) {
                        operatorId = entry.operatorId;
                    }
                }
            } */

            if (apiOperationId) {
                this.rateService.getAPIOperationRates(this.title, apiOperationId, null, (response) => {
                    if (response.success) {
                        this.sourceList = response.payload.source;
                        this.assignedList.push(response.payload.destination);
                        this.destinationList = [];
                        if (this.sourceList.length == 0) {
                            this.message.warning('No Rate Values Available for Selected Combination');
                        }
                        console.log(this.assignedList);
                    } else {
                        this.sourceList = [];
                        this.assignedList = [];
                        this.destinationList = [];
                        this.message.error(response.message);
                    }
                });
            }

        }
    }


    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    selectTab(tab_id: number) {
        this.staticTabs.tabs[tab_id].active = true;
    }

    disableEnable() {
        this.staticTabs.tabs[2].disabled = !this.staticTabs
    }
}
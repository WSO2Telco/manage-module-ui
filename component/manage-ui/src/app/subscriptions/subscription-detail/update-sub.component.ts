import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApprovedApiOperationRate} from '../../commons/models/reporing-data-models';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../commons/services/message.service';
import {TabsetComponent} from 'ngx-bootstrap';
import {RateService} from "../../commons/services/rate.service";
import {API, APIOperation, AssignRates, Operator, RateDefinition} from '../../commons/models/common-data-models';
import {ModalDirective} from 'ngx-bootstrap/modal'

@Component({
    selector: 'app-update-sub',
    templateUrl: './update-sub.component.html',
    styleUrls: ['./update-sub.component.scss']
})
export class UpdateSubComponent implements OnInit {


    private subscriptionsrate: ApprovedApiOperationRate[];
    private appId: number;
    public apiId: number;
    private show: boolean;
    public title: string;
    public action: string;
    public direction: string;
    private apiOperationList: APIOperation[];
    private apiList: API[];
    public editRateOperation: boolean;
    public selectedVal: string[];
    public updateOperationRate: string[];

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
        this.selectedVal = [];
        this.updateOperationRate = [];

        this.route.params.subscribe(params => {
            this.title = params['apiname'];
            this.appId = params['appid'];
            this.apiId = params['apiid'];
            this.action = params['action'];
            this.getApprovedAPIOperationRate(this.appId, this.apiId, this.direction);
        });
    }

    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('lgModal') public modal: ModalDirective;

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

            if (this.action == 'edit') {
                this.staticTabs.tabs[1].active = true;
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
                } else {
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
     * to update rate for list of operation of selected API
     */
    updateAPIOperationRate() {
        /*   const data = {
         operator: this.selectedoperator,
         serviceProvider: this.subscriber + '@carbon.super',
         applicationName: appId,
         apiName: apiId,
         quotaLimit: this.quotaInputValue,
         fromDate: this.fromdate,
         toDate: this.todate
         };

         this.rateService.updateAPIOperationRate(this.appId, this.apiId, this.direction, data, (response) => {
         if (response.success) {
         this.message.success(response.message);
         this.resetDefault();
         } else {
         this.message.error(response.message);
         }
         }); */
        this.message.success('API Operation Added successfully!!!');
        this.modal.hide();

     /*   for (let i = 0; i < this.apiOperationList.length; i++) {
            console.log(this.selectedVal[i]);
        } */
    }


    /**
     * load the Available and Assigned Rates For selected API Operation
     */
    loadRates(apiOperationId: number) {
        if (this.title.length != 0 && this.apiOperationList.length != 0) {
            /*   let apiOperationId;
             let operatorId;
             /**for loop to set the api operation Id
             for (const item of this.apiOperationList) {
             apiOperationId = item.apiOperationId;
             console.log('hit this location');
             }
             */
            /**condition to set the operator Id*/
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

    onOptionChange(event, item) {
        item.rateDefName = event.target.value;
        this.updateOperationRate.push(item.rateDefName);
        console.log(this.updateOperationRate);
    }


}
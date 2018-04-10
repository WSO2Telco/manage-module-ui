import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApprovedApiOperationRate} from '../../commons/models/reporing-data-models';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../commons/services/message.service';
import {TabsetComponent} from 'ngx-bootstrap';
import {RateService} from "../../commons/services/rate.service";
import {
    API,
    APIOperation,
    AssignRates,
    Operator,
    RateDefinition,
    UpdatedRate
} from '../../commons/models/common-data-models';
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
    public operatorId: string;
    public apiversion: string;
    private show: boolean;
    public disableUpdate: boolean;
    public title: string;
    public action: string;
    public status: string;
    public direction: string;
    public confirmMsg: string;
    private apiOperationList: APIOperation[];
    private apiList: API[];
    private operatorParamforOpRate: string;
    public editRateOperation: boolean;
    public setForAll: boolean;
    public selectboxdisable: boolean;
    public selectedVal: string[];
    public updateOperationRate: UpdatedRate[];
    public selectedValue: number[];
    public commentList: string[];
    public apiOperationIDList: number[];

    private sourceList: RateDefinition[];
    private destinationList: RateDefinition[];
    private assignedList: RateDefinition[];

    constructor(private reportingService: ReportingRemoteDataService,
                private rateService: RateService,
                private route: ActivatedRoute, private message: MessageService) {
    }

    ngOnInit() {
        this.subscriptionsrate = [];
        this.selectedVal = [];
        this.apiOperationIDList = [];
        this.show = false;
        this.setForAll = false;
        this.editRateOperation = false;
        this.selectboxdisable = false;
        this.disableUpdate = true;
        this.assignedList = [];
        this.selectedVal = [];
        this.updateOperationRate = [];
        this.commentList = [];

        this.route.params.subscribe(params => {
            this.title = params['apiname'];
            this.appId = params['appid'];
            this.apiversion = params['apiversion'];
            this.action = params['action'];
            this.status = params['status'];
            this.operatorId = params['operator'];

            if (this.operatorId == '_ALL') {
                this.direction = 'NBsubscriptions';
                this.operatorParamforOpRate = null;
            } else {
                this.direction = 'SBsubscriptions';
                this.operatorParamforOpRate = this.operatorId;
            }
            this.getApprovedAPIOperationRate(this.appId, this.title, this.apiversion, this.operatorId, this.direction);
        });
    }

    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('lgModal') public modal: ModalDirective;

    /**
     * to load the Operator list
     */
    getApprovedAPIOperationRate(appID: number, apiname: string, apiversion: string, operatorId: string, direction: string) {
        this.rateService.getApprovedAPIOperationRate(appID, apiname, apiversion, operatorId, direction, (response) => {
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

            if (this.status != 'Approved') {
                this.staticTabs.tabs[1].disabled = true;
            }


        });
    }

    onSearchChange(id: number) {
        if (id == this.updateOperationRate[0].apiOperationId) {
            this.selectboxdisable = true;
        }
    }


    /**
     * to see the check status
     */
    checkboxChange() {
        if (!this.setForAll) {
            this.setForAll = true;
        } else {
            this.setForAll = false;
        }
        if (this.setForAll) {
            var num1 = ((document.getElementById(this.updateOperationRate[0].apiOperationId.toString()) as HTMLInputElement).value);
            for (var i = 0; i < this.updateOperationRate.length; i++) {
                (document.getElementById(this.updateOperationRate[i].apiOperationId.toString()) as HTMLInputElement).value = num1;
            }
        } else {
            for (var i = 0; i < this.updateOperationRate.length; i++) {
                (document.getElementById(this.updateOperationRate[i + 1].apiOperationId.toString()) as HTMLInputElement).value = '';
            }
        }
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
                        this.apiOperationIDList.push(apiOperationId);
                    }
                    this.loadRates(this.apiOperationIDList);
                }

            } else {
                this.apiOperationList = [];
                this.message.error(response.message);
            }
        });

      //  this.loadRates(this.apiOperationIDList);
    }


    /**
     * to update rate for list of operation of selected API
     */
    updateAPIOperationRate() {

        // const opRate = new UpdatedRate();
        for (var i = 0; i < this.updateOperationRate.length; i++) {
            this.commentList[i] = (document.getElementById(this.updateOperationRate[i].apiOperationId.toString()) as HTMLInputElement).value;
            this.updateOperationRate[i].comment = this.commentList[i];
        }

        this.rateService.updateAPIOperationRate(this.appId, this.operatorId, this.title, this.apiversion, this.direction, this.updateOperationRate, (response) => {
            if (response.length != 0) {
                this.message.success("Successfully Update the operation rate");
                this.editRateOperation = false;
                this.ngOnInit();
            } else {
                this.message.error(response.message);
            }
        });
        this.modal.hide();


    }


    /**
     * load the Available and Assigned Rates For selected API Operation
     */
    loadRates(apiOperationId: number[]) {
        if (this.title.length != 0 ) {
            let index = 0;
            for (var v = 0; v < apiOperationId.length; v++) {
                this.rateService.getAPIOperationRates(this.title, apiOperationId[v],  +this.operatorParamforOpRate , (response) => {

                    if (response.success) {
                        this.sourceList = response.payload.source;
                        this.assignedList.push(response.payload.destination);
                        this.destinationList = [];
                        if (response.payload.destination == 0) {
                            this.message.warning('No Rate card Available for '+this.apiOperationList[index].apiOperation);
                        }
                        index++;
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

    onOptionChange(event, item, index) {
        item.rateDefID = event.target.value;
        item.rateDefName = event.target.options[event.target.selectedIndex].text;

        if (((this.subscriptionsrate[index].rateDefname != item.rateDefName) || (this.subscriptionsrate[index].rateDefname == null)) && (event.target.value !== 'null')) {
            const opRate = new UpdatedRate();
            opRate.apiVersion = this.apiversion;
            opRate.operatorId = +this.operatorId;
            opRate.apiOperationId = this.subscriptionsrate[index].apiOperationId;
            opRate.applicationId = this.appId;
            opRate.rateDefId = item.rateDefID;
            opRate.rateDefname = item.rateDefName;
            opRate.createBy = "admin";
            opRate.updateBy = "admin";
            this.disableUpdate = false;
            if (this.updateOperationRate.length == 0) {
                this.updateOperationRate.push(opRate);
            } else {
                let index;
                for (var v in this.updateOperationRate) // for acts as a foreach
                {
                    index = +v;
                    if (this.updateOperationRate[v].apiOperationId == item.apiOperationId) {
                        this.updateOperationRate.splice(index, 1);
                    }
                }

                this.updateOperationRate.push(opRate);
            }
        } else if (event.target.value == 'null') {
            this.updateOperationRate.splice(index, 1);

        } else {
            let index;
            for (var v in this.subscriptionsrate) // for acts as a foreach
            {
                index = +v;

                if ((this.updateOperationRate[v].apiOperationId == item.apiOperationId)) {
                    this.updateOperationRate.splice(index, 1);
                }
            }

        }

    }


}
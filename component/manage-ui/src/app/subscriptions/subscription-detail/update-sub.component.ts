import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ReportingRemoteDataService } from '../../data-providers/reporting-remote-data.service';
import { ApprovedApiOperationRate } from '../../commons/models/reporing-data-models';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../commons/services/message.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { RateService } from "../../commons/services/rate.service";
import {
    API,
    APIOperation,
    AssignRates,
    Operator,
    RateDefinition,
    UpdatedRate,
    AssignRateList
} from '../../commons/models/common-data-models';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { forkJoin } from "rxjs";
import { ApprovalHelperService } from 'app/approvals/approval-helper.service';
import { EditApplicationTierParam, EditSubscriptionTierParam } from 'app/commons/models/application-data-models';
import { BlackListWhiteListService } from 'app/commons/services/blacklist_whitelist.service';
import { AuthenticationService } from 'app/commons/services/authentication.service';

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
    public apiprovider: string;
    private show: boolean;
    public disableUpdate: boolean;
    public requestNxtService: boolean;
    public title: string;
    public appName: string;
    public action: string;
    public tier: string;
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
    private assignedList: AssignRateList[];
    public appTiers: string[];
    public subscriptionTiers: string[];
    public editTierState: boolean;
    public isAppTier: boolean;
    public newAppTier: string;
    public editAppTierParam: EditApplicationTierParam[];
    private loggedUser;

    constructor(private reportingService: ReportingRemoteDataService,
        private rateService: RateService,
        private workflowService: ApprovalHelperService,
        private blackListWhiteListService: BlackListWhiteListService,
        private authService: AuthenticationService,
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
        this.appTiers = [];
        this.subscriptionTiers = [];
        this.requestNxtService = true;
        this.loggedUser = this.authService.loginUserInfo.getValue();

        this.route.params.subscribe(params => {
            this.title = params['apiname'];
            this.appName = params['appname'];
            this.appId = params['appid'];
            this.apiversion = params['apiversion'];
            this.apiprovider = params['apiprovider'];
            this.tier = params['tier'];
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
            if (this.action == 'edit') {
                this.getApprovedAPIOperationRate(this.appId, this.title, this.apiversion, this.operatorId, this.direction);
            }
        });

    }

    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('lgModal') public modal: ModalDirective;
    @ViewChild('appModal') public appmodal: ModalDirective;

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
                    this.loadRatesFromStream(this.apiOperationIDList);
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

    loadRatesFromStream(apiOperationId: number[]) {
        if (this.title.length != 0) {
            let index = 0;
            let forkJoinAray = [];
            for (var v = 0; v < apiOperationId.length; v++) {
                forkJoinAray.push(
                    this.rateService.getAPIOperationRatesStream(this.title, apiOperationId[v], +this.operatorParamforOpRate)
                );
            }

            forkJoin(forkJoinAray).subscribe((res: any[]) => {
                if (res && res.length)
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].success) {
                            this.sourceList = res[i].payload.source;
                            this.assignedList.push(res[i].payload.destination);
                            this.destinationList = [];
                            if (res[i].payload.destination == 0) {
                                this.message.warning('No Rate card Available for ' + this.apiOperationList[index].apiOperation);
                            }
                            index++;
                        } else {
                            this.sourceList = [];
                            this.assignedList = [];
                            this.destinationList = [];
                            this.message.error(res[i].message);
                        }
                    }

            })
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

    editTierValue(flag: boolean, action: string) {
        this.editTierState = flag;
        console.log(this.editTierState);
        if (this.editTierState) {
            if (action == 'application') {
                this.appTiers = [];
                this.rateService.getApplicationTierOperations((response) => {
                    if (response.success) {

                        for (const entry of response.payload.list) {
                            if (entry.name == this.tier) {
                                this.appTiers.splice(0, 0, entry.name)
                            } else {
                                this.appTiers.push(entry.name);
                            }
                        }

                    } else {
                        this.message.error(response.message);
                    }
                });
            } else if (action == 'subscription') {
                this.subscriptionTiers = [];
                this.blackListWhiteListService.getSubscriptionTierOperations(this.title, this.apiversion, this.apiprovider, (response) => {
                    if (response.success) {

                        for (const entry of response.payload) {
                            if (entry == this.tier) {
                                this.subscriptionTiers.splice(0, 0, entry)
                            } else {
                                this.subscriptionTiers.push(entry);
                            }

                        }

                    } else {
                        this.message.error(response.message);
                    }
                });
            }
        }
    }

    onTierOptionChange(event, type: string) {
        if (type == 'subscription') {
            this.isAppTier = false;
        } if (type == 'application') {
            this.isAppTier = true;
        }
        this.newAppTier = event.target.value;
        this.appmodal.show();
    }

    /**
   * to update tier for specific application
   */
    updateApplicationTier() {
        if (this.isAppTier) {
            const editTierParam = new EditApplicationTierParam();
            editTierParam.applicationId = this.appId;
            editTierParam.applicationName = this.title;
            editTierParam.applicationTier = this.newAppTier;
            editTierParam.user = this.loggedUser.userName;

            this.workflowService.editApplicationTier(editTierParam, (response) => {
                if (response) {
                    this.message.success("Application Tier Successfully updated");
                    this.tier = this.newAppTier;
                    this.editTierValue(false, 'application');
                } else {
                    this.message.error('error');
                }
            });
        } else {
            const editsubTierParam = new EditSubscriptionTierParam();
            editsubTierParam.applicationId = this.appId;
            editsubTierParam.apiName = this.title;
            editsubTierParam.subscriptionTier = this.newAppTier;
            editsubTierParam.applicationName = this.appName;
            editsubTierParam.department = '';
            editsubTierParam.user = this.loggedUser.userName;

            this.workflowService.editSubscriptionTier(editsubTierParam, (response) => {
                if (response) {
                    this.message.success("Subscription Tier Successfully updated");
                    this.tier = this.newAppTier;
                    this.editTierValue(false, 'subscription');
                } else {
                    this.message.error('error');
                }
            });
        }
        this.appmodal.hide();

    }
}

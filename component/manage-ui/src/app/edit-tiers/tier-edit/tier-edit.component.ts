import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
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
import { forkJoin } from "rxjs/observable/forkJoin";
import { ApprovalHelperService } from 'app/approvals/approval-helper.service';
import { EditApplicationTierParam, EditSubscriptionTierParam } from 'app/commons/models/application-data-models';
import { BlackListWhiteListService } from 'app/commons/services/blacklist_whitelist.service';
import { AuthenticationService } from 'app/commons/services/authentication.service';

@Component({
    selector: 'app-tier-edit',
    templateUrl: './tier-edit.component.html',
    styleUrls: ['./tier-edit.component.scss']
})
export class TierEditComponent implements OnInit {


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
    private loggedUser;

    @Input() tierAction: string;
    @Input() editAppTierParam: EditApplicationTierParam;
    @Input() editSubTierParam: EditSubscriptionTierParam;

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

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

    }

    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('lgModal') public modal: ModalDirective;
    @ViewChild('appModal') public appmodal: ModalDirective;


    editTierValue(flag: boolean, action: string) {
        this.editTierState = flag;
        if (this.editTierState) {
            if (action == 'application') {
                this.appTiers = [];
                this.rateService.getApplicationTierOperations((response) => {
                    if (response.success) {

                        for (const entry of response.payload.list) {
                            if (entry.name == this.editAppTierParam.applicationTier) {
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
                this.blackListWhiteListService.getSubscriptionTierOperations(this.editSubTierParam.apiName, this.editSubTierParam.apiVersion, this.editSubTierParam.apiProvider, (response) => {
                    if (response.success) {

                        for (const entry of response.payload) {
                            if (entry == this.editSubTierParam.subscriptionTier) {
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
        this.appmodal.hide();
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
   * To update tier for specific application or subscription
   */
    updateApplicationTier() {
        if (this.isAppTier) {
            const editTierParam = new EditApplicationTierParam();
            editTierParam.applicationId = this.editAppTierParam.applicationId
            editTierParam.applicationName = this.editAppTierParam.applicationName
            editTierParam.applicationTier = this.newAppTier;
            editTierParam.user = this.loggedUser.userName;
            editTierParam.serviceProvider = this.editAppTierParam.serviceProvider;
            editTierParam.existingTier = this.editAppTierParam.applicationTier;
            
            

            this.workflowService.editApplicationTier(editTierParam, (response) => {
                if (response) {
                    this.message.success("Application Tier Successfully updated");
                    this.editAppTierParam.applicationTier = this.newAppTier;
                    this.editTierValue(false, 'application');
                } else {
                    this.message.error('error');
                    this.editTierValue(false, 'application');
                }
            });
        } else {
            const editsubTierParam = new EditSubscriptionTierParam();
            editsubTierParam.applicationId = this.editSubTierParam.applicationId
            editsubTierParam.apiName = this.editSubTierParam.apiName
            editsubTierParam.subscriptionTier = this.newAppTier;
            editsubTierParam.applicationName = this.editSubTierParam.applicationName;
            editsubTierParam.apiVersion = this.editSubTierParam.apiVersion;
            editsubTierParam.department = '';
            editsubTierParam.user = this.loggedUser.userName;
            editsubTierParam.apiID = this.editSubTierParam.apiID;
            editsubTierParam.existingTier = this.editSubTierParam.subscriptionTier;
            editsubTierParam.serviceProvider = this.editSubTierParam.serviceProvider;
           

            this.workflowService.editSubscriptionTier(editsubTierParam, (response) => {
                if (response) {
                    this.message.success("Subscription Tier Successfully updated");
                    this.editSubTierParam.subscriptionTier = this.newAppTier;
                    this.editTierValue(false, 'subscription');
                   
                    
                } else {
                    this.message.error('error');
                    this.editTierValue(false, 'subscription');
                }
            });
        }
        this.appmodal.hide();

    }

    closeDialog(){
        this.editTierValue(false, 'application')
        this.modalClose.emit(true);
    }
}

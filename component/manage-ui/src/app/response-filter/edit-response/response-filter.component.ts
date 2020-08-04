import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { ReportingRemoteDataService } from '../../data-providers/reporting-remote-data.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../commons/services/message.service';
import { RateService } from "../../commons/services/rate.service";
import { AuthenticationService } from '../../commons/services/authentication.service';
import { QuotaService } from '../../commons/services/quotacap.service';
import { Api, Application, QuotaList, API, FieldSet, Operator } from '../../commons/models/common-data-models';
import { BlackListWhiteListService } from "../../commons/services/blacklist_whitelist.service";
import { Subscriptions, contexPathArr } from '../../commons/models/reporing-data-models';
import { Router } from '@angular/router';
declare var JSONEditor;
declare var require: any;

@Component({
    selector: 'app-response-filter',
    templateUrl: './response-filter.component.html',
    styleUrls: ['./response-filter.component.scss']
})
export class ResponseFilterComponent implements OnInit {
    private id: number;
    private show: boolean;
    public directionList;
    public direction;
    public operatorsList: string[];
    //  public envList: string[] = ['production', 'sandbox'];
    public envList: contexPathArr[];
    public environmentURL: string;
    public isAdmin: boolean;
    public loggeduser: string;
    public subscriberList;
    public subscriber: string;
    public app: string;
    public api: string;
    public enviorment: string;
    public apiid: string;
    public operator: string;
    public operatorId: string;
    public isadminresult: boolean;

    private subscriberError: string;
    private applicationError: string;

    private apiError: string;
    private operatorError: string;

    private applicationList: string[];
    private apiList: string[];

    private applications: Application[];
    private apis: Api[];
    public operatorList: Operator[];

    private is_edit: boolean;
    private is_invalid_period: boolean;
    private isSubscriberSelect: boolean;
    private isAppSelect: boolean;
    private isApiSelect: boolean;
    private isCalenderEnable: boolean;
    private appID: string;
    private datepickvalue: string;
    private fromdate: string;
    private todate: string;
    private subscriptions: Subscriptions[];
    private applicationSubscriptions: Subscriptions[];
    private editAppPermissions: string;
    private editSubscriptionPermissions: string;
    private bToken: string;


    private isSubscriberError: boolean;
    public isApplicationError: boolean;
    private jdata: any;
    public jconainer: any;
    public renderCount: number = 0;

    constructor(private router: Router,
        private reportingService: ReportingRemoteDataService,
        private route: ActivatedRoute, private message: MessageService,
        private rateService: RateService,
        private authService: AuthenticationService,
        private quotaService: QuotaService,
        private blackListWhiteListService: BlackListWhiteListService) { }

    ngOnInit() {
        this.show = false;
        this.isadminresult = false;
        this.operatorId = '_ALL';
        this.apiid = '_ALL';
        this.subscriberList = [];
        this.applications = [];
        this.operatorList = [];
        this.applicationSubscriptions = [];
        this.isApplicationError = false;
        this.apis = [];
        this.apiList = [];
        this.operatorsList = ['ALL'];


        this.getOperatorList();
        this.reportingService.getSuperToken((response, status) => {
            this.bToken = response.token_type + ' ' + response.access_token;
        });

    }

    /**
     * to load the Operator list
     */
    getOperatorList() {
        this.rateService.getOperatorList((response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    this.operatorsList.push(entry.operatorName);
                    this.operatorList.push(entry);
                }
                this.GetLoggedUser();

            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * Change operator list based on SP
     */
    GetLoggedUser() {

        const loginInfo = this.authService.loginUserInfo.getValue();
        this.isAdmin = loginInfo.isAdmin;

        if (loginInfo.isAdmin) {
            this.loggeduser = '_All_';
            this.getSubscribersOfProvider(this.loggeduser);
        } else {
            this.loggeduser = loginInfo.operator;
            //this.setOperatorofSP();
            this.getSubscribersOfProvider(this.loggeduser.toUpperCase());
        }

    }

    /**
     * to load the subscriber details of operator
     */
    getSubscribersOfProvider(operatorName: string) {
        this.quotaService.getSubscribers(operatorName, (response) => {
            if (response.success) {
                this.subscriberList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * this method is triggered when a subscriber is selected
     * @param event
     */
    onSubscriberSelected() {
        this.app = '';
        this.api = '';
        this.appID = '';
        this.isSubscriberError = false;
        this.applications = [];
        let invalid = true;

        /** validation */
        for (const item of this.subscriberList) {
            if (this.subscriber == item) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.getAppsofSubscriber(this.subscriber);
            this.isSubscriberSelect = true;

        } else if (this.app.length !== 0) {
            this.isSubscriberError = true;
            this.subscriberError = 'Invalid Service Provider';
            this.isCalenderEnable = true;
            this.isSubscriberSelect = false;
            this.apiList = [];
            this.applicationList = [];
        } else {
            this.isSubscriberError = true;
            this.isSubscriberSelect = false;
            this.apiList = [];
            this.applicationList = [];
        }

    }

    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.blackListWhiteListService.getAppsOfEditSub(subscriberID, (response) => {
            if (response.success) {
                if (response.payload.length == 0) {
                    this.message.warning('No Applications of Subscriber Found');
                } else {
                    this.applicationSubscriptions = [];
                    for (const entry of response.payload) {
                        const splitted = entry.split(':');
                        const app = new Application();
                        const appsfulldetails = new Subscriptions();
                        appsfulldetails.id = splitted[0];
                        appsfulldetails.name = splitted[1];
                        appsfulldetails.tier = splitted[2];
                        appsfulldetails.approvalStatus = splitted[3];
                        appsfulldetails.lastUpdated = splitted[4].substr(0, splitted[4].lastIndexOf('.'));
                        this.applicationSubscriptions.push(appsfulldetails);
                        app.id = splitted[0];
                        app.name = splitted[1];
                        app.tier = splitted[2];
                        app.approvalStatus = splitted[3];
                        app.lastUpdate = splitted[4];
                        this.applications.push(app);
                    }
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected() {
        this.api = '';
        this.appID = '';
        this.apiid = '_ALL';
        this.apiList = [];
        this.isCalenderEnable = false;
        let invalid = true;


        for (const item of this.applications) {
            if (item.name == this.app) {
                invalid = false;
                this.applicationSubscriptions = [];
                const appsfulldetails = new Subscriptions();
                appsfulldetails.id = item.id;
                appsfulldetails.name = item.name;
                appsfulldetails.tier = item.tier;
                appsfulldetails.lastUpdated = item.lastUpdate.substr(0, item.lastUpdate.lastIndexOf('.'));
                appsfulldetails.approvalStatus = item.approvalStatus;
                this.applicationSubscriptions.push(appsfulldetails);
            }
        }

        if (!invalid) {
            this.getApis(this.app);
            for (const entry of this.applications) {
                if (entry.name == this.app) {
                    this.appID = entry.id;
                    this.isAppSelect = true;
                }
            }
            this.onApplication(+this.appID, this.operatorId, this.apiid);

        } else if (this.app.length !== 0) {
            this.isApplicationError = true;
            this.applicationError = 'Invalid Application';
            this.isAppSelect = false;
            this.isCalenderEnable = true;
            this.apiList = [];
        } else {
            this.apiList = [];
            this.isAppSelect = false;
        }
    }

    /**
     * to load the APIs of the application of the subscriber
     * @param appName
     */
    getApis(appName: string) {

        let index = 0;
        let appID = '';
        for (const entry of this.applications) {
            if (entry.name == appName) {
                appID = entry.id;
            }
            index++;
        }

        if (appID.length != 0) {

            this.blackListWhiteListService.getApis(this.subscriber, appID, (response) => {
                if (response.success) {
                    for (const entry of response.payload) {
                        const splitted = entry.split(':', 4);
                        const api = new Api();
                        api.id = splitted[0];
                        api.name = splitted[2];
                        api.provider = splitted[1];
                        api.version = splitted[3];
                        this.apis.push(api);
                        this.apiList.push(splitted[2] + ':' + splitted[3]);
                    }
                } else {
                    this.message.error(response.message);
                }
            });
        }
    }

    /**
     * to load the subscriber details of operator
     */
    getOperatorOfsubscriber(subscriberID: string) {
        if (this.isAdmin) {
            this.quotaService.getOperatorOfsubscriber(subscriberID, (response) => {
                if (response.success) {
                    if (response.payload.result === 'undefined' || response.payload.result === 'empty') {
                        this.operatorsList = [];
                    } else {
                        this.operatorsList = response.payload;
                    }
                } else {
                    this.message.error(response.message);
                }
            });
        }
    }

    /**
     * to load the subscription details
     */
    onApplication(id: number, opid: string, apiid: string) {
        this.reportingService.getSubscriptionDetail(id, opid, apiid, (response, status) => {
            if (status) {
                this.subscriptions = response;

            } else {
                this.message.error('Error Loading Subscription History Data');
            }
        });
    }

    /**
     * when and API value is selected form drop down
     * @param event
     */
    onApiSelected() {
        let invalid = true;

        for (const item of this.apiList) {
            if (item == this.api) {
                invalid = false;
            }
        }

        if (!invalid) {
            for (const entry of this.apis) {
                if ((entry.name + ':' + entry.version) == this.api) {
                    this.isApiSelect = true;
                    this.apiid = entry.id;
                }
            }/* 
            this.onApplication(+this.appID, this.operatorId, this.apiid); */
            this.reportingService.getAPIResourcePath(this.apiid, (response, status) => {
                if (status) {
                    this.envList = response.payload
                    this.environmentURL = response.additionalProperties.endpointURLs[0].environmentURLs.https;
                } else {
                    this.message.error('Error Loading Subscription History Data');
                }
            });


        } else if (this.api.length !== 0) {
            this.apiError = 'Invalid API';
            this.isApiSelect = false;
        } else {
            this.isApiSelect = false;
        }
    }

    /**
    * when and API Operation value is selected form drop down
    * @param event
    */
    onenviormentSelected() {
        let invalid = true;
        let contextPath;

        for (const item of this.envList) {
            if (item.httpVerb == this.enviorment) {
                invalid = false;
                contextPath = this.environmentURL + item.resourcePath;

            }
        }

        if (!invalid) {
            this.reportingService.getResponseByAPIOperation(contextPath, this.bToken, (response, status) => {
                if (status) {
                    this.jdata = response;
                    if (this.renderCount == 0) {

                        var container = document.getElementById("jsoneditor");
                        var options = {
                            mode: 'tree'
                        };
                        this.jconainer = new JSONEditor(container, options);
                        this.jconainer.set(this.jdata);
                        this.renderCount = 1;
                    } else {
                        this.jconainer.set(this.jdata);
                    }


                } else {
                    this.message.error('Error Loading Response');
                }
            });
        }

    }

    /**
     * this method is triggered when a operator is selected
     * @param event
     */
    onOperatorSelected() {
        let invalid = true;

        for (const item of this.operatorList) {
            if (item.operatorName == this.operator) {
                invalid = false;
                this.operatorId = String(item.operatorId);
            } else if (this.operator == 'ALL') {
                invalid = false;
                this.operatorId = "_ALL";
            }
        }
        if (!invalid) {
            this.onApplication(+this.appID, this.operatorId, this.apiid);
        }


    }

    getJSON() {
        const toJsonSchema = require('to-json-schema');
        const schema = toJsonSchema(this.jconainer.get(), { strings: { detectFormat: false } });
        this.reportingService.persitResponseFilter(this.subscriber, this.app, this.api, this.enviorment, schema, (response) => {
            if (response.success) {
                this.message.success('Modified Response Successfully Saved');
            } else {
                this.message.error(response.message);
            }
        });

    }
}

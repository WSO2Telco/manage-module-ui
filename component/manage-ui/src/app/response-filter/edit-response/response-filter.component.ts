import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ReportingRemoteDataService } from '../../data-providers/reporting-remote-data.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../commons/services/message.service';
import { RateService } from "../../commons/services/rate.service";
import { AuthenticationService } from '../../commons/services/authentication.service';
import { QuotaService } from '../../commons/services/quotacap.service';
import { Api, Application, Operator } from '../../commons/models/common-data-models';
import { BlackListWhiteListService } from "../../commons/services/blacklist_whitelist.service";
import { Subscriptions, contexPathArr, payloadParam } from '../../commons/models/reporing-data-models';
import { Router } from '@angular/router';
import { ResponseFilterService } from '../../commons/services/response_filter.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {responseFilterPayloadComponent} from "../edit-response-payload/response-filter-payload.component";
declare var JSONEditor;
declare var require: any;

@Component({
    selector: 'app-response-filter',
    templateUrl: './response-filter.component.html',
    styleUrls: ['./response-filter.component.scss']
})
export class ResponseFilterComponent implements OnInit {
    @ViewChild('lgModal') public modal: ModalDirective;
    @ViewChild('rfPayload') public responseFilterPayload: responseFilterPayloadComponent;
    private id: number;
    private show: boolean;
    public directionList;
    public direction;
    public operatorsList: string[];
    public envList: contexPathArr[];
    public filteredList: any;
    public prodEnvironmentURL: string;
    public sandboxEnvironmentURL: string;
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
    private isFilteredOperation: boolean = false;

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
    private contextPath: string;
    private httpVerb: string;

    constructor(private router: Router,
        private reportingService: ReportingRemoteDataService,
        private route: ActivatedRoute, private message: MessageService,
        private rateService: RateService,
        private authService: AuthenticationService,
        private quotaService: QuotaService,
        private blackListWhiteListService: BlackListWhiteListService,
        private responseFilterService: ResponseFilterService) { }

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
        /*        this.reportingService.getSuperToken((response, status) => {
                   this.bToken = 'Bearer 047575c9-3353-350d-ae68-e1e3491c6d18';
                   // this.bToken = response.token_type + ' ' + response.access_token;
               }); */

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
        this.envList = [];
        this.enviorment = '';
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
        this.envList = [];
        this.enviorment = '';
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
        this.enviorment = '';
        this.envList = [];

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
            }
            this.reportingService.getAPIResourcePath(this.apiid, (response, status) => {
                if (status) {
                    this.mappingEnvArray(response.payload)
                    this.prodEnvironmentURL = response.additionalProperties.endpointURLs[0].environmentURLs.https;
                    this.sandboxEnvironmentURL = response.additionalProperties.endpointURLs[0].environmentURLs.http;
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

    mappingEnvArray(data: any) {
        this.envList = data.filter(o => o.resourcePath.indexOf("*")==-1).map(o => {
            return { httpVerb: o.httpVerb, resourcePath: o.resourcePath, httpPathCom: o.httpVerb + ' ' + o.resourcePath };
        });
    }
    /**
    * when and API Operation value is selected form drop down
    * @param event
    */
    onenviormentSelected() {
        let invalid = true;

        for (const item of this.envList) {
            if (item.httpPathCom == this.enviorment) {
                invalid = false;
                if (item.resourcePath != '/*') {
                    this.contextPath = item.resourcePath;
                } else {
                    this.contextPath = ''
                }

                this.httpVerb = item.httpVerb

            }
        }

        if (!invalid) {
            this.responseFilterPayload.clearForm();
            this.modal.show();
            this.responseFilterService.GetFilteredDataBYAPIID(this.app, this.subscriber, this.api, this.encodeSpecialChars(this.enviorment), (response) => {
                if (response.success) {

                    this.filteredList = response.payload;
                } else {
                    this.message.error(response.message);
                }
            });
        }

    }

    /**
    * event handler method which is triggered when a payload set
    * @param event
    */
    onSetPayloadHandler(event: payloadParam) {
        if (event.enviormentName == 'production') {
            this.contextPath = this.prodEnvironmentURL + this.replacePlaceholders(this.contextPath, event.pathParam);
        } else {
            this.contextPath = this.sandboxEnvironmentURL + this.replacePlaceholders(this.contextPath, event.pathParam);
        }
        this.reportingService.getSuperToken(event.enviormentName).then((result) => {
            this.bToken = result.token_type + ' ' + result.access_token;
            this.invokeUserAction(this.contextPath, this.httpVerb, event)
        }).catch((err) => {
            console.log(err);
        });
    }

    invokeUserAction(contextPath: string, httpVerb: string, OtherParam: payloadParam) {
        if (httpVerb == 'POST') {

            this.responseFilterService.PostInvokeAPI(contextPath + OtherParam.urlParam, OtherParam.payloadBody, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error(response.message);
                    this.jdata = '';
                }
                this.RenderingResponseEditor();
            });
        } else if (httpVerb == 'GET') {

            this.responseFilterService.GetInvokeAPI(contextPath + OtherParam.urlParam, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error('Error Loading Response');
                    this.jdata = '';
                }

                this.RenderingResponseEditor();
            });

        } else if (httpVerb == 'DELETE') {

            this.responseFilterService.DeleteInvokeAPI(contextPath + OtherParam.urlParam, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error(response.message);
                    this.jdata = '';
                }
                this.RenderingResponseEditor();
            });
        } else if (httpVerb == 'PUT') {

            this.responseFilterService.PutInvokeAPI(contextPath + OtherParam.urlParam, OtherParam.payloadBody, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error(response.message);
                    this.jdata = '';
                }
                this.RenderingResponseEditor();
            });
        } else if (httpVerb == 'PATCH') {

            this.responseFilterService.PatchInvokeAPI(contextPath + OtherParam.urlParam, OtherParam.payloadBody, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error(response.message);
                    this.jdata = '';
                }
                this.RenderingResponseEditor();
            });
        }
        else if (httpVerb == 'HEAD') {

            this.responseFilterService.HeadInvokeAPI(contextPath + OtherParam.urlParam, this.bToken, (response) => {
                if (response.success) {
                    this.jdata = response.payload;
                } else {
                    this.message.error('Error Loading Response');
                    this.jdata = '';
                }

                this.RenderingResponseEditor();
            });

        }
    }

    RenderingResponseEditor() {
        if (this.jdata == null) {
            this.message.error('No Content');
            this.jdata = '';
        }
        if (this.filteredList) {
            this.isFilteredOperation = true;
            var filter = require('json-schema-filter-js');
            var results = filter(this.filteredList.fields, this.jdata, true);
            this.RenderingResponseEditorBaseOnStatus(results)
        } else {
            this.isFilteredOperation = false;
            this.RenderingResponseEditorBaseOnStatus(this.jdata)
        }

    }

    RenderingResponseEditorBaseOnStatus(data: any) {
        data = this.removeRedundantArrayNodes(data);
        if (this.renderCount == 0) {
            var container = document.getElementById("jsoneditor");
            var options = {
                mode: 'tree',
                enableTransform: false,
                onEditable: function (node) {
                    return false
                }
            };
            this.jconainer = new JSONEditor(container, options);
            this.jconainer.set(data);
            this.jconainer.expandAll();
            this.renderCount = 1;
        } else {
            this.jconainer.set(data);
            this.jconainer.expandAll();
        }
    }

    removeRedundantArrayNodes(data: any) {
        if (Array.isArray(data)) {
            data.length = 1;
            if (typeof data[0] == 'object'){
                Object.keys(data[0]).forEach(key => {
                    data[0][key] = this.removeRedundantArrayNodes(data[0][key]);
                });
            } else {
                data[0] = this.removeRedundantArrayNodes(data[0]);
            }
        } else if (typeof data == 'object') {
            Object.keys(data).forEach(key => {
                data[key] = this.removeRedundantArrayNodes(data[key]);
            });
        }
        return data;
    }

    onReset() {

        this.responseFilterService.DeleteResponseFilteredEntry(this.filteredList.id, (response) => {
            if (response.success) {
                this.filteredList = undefined;
                this.message.success(response.message);
            } else {
                this.message.error(response.message);
            }
            this.RenderingResponseEditor();
        });
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
                this.responseFilterService.GetFilteredDataBYAPIID(this.app, this.subscriber, this.api, this.encodeSpecialChars(this.enviorment), (response) => {
                    if (response.success) {
                        this.filteredList = response.payload;
                        this.isFilteredOperation = true;
                    } else {
                        this.message.error(response.message);
                    }
                });
            } else {
                this.message.error(response.message);
            }
        });

    }

    extractPathParams(str: string) {
        let pathParams = [],
            rxp = /{([^}]+)}/g,
            curMatch;
        while (curMatch = rxp.exec(str)) {
            pathParams.push(curMatch[1]);
        }
        return pathParams;
    }

    replacePlaceholders(contextPath: string, pathParams: string[]) {
        Object.keys(pathParams).forEach(key => {
            contextPath = contextPath.replace(new RegExp('{' + this.escapePlusSign(key) + '}', 'gi'), encodeURIComponent(pathParams[key]));
        });
        return contextPath;
    }

    encodeSpecialChars(str: string) {
        return str.replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/\+/g, "%2B");
    }

    escapePlusSign(str: string) {
        return str.replace("+", "\\+");
    }
}

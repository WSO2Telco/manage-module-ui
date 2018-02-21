/**
 * Created by sahanK on 2/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {QuotaService} from '../../commons/services/quotacap.service';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {Api, Application, QuotaList} from '../../commons/models/common-data-models';
import {MessageService} from '../../commons/services/message.service';
import {IMyDrpOptions} from 'mydaterangepicker';
import {RateService} from "../../commons/services/rate.service";
import {BlackListWhiteListService} from "../../commons/services/blacklist_whitelist.service";

@Component({
    selector: 'app-quotacap-main',
    templateUrl: './quotacap-main.component.html',
    styleUrls: ['./quotacap-main.component.scss']
})
export class QuotaCapMainComponent implements OnInit {

    private subscriber: string;
    private app: string;
    private api: string;
    private selectedoperator: string;

    private subscriberError: string;
    private applicationError: string;
    private apiError: string;
    private operatorError: string;

    private subscriberList;
    private applicationList: string[];
    private apiList: string[];

    private applications: Application[];
    private apis: Api[];
    private quotalist: QuotaList[];

    private quotaValue: string[];
    private quotaInputValue: string;
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

    private operatorsList: string[];
    private ISoperatordisable: boolean;

    private isNameEmpty: boolean;
    private isInvalidquota: boolean;
    private name: string;
    private resultLabel: string;


    private isSubscriberError: boolean;
    private isApplicationError: boolean;
    private isApiError: boolean;
    private isOperatorError: boolean;

    private isCalendarEmpty: boolean;
    private isAdmin: boolean;

    private date = new Date();
    private loggeduser: string;

    private showOperatorListPermissions: string;

    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'yyyy/mm/dd',
        sunHighlight: true,
        indicateInvalidDateRange: true,
        markCurrentDay: true,
        disableUntil: {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            day: this.date.getDate() - 1
        },
        editableDateRangeField: false,
        showClearDateRangeBtn: false
    };

    private defaultcalval: string;

    private model: Object = {
        beginDate: {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            day: this.date.getDate()
        },
        endDate: {
            year: this.date.getFullYear() + 200,
            month: 1,
            day: 1
        }
    };

    constructor(private quotaService: QuotaService,
                private blackListWhiteListService: BlackListWhiteListService,
                private rateService: RateService,
                private message: MessageService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.name = '';
        this.subscriberList = [];
        this.operatorsList = ['All'];
        this.applicationList = [];
        this.apiList = [];
        this.applications = [];
        this.quotalist = [];
        this.apis = [];

        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.selectedoperator = '';
        this.quotaValue = [];
        this.quotaInputValue = '';
        this.is_edit = false;
        this.isSubscriberSelect = false;
        this.isAppSelect = false;
        this.isApiSelect = false;
        this.isCalenderEnable = true;
        this.appID = '';
        this.fromdate = '';
        this.todate = '';
        this.defaultcalval = '';
        this.getOperatorList();
        this.clearErrors();

        this.showOperatorListPermissions = "quota:operatorList";
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

    l;


    /**
     * to load the subscriber details of operator
     */
    getOperatorOfsubscriber(subscriberID: string) {
        if (this.isAdmin) {
            this.quotaService.getOperatorOfsubscriber(subscriberID, (response) => {
                if (response.success) {
                    if (response.payload.result === 'undefined' || response.payload.result === 'empty') {
                        this.operatorsList = ['All'];
                    } else {
                        this.operatorsList = response.payload;
                        this.operatorsList.splice(0, 0, 'All');
                    }
                } else {
                    this.message.error(response.message);
                }
            });
        }
    }

    /**
     * to load the Operator list
     */
    getOperatorList() {
        this.rateService.getOperatorList((response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    this.operatorsList.push(entry.operatorName);
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
            this.setOperatorofSP();
            this.getSubscribersOfProvider(this.loggeduser.toUpperCase());
        }

    }

    /**
     * Change operator list based on SP
     */
    setOperatorofSP() {
        let index = 0;
        for (const entry of this.operatorsList) {
            if (entry.toLowerCase() === this.loggeduser.toLowerCase()) {

                this.selectedoperator = entry;
                this.ISoperatordisable = true;
            }
            index++;
        }
    }

    /**
     * this method is triggered when a subscriber is selected
     * @param event
     */
    onSubscriberSelected() {
        this.app = '';
        this.api = '';
        this.appID = '';
        this.isCalenderEnable = false;
        this.isSubscriberError = false;
        this.applications = [];
        this.clearErrors();
        let invalid = true;

        /** validation */
        for (const item of this.subscriberList) {
            if (this.subscriber == item) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.getAppsofSubscriber(this.subscriber);
            this.getQuotaofSubscriber(this.subscriber);
            this.getOperatorOfsubscriber(this.subscriber);
            this.isSubscriberSelect = true;

            if (this.defaultcalval !== '') {
                this.DateRangeValidation();
            }

        } else if (this.app.length !== 0) {
            this.isSubscriberError = true;
            this.subscriberError = 'Invalid Service Provider';
            this.isCalenderEnable = true;
            this.isSubscriberSelect = false;
            this.apiList = [];
            this.applicationList = [];
            this.quotalist = [];
            this.SetQuotaResultLabel();
        } else {
            this.isSubscriberError = true;
            this.isSubscriberSelect = false;
            this.apiList = [];
            this.applicationList = [];
            this.quotalist = [];
            this.SetQuotaResultLabel();
        }

    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected() {
        this.api = '';
        this.appID = '';
        this.apiList = [];
        this.SetQuotaResultLabel();
        this.isCalenderEnable = false;
        let invalid = true;
        this.isApplicationError = false;


        for (const item of this.applications) {
            if (item.name == this.app) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.getApis(this.app);
            for (const entry of this.applications) {
                if (entry.name == this.app) {
                    this.appID = entry.id;
                    this.isAppSelect = true;
                    this.getQuotaofApp(this.appID);
                }
            }
            if (this.defaultcalval !== '') {
                this.DateRangeValidation();
            }

        } else if (this.app.length !== 0) {
            this.isApplicationError = true;
            this.applicationError = 'Invalid Application';
            this.isAppSelect = false;
            this.isCalenderEnable = true;
            this.apiList = [];
            this.quotalist = [];
            this.SetQuotaResultLabel();
        } else {
            this.apiList = [];
            this.quotalist = [];
            this.isAppSelect = false;
            this.SetQuotaResultLabel();
            this.getQuotaofSubscriber(this.subscriber);
            if (this.defaultcalval !== '') {
                this.DateRangeValidation();
            }
        }
    }


    /**
     * this method is triggered when a operator is selected
     * @param event
     */
    onOperatorSelected() {
        this.clearErrors();
        let invalid = true;
        this.isOperatorError = false;

        for (const item of this.operatorsList) {
            if (item == this.selectedoperator) {
                invalid = false;
            }
        }

        if (!invalid) {
            if (this.isApiSelect) {
                this.getQuotaofApi(this.api);
            } else if (this.isAppSelect) {
                this.getQuotaofApp(this.appID);
            } else if (this.isSubscriberSelect) {
                this.getQuotaofSubscriber(this.subscriber);
            }
            if (this.defaultcalval !== '') {
                console.log('----hit here---');
                this.DateRangeValidation();
            }
        } else if (this.selectedoperator.length !== 0) {
            this.isOperatorError = true;
            this.operatorError = 'Invalid Operator';
            this.quotalist = [];
            this.SetQuotaResultLabel();
        } else {
            this.quotalist = [];
            this.getQuotaofApi(this.api);
            this.SetQuotaResultLabel();
        }
    }

    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.clearErrors();
        this.blackListWhiteListService.getApps(subscriberID, (response) => {
            if (response.success) {
                if (response.payload.length == 0) {
                    this.message.warning('No Applications of Subscriber Found');
                } else {
                    for (const entry of response.payload) {
                        const splitted = entry.split(':');
                        const app = new Application();
                        app.id = splitted[0];
                        app.name = splitted[1];
                        this.applications.push(app);
                    }
                }
            } else {
                this.message.error(response.message);
            }
        });
    }


    /**
     * to load the Quota of the subscriber
     * @param subscriberID
     */
    getQuotaofSubscriber(subscriberID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];

        if (this.selectedoperator == '' || this.selectedoperator == 'All') {
            this.selectedoperator = '_All_';
        }
        const data = {
            byFlag: 'byServiceProvider',
            info: subscriberID + '@carbon.super',
            operator: this.selectedoperator
        };

        this.getQuotaLimitInfo(data);
    }

    /**
     * to load the Quota of the application
     * @param appID
     */
    getQuotaofApp(appID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];

        if (this.selectedoperator == '' || this.selectedoperator == 'All') {
            this.selectedoperator = '_All_';
        }
        const data = {
            byFlag: 'byApplication',
            info: this.app,
            operator: this.selectedoperator
        };

        this.getQuotaLimitInfo(data);
    }

    /**
     * to load the Quota of the API
     * @param apiID
     */
    getQuotaofApi(apiID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];

        if (this.selectedoperator == '' || this.selectedoperator == 'All') {
            this.selectedoperator = '_All_';
        }
        const data = {
            byFlag: 'byApi',
            info: this.api,
            operator: this.selectedoperator
        };

        this.getQuotaLimitInfo(data);
    }

    getQuotaLimitInfo(data) {
        this.quotaService.getQuotaLimitInfo(data, (response) => {
            if (response.success) {
                for (const item of response.payload.Success.text) {
                    const quotaItem = new QuotaList();
                    quotaItem.quotaLimit = item.quotaLimit;
                    quotaItem.fromDate = item.fromDate.substring(0, 11);
                    quotaItem.toDate = item.toDate.substring(0, 11);
                    this.quotalist.push(quotaItem);
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    SetQuotaResultLabel() {
        if (this.subscriber != '') {
            this.resultLabel = 'for Service provider';
        }
        if (this.subscriber != '' && this.app != '') {
            this.resultLabel = 'for Service provider > APP';
        }
        if (this.subscriber != '' && this.app != '' && this.api != '') {
            this.resultLabel = 'for Service provider > APP > API';
        }
        if (this.subscriber != '' && this.app != '' && this.api != '' && this.selectedoperator != '') {
            this.resultLabel = 'for Service provider > APP > API > Operator';
        }
        if (this.subscriber == '' && this.app == '' && this.api == '' && this.selectedoperator == '') {
            this.resultLabel = '';
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

    clearErrors() {
        this.isNameEmpty = false;
        this.isCalendarEmpty = false;
        this.isSubscriberError = false;
        this.isInvalidquota = false;
        this.isSubscriberError = false;
        this.isApplicationError = false;
        this.isApiError = false;
        this.isOperatorError = false;

        this.subscriberError = '';
        this.applicationError = '';
        this.apiError = '';
        this.operatorError = '';
    }

    quotaInputValuechange() {
        if (this.quotaInputValue == null || this.quotaInputValue.length == 0) {
            this.isNameEmpty = true;
            this.isInvalidquota = false;
        } else if (Number(this.quotaInputValue) < 0) {
            this.isInvalidquota = true;
            this.isNameEmpty = false;
        } else {
            this.isNameEmpty = false;
            this.isInvalidquota = false;
        }
    }

    isEmpty(): boolean {
        if (this.quotaInputValue != null && this.quotaInputValue.length != 0 &&
            this.quotaInputValue != '' && (Number(this.quotaInputValue) >= 0) &&
            (this.defaultcalval.length != 0)) {
            return false;
        } else {
            return true;
        }
    }

    onquotacapFormSubmit(quotacapForm) {

        let validSubscriber = false;
        let validApplication = false;
        let validApi = false;
        let validOperator = false;
        this.clearErrors();

        for (const entry of this.subscriberList) {
            if (this.subscriber == entry) {
                validSubscriber = true;
            }
        }

        for (const entry of this.applications) {
            if (this.app == entry.name) {
                validApplication = true;
            }
        }

        for (const entry of this.apiList) {
            if (this.api == entry) {
                validApi = true;
            }
        }

        for (const entry of this.operatorsList) {
            if (this.selectedoperator == entry || (this.selectedoperator == '_All_') ) {
                validOperator = true;
            }
        }

        if (!this.isEmpty() && !this.is_invalid_period && this.validate(this.isAppSelect, validApplication) &&
            this.validate(this.isApiSelect, validApi) && this.validate(this.isSubscriberSelect, validSubscriber) &&
            this.validate(this.selectedoperator.length > 0, validOperator)) {

            let appId = '';
            let apiId = '';
            if (this.app.length == 0 || this.app == '') {
                appId = null;
            }else{
                appId = this.app;
            }
            if (this.api.split(':')[0].length == 0) {
                apiId = null;
            }else {
                apiId = this.api
            }

            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }


            const data = {
                operator: this.selectedoperator,
                serviceProvider: this.subscriber + '@carbon.super',
                applicationName: appId,
                apiName: apiId,
                quotaLimit: this.quotaInputValue,
                fromDate: this.fromdate,
                toDate: this.todate
            };

            this.quotaService.addNewQuotaLimit(data, (response) => {
                if (response.success) {
                    this.message.success(response.message);
                    this.resetDefault();
                } else {
                    this.message.error(response.message);
                }
            });
        } else {
            this.message.error('Invalid Fields Please Check Again');
            if (!validSubscriber) {
                this.isSubscriberError = true;
                this.subscriberError = 'Invalid Service Provider';
            }
            if (!validApplication && !(this.app.length == 0)) {
                this.isApplicationError = true;
                this.applicationError = 'Invalid Application';
            }
            if (!validApi && !(this.api.length == 0)) {
                this.isApiError = true;
                this.apiError = 'Invalid API';
            }
            if (!validOperator && !(this.selectedoperator.length == 0)) {
                this.isOperatorError = true;
                this.operatorError = 'Invalid Operator';
            }
            if (this.subscriber.length == 0) {
                this.isSubscriberError = true;
                this.subscriberError = 'Empty Subscriber';
            }
            if (this.quotaInputValue == null || this.quotaInputValue.length == 0 || this.quotaInputValue == '') {
                this.isNameEmpty = true;
            } else if (Number(this.quotaInputValue) < 0) {
                this.isInvalidquota = true;
            }
            if (this.subscriber.length == 0) {
                this.isSubscriberError = true;
                this.subscriberError = 'Service Provider cannot be empty';
            }
            if (this.defaultcalval.length == 0) {
                this.isCalendarEmpty = true;
            }

        }


    }

    validate(selected: boolean, valid: boolean) {
        if (selected && valid) {
            return true;
        } else if (!selected && !valid) {
            return true;
        } else {
            return false;
        }


    }

    /**
     * when and API value is selected form drop down
     * @param event
     */
    onApiSelected() {
        this.SetQuotaResultLabel();
        let invalid = true;
        this.isApiError = false;

        for (const item of this.apiList) {
            if (item == this.api) {
                invalid = false;
            }
        }

        if (!invalid) {
            for (const entry of this.apiList) {
                if (entry == this.api) {
                    this.isCalenderEnable = false;
                    this.isApiSelect = true;
                    this.getQuotaofApi(this.api.split(':')[0]);
                }
            }
            if (this.defaultcalval !== '') {
                this.DateRangeValidation();
            }

        } else if (this.api.length !== 0) {
            this.isApiError = true;
            this.apiError = 'Invalid API';
            this.isApiSelect = false;
            this.isCalenderEnable = true;
            this.quotalist = [];
            this.SetQuotaResultLabel();
        } else {
            this.isApiSelect = false;
            this.quotalist = [];
            this.getQuotaofApp(this.appID);
            this.SetQuotaResultLabel();
        }
    }


    resetDefault() {

        this.defaultcalval = '';
        this.quotaInputValue = '';

        if (this.isApiSelect) {
            this.getQuotaofApi(this.api);
        } else if (this.isAppSelect) {
            for (const entry of this.applications) {
                if (entry.name == this.app) {
                    this.appID = entry.id;
                    this.isAppSelect = true;
                    this.getQuotaofApp(this.appID);
                }
            }
        } else if (this.isSubscriberSelect) {
            this.getQuotaofSubscriber(this.subscriber);
        }
    }

    clearForm() {
        this.clearErrors();

        this.subscriber = '';
        this.app = '';
        this.api = '';

        if (!this.ISoperatordisable) {
            this.selectedoperator = '';
        }
        this.quotaInputValue = '';
        this.isCalenderEnable = true;
        this.defaultcalval = '';
        this.quotalist = [];
        this.resultLabel = '';
    }

    onDateRangeChanged(event) {
        this.datepickvalue = event.formatted;
        this.fromdate = this.datepickvalue.split('-')[0].trim();
        this.todate = this.datepickvalue.split('-')[1].trim();

        if (this.isApiSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byApi',
                info: this.api,
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);

        } else if (this.isAppSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byApplication',
                info: this.app,
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);

        } else if (this.isSubscriberSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byServiceProvider',
                info: this.subscriber + '@carbon.super',
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);
        }
    }

    getValidityPeriod(data) {
        this.quotaService.getValidityPeriod(data, (response) => {
            if (response.success) {
                if (!response.payload.Success.text.isEmpty) {
                    if (response.payload.Success.text == 'true') {
                        this.is_invalid_period = true;
                    } else {
                        this.is_invalid_period = false;
                    }
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    DateRangeValidation() {
        this.fromdate = this.datepickvalue.split('-')[0].trim();
        this.todate = this.datepickvalue.split('-')[1].trim();

        if (this.isApiSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byApi',
                info: this.api,
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);

        } else if (this.isAppSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byApplication',
                info: this.app,
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);

        } else if (this.isSubscriberSelect) {
            if (this.selectedoperator == '' || this.selectedoperator == 'All') {
                this.selectedoperator = '_All_';
            }

            const data = {
                byFlag: 'byServiceProvider',
                info: this.subscriber + '@carbon.super',
                fromDate: this.fromdate,
                toDate: this.todate,
                operator: this.selectedoperator
            };

            this.getValidityPeriod(data);
        }
    }
}


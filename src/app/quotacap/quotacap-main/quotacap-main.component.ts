/**
 * Created by sahanK on 2/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {QuotaService} from '../../commons/services/quotacap.service';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {Api, Application, QuotaList} from '../../commons/models/common-data-models';
import {MessageService} from '../../commons/services/message.service';
import {IMyDrpOptions} from 'mydaterangepicker';

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
    private calendarStartEndTime: string;

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

    private operatorsList;
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
    }


    /**
     * to load the subscriber details of operator
     */
    getSubscribersOfProvider(operatorName: string) {
        this.quotaService.getSubscribers(operatorName, (response, status) => {
            if (status) {
                this.subscriberList = response;
            } else {
                this.message.error('Error Loading Subscribers of Service Provider');

            }
        });
    }

    l


    /**
     * to load the subscriber details of operator
     */
    getOperatorOfsubscriber(subscriberID: string) {
        if (this.isAdmin) {
            this.quotaService.getOperatorOfsubscriber(subscriberID, (response, status) => {
                if (status) {
                    if (response.result === 'undefined' || response.result === 'empty') {
                        this.operatorsList = ['All'];
                    } else {
                        this.operatorsList = response;
                        this.operatorsList.splice(0, 0, 'All');
                    }
                } else {
                    this.message.error('Error Loading Operators of Subscriber');
                }
            });
        }
    }

    /**
     * to load the Operator list
     */
    getOperatorList() {
        this.quotaService.getOperatorList((response, status) => {
            if (status) {
                let count = 1;
                for (const entry of response) {
                    this.operatorsList[count] = entry.operatorName;
                    count += 1;
                }
                this.GetLoggedUser();

            } else {
                this.message.error('Error Loading Operators');
            }
        });
    }


    /**
     * Change operator list based on SP
     */
    GetLoggedUser() {

        let loginInfo = this.authService.loginUserInfo.getValue();
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
        this.SetQuotaResultLabel();
        this.isCalenderEnable = false;
        let invalid = true;
        this.isApplicationError = false;


        for (const item of this.applicationList) {
            if (item == this.app) {
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
                this.getQuotaofSubscriber(this.subscriber)
            }
            if (this.defaultcalval !== '') {
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
        this.quotaService.getApps(subscriberID, (response) => {
            if (response.success) {
                this.applicationList = response.payload;
                if (this.applicationList.length == 0) {
                    this.message.warning('No Applications of Subscriber Found');
                } else {
                    let count = 0;
                    for (const entry of this.applicationList) {
                        const splitted = entry.split(':', 2);
                        this.applications[count] = new Application;
                        this.applications[count].id = splitted[0];
                        this.applications[count].name = splitted[1];
                        this.applicationList[count] = splitted[1];
                        count += 1;
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
        this.quotaService.getQuotaLimitInfo(subscriberID, this.selectedoperator, (response, status) => {
            if (status) {
                if (response.Success.text.length == 0) {
                    //   this.message.warning('No Quota Assign for this combination');
                } else {
                    let count = 0;
                    for (const item of response.Success.text) {
                        this.quotalist[count] = new QuotaList();
                        this.quotalist[count].quotaLimit = item.quotaLimit;
                        this.quotalist[count].fromDate = item.fromDate.substring(0, 11);
                        this.quotalist[count].toDate = item.toDate.substring(0, 11);
                        count++;
                    }
                }

            } else {
                this.message.error('Error Loading Quota of Subscriber');
            }
        });
    }

    /**
     * to load the Quota of the application
     * @param appID
     */
    getQuotaofApp(appID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];
        this.quotaService.getQuotaLimitInfoApp(appID, this.selectedoperator, (response, status) => {
            if (status) {
                if (response.Success.text.length == 0) {
                    //  this.message.warning('No Quota Assign for this combination');
                } else {
                    let count = 0
                    for (const item of response.Success.text) {
                        this.quotalist[count] = new QuotaList();
                        this.quotalist[count].quotaLimit = item.quotaLimit;
                        this.quotalist[count].fromDate = item.fromDate.substring(0, 11);
                        this.quotalist[count].toDate = item.toDate.substring(0, 11);
                        count++;
                    }
                }

            } else {
                this.message.error('Error Loading Quota of Application');
            }
        });
    }


    /**
     * to load the Quota of the API
     * @param apiID
     */
    getQuotaofApi(apiID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];
        this.quotaService.getQuotaLimitInfoApi(apiID, this.selectedoperator, (response, status) => {
            if (status) {
                if (response.Success.text.length == 0) {
                    //   this.message.warning('No Quota Assign for this combination');
                } else {
                    let count = 0
                    for (const item of response.Success.text) {
                        this.quotalist[count] = new QuotaList();
                        this.quotalist[count].quotaLimit = item.quotaLimit;
                        this.quotalist[count].fromDate = item.fromDate.substring(0, 11);
                        this.quotalist[count].toDate = item.toDate.substring(0, 11);
                        count++;
                    }
                }

            } else {
                this.message.error('Error Loading Quota of API');
            }
        });
    }

    /**
     * to load the Quota of the operator
     * @param apiID
     */
    getQuotaofOperator(operatorname: string, subscriberID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];
        this.quotaService.getQuotaLimitInfoOperator(operatorname, subscriberID, (response) => {
            if (response.Success.text.length != 0) {
                const count = response.Success.text.length;
                for (let i = 0; i < count; i++) {
                    this.quotalist[i] = new QuotaList();
                    this.quotalist[i].quotaLimit = response.Success.text[i].quotaLimit;
                    this.quotalist[i].fromDate = response.Success.text[i].fromDate.substring(0, 11);
                    this.quotalist[i].toDate = response.Success.text[i].toDate.substring(0, 11);
                }
            } else {
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

            this.quotaService.getApis(this.subscriber, appID, (response) => {
                if (response.success) {
                    this.apiList = response.payload;
                    let count = 0;
                    for (const entry of this.apiList) {
                        const splitted = entry.split(':', 4);
                        this.apis[count] = new Api;
                        this.apis[count].id = splitted[0];
                        this.apis[count].name = splitted[2];
                        this.apis[count].provider = splitted[1];
                        this.apis[count].version = splitted[3];
                        this.apiList[count] = splitted[2] + ':' + splitted[3];
                        count += 1;
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
        this.isSubscriberError = false
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

        for (const entry of this.applicationList) {
            if (this.app == entry) {
                validApplication = true;
            }
        }

        for (const entry of this.apiList) {
            if (this.api == entry) {
                validApi = true;
            }
        }

        for (const entry of this.operatorsList) {
            if (this.selectedoperator == entry) {
                validOperator = true;
            }
        }

        if (!this.isEmpty() && !this.is_invalid_period && this.validate(this.isAppSelect, validApplication) &&
            this.validate(this.isApiSelect, validApi) && this.validate(this.isSubscriberSelect, validSubscriber) &&
            this.validate(this.selectedoperator.length > 0, validOperator)) {

            this.quotaService.addNewQuotaLimit(this.subscriber, this.appID, this.api.split(':')[0], this.selectedoperator,
                this.quotaInputValue, this.fromdate, this.todate, (response, status) => {
                    if (status) {
                        this.message.success('Successfully added new Quota');
                        this.resetDefault();
                    } else {
                        this.message.error('Error adding new Quota');
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
        console.log('hit the date change');
        this.datepickvalue = event.formatted;
        this.fromdate = this.datepickvalue.split('-')[0].trim()
        this.todate = this.datepickvalue.split('-')[1].trim()

        if (this.isApiSelect) {
            this.quotaService.getValidityPeriodForApi(this.api.split(':')[0], this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        } else if (this.isAppSelect) {
            this.quotaService.getValidityPeriodForApp(this.appID, this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        } else if (this.isSubscriberSelect) {
            this.quotaService.getValidityPeriodForSubscriober(this.subscriber, this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        }
    }

    DateRangeValidation() {
        this.fromdate = this.datepickvalue.split('-')[0].trim()
        this.todate = this.datepickvalue.split('-')[1].trim()

        if (this.isApiSelect) {
            this.quotaService.getValidityPeriodForApi(this.api, this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        } else if (this.isAppSelect) {
            this.quotaService.getValidityPeriodForApp(this.appID, this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        } else if (this.isSubscriberSelect) {
            this.quotaService.getValidityPeriodForSubscriober(this.subscriber, this.fromdate,
                this.todate, this.selectedoperator, (response) => {
                    if (!response.Success.text.isEmpty) {
                        if (response.Success.text == 'true') {
                            this.is_invalid_period = true;
                        } else {
                            this.is_invalid_period = false;
                        }
                    }
                });
        }
    }
}


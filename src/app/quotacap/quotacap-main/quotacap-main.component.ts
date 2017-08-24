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

    private subscriberList;
    private applicationList: string[];
    private apiList: string[];
    private msisdnList: string[];

    private applications: Application[];
    private apis: Api[];
    private quotalist: QuotaList[];

    private submissionError: string;

    private quotaValue: string[];
    private quotaInputValue: string;
    private is_edit: boolean;
    private is_invalid_period: boolean;
    private is_addSuccess: boolean;
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
    public states: string[];

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

    /***/
    private loggeduser: string;

    private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
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

    constructor(private reportingService: ReportingRemoteDataService,
                private quotaService: QuotaService,
                private message: MessageService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.getOperatorList();
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
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });
    }


    /**
     * to load the subscriber details of operator
     */
    getOperatorOfsubscriber(subscriberID: string) {
        if (this.isAdmin) {
            console.log('calles ######################')
            this.quotaService.getOperatorOfsubscriber(subscriberID, (response, status) => {
                if (status) {
                    if (response.result === 'undefined' || response.result === 'empty') {
                        this.operatorsList = ['All'];
                    } else {
                        this.operatorsList = response;
                        this.operatorsList.splice(0, 0, 'All');
                    }
                } else {
                    this.submissionError = response;
                    setTimeout(() => {
                        this.submissionError = null;
                    }, 5000);

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

                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

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
            if (entry == this.loggeduser.toUpperCase()) {

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
    onSubscriberSelected(val) {
        this.subscriber = val;
        this.app = '';
        this.api = '';
        this.appID = '';
        this.isCalenderEnable = false;
        this.isSubscriberError = false;
        this.clearErrors();
        for (const entry of this.subscriberList) {
            if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
                this.getQuotaofSubscriber(this.subscriber);
                this.getOperatorOfsubscriber(this.subscriber);
                this.isSubscriberSelect = true;
            } else {
                this.SetQuotaResultLabel();
                this.quotalist = [];
                this.applicationList = [];
            }
        }
    }

    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.clearErrors();
        this.quotaService.getApps(subscriberID, (response) => {
            this.applicationList = response;
            let count = 0;
            for (const entry of this.applicationList) {
                const splitted = entry.split(':', 2);
                this.applications[count] = new Application;
                this.applications[count].id = splitted[0];
                this.applications[count].name = splitted[1];
                this.applicationList[count] = splitted[1];
                count += 1;
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
        this.quotaService.getQuotaLimitInfo(subscriberID, (response) => {
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

    /**
     * to load the Quota of the application
     * @param appID
     */
    getQuotaofApp(appID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];
        this.quotaService.getQuotaLimitInfoApp(appID, (response) => {
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


    /**
     * to load the Quota of the API
     * @param apiID
     */
    getQuotaofApi(apiID: string) {
        this.SetQuotaResultLabel();
        this.clearErrors();
        this.quotalist = [];
        this.quotaService.getQuotaLimitInfoApi(apiID, (response) => {
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
        if (this.subscriber == '' && this.app == '' && this.api == '') {
            this.resultLabel = '';
        }

    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected(val) {
        this.api = '';
        this.appID = '';
        this.app = val;
        this.SetQuotaResultLabel();

        this.isCalenderEnable = false;
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);
            } else {
                this.apiList = [];
            }
        }

        for (const entry of this.applications) {
            if (entry.name == this.app) {
                this.appID = entry.id;
                this.isAppSelect = true;
                this.isSubscriberSelect = false;
                this.getQuotaofApp(this.appID);
            } else {

                this.SetQuotaResultLabel();
                this.appID = '';
                this.quotalist = [];
            }
        }

    }

    /**
     * to load the APIs of the application of the subscriber
     * @param appName
     */
    getApis(appName: string) {

        let index = 0;
        let id = '';
        for (const entry of this.applications) {
            if (entry.name == appName) {
                id = this.subscriber + '|' + entry.id;
            }
            index++;
        }

        if (id.length != 0) {

            this.quotaService.getApis(id, (response) => {
                this.apiList = response;
                let count = 0;
                for (const entry of this.apiList) {
                    const splitted = entry.split(':', 4);
                    this.apis[count] = new Api;
                    this.apis[count].id = splitted[0];
                    this.apis[count].name = splitted[2];
                    this.apis[count].provider = splitted[1];
                    this.apis[count].version = splitted[3];
                    this.apiList[count] = splitted[2];
                    count += 1;
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

    quotaInputValuechange(val) {
        this.quotaInputValue = val;
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


        if (!this.isEmpty() && this.subscriber.length != 0 && !this.is_invalid_period && this.subscriber.length != 0
            && (this.app.length == 0 || validApplication ) && (this.api.length == 0 || validApi ) && (this.selectedoperator.length == 0 || validOperator )) {
            this.quotaService.addNewQuotaLimit(this.subscriber, this.appID, this.api,
                this.quotaInputValue, this.fromdate, this.todate, (errorMsg) => {
                    this.submissionError = errorMsg;
                    this.resetdefault();
                    setTimeout(() => {
                        this.submissionError = null;
                    }, 5000);
                });
        } else {
            if (!validSubscriber) {
                this.isSubscriberError = true;
                this.subscriberError = 'Invalid Subscriber';
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

    /**
     * when and API value is selected form drop down
     * @param event
     */
    onApiSelected(val) {
        this.api = val;
        this.SetQuotaResultLabel();
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.isCalenderEnable = false;
                this.isSubscriberSelect = false;
                this.isAppSelect = false;
                this.isApiSelect = true;
                //  this.getApis(this.app);
                // this.getQuotaofApi(this.api);

            }
        }

        for (const entry of this.apiList) {
            if (entry == this.api) {
                this.getQuotaofApi(this.api);
            } else {
                this.SetQuotaResultLabel();
                this.quotalist = [];
            }
        }
    }


    resetdefault() {
        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.quotaInputValue = '';
        this.defaultcalval = '';
        this.subscriber = '';
        this.quotalist = [];
        this.resultLabel = '';
    }

    clearForm() {
        this.clearErrors();

        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.selectedoperator = '';
        this.quotaInputValue = '';
        this.isCalenderEnable = true;
        this.defaultcalval = '';
        this.quotalist = [];
    }

    onDateRangeChanged(event) {
        this.datepickvalue = event.formatted;
        this.fromdate = this.datepickvalue.substring(0, 10);
        this.todate = this.datepickvalue.substring(13, this.datepickvalue.length);

        this.clearErrors();
        if (this.isSubscriberSelect) {
            this.quotaService.getValidityPeriodForSubscriober(this.subscriber, this.fromdate, this.todate, (response) => {
                if (!response.Success.text.isEmpty) {
                    if (response.Success.text == 'true') {
                        this.is_invalid_period = true;
                    } else {
                        this.is_invalid_period = false;
                    }
                } else {
                }
            });
        } else if (this.isAppSelect) {
            this.quotaService.getValidityPeriodForApp(this.appID, this.fromdate, this.todate, (response) => {
                if (!response.Success.text.isEmpty) {
                    if (response.Success.text == 'true') {
                        this.is_invalid_period = true;
                    } else {
                        this.is_invalid_period = false;
                    }
                } else {
                }
            });
        } else if (this.isApiSelect) {
            this.quotaService.getValidityPeriodForApi(this.api, this.fromdate, this.todate, (response) => {
                if (!response.Success.text.isEmpty) {
                    if (response.Success.text == 'true') {
                        this.is_invalid_period = true;
                    } else {
                        this.is_invalid_period = false;
                    }
                } else {
                }
            });
        }
    }


}


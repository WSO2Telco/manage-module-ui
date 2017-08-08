/**
 * Created by sahanK on 2/8/17.
 */
import {Component, OnInit,} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {QuotaService} from '../../commons/services/quotacap.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {Api, Application} from '../../commons/models/common-data-models';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-quotacap-main',
    templateUrl: './quotacap-main.component.html',
    styleUrls: ['./quotacap-main.component.scss']
})
export class QuotaCapMainComponent implements OnInit {

    private subscriber: string;
    private app;
    private api;

    private operators: string[];
    private subscriberList;
    private applicationList: string[];
    private apiList: string[];
    private msisdnList: string[];

    private applications: Application[];
    private apis: Api[];

    private submissionError: string;
    private msisdnError: string;
    private msisdnRangeError: string;

    private quotaValue: string;
    private quotaInputValue: string;
    private is_edit: boolean;
    private is_addSuccess: boolean;
    private appID: string;

    constructor(private reportingService: ReportingRemoteDataService,
                private quotaService: QuotaService,
                private message: MessageService) {
    }


    private isNameEmpty: boolean;
    private name: string;

    ngOnInit() {
        this.getSubscribersOfProvider();
        this.name = '';
        this.subscriberList = [];
        this.applicationList = [];
        this.apiList = [];
        this.applications = [];
        this.apis = [];
        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.quotaValue = '';
        this.quotaInputValue = '';
        this.is_edit = false;
        this.appID = '';
    }


    /**
     * to load the subscriber details
     */
    getSubscribersOfProvider() {
        this.quotaService.getSubscribers((response, status) => {
            if (status) {
                this.subscriberList = response;
                console.log(this.subscriberList);
            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

            }
        });
    }

    /**
     * this method is triggered when a subscriber is selected
     * @param event
     */
    onSubscriberSelected(event: TypeaheadMatch) {
        this.app = '';
        this.api = '';
        this.appID = '';
        this.clearErrors();
        this.message.info('<center>You have selected &nbsp;<b>' + this.subscriber + '</b></center>');
        for (const entry of this.subscriberList) {
            if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
                this.getQuotaofSubscriber(this.subscriber);
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
        this.clearErrors();
        this.quotaService.getQuotaLimitInfo(subscriberID, (response) => {
            if (response.Success.text.length != 0) {
                this.quotaValue = response.Success.text[0].quotaLimit;
                this.setquotaValuetoInputBox(this.quotaValue);
            } else {

                this.emptyquotaValuetoInputBox();
                console.log('--------- no entry for this subscriber');
            }
        });
    }

    /**
     * to load the Quota of the application
     * @param appID
     */
    getQuotaofApp(appID: string) {
        this.clearErrors();
        this.quotaService.getQuotaLimitInfoApp(appID, (response) => {
            if (response.Success.text.length != 0) {
                this.quotaValue = response.Success.text[0].quotaLimit;
                this.setquotaValuetoInputBox(this.quotaValue);
            } else {

                this.emptyquotaValuetoInputBox();
                console.log('--------- no entry for this app');
            }
        });
    }


    /**
     * to load the Quota of the API
     * @param apiID
     */
    getQuotaofApi(apiID: string) {
        this.clearErrors();
        this.quotaService.getQuotaLimitInfoApi(apiID, (response) => {
            if (response.Success.text.length != 0) {
                this.quotaValue = response.Success.text[0].quotaLimit;
                this.setquotaValuetoInputBox(this.quotaValue);
            } else {
                this.emptyquotaValuetoInputBox();
                console.log('--------- no entry for this API');
            }
        });
    }


    /**
     * Assign quota value to input box
     * @param quotavalue
     */
    setquotaValuetoInputBox(quotaValue: string) {
        this.quotaInputValue = quotaValue;
        this.is_edit = true;
    }

    /**
     * reset quota value to input box to empty
     * @param quotavalue
     */
    emptyquotaValuetoInputBox() {
        this.quotaInputValue = '';
        this.is_edit = false;
    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected(event: TypeaheadMatch) {
        this.api = '';
        this.appID = '';
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);

            }
        }

        this.message.info('You have selected the following combination <br> <center><b>' + this.subscriber +
            '&nbsp;> &nbsp;' + this.app + '</b></center>');

        for (const entry of this.applications) {
            if (entry.name == this.app) {
                this.appID = entry.id;
                console.log('relevant app id' + this.appID);
                this.getQuotaofApp(this.appID);
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
                console.log('created id is: ' + id);
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
    }

    isEmpty(): boolean {
        if (this.quotaInputValue.length != 0) {
            return false;
        }
        else {
            return true;
        }
    }

    onquotacapFormSubmit(quotacapForm) {

        this.clearErrors();

        if (!this.isEmpty()) {

            console.log(this.subscriber + '-' + this.appID + '-' + this.api + '-' + this.quotaInputValue);
            this.quotaService.addNewQuotaLimit(this.subscriber, this.appID, this.api, this.quotaInputValue, (errorMsg) => {
                this.submissionError = errorMsg;
                setTimeout(() => {
                    this.submissionError = null;
                    this.resetdefault();
                }, 5000);
            });
        } else {
            console.log('invalid fields');
            if (this.name.length == 0) {
                this.isNameEmpty = true;
            }
        }


    }

    /**
     * when and API value is selected form drop down
     * @param event
     */
    onApiSelected(event: TypeaheadMatch) {
        console.log('api selected');
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);
                this.getQuotaofApi(this.api);
                console.log('--selected----' + this.api);
            }
        }
        this.message.info('You have selected the following combination <br> <center><b>' + this.subscriber +
            '&nbsp;>&nbsp;' + this.app + '&nbsp;>&nbsp;' + this.api + '</b></center>');
    }


    resetdefault() {
        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.quotaInputValue = '';
    }

}


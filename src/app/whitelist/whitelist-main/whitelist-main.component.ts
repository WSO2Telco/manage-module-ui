/**
 * Created by manoj on 7/24/17.
 */
import {Component, OnInit} from '@angular/core';
import {WhitelistService} from '../../commons/services/whitelist.service';
import {Api, Application} from '../../commons/models/common-data-models';
import {MessageService} from '../../commons/services/message.service';
import {QuotaService} from '../../commons/services/quotacap.service';

@Component({
    selector: 'app-whitelist-main',
    templateUrl: './whitelist-main.component.html',
    styleUrls: ['./whitelist-main.component.scss']
})


export class WhitelistMainComponent implements OnInit {

    private subscriber: string;
    private app;
    private api;

    private subscriberList;
    private applicationList: string[];
    private apiList: string[];
    private msisdnList: string[];

    private msisdn: string;
    private msisdnMin: number;
    private msisdnMax: number;

    private applications: Application[];
    private apis: Api[];

    private ismsisdnError: boolean;
    private ismsisdnRangeError: boolean;
    private isInvalidFieldError: boolean;
    private disableAddButton: boolean;

    private msisdnError: string;
    private msisdnRangeError: string;
    private invalidFieldError: string;
    private islong: boolean;
    private long: string;


    private whitelistList: string[];


    constructor(private whitelistService: WhitelistService,
                private quotaService: QuotaService,
                private message: MessageService) {

    }

    ngOnInit() {
        this.subscriberList = [];
        this.getSubscribersOfProvider();
        this.applicationList = [];
        this.apiList = [];
        this.applications = [];
        this.apis = [];
        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.msisdn = '';
        this.msisdnMin = 0;
        this.msisdnMax = 0;

        this.msisdnError = '';
        this.msisdnRangeError = '';
        this.invalidFieldError = '';

        this.ismsisdnError = false;
        this.ismsisdnRangeError = false;
        this.isInvalidFieldError = false;
        this.islong = false;
        this.disableAddButton = false;
        this.long = '';
    }


    onSubmit() {

    }

    /**
     * to load the subscriber details
     */
    getSubscribersOfProvider() {
        this.whitelistService.getSubscribers((response) => {
            if (response.success) {
                this.subscriberList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.quotaService.getApps(subscriberID, (response) => {
            if (response.success) {
                this.applicationList = response.payload;
                let count = 0;
                for (const entry of this.applicationList) {
                    const splitted = entry.split(':', 2);
                    this.applications[count] = new Application;
                    this.applications[count].id = splitted[0];
                    this.applications[count].name = splitted[1];
                    this.applicationList[count] = splitted[1];
                    count += 1;
                }
            } else {
                this.message.error(response.message);
            }

        });
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
                        this.apiList[count] = splitted[2] + ' - ' + splitted[3] + ' Provided by ' + splitted[1];
                        count += 1;
                    }
                } else {
                    this.message.error(response.message);
                }
            });

        }
    }

    /**
     * to load all white listed numbers
     * @returns {any}
     */
    getWhitelist() {

        let appID = '';
        let apiID = '';
        for (const entry of this.applications) {
            if (entry.name == this.app) {
                appID = entry.id;
            }
        }

        for (const entry of this.apis) {
            if (entry.name == this.api.split('-')[0].trim() && entry.version == this.api.split('-')[1].split(' ')[1].trim()) {
                apiID = entry.id;
            }
        }


        this.whitelistService.getWhitelist(this.subscriber, appID, apiID, (response) => {
            if (response.success) {
                this.whitelistList = response.payload.Success.variables;
            } else {
                this.whitelistList = [];
                this.message.error(response.message);

            }
        });
    }

    /**
     * function to add new list of whitelist numbers
     */
    addNewToWhitelist() {

        if (this.msisdnList.length != 0) {
            let apiId = '';
            let appId = '';
            let index = 0;
            for (const entry of this.applications) {
                if (entry.name == this.app) {
                    appId = entry.id;
                }
                index++;
            }

            for (const entry of this.apis) {
                if (entry.name == this.api.split('-')[0].trim() && entry.version == this.api.split('-')[1].split(' ')[1].trim()) {
                    apiId = entry.id;
                }
            }

            if (apiId.length != 0 && appId.length != 0) {
                this.whitelistService.addNewToWhitelist(appId, apiId, this.msisdnList, (response) => {
                    if (response.success) {
                        this.message.success(response.message);
                        this.msisdn = '';
                        this.msisdnMin = 0;
                        this.msisdnMax = 0;
                        this.getWhitelist();
                    } else {
                        this.message.error(response.message);
                    }
                    this.disableAddButton = false;
                });
            }else {
                this.disableAddButton = false;
            }
        } else {
            this.msisdnError = 'Something Went Wrong';
            this.ismsisdnError = true;
            this.disableAddButton = false;
        }
    }

    /**
     * this class will be triggered when an item is deleted.
     * @param event
     */
    onDeleteHandler(event: boolean): void {
        if (event) {
            this.getWhitelist();
        }
    }


    /**
     * this method is triggered when a subscriber is selected or input field is changed
     * @param event
     */
    onSubscriberSelected() {
        this.app = '';
        this.api = '';
        this.applicationList = [];
        this.apiList = [];
        this.whitelistList = [];

        let invalid = true;
        this.isInvalidFieldError = false;
        for (const entry of this.subscriberList) {
            if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
                invalid = false;
            }
        }

        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid subscriber';
        }
    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected() {
        this.api = '';
        this.apiList = [];
        this.whitelistList = [];

        let invalid = true;
        this.isInvalidFieldError = false;
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);
                invalid = false;
            }
        }

        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Application';
        }
    }

    /**
     * when and API value is selected form drop down
     * @param event
     */
    onApiSelected() {
        this.whitelistList = [];
        let invalid = true;
        this.isInvalidFieldError = false;
        for (const entry of this.apiList) {
            if (entry == this.api) {
                invalid = false;
            }
        }
        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Api Name';
        } else {
            this.getWhitelist();
        }
    }

    /**
     * when a coma separated number list is entered
     * @param numberlistForm
     */
    onUploadNumber(numberlistForm) {

        this.msisdnError = '';
        this.invalidFieldError = '';
        this.ismsisdnError = false;
        this.isInvalidFieldError = false;
        this.disableAddButton = true;

        if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0 && this.isValidInputs()) {
            this.ismsisdnError = false;
            this.msisdnList = [];
            if (this.isValid(this.msisdn)) {
                const msisdnList = this.msisdn.split(',');
                let count = 0;
                for (const entry of msisdnList) {

                    if (this.isValidMobileNumber(entry)) {
                        if (entry.includes('tel:+') || entry.includes('+')) {

                            const num = entry.split('+')[1];
                            this.msisdnList[count] = 'tel3A+' + num;
                            this.islong = false;

                            if (num.length > 15) {
                                this.islong = true;
                            }
                         }

                        else {
                            if (entry.length > 15) {
                                this.islong = true;
                            }else {
                                this.msisdnList[count] = 'tel3A+' + Number(entry);
                                this.islong = false;
                            }
                        }
                    } else {
                        this.islong = true;
                    }
                    count++;
                }

                if (this.islong == true) {
                    this.long = 'Not a Valid MSISDN';
                    this.islong = true;
                    this.disableAddButton = false;
                } else {
                    this.addNewToWhitelist();
                }


            } else {

                if (this.msisdn.length == 0) {
                    this.msisdnError = 'Empty List';
                    this.ismsisdnError = true;
                } else {
                    this.msisdnError = 'Wrong input please enter Comma seperated valid mobile numbers ';
                    this.ismsisdnError = true;
                }
                this.disableAddButton = false;
            }
        } else {
            this.msisdnError = 'Select valid Subscriber, Application and API first';
            this.ismsisdnError = true;
            this.disableAddButton = false;
        }


    }

    isValidInputs() {
        let validSubscriber = false;
        let validApp = false;
        let validApi = false;

        for (const entry of this.subscriberList) {
            if (this.subscriber == entry) {
                validSubscriber = true;
            }
        }

        for (const entry of this.applicationList) {
            if (this.app == entry) {
                validApp = true;
            }
        }

        for (const entry of this.apiList) {
            if (this.api == entry) {
                validApi = true;
            }
        }

        if (!validApi) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Api Name';
        }
        if (!validApp) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Application Name';
        }
        if (!validSubscriber) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Subscriber Name';
        }

        return (validApp && validSubscriber && validApi);

    }

    /**
     * when a number range is added
     * @param numberrangeForm
     */
    onUploadNumberRange(numberrangeForm) {

        this.msisdnRangeError = '';
        this.ismsisdnRangeError = false;
        this.disableAddButton = true;

        if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0 && this.isValidInputs()) {

            if (this.isValidMobileNumber(this.msisdnMin.toString()) && this.isValidMobileNumber(this.msisdnMax.toString())) {
                const diff = (this.msisdnMax - this.msisdnMin);
                if (diff > 0) {
                    if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0) {
                        this.msisdnList = [];
                        for (let _i = 0; _i <= diff; _i++) {
                            const phone = Number(this.msisdnMin) + Number(_i);
                            this.msisdnList[_i] = 'tel3A+' + phone;
                        }
                        this.addNewToWhitelist();
                    } else {
                        this.msisdnRangeError = 'Select the relevant Subscriber, Application and API first';
                        this.ismsisdnRangeError = true;
                        this.disableAddButton = false;
                    }
                } else {
                    this.msisdnRangeError = 'Set minimum and maximum values in input boxes respectively';
                    this.ismsisdnRangeError = true;
                    this.disableAddButton = false;
                }

            } else {
                this.msisdnRangeError = 'The Entered Mobile Numbers are not valid mobile numbers';
                this.ismsisdnRangeError = true;
                this.disableAddButton = false;
            }
        } else {
            this.msisdnRangeError = 'Select valid Subscriber, Application and API first';
            this.ismsisdnRangeError = true;
            this.disableAddButton = false;
        }
    }

    /**
     * input value validator using regular expression
     * @param inputtxt
     * @returns {boolean}
     */
    isValid(inputtxt: string): boolean {
        const list = /[^,]+/;
        const regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * moble number validation (number with 11 digits.)
     * @param msisdn
     * @returns {boolean}
     */
    isValidMobileNumber(msisdn: string): boolean {
        const list = /^((((tel:\+)(\\+){0,1})|((\+){1})|(\d))([0-9]+))$/;
        const regexp = new RegExp(list);
        if (regexp.test(msisdn)) {
            return true;
        } else {
            return false;
        }
    }
}

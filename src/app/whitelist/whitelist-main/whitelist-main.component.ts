/**
 * Created by manoj on 7/24/17.
 */
import {Component, OnInit} from '@angular/core';
import {WhitelistService} from '../../commons/services/whitelist.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {Api, Application} from '../../commons/models/common-data-models';

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

    private submissionError: string;
    private msisdnError: string;
    private msisdnRangeError: string;


    private whitelistList: string[];


    constructor(private whitelistService: WhitelistService) {

    }

    ngOnInit() {
        this.getSubscribersOfProvider();
        this.getWhitelist();
        this.subscriberList = [];
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

        this.ismsisdnError = false;
        this.ismsisdnRangeError = false;
    }


    onSubmit() {

    }

    /**
     * to load the subscriber details
     */
    getSubscribersOfProvider() {
        this.whitelistService.getSubscribers((response, status) => {
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
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.whitelistService.getApps(subscriberID, (response) => {
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

            this.whitelistService.getApis(id, (response) => {
                this.apiList = response;
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
            });

        }
    }

    /**
     * to load all white listed numbers
     * @returns {any}
     */
    getWhitelist() {

        this.whitelistService.getWhitelist((response, status) => {
            if (status) {
                this.whitelistList = response.Success.variables;
            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);

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

            const splited = this.api.split(' ');

            for (const entry of this.apis) {
                if (entry.name == splited[0]) {
                    apiId = entry.id;
                }
            }

            if (apiId.length != 0 && appId.length != 0) {
                this.whitelistService.addNewToWhitelist(appId, apiId, this.msisdnList, response => {
                    const result = response;
                    console.log(JSON.stringify(result));
                    this.getWhitelist();
                });
            }
        } else {
            this.msisdnError = 'Something Went Wrong';
            this.ismsisdnError = true;
        }
    }

    /**
     * this class will be triggered when an item is deleted.
     * @param event
     */
    onDeleteHandler(event: boolean): void {
        console.log('delete evelt called baby');
        if (event) {
            this.getWhitelist();
        }
    }


    /**
     * this method is triggered when a subscriber is selected
     * @param event
     */
    onSubscriberSelected(event: TypeaheadMatch) {
        this.app = '';
        this.api = '';
        for (const entry of this.subscriberList) {
            if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
            }
        }
    }

    /**
     * this method is triggered when an application is selected
     * @param event
     */
    onAppSelected(event: TypeaheadMatch) {
        this.api = '';
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);
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
            }
        }
    }

    /**
     * when a coma separated number list is entered
     * @param numberlistForm
     */
    onUploadNumber(numberlistForm) {

        this.msisdnError = '';
        this.ismsisdnError = false;

        if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0) {
            this.ismsisdnError = false;
            this.msisdnList = [];
            if (this.isValid(this.msisdn)) {
                const msisdnList = this.msisdn.split(',');
                let count = 0;
                for (const entry of msisdnList) {
                    this.msisdnList[count] = '+' + Number(entry);
                    count++;
                }
                this.addNewToWhitelist();
            } else {

                if (this.msisdn.length == 0) {
                    this.msisdnError = 'Empty List';
                    this.ismsisdnError = true;
                } else {
                    this.msisdnError = 'Wrong input please enter Comma seperated valid mobile numbers ';
                    this.ismsisdnError = true;
                }
            }
        } else {
            this.msisdnError = 'Select the relevant Subscriber, Application and API first';
            this.ismsisdnError = true;
        }


    }

    /**
     * when a number range is added
     * @param numberrangeForm
     */
    onUploadNumberRange(numberrangeForm) {

        this.msisdnRangeError = '';
        this.ismsisdnRangeError = false;

        if (this.isValidMobileNumber(this.msisdnMin.toString()) && this.isValidMobileNumber(this.msisdnMax.toString())) {
            const diff = (this.msisdnMax - this.msisdnMin);
            if (diff > 0) {
                if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0) {
                    this.msisdnList = [];
                    for (let _i = 0; _i <= diff; _i++) {
                        let phone = Number(this.msisdnMin) + Number(_i)
                        this.msisdnList[_i] = '+' + phone;
                    }
                    this.addNewToWhitelist();
                } else {
                    this.msisdnRangeError = 'Select the relevant Subscriber, Application and API first';
                    this.ismsisdnRangeError = true;
                }
            } else {
                this.msisdnRangeError = 'Set minimum and maximum values in input boxes respectively';
                this.ismsisdnRangeError = true;
            }

        } else {
            this.msisdnRangeError = 'The Entered Mobile Numbers are not valid mobile numbers';
            this.ismsisdnRangeError = true;
        }
    }

    /**
     * input value validator using regular expression
     * @param inputtxt
     * @returns {boolean}
     */
    isValid(inputtxt: string): boolean {
        const list = /^\d+(,\d+)*$/;
        const regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        } else {
            console.log('Not a valid input');
            return false;
        }
    }

    isValidMobileNumber(msisdn: string): boolean {
        const list = /^\d{11}$/;
        const regexp = new RegExp(list);
        if (regexp.test(msisdn)) {
            return true;
        } else {
            console.log('Not a valid input');
            return false;
        }
    }
}


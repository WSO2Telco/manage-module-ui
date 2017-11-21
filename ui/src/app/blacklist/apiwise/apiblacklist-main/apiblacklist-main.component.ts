import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BlackListWhiteListService} from '../../../commons/services/blacklist_whitelist.service';
import {Api} from '../../../commons/models/common-data-models';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-blacklist-main',
    templateUrl: './apiblacklist-main.component.html',
    styleUrls: ['./apiblacklist-main.component.scss']
})


export class ApiBlacklistMainComponent implements OnInit {

    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    private apiId: string;
    private apiList: string[];
    private apis: Api[];
    private api;
    private msisdnList: string[];
    private blackListList: string[];
    private msisdn: string;
    private numberId: string[];
    private msisdnError: string;
    private long: string;
    private ismsisdnError: boolean;
    private islong: boolean;
    private count;
    private isDublicate: boolean;
    private dublicate: string;

    constructor(private blackListWhiteListService: BlackListWhiteListService, private message: MessageService) {


    }

    ngOnInit() {

        this.getApis();
        this.apiList = [];
        this.apis = [];
        this.api = '';
        this.apiId = '';
        this.msisdn = '';
        this.ismsisdnError = false;
        this.islong = false;
        this.msisdnError = '';
        this.long = '';
        this.isDublicate = false;
        this.dublicate = '';
        this.count = '0';
    }

    /**
     *  get blacklist numbers for api
     * @param Id
     */
    getBlackListNumbers(id: string) {
        this.blackListWhiteListService.getBlacklist(id, (response) => {

            if (response.success) {
                this.blackListList = response.payload.Success.variables;
                if (this.blackListList != null) {
                    this.count = this.blackListList.length;
                } else {
                    this.blackListList = response.Success.variables;
                    this.count = 0;
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     *  Get The List of api's
     */
    getApis() {
        this.blackListWhiteListService.getApiList((response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    const splitted = entry.split(':', 4);
                    const api = new Api();
                    api.id = splitted[3];
                    api.name = splitted[1];
                    api.version = splitted[2];
                    api.provider = splitted[0];
                    this.apis.push(api);
                    this.apiList.push(splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0] + ' ' + splitted[3]);
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * Selected api
     * @param event
     */
    onApiSelected() {

        let id = '';

        for (const entry of this.apis) {
            if (entry.name == this.api.split('-')[0].trim() && entry.version == this.api.split('-')[1].split(' ')[1].trim()) {
                id = entry.id;
            }
        }

        if (id.length != 0) {
            this.getBlackListNumbers(id);
        }
    }

    /**
     * Insert Number/s To blackList
     */
    addNewBlackListnumbers() {

        if (this.msisdnList.length != 0) {
            let apiId = '';
            let apiName = '';

            for (const entry of this.apis) {
                if (entry.name == this.api.split('-')[0].trim() && entry.version == this.api.split('-')[1].split(' ')[1].trim()) {
                    apiId = entry.id;
                    apiName = entry.name;
                }
            }

            if (apiId.length != 0 && apiName.length != 0) {
                this.blackListWhiteListService.addNewToBlacklist(apiId, apiName, this.msisdnList, (response) => {
                    if (response.success) {
                        this.message.success(response.message);
                        this.getBlackListNumbers(apiId);
                        this.msisdn = '';
                    } else {
                        this.message.error(response.message);
                    }
                });
            }
        }
    }

    /**
     *
     * @param numberlistForm
     */
    onUploadNumber(numberlistForm) {

        this.msisdnList = [];

        let validApi = false;

        for (const entry of this.apiList) {
            if (entry == this.api) {
                validApi = true;
            }
        }

        if (validApi) {
            if (this.api.length != 0) {
                if (this.isValid(this.msisdn)) {
                    this.ismsisdnError = false;
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

                            } else {
                                if (entry.length > 15) {
                                    this.islong = true;
                                } else {
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
                    } else {
                        this.addNewBlackListnumbers();
                    }

                } else {
                    if (this.msisdn.length == 0) {
                        this.msisdnError = 'Empty List';
                        this.ismsisdnError = true;
                    } else {
                        this.msisdnError = 'Wrong input please enter Comma separated valid mobile numbers ';
                        this.ismsisdnError = true;
                    }
                }
            } else {
                this.msisdnError = 'Select an API first';
                this.ismsisdnError = true;
            }
        } else {
            this.msisdnError = 'Please Select Valid API';
            this.ismsisdnError = true;
        }
    }

    /**
     * Refresh component on Delete Tasks
     * @param event
     * @param id
     */
    onDeleteHandler(event: boolean, id) {
        if (event) {
            this.getBlackListNumbers(id);
        }
    }

    /**
     * Validate Number Range
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

    /**
     * input value validator using regular expression comma seperated
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

}

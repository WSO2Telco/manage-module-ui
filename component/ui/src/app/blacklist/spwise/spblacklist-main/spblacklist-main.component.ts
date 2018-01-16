import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BlackListWhiteListService} from '../../../commons/services/blacklist_whitelist.service';
import {BlackListNumbers} from '../../../commons/models/common-data-models';
import {TypeaheadMatch} from 'ng2-bootstrap';

@Component({
    selector: 'app-spblacklist-main',
    templateUrl: './spblacklist-main.component.html',
    styleUrls: ['./spblacklist-main.component.scss']
})


export class SpBlacklistMainComponent implements OnInit {

    private submissionError: string;

    @Output()
    private onDeleteTask: EventEmitter<boolean> = new EventEmitter();

    private apiId: string;
    private apiList: string[];
    private applications: BlackListNumbers[];
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

    constructor(private blackListService: BlackListWhiteListService) {


    }

    ngOnInit() {

        this.getApis();
        this.submissionError = '';
        this.apiList = [];
        this.applications = [];
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
     *  Get All Blacklisted numbers
     * @param Id
     */
    getBlackListNumbers(Id: string) {
        // this.blackListService.getBlackListNumberList(Id, (response, status) => {
        //
        //     if (status) {
        //         this.blackListList = response.Success.variables;
        //         if (this.blackListList != null) {
        //             this.count = this.blackListList.length;
        //         } else {
        //             this.blackListList = response.Success.variables;
        //             this.count = 0;
        //         }
        //     } else {
        //         this.submissionError = response;
        //         setTimeout(() => {
        //             this.submissionError = null;
        //         }, 5000);
        //     }
        // });
    }

    /**
     *  Get The List of api's
     */
    getApis() {
        this.blackListService.getApiList((response, status) => {
            if (status) {
                this.apiList = response;
                let count = 0;
                for (const entry of this.apiList) {
                    const splitted = entry.split(':', 4);
                    this.applications[count] = new BlackListNumbers;
                    this.applications[count].id = splitted[3];
                    this.applications[count].name = splitted[1];
                    this.apiList[count] = splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0] + ' ' + splitted[3];
                    count += 1;
                }
            } else {
                this.submissionError = response;
                setTimeout(() => {
                    this.submissionError = null;
                }, 5000);
            }
        });
    }

    /**
     * Selected api
     * @param event
     */
    onApiSelected(event: TypeaheadMatch) {

        const list = /\d+(?=\D*$)/;
        const regexp = new RegExp(list);
        this.numberId = regexp.exec(this.api);
        let id = '';
        let count = 0;
        for (const entry of this.applications) {
            if (entry.id == this.numberId[count]) {
                id = entry.id;
                count += 1;
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
        const list = /\d+(?=\D*$)/;
        const regexp = new RegExp(list);

        this.numberId = regexp.exec(this.api);

        if (this.msisdnList.length != 0) {
            let apiId = '';
            let apiName = '';
            let count = 0;
            for (const entry of this.applications) {

                if (entry.id == this.numberId[count]) {
                    apiId = entry.id;
                    apiName = entry.id;
                    count += 1;
                }
            }

            let countd = 0;

            if (apiId.length != 0 && apiName.length != 0) {
                this.isDublicate = false;

                if (this.blackListList != null) {

                    for (const entry of this.blackListList.toString()) {

                        if (this.blackListList.toString().includes(this.msisdnList[countd])) {
                            this.dublicate = 'This MSISDN already exists';
                            this.isDublicate = true;
                        }
                        countd++;
                    }
                }

                if (this.isDublicate == true) {
                    this.dublicate = 'This MSISDN already exists';
                } else {
                    // this.blackListService.addNewToBlackListList(apiId, apiName, this.msisdnList, response => {
                    //     const result = response;
                    //     console.log(JSON.stringify(result));
                    //     this.getBlackListNumbers(apiId);
                    // });
                }
            }

        }
    }

    /**
     *
     * @param numberlistForm
     */
    onUploadNumber(numberlistForm) {

        this.msisdnList = [];

        if (this.isValid(this.msisdn)) {
            this.ismsisdnError = false;
            const msisdnList = this.msisdn.split(',');
            let count = 0;

            for (const entry of msisdnList) {

                if (this.isValidMobileNumber(entry)) {
                    this.msisdnList[count] = 'tel3A+' + Number(entry);
                    this.islong = false;
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
                this.msisdnError = 'Wrong input please enter Comma seperated valid mobile numbers ';
                this.ismsisdnError = true;
            }
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
        const list = /^\d{11}$/;
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
        const list = /^\d+(,\d+)*$/;
        const regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        } else {
            return false;
        }
    }

}

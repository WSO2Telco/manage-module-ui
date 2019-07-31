import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlackListWhiteListService } from '../../../commons/services/blacklist_whitelist.service';
import { Api, MsisdnValidation, Application } from '../../../commons/models/common-data-models';
import { MessageService } from '../../../commons/services/message.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';


// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

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
    private msisdnList: string;
    private blackListList: string;
    private msisdn: string;
    private msisdnBlacklist: string;
    private msisdnError: string;
    private long: string;
    private ismsisdnError: boolean;
    private isblackListError: boolean;
    private ismsisdnAvailable: boolean;
    private count;
    private id;
    searchBlacklistCollapsed = true;
    doBlacklistCollapsed = true;
    private isInvalidFieldError: boolean;

    private subscriber: string;
    private app;
    private selcetedAppId;

    private subscriberList;
    private msisdnMin: number;
    private msisdnMax: number;
    private invalidFieldError: string;

    private applications: Application[];
    selectedFile: File = null;

    uploader: FileUploader;
    errorMessage: string;
    allowedMimeType = ['text/plain'];
    maxFileSize = 0.2 * 1024 * 1024;

    constructor(private blackListWhiteListService: BlackListWhiteListService, private message: MessageService) {
        this.uploader = new FileUploader({
            allowedMimeType: this.allowedMimeType,
            headers: [{ name: 'Accept', value: 'application/json' }],
            autoUpload: true,
            maxFileSize: this.maxFileSize,
        });
        this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);
    }

    ngOnInit() {
        this.subscriberList = ['All'];
        this.getSubscribersOfProvider();
        this.apiList = [];
        this.apis = [];
        this.api = '';
        this.apiId = '';
        this.msisdn = '';
        this.msisdnBlacklist = '';
        this.ismsisdnError = false;
        this.isblackListError = false;
        this.msisdnError = '';
        this.long = '';
        this.count = '0';
        this.id = '';
        this.isInvalidFieldError = false;
        this.invalidFieldError = '';
        this.ismsisdnAvailable = false;

        this.uploader.onAfterAddingFile = (f) => this.onAfterAddingFile(f);
    }

    onAfterAddingFile(item: any) {
        if (this.uploader.queue.length > 1) {
            this.uploader.removeFromQueue(this.uploader.queue[0]);
        }

        this.selectedFile = item._file;
        const reader = new FileReader();
        reader.onload = (event) => {
        };
        reader.readAsDataURL(item._file);
        //  reader.readAsText(item._file);
    }


    onWhenAddingFileFailed(item: any, filter: any, options: any) {
        switch (filter.name) {
            case 'fileSize':
                this.errorMessage = `Maximum upload size exceeded (${item.size} of ${this.maxFileSize} allowed)`;

                break;
            case 'mimeType':
                const allowedTypes = this.allowedMimeType.join();
                this.errorMessage = `Type "${item.type} is not allowed. Allowed types: "${allowedTypes}"`;

                break;
            default:
                this.errorMessage = `Unknown error (filter is ${filter.name})`;
        }
    }


    /**
     * to load the subscriber details
     */
    getSubscribersOfProvider() {
        this.blackListWhiteListService.getSubscribers((response) => {
            if (response.success) {
                this.subscriberList.push(response.payload);
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     *  get blacklist number count for api
     * @param AppId/APIID
     */
    getBlackListNumbersCount(apiid: string, appid: string, subscriber: string) {
        this.blackListWhiteListService.getBlacklistCount(appid, apiid, subscriber,'blacklist', (response) => {

            if (response.success) {
                this.ismsisdnAvailable = false;
                this.count = response.payload.count;
            } else {
                this.message.error(response.message);
            }
        });
    }



    /**
     * Insert Number/s To blackList
     */
    addNewBlackListnumbers(msisdn: string) {
        let newappId;
        let newsp;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        this.blackListWhiteListService.addNewToBlacklist(newappId, this.id, msisdn,'blacklist', (response) => {
            if (response.success) {
                this.message.success(response.message);
                this.getBlackListNumbersCount(this.id, newappId, newsp);
                this.msisdnBlacklist = '';
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     *
     * @param numberlistForm
     */
    onUploadNumber(numberlistForm) {

        this.msisdnList;

        let validApi = false;

        for (const entry of this.apiList) {
            if (entry == this.api) {
                validApi = true;
            }
        }

        if (validApi) {
            if (this.api.length != 0) {
                this.isblackListError = false;
                const msisdnList = this.msisdnBlacklist;
                let count = 0;
                this.addNewBlackListnumbers(msisdnList);

            }
        } else {
            this.msisdnError = 'Please Select Valid API';
            this.isblackListError = true;
        }
    }

    /**
    *  search blacklist number for api
    * @param AppId/APIID
    */
    searchBlackListNumbers() {
        let newappId;
        let newsp;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        this.blackListWhiteListService.getBlacklistNumberExit(newappId, this.id, this.msisdn, newsp,'blacklist', (response) => {

            if (response.success) {
                if (response.payload.exists) {
                    this.ismsisdnError = false;
                    this.blackListList = this.msisdn;
                    this.ismsisdnAvailable = true;
                } else {
                    this.msisdnError = response.payload.error;
                    this.ismsisdnError = true;
                    this.ismsisdnAvailable = false;
                }
            } else {
                this.message.error(response.payload.message);
            }
        });
    }


    /**
   *  Download blacklist number for api
   * @param AppId/APIID
   */
    downloadBlackListNumbers() {
        let newappId;
        let newsp;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        this.blackListWhiteListService.downloadBlacklistNumberList(this.id, newappId, newsp,'blacklist', (response) => {

            if (response.success) {
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * Refresh component on Delete Tasks
     * @param event
     * @param id
     */
    onDeleteHandler(event: boolean, id) {
        let newappId;
        let newsp;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        if (event) {
            this.getBlackListNumbersCount(id, newappId, newsp);
            this.msisdn = '';
        }
    }

    /**
     * Validate Number Range
     * @param msisdn
     * @returns {boolean}
     * @deprecated
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
    * this method is triggered when a subscriber is selected or input field is changed
    * @param event
    */
    onSubscriberSelected() {
        this.app = '';
        this.api = '';
        this.applications = [];
        this.apiList = [];

        let invalid = true;
        this.isInvalidFieldError = false;
        for (const entry of this.subscriberList) {
            if (entry == this.subscriber && this.subscriber == 'All') {
                this.getAppsofSubscriber('_ALL_');
                invalid = false;
            } else if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
                invalid = false;
            }
        }

        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Service Provider';
        }
    }

    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    getAppsofSubscriber(subscriberID: string) {
        this.applications = [{ id: '0', name: 'All App' }];
        console.log(this.applications);
        this.blackListWhiteListService.getApps(subscriberID, (response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    const splitted = entry.split(':', 3);
                    const app = new Application();
                    app.id = splitted[0];
                    app.name = splitted[1] + ' (' + splitted[2] + ')';
                    this.applications.push(app);
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
        this.apiList = [];
        let appId = '';

        let invalid = true;
        this.isInvalidFieldError = false;
        for (const entry of this.applications) {
            if (entry.name == this.app) {
                invalid = false;
                appId = entry.id;
            }
        }

        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Application';
        } else {
            this.getApis(appId);
        }
    }


    /**
        * this method is triggered when an msisdn list is selected
        * @param event
        */
    onMsisdnSelected() {

    }

    onChange(event: any) {
        if (event.target.value == '' || event.target.value == null) { this.ismsisdnError = false; }
    }

    /**
     * to load the APIs of the application of the subscriber
     * @param appName
     */
    getApis(appID: string) {
        let newsp;
        this.selcetedAppId = appID;
        this.apiList.push("All API's");
        this.apis = [{ id: '0', name: "All API's", provider: 'all', version: 'all' }];
        if (appID == '0') { appID = '_ALL_'; }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        // this.subscriber == 'All'
        this.blackListWhiteListService.getApis(newsp, appID, (response) => {
            if (response.success) {
                for (const entry of response.payload) {
                    const splitted = entry.split(':', 4);
                    const api = new Api();
                    api.id = splitted[0];
                    api.name = splitted[2];
                    api.version = splitted[3];
                    api.provider = splitted[1];
                    this.apis.push(api);
                    this.apiList.push(splitted[2] + ' - ' + splitted[3] + ' Provided by ' + splitted[1]);

                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * when and API value is selected from drop down
     * @param event
     */
    onApiSelected() {

        let newappId;
        let newsp;
        let invalid = true;
        this.isInvalidFieldError = false;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        for (const entry of this.apis) {

            if (this.api.indexOf('-') !== -1 && entry.name == this.api.split('-')[0].trim() && entry.version == this.api.split('-')[1].split(' ')[1].trim()) {
                invalid = false;
                this.id = entry.id;
            } else if (this.api == "All API's") {
                invalid = false;
                this.id = '_ALL_';
            }
        }
        if (this.id.length != 0) {
            this.getBlackListNumbersCount(this.id, newappId, newsp);
        }

        if (invalid) {

            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid API Name';
            this.count = 0;
            alert(this.count)
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

    hasBaseDropZoneOver = false;

    // Angular2 File Upload
    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    fileChangeListener(event) {
        this.selectedFile = <File>event.target.files[0];

    }

    onUpload() {
        let newappId;
        let newsp;
        if (this.selcetedAppId == '0') { newappId = '_ALL_'; }
        else { newappId = this.selcetedAppId }
        if (this.subscriber == 'All') { newsp = '_ALL_'; }
        else { newsp = this.subscriber }
        const fd = new FormData();
        fd.append('action', 'blacklist')
        fd.append('sp', newsp)
        fd.append('file', this.selectedFile, this.selectedFile.name)

        this.blackListWhiteListService.addBulkToBlacklist(newappId, this.id, fd, (response) => {
            if (response.success) {
                this.message.success(response.message + ' (Added: ' + response.payload.processed + ' Failed: ' + response.payload.failed);

                this.getBlackListNumbersCount(this.id, newappId, newsp);
                this.msisdn = '';
                this.uploader.removeFromQueue(this.uploader.queue[0]);
                this.errorMessage = '';
            } else {
                this.message.error(response.message);
            }
        });
    }


}

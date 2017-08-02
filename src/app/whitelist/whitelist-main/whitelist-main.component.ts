/**
 * Created by manoj on 7/24/17.
 */
import {Component, OnInit} from '@angular/core';
import {WhitelistService} from '../../commons/services/whitelist.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {Application} from '../../commons/models/common-data-models';

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

    private applications: Application[];
    private apis: Application[];


    constructor(private whitelistService: WhitelistService) {

    }

    ngOnInit() {

        this.getSubscribersOfProvider();
        this.subscriberList = [];
        this.applicationList = [];
        this.apiList = [];
        this.applications = [];
        this.subscriber = '';
        this.app = '';
        this.api = '';
    }


    onSubmit() {

    }

    /**
     * to load the subscriber details
     */
    getSubscribersOfProvider() {
        this.whitelistService.getSubscribers((response) => {
            this.subscriberList = response;
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
            for (const entry of this.applicationList){
                const splitted = entry.split(':', 2);
                this.applications[count] = new Application;
                this.applications[count].id = splitted[0];
                this.applications[count].name = splitted[1];
                this.applicationList[count] = splitted[1];
                count +=  1;
            }
        });
    }

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

        if (id.length != 0){

            this.whitelistService.getApis(id, (response) => {
                this.apiList = response;
                let count = 0;
                for (const entry of this.apiList){
                    const splitted = entry.split(':', 4);
                    this.apiList[count] = splitted[2] + ' - ' + splitted[3] + ' Provided by ' + splitted[1];
                    count +=  1;
                }
            });

        }
    }

    /**
     * this method is triggered when a subscriber is selected
     * @param event
     */
    onSubscriberSelected(event: TypeaheadMatch) {
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
        for (const entry of this.applicationList) {
            if (entry == this.app) {
                this.getApis(this.app);
            }
        }
    }

    onApiSelected(event: TypeaheadMatch) {
        // for (const entry of this.applicationList) {
        //     if (entry == this.subscriber) {
        //         this.getApis(this.app);
        //         console.log('function called');
        //     }
        // }
        console.log('api selected');
    }


//
//     function getApis(subscriberId, appId) {
//     var url = site.externalServicesUrl + "blacklist-whitelist-service/queries/apis";
//     var data = {
//         "id":subscriberId + "|" + appId
//
//     };
//     var response = postJSON(url, data);
//     return response;
// }


}


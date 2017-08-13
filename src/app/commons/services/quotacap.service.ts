/**
 * Created by sahanK on 2/8/17.
 */
import {Injectable} from '@angular/core';
import {QuotacapRemoteDataService} from '../../data-providers/quotacap_remote-data.service';
import {MessageService} from '../../commons/services/message.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Injectable()
export class QuotaService {

    constructor(private _remoteService: QuotacapRemoteDataService,
                private message: MessageService,
                private slimLoadingBarService: SlimLoadingBarService) {
    }

    getSubscribers(callback: Function) {
        console.log('get subscribers of provider service called');
        this._remoteService.getSubscribers()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getApps(subscriberID: string, callback: Function) {
        console.log('get apps of subscriber service called');
        this._remoteService.getApps(subscriberID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getApis(id: string, callback: Function) {
        console.log('get apis of subscriber service called');
        this._remoteService.getApis(id)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    addNewQuotaLimit(subscriberID: string, appId: string, apiId: string, quotaValue: string, callback: Function) {
        console.log('Add new quotalimit service called');
        this.slimLoadingBarService.start();
        this._remoteService.addNewQuotaLimit(subscriberID, appId, apiId, quotaValue)
            .subscribe(
                data => {
                    this.message.success('Successfully added new Quota');
                    callback(data);
                },
                error => {
                    this.message.error(error);
                    callback(error);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
    }

    getQuotaLimitInfo(subscriberID: string, callback: Function) {
        console.log('get quotalimit of subscriber service called');
        this._remoteService.getQuotaLimitInfo(subscriberID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getQuotaLimitInfoApp(appID: string, callback: Function) {
        console.log('get quotalimit of subscriber service called');
        this._remoteService.getQuotaLimitInfoApp(appID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getQuotaLimitInfoApi(apiID: string, callback: Function) {
        this._remoteService.getQuotaLimitInfoApi(apiID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriodForSubscriober(subscriberID: string, fromDate: string, toDate: string, callback: Function) {
        this._remoteService.getValidityPeriodForSubscriober(subscriberID, fromDate, toDate)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriodForApp(appID: string, callback: Function) {
        this._remoteService.getQuotaLimitInfoApi(appID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriodForApi(apiID: string, callback: Function) {
        this._remoteService.getQuotaLimitInfoApi(apiID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }


}

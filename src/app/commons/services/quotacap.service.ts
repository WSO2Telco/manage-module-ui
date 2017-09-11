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

    getSubscribers(operatorName: string, callback: Function) {
        this._remoteService.getSubscribers(operatorName)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getOperatorOfsubscriber(subscriberID: string, callback: Function) {
        this._remoteService.getOperatorOfsubscriber(subscriberID)
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

    addNewQuotaLimit(subscriberID: string, appId: string, apiId: string, operatorname: string, quotaValue: string, fromDate: string, toDate: string, callback: Function) {
        this.slimLoadingBarService.start();
        this._remoteService.addNewQuotaLimit(subscriberID, appId, apiId, operatorname, quotaValue, fromDate, toDate)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
    }

    getQuotaLimitInfo(subscriberID: string, operatorname: string, callback: Function) {
        this._remoteService.getQuotaLimitInfo(subscriberID, operatorname)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getOperatorList(callback: Function) {
        this._remoteService.getOperatorList()
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getQuotaLimitInfoApp(appID: string, operatorname: string,  callback: Function) {
        this._remoteService.getQuotaLimitInfoApp(appID, operatorname)
            .subscribe(
                data => {
                    callback(data, true);
                },
                error => {
                    callback(error, false);
                }
            );
    }

    getQuotaLimitInfoApi(apiID: string, operatorname: string, callback: Function) {
        this._remoteService.getQuotaLimitInfoApi(apiID, operatorname)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getQuotaLimitInfoOperator(operatorname: string, subscriberID: string, callback: Function) {
        this._remoteService.getQuotaLimitInfoOperator(operatorname, subscriberID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }


    getValidityPeriodForSubscriober(subscriberID: string, fromDate: string, toDate: string, operatorname: string, callback: Function) {
        this._remoteService.getValidityPeriodForSubscriober(subscriberID, fromDate, toDate, operatorname)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriodForApp(appID: string, fromDate: string, toDate: string, operatorname: string, callback: Function) {
        this._remoteService.getValidityPeriodForApp(appID, fromDate, toDate, operatorname)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriodForApi(apiID: string, fromDate: string, toDate: string, operatorname: string, callback: Function) {
        this._remoteService.getValidityPeriodForApi(apiID, fromDate, toDate, operatorname)
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

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
                private slimLoadingBarService: SlimLoadingBarService) {
    }

    getSubscribers(operatorName: string, callback: Function) {
        this._remoteService.getSubscribers(operatorName)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getOperatorOfsubscriber(subscriberID: string, callback: Function) {
        this._remoteService.getOperatorOfsubscriber(subscriberID)
            .subscribe(
                data => {
                    callback(data);
                },
                error => {
                    callback(error);
                }
            );
    }

    getQuotaLimitInfo(data, callback: Function) {
        this._remoteService.getQuotaLimitInfo(data)
            .subscribe(
                response => {
                    callback(response);
                },
                error => {
                    callback(error);
                }
            );
    }

    getValidityPeriod(data, callback: Function) {
        this._remoteService.getValidityPeriod(data)
            .subscribe(
                response => {
                    callback(response);
                },
                error => {
                    callback(error);
                }
            );
    }

    addNewQuotaLimit(data, callback: Function) {
        this.slimLoadingBarService.start();
        this._remoteService.addNewQuotaLimit(data)
            .subscribe(
                response => {
                    callback(response);
                },
                error => {
                    callback(error);
                },
                () => {
                    this.slimLoadingBarService.complete();
                }
            );
    }


}

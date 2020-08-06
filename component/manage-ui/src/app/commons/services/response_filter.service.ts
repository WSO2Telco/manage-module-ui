import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ReportingRemoteDataService } from '../../data-providers/reporting-remote-data.service';


@Injectable()
export class ResponseFilterService {

  constructor(private _remoteService: ReportingRemoteDataService,
    private slimLoadingBarService: SlimLoadingBarService) {
  }

  PostInvokeAPI(endpoint: string, data: any, btoken: string, callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.PostResponseByAPIOperation(endpoint, data, btoken)
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

  GetInvokeAPI(endpoint: string, btoken: string, callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.getResponseByAPIOperation(endpoint, btoken)
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

  PutInvokeAPI(endpoint: string, data: any, btoken: string, callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.PutResponseByAPIOperation(endpoint, data, btoken)
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

  DeleteInvokeAPI(endpoint: string, data: any, btoken: string, callback: Function) {
    this.slimLoadingBarService.start();
    this._remoteService.DeleteResponseByAPIOperation(endpoint, data, btoken)
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

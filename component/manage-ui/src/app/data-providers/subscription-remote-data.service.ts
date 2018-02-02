import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApplicationTaskResult, ApplicationTaskResults} from '../commons/models/application-data-models';
import {AuthenticationService} from '../commons/services/authentication.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {MessageService} from '../commons/services/message.service';

@Injectable()
export class SubscriptionRemoteDataService {

    /**
     * All Application Creation
     * @type {BehaviorSubject<ApplicationTaskResult>}
     */
    public SubscriptionApprovalTaskProvider: Subject<ApplicationTaskResults> = new BehaviorSubject<ApplicationTaskResults>(null);

    private url = new URL(window.location.href);
    private apiContext = this.url.protocol + '//' + this.url.host + '/workflow-service/workflow/';

    private apiEndpoints: Object = {
        search: this.apiContext + 'subscriptions/search',
    };

    constructor(private http: Http,
                private slimLoadingBarService: SlimLoadingBarService,
                private authService: AuthenticationService,
                private message: MessageService) {
    }

    getSubscriptionTasks(): void {
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['search'], this.getOptions())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Subscription List',
                error: error
            }))
            .subscribe(
                data => {
                    if (data.success) {
                        this.SubscriptionApprovalTaskProvider.next(data.payload);
                        this.slimLoadingBarService.complete();
                    } else {
                        this.message.error(data.message);
                        this.slimLoadingBarService.stop();
                    }
                },
                error => {
                    this.message.error(error.message);
                    this.slimLoadingBarService.stop();
                }
            );
    }

    getOptions(): RequestOptions {
        const token = this.authService.loginUserInfo.getValue().token;
        const useName = this.authService.loginUserInfo.getValue().userName;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'user-name': useName,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }

}

import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApplicationTaskResult} from '../commons/models/application-data-models';
import {AuthenticationService} from '../commons/services/authentication.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class SubscriptionRemoteDataService {

    /**
     * All Application Creation
     * @type {BehaviorSubject<ApplicationTaskResult>}
     */
    public SubscriptionTaskProvider: Subject<ApplicationTaskResult> = new BehaviorSubject<ApplicationTaskResult>(null);

    private apiContext = 'url';

    private apiEndpoints: Object = {
        search: this.apiContext + '/applications/search',
    };

    constructor(private http: Http,
                private slimLoadingBarService: SlimLoadingBarService,
                private authService: AuthenticationService) {
    }

    getUserSubscriptionTasks() {
        return this.http.get(this.apiEndpoints['search'], this.getOptions())
            .map((response: Response) => {
                return {
                    success: true,
                    message: 'Subscription List Loaded Successfully',
                    payload: response.json()
                };
            })
            .catch((error: Response) => Observable.throw({
                success: false,
                message: 'Error Loading Subscription List',
                error: error
            }));
    }

    getOptions(): RequestOptions {
        const token = this.authService.loginUserInfo.getValue().token;
        const headers = new Headers(
            {
                'Authorization': 'Basic ' + token,
                'Content-Type': 'application/json'
            });
        return new RequestOptions({headers: headers});
    }

}

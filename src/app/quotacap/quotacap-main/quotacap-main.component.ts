/**
 * Created by manoj on 7/24/17.
 */
import {Component, OnInit, } from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApprovalHistoryFilter, Application} from '../../commons/models/reporing-data-models';

@Component({
    selector: 'app-quotacap-main',
    templateUrl: './quotacap-main.component.html',
    styleUrls: ['./quotacap-main.component.scss']
})
export class QuotaCapMainComponent implements OnInit {

    private subscribers: string[];
    private operators: string[];
    private applications: Application[];

    constructor(private reportingService: ReportingRemoteDataService) {
    }


    private isNameEmpty: boolean;
    private name: string;

    ngOnInit() {
        this.name = '';

        this.reportingService.SubscribersProvider.subscribe((subscribers) => {
            this.subscribers = subscribers;
        });

        this.reportingService.OperatorsProvider.subscribe((operators) => {
            this.operators = operators;
        });

        this.reportingService.ApplicationsProvider.subscribe((apps) => {
            this.applications = apps;
            this.selectedApplication = null;
        });
    }

    clearErrors() {
        this.isNameEmpty = false;
    }

    isEmpty(): boolean {
        if (this.name.length != 0) {
            return false; }
        else {
            return true; }
    }

    onquotacapFormSubmit(quotacapForm) {

        this.clearErrors();

        if (!this.isEmpty()) {
            console.log('submited rate card form ' + this.name );
            /* this.rateService.addNewRateCard(this.name, this.description, this.date, this.currency,
                this.rateType, this.tariff, (errorMsg) => {
                    this.submissionError = errorMsg;
                    setTimeout(() => {
                        this.submissionError = null;
                    }, 5000);
                }); */
        } else {
            console.log('invalid fields');
            if (this.name.length == 0) {
                this.isNameEmpty = true;
            }
        }


    }

    public operatorList: string[] = [
        'SB',
        'NB'
    ];

    public spList: string[] = [
        'Dialog',
        'Mobitel',
        'Hutch',
        'Etisalata',
        'Airtel',
    ];

    public AppList: string[] = [
        'APP1',
        'Test1',
        'Test2',
        'Test3'
    ];

    public ApiList: string[] = [
        'SMS',
        'Billing',
        'Charge',
        'Voting'
    ];

}


import {Component, OnInit} from '@angular/core';
import {ReportingRemoteDataService} from "../../data-providers/reporting-remote-data.service";
import {
    ApprovalRateFilter, ApprovalHistory,
    ApprovalHistoryDataset
} from "../../commons/models/reporing-data-models";
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng2-formly'; 

@Component({
    selector: 'app-rate-main',
    templateUrl: './rate-main.component.html',
    styleUrls: ['./rate-main.component.scss']
})
export class RateMainComponent implements OnInit {

    constructor(private reportingService: ReportingRemoteDataService) {
    }

    private filter: ApprovalRateFilter;

    private fieldSet = ["applicationId", "applicationName", "applicationDescription", "status","approvedOn"];

    private approvalHistoryData: ApprovalHistoryDataset;

    private totalItems:number=0;
    private currentPage:number = 1;


    form: FormGroup = new FormGroup({});
    userFields: FormlyFieldConfig = [{
    className: 'row',
    fieldGroup: [
      {
        className: 'col-xs-6',
        key: 'rateName',
        type: 'input',
        defaultValue: 'defaultrate',
        templateOptions: {
          label: 'Rate Name',
          placeholder: 'Enter Rate name',
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
      },{
        className: 'col-xs-6',
        key: 'rateDes',
        type: 'input',
        defaultValue: 'defaultdesc',
        templateOptions: {
          label: 'Rate Description',
          placeholder: 'Enter Rate description',
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
      },{
        className: 'col-xs-6',
        key: 'curreny',
        type: 'select',
        defaultValue: '0',
        templateOptions: {
          label: 'Currency',
          options: [
            {label: 'LKR', value: '0'},
            {label: 'USD', value: '1'},
            {label: 'INR', value: '2'}
          ]
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
      },{
        className: 'col-xs-6',
        key: 'curreny',
        type: 'select',
        defaultValue: '0',
        templateOptions: {
          label: 'Currency',
          options: [
            {label: 'LKR', value: '0'},
            {label: 'USD', value: '1'},
            {label: 'INR', value: '2'}
          ]
        },validators: {
          validation: Validators.compose([Validators.required])
        }
      }]
  }];
 
  user = {
    email: 'email@gmail.com',
    checked: false
  };
 
  submit(user) {
    console.log(user);
  }


    ngOnInit() {
      /*  this.filter = new ApprovalRateFilter();
        this.filter.count = 10;

        this.reportingService.ApprovalHistoryProvider.subscribe((history) => {
            this.approvalHistoryData = history;
            this.totalItems = (this.approvalHistoryData && this.approvalHistoryData.noOfRecords) || this.totalItems;
        });

        this.reportingService.getSubscribers();
        this.reportingService.getOperators();
        this.reportingService.getApprovalHistory(this.filter); */
    }

    onFilterChangeHandler(event:ApprovalRateFilter){
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    }

    onPageChanged(event){
        this.filter.offset = (event.page - 1) * this.filter.count;
        this.reportingService.getApprovalHistory(this.filter);
    }

}

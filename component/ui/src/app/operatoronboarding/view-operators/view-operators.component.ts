import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperatorOnboardingDataService } from '../../data-providers/operator-onboarding-data.service';
import { Operator } from '../../commons/models/operator-onboarding-data-models';
import { FieldSet } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-view-operators',
  templateUrl: './view-operators.component.html',
  styleUrls: ['./view-operators.component.scss']
})
export class ViewOperatorsComponent implements OnInit {

  private operators: Operator[];
  private fieldSet: FieldSet[] = [
    { columnName: 'Operator', fieldName: 'operator' },
    { columnName: 'Brand Name', fieldName: 'brand' },
    { columnName: 'MCC', fieldName: 'mcc' },
    { columnName: 'MNC', fieldName: 'mnc' },
    { columnName: 'Country', fieldName: 'countryName' },
    { columnName: 'Country Code', fieldName: 'countryCode' },
    { columnName: 'Status', fieldName: 'status' }];

  constructor(
    private router: Router,
    private operatorService: OperatorOnboardingDataService) {

    this.operatorService.OnboardOperatorProvider.subscribe((opRes: Operator[]) => { this.operators = opRes; });
  }

  ngOnInit() {
    this.operatorService.getOperators();
  }

  onIconClick(op: Operator, action: string) {
    
    switch (action) {
      case 'EDIT':
        this.router.navigate(['operator/onboarding/add']);
        break;

      case 'ENDPOINT':
        this.router.navigate(['operator/onboarding/api-endpints'], { queryParams: { 'operator-mnc': op.mnc } });
        break;

      case 'TOKEN':
        this.router.navigate(['operator/onboarding/set-token']);
        break;

      default:
        break;
    }
  }
}

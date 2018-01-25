import { Component, OnInit } from '@angular/core';
import { OperatorEndpoint, AddOperatorEndpointParam, Country } from '../../commons/models/operator-onboarding-data-models';
import { OperatorOnboardingDataService } from '../../data-providers/operator-onboarding-data.service';
import { ActivatedRoute } from '@angular/router';
import { FieldSet } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-create-operator-endpoint',
  templateUrl: './create-operator-endpoint.component.html',
  styleUrls: ['./create-operator-endpoint.component.scss']
})
export class CreateOperatorEndpointComponent implements OnInit {

  endpoints: OperatorEndpoint[] = [];

  countries: Country[];

  endpointsFieldSet: FieldSet[] = [
    { columnName: 'API', fieldName: 'api' },
    { columnName: 'Endpoint Url', fieldName: 'endpointUrl' }
  ];

  private operatorMnc: number;

  constructor(
    private route: ActivatedRoute,
    private service: OperatorOnboardingDataService) {

    this.route.queryParams.subscribe((params => {
      this.operatorMnc = parseInt(params['operator-mnc'], 10);
      if (!!this.operatorMnc) {
        this.service.getOperatorEndpoints(this.operatorMnc);
      }
    }));

    this.service.CountriesProvider.subscribe((res) => {
      debugger;
      this.countries = res;
    });

    this.service.OperatoEndpointProvider.subscribe((res: OperatorEndpoint[]) => {
      this.endpoints = res;
    });

  }

  ngOnInit() {
    this.service.loadCountries();
  }

  onAddEndpoint(event: AddOperatorEndpointParam) {
    event.operatorMnc = this.operatorMnc;
    this.service.addOperatorEndpoint(event);
  }

  onIconClick(endpoint: OperatorEndpoint, action: string) {
    switch (action) {

      case 'DELETE':
        this.service.deleteOperatorEndpoint(endpoint);
        break;

      default:
        break;
    }
  }
}

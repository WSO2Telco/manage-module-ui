import { Component, OnInit } from '@angular/core';
import { OperatorEndpoint, AddOperatorEndpointParam } from 'app/commons/models/operator-onboarding-data-models';
import { OperatorOnboardingDataService } from 'app/data-providers/operator-onboarding-data.service';
import { ActivatedRoute } from '@angular/router';
import { FieldSet } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-create-operator-endpoint',
  templateUrl: './create-operator-endpoint.component.html',
  styleUrls: ['./create-operator-endpoint.component.scss']
})
export class CreateOperatorEndpointComponent implements OnInit {

  private endpoints: OperatorEndpoint[] = [];
  private operatorId: number;

  private endpointsFieldSet: FieldSet[] = [
    { columnName: 'API', fieldName: 'api' },
    { columnName: 'Endpoint Url', fieldName: 'endpointUrl' }
  ];

  constructor(
    private route: ActivatedRoute,
    private service: OperatorOnboardingDataService) {

    this.route.queryParams.subscribe((params => {
      this.operatorId = parseInt(params['operator-id'], 10);
      if (!!this.operatorId) {
        this.service.getOperatorEndpoints(this.operatorId);
      }
    }));

    this.service.OperatoEndpointProvider.subscribe((res: OperatorEndpoint[]) => {
      this.endpoints = res;
    });

  }

  ngOnInit() {

  }

  onAddEndpoint(event: AddOperatorEndpointParam) {
    event.operatorId = this.operatorId;
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

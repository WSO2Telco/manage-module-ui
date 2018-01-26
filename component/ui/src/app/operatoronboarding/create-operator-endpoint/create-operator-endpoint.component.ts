import { Component, OnInit } from '@angular/core';
import { OperatorEndpoint, AddOperatorEndpointParam, Country, Operator, GetOperatorEndpointParam } from '../../commons/models/operator-onboarding-data-models';
import { OperatorOnboardingDataService } from '../../data-providers/operator-onboarding-data.service';
import { ActivatedRoute } from '@angular/router';
import { FieldSet, RowSelectionParam } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-create-operator-endpoint',
  templateUrl: './create-operator-endpoint.component.html',
  styleUrls: ['./create-operator-endpoint.component.scss']
})
export class CreateOperatorEndpointComponent implements OnInit {

  endpoints: OperatorEndpoint[] = [];
  highlightedEndpoints: RowSelectionParam;

  selectedOperator: Operator;
  selectedEndPoint: OperatorEndpoint;
  isEditMode = false;
  endpointId: number;

  countries: Country[];

  endpointsFieldSet: FieldSet[] = [
    { columnName: 'Id', fieldName: 'id' },
    { columnName: 'API', fieldName: 'api' },
    { columnName: 'Endpoint Url', fieldName: 'endpointUrl' }
  ];

  private operatorMnc: number;

  constructor(
    private route: ActivatedRoute,
    private service: OperatorOnboardingDataService) {

    this.route.params.subscribe((params => {
      this.operatorMnc = parseInt(params['operator-mnc'], 10);
      this.endpointId = parseInt(params['endpoint-id'], 10);

      if (!!this.operatorMnc) {
        this.service.getOperatorByMnc(this.operatorMnc);
        this.service.getOperatorEndpoints(this.operatorMnc);

        if (!!this.endpointId) {
          this.isEditMode = true;
        }
      }

    }));

    this.service.SelectedOperatorEndpointProvider.subscribe((ep) => {
      this.selectedEndPoint = ep;
      if (this.selectedEndPoint) {
        this.highlightedEndpoints = new RowSelectionParam('id', [this.selectedEndPoint.id]);
      }
    });

    this.service.CountriesProvider.subscribe((res) => {
      this.countries = res;
    });

    this.service.SelectedOperatorProvider.subscribe((op) => {
      this.selectedOperator = op;
    });

    this.service.OperatoEndpointProvider.subscribe((res: OperatorEndpoint[]) => {
      this.endpoints = res;
      console.log(this.endpoints);
    });

  }

  ngOnInit() {
    this.service.loadCountries();
  }

  onAddEndpoint(event: AddOperatorEndpointParam) {
    if (!!event.endpointId) {
      this.service.updateOperatorEndpoint(event);
    } else {
      this.service.addOperatorEndpoint(event);
    }
  }

  onIconClick(endpoint: OperatorEndpoint, action: string) {
    switch (action) {

      case 'DELETE':
        this.service.deleteOperatorEndpoint(endpoint);
        break;

      case 'EDIT':
        this.service.setSelectedOperatorEndpointById(new GetOperatorEndpointParam(endpoint.operatorMnc, endpoint.id));
        break;

      default:
        break;
    }
  }
}

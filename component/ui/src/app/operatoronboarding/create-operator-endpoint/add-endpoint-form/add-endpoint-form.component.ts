import { EventEmitter, Input, Component, OnInit } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { OperatorEndpoint, AddOperatorEndpointParam, Operator } from '../../../commons/models/operator-onboarding-data-models';

@Component({
  selector: 'app-add-endpoint-form',
  templateUrl: './add-endpoint-form.component.html',
  styleUrls: ['./add-endpoint-form.component.scss']
})
export class AddEndpointFormComponent implements OnInit {

  @Output()
  whenEndpointAdd: EventEmitter<AddOperatorEndpointParam> = new EventEmitter();

  @Input()
  public selectedOperator: Operator;

  public apiList = ['SMS', 'WALLET', 'PAYMENT', 'BALANCE', 'ACCOUNT INFO', 'GEO LOCATION'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.whenEndpointAdd.emit({
      operatorMnc: this.selectedOperator.mnc,
      api: form.value.api,
      endpointUrl: form.value.endpointUrl
    });
    form.reset();
  }

}

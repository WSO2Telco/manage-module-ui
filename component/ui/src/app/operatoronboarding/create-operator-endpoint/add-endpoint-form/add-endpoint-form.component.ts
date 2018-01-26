import { EventEmitter, Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { OperatorEndpoint, AddOperatorEndpointParam, Operator } from '../../../commons/models/operator-onboarding-data-models';

@Component({
  selector: 'app-add-endpoint-form',
  templateUrl: './add-endpoint-form.component.html',
  styleUrls: ['./add-endpoint-form.component.scss']
})
export class AddEndpointFormComponent implements OnInit, OnChanges {

  @Output()
  whenEndpointAdd: EventEmitter<AddOperatorEndpointParam> = new EventEmitter();

  @Input()
  public selectedOperator: Operator;

  @Input()
  public selectedEndpoint: OperatorEndpoint;

  public seletdApi: string;
  public endpointUrl: string;

  public apiList = ['SMS', 'WALLET', 'PAYMENT', 'BALANCE', 'ACCOUNT INFO', 'GEO LOCATION'];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const ep = changes['selectedEndpoint'];
    if (ep && !!ep.currentValue && (ep.currentValue !== ep.previousValue)) {
      this.seletdApi = this.selectedEndpoint.api;
      this.endpointUrl = this.selectedEndpoint.endpointUrl;
    }
  }

  onSubmit(form) {
    if (form.valid) {
      const param: AddOperatorEndpointParam = new AddOperatorEndpointParam();
      param.api = this.seletdApi;
      param.endpointUrl = this.endpointUrl;
      param.operatorMnc = this.selectedOperator.mnc;

      if (this.selectedEndpoint) {
        param.endpointId = this.selectedEndpoint.id;
      }
      
      this.whenEndpointAdd.emit(param);
      this.selectedEndpoint = null;
      form.reset();
    }
  }

}

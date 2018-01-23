import { EventEmitter, Component, OnInit } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { OperatorEndpoint, AddOperatorEndpointParam } from 'app/commons/models/operator-onboarding-data-models';

@Component({
  selector: 'app-add-endpoint-form',
  templateUrl: './add-endpoint-form.component.html',
  styleUrls: ['./add-endpoint-form.component.scss']
})
export class AddEndpointFormComponent implements OnInit {

  @Output()
  whenEndpointAdd: EventEmitter<AddOperatorEndpointParam> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.whenEndpointAdd.emit({ operatorId: 0, api: 'sms', endpointUrl: '' });
  }

}

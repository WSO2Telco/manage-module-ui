import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { FieldSet } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-common-data-table',
  templateUrl: './common-data-table.component.html',
  styleUrls: ['./common-data-table.component.scss']
})
export class CommonDataTableComponent implements OnInit {

  @Input()
  public dataSource: any[];

  @Input()
  public fieldSet: FieldSet[];

  @ContentChild('dynamicCellContent') dynamicCellContentTmpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ContentChild, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { FieldSet, RowSelectionParam } from 'app/commons/models/common-data-models';

@Component({
  selector: 'app-common-data-table',
  templateUrl: './common-data-table.component.html',
  styleUrls: ['./common-data-table.component.scss']
})
export class CommonDataTableComponent implements OnInit, OnChanges {

  @Input()
  public dataSource: any[];

  @Input()
  public fieldSet: FieldSet[];

  @Input()
  public selectedRecordSet: RowSelectionParam;

  public values: any[];

  @ContentChild('dynamicCellContent') dynamicCellContentTmpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const t = changes['selectedRecordSet'];
    if (t && !!t.currentValue && (t.currentValue != t.previousValue)) {
      this.values = t.currentValue.valesToCompare || [];
    }
  }

}

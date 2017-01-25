import {Component, OnInit, Input} from '@angular/core';
import {ApplicationTask} from "../../commons/models/application-data-models";

@Component({
  selector: 'application-data-table',
  templateUrl: './application-data-table.component.html',
  styleUrls: ['./application-data-table.component.scss']
})
export class ApplicationDataTableComponent implements OnInit {

  @Input()
  private tableTitle:string;

  @Input()
  private dataSource:ApplicationTask;

  constructor() { }

  ngOnInit() {
  }

}

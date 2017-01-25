import {Component, OnInit, Input} from '@angular/core';
import {DashboardData} from "../../commons/models/dashboard-data-models";

@Component({
  selector: 'app-approval-summery',
  templateUrl: './approval-summery.component.html',
  styleUrls: ['./approval-summery.component.scss'],
})
export class ApprovalSummeryComponent implements OnInit {

  @Input()
  private appDetailsSummery:DashboardData;

  constructor() { }

  ngOnInit() {
  }

}

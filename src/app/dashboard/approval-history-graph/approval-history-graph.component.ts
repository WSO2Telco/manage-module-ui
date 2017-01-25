import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-approval-history-graph',
  templateUrl: './approval-history-graph.component.html',
  styleUrls: ['./approval-history-graph.component.scss'],
})
export class ApprovalHistoryGraphComponent implements OnInit {

  public barChartOptionsSubscriptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Subscription Creations'
    }
  };

  public barChartOptionsApplications:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Application Creations'
    }
  };

  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartDataApplications:any[] = [
    {data: [65, 59, 80, 81, 75, 55, 90], label: 'All Applications'},
    {data: [28, 48, 40, 19, 12, 27, 80], label: 'My Applications'}
  ];

  public barChartDataSubscriptions:any[] = [
    {data: [65, 59, 80, 81, 85, 55, 79], label: 'All Applications'},
    {data: [28, 48, 40, 19, 27, 27, 16], label: 'My Applications'}
  ];

  constructor() { }

  ngOnInit() {

  }

}

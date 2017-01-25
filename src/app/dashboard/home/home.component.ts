import { Component, OnInit } from '@angular/core';
import {ApplicationTask} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../../approvals/approval-remote-data.service";
import {DashboardData} from "../../commons/models/dashboard-data-models";
import {DashboardRemoteDataService} from "../dashboard-remote-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private myApplications:ApplicationTask[];
  private myApplicationHeaders = ['id','applicationDescription','createTime', 'userName'];

  private myAppSubscriptionTask:ApplicationTask[];
  private myAppSubscriptionHeaders = ['id','applicationDescription','createTime', 'subscriber'];

  private allApplications:ApplicationTask[];

  private allSubscriptions:ApplicationTask[];

  private dashboardData:DashboardData;

  constructor(
    private approvalService:ApprovalRemoteDataService,
    private dashboardService:DashboardRemoteDataService
  ) { }

  ngOnInit() {

    this.approvalService.getUserApplicationTasks().subscribe(
      (response:ApplicationTask[])=>{ this.myApplications = response},
      (error)=>{alert(error)}
      );

    this.approvalService.getUserAppSubscriptionTasks().subscribe(
      (response:ApplicationTask[])=>{ this.myAppSubscriptionTask = response},
      (error)=>{alert(error)}
    );

    this.approvalService.getUserGroupApplicationTasks().subscribe(
      (response:ApplicationTask[])=>{ this.allApplications = response},
      (error)=>{alert(error)}
    );

    this.approvalService.getUserGroupAppSubscriptionTask().subscribe(
      (response:ApplicationTask[])=>{ this.allSubscriptions = response},
      (error)=>{alert(error)}
    );

    this.dashboardService.getDashboardData().subscribe(
      (response:DashboardData)=>{ this.dashboardData = response},
      (error)=>{alert(error)}
    )
  }

}

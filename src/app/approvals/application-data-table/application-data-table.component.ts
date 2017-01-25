import {Component, OnInit, Input} from '@angular/core';
import {ApplicationTask} from "../../commons/models/application-data-models";
import {ApprovalRemoteDataService} from "../approval-remote-data.service";
import {Response} from "@angular/http";

@Component({
  selector: 'application-data-table',
  templateUrl: './application-data-table.component.html',
  styleUrls: ['./application-data-table.component.scss']
})
export class ApplicationDataTableComponent implements OnInit {

  @Input()
  private tableTitle:string;

  @Input()
  private recordLimit:string;

  @Input()
  private dataSource:ApplicationTask;

  constructor(private approvalService:ApprovalRemoteDataService) { }

  ngOnInit() {
  }

  onAction(actionType:string,appTask:ApplicationTask){
    switch (actionType){
      case 'ASSIGN' : {
        this.approvalService.assignApplicationTaskToUser(appTask.id).subscribe(
            (result:any)=>{
              this.approvalService. getUserApplicationTasks();
              this.approvalService. getUserGroupApplicationTasks();
            },
            (error)=>{
              alert(error);
            }
        );
        break;
      }
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications/applications.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import {ApprovalRoutes} from "./approval.routes";
import { ApprovalMainComponent } from './approval-main/approval-main.component';
import { ApplicationDataTableComponent } from './application-data-table/application-data-table.component';

@NgModule({
  imports: [
    CommonModule,
    ApprovalRoutes
  ],
  declarations: [ApplicationsComponent, SubscriptionsComponent, ApprovalMainComponent, ApplicationDataTableComponent]
})
export class ApprovalsModule { }

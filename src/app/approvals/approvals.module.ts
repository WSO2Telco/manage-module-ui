import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications/applications.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import {ApprovalRoutes} from "./approval.routes";
import { ApprovalMainComponent } from './approval-main/approval-main.component';

@NgModule({
  imports: [
    CommonModule,
    ApprovalRoutes
  ],
  declarations: [ApplicationsComponent, SubscriptionsComponent, ApprovalMainComponent]
})
export class ApprovalsModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {DashboardRoutes} from "./dashboard.routes";
import {ApprovalSummeryComponent} from './approval-summery/approval-summery.component';
import {ApprovalCountComponent} from './approval-count/approval-count.component';
import {ApprovalHistoryGraphComponent} from './approval-history-graph/approval-history-graph.component';
import {ResponsiveTableComponent} from "../commons/components/responsive-table/responsive-table.component";
import {ChartsModule} from "ng2-charts";
import {ApprovalRemoteDataService} from "../approvals/approval-remote-data.service";
import {DashboardRemoteDataService} from "./dashboard-remote-data.service";
import {ApplicationDataTableComponent} from "../approvals/application-data-table/application-data-table.component";
import {DashboardHelperService} from "./dashboard-helper.service";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutes,
        ChartsModule
    ],
    providers: [
        ApprovalRemoteDataService,
        DashboardRemoteDataService,
        DashboardHelperService],
    declarations: [
        HomeComponent,
        ApprovalSummeryComponent,
        ApprovalCountComponent,
        ApprovalHistoryGraphComponent,
        ResponsiveTableComponent,
        ApplicationDataTableComponent]
})
export class DashboardModule {
}

import { RouterModule } from "@angular/router";
import { ApplicationsComponent } from "./applications/applications.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { ApprovalMainComponent } from "./approval-main/approval-main.component";
import { PermissionGuard } from "app/app.guard";

const routes = [
  {
    path: '',
    component: ApprovalMainComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
    canActivate: [PermissionGuard],
    data: {
      permissions: 'application:visible'
    }
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    canActivate: [PermissionGuard],
    data: {
      permissions: 'subscription:visible'
    }
  }
];


export const ApprovalRoutes = RouterModule.forChild(routes);

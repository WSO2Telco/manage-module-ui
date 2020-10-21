import { RouterModule } from "@angular/router";
import { SubscriptionDetailComponent } from "./subscription-detail/subscription-detail.component";
import { PermissionGuard } from "app/app.guard";

const routes = [
  {
    path: '',
    component: SubscriptionDetailComponent
  }
];

export const EditSubscriptionRoutes = RouterModule.forChild(routes);

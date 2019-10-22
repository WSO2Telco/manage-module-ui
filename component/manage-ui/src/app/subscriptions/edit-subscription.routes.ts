import { RouterModule } from "@angular/router";
import { SubscriptionDetailComponent } from "./edit-subscription/subscription-detail.component";
import { UpdateSubComponent } from "./subscription-detail/update-sub.component";
import { PermissionGuard } from "app/app.guard";

const routes = [
  {
    path: '',
    component: SubscriptionDetailComponent
  },
  {
    path: ':appid/:apiname/:apiversion',
    component: UpdateSubComponent
  },
  {
    path: ':appid/:apiname/:appname/:apiversion/:apiprovider/:tier/:action/:status/:operator',
    component: UpdateSubComponent
  },
  {
    path: ':appid/:apiname/:tier/:action/:status/:operator',
    component: UpdateSubComponent
  }
];

export const EditSubscriptionRoutes = RouterModule.forChild(routes);

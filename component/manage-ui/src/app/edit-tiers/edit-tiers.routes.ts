import { RouterModule } from "@angular/router";
import { PermissionGuard } from "app/app.guard";
import { TierDetailComponent } from "./tier-detail/tier-detail.component";
import { EditTierComponent } from "./edit-tier/edit-tiers.component";

const routes = [
  {
    path: '',
    component: TierDetailComponent
  },
  {
    path: ':appid/:apiname/:apiversion',
    component: EditTierComponent
  },
  {
    path: ':appid/:apiname/:appname/:apiversion/:apiprovider/:tier/:action/:status/:operator',
    component: EditTierComponent
  },
  {
    path: ':appid/:apiname/:tier/:action/:status/:operator',
    component: EditTierComponent
  }
];

export const EditTiersRoutes = RouterModule.forChild(routes);

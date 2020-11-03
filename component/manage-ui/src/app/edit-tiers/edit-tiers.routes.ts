import { RouterModule } from "@angular/router";
import { PermissionGuard } from "app/app.guard";
import { TierDetailComponent } from "./tier-detail/tier-detail.component";

const routes = [
  {
    path: '',
    component: TierDetailComponent
  }
];

export const EditTiersRoutes = RouterModule.forChild(routes);

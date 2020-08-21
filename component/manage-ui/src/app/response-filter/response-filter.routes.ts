import { RouterModule } from "@angular/router";
import { ResponseFilterComponent } from "./edit-response/response-filter.component";
import { PermissionGuard } from "app/app.guard";

const routes = [
  {
    path: '',
    component: ResponseFilterComponent
  }
];

export const ResponseFilterRoutes = RouterModule.forChild(routes);

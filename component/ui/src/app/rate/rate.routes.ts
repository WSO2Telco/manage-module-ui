import { RouterModule } from '@angular/router';
import { RateMainComponent } from './create/rate-main/rate-main.component';
import { AssignRateMainComponent } from './assign/assign-rate-main.component';
import { ViewRateMainComponent } from './view/view-rate-main.component';
import { PermissionGuard } from '../app.guard';

const routes = [
    {
        path: 'create',
        component: RateMainComponent,
        canActivate: [PermissionGuard],
        data: {
            permissions: 'rate:add'
        }
    },
    {
        path: 'assign',
        component: AssignRateMainComponent,
        canActivate: [PermissionGuard],
        data: {
            permissions: 'rate:assign'
        }
    },
    {
        path: 'view',
        component: ViewRateMainComponent,
        canActivate: [PermissionGuard],
        data: {
            permissions: 'rate:view'
        }
    },
];

export const RateRoutes = RouterModule.forChild(routes);
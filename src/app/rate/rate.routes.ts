import {RouterModule} from '@angular/router';
import {RateMainComponent} from './create/rate-main/rate-main.component';
import {AssignRateMainComponent} from './assign/assign-rate-main.component';
import {ViewRateMainComponent} from './view/view-rate-main.component';
import {AdminGuard} from '../app.guard';

const routes = [
    {
        path: 'create',
        component: RateMainComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'assign',
        component: AssignRateMainComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'view',
        component: ViewRateMainComponent
    },
];

export const RateRoutes = RouterModule.forChild(routes);
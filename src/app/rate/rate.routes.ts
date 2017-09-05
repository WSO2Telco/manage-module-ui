import {RouterModule} from '@angular/router';
import {RateMainComponent} from './create/rate-main/rate-main.component';
import {AssignRateMainComponent} from './assign/assign-rate-main.component';

const routes = [
    {
        path: 'create',
        component: RateMainComponent
    },
    {
        path: 'assign',
        component: AssignRateMainComponent
    },
];

export const RateRoutes = RouterModule.forChild(routes);
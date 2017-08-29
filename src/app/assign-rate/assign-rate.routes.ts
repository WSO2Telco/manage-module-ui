import {RouterModule} from '@angular/router';
import {AssignRateMainComponent} from './assign-rate-main.component';

const routes = [{
    path : '',
    component: AssignRateMainComponent
}];

export const AssignRateRoutes = RouterModule.forChild(routes);
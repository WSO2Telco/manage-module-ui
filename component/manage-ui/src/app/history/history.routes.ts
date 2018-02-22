import {RouterModule} from "@angular/router";
import {HistoryMainComponent} from "./history-main/history-main.component";
import {ApplicationDetailComponent} from './application-detail/application-detail.component';
import {SubscriptionDetailComponent} from './subscription-detail/subscription-detail.component';

const routes = [
    {
    path: '',
    component: HistoryMainComponent
    },
    {
        path: 'application/:id',
        component: ApplicationDetailComponent
    },
    {
        path: 'subscription/:id',
        component: SubscriptionDetailComponent
    }

    ];

export const HistoryRoutes = RouterModule.forChild(routes);

import {RouterModule} from "@angular/router";
import {HistoryMainComponent} from "./history-main/history-main.component";
import {ApplicationDetailComponent} from './application-detail/application-detail.component';

const routes = [
    {
    path: '',
    component: HistoryMainComponent
    },
    {
        path: 'application/:id/:name',
        component: ApplicationDetailComponent
    }

    ];

export const HistoryRoutes = RouterModule.forChild(routes);

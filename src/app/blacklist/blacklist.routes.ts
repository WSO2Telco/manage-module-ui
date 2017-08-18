import {ApiBlacklistMainComponent} from './apiblacklist/apiblacklist-main/apiblacklist-main.component';
import {SpBlacklistMainComponent} from './spblacklist/spblacklist-main/spblacklist-main.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path : 'apiblacklist',
        component : ApiBlacklistMainComponent
    },
    {
        path : 'spblacklist',
        component : SpBlacklistMainComponent
    },
];

export const BlackListRoutes = RouterModule.forChild(routes);

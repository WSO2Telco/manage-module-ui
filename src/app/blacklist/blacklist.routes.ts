import {ApiBlacklistMainComponent} from './apiwise/apiblacklist-main/apiblacklist-main.component';
import {SpBlacklistMainComponent} from './spwise/spblacklist-main/spblacklist-main.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path : 'apiwise',
        component : ApiBlacklistMainComponent
    }
];

export const BlackListRoutes = RouterModule.forChild(routes);

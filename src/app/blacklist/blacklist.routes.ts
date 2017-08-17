import {ApiBlacklistMainComponent} from './apiblacklist/apiblacklist-main/apiblacklist-main.component';
import {RouterModule} from '@angular/router';

const routes = [{
    path : '',
    component : ApiBlacklistMainComponent
}];

export const BlackListRoutes = RouterModule.forChild(routes);

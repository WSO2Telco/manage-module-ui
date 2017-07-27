/**
 * Created by rajithk on 7/25/17.
 */
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';
import {RouterModule} from "@angular/router";

const routes = [{
    path : '',
    component : BlacklistMainComponent
}];

export const BlackListRoutes = RouterModule.forChild(routes);

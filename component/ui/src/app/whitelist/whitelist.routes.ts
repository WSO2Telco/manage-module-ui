import {RouterModule} from '@angular/router';
import {WhitelistMainComponent} from './whitelist-main/whitelist-main.component';

const routes =[{
  path : '',
  component : WhitelistMainComponent
}];

export const WhitelistRoutes = RouterModule.forChild(routes);

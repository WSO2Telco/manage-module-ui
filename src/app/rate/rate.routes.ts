import {RouterModule} from '@angular/router';
import {RateMainComponent} from './rate-main/rate-main.component';

const routes = [{
  path : '',
  component : RateMainComponent
}];

export const RateRoutes = RouterModule.forChild(routes);

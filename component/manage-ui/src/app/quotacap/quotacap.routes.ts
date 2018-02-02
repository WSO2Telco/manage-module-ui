import {RouterModule} from '@angular/router';
import {QuotaCapMainComponent} from './quotacap-main/quotacap-main.component';

const routes =[{
  path : '',
  component : QuotaCapMainComponent
}];

export const QuotaCapRoutes = RouterModule.forChild(routes);

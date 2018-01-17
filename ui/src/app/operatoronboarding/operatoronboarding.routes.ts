import {RouterModule} from '@angular/router';
import {OperatorOnboardingMainComponent} from './add/operatoronboarding.component';
import { PermissionGuard } from '../app.guard';

const routes =[
  {
    path: 'add',
    component: OperatorOnboardingMainComponent,
    canActivate: [PermissionGuard],
    data: {
      permissions: 'operatoronboarding:add'
    }
  }];

export const OperatorOnboardingRoutes = RouterModule.forChild(routes);

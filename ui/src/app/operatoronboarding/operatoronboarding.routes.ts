import {RouterModule} from '@angular/router';
import {OperatorOnboardingMainComponent} from './add/add-main/operatoronboarding.component';
import {ViewOperatorsComponent} from './view-operators/view-operators.component';
import { PermissionGuard } from '../app.guard';

const routes =[
  {
    path: 'add',
    component: OperatorOnboardingMainComponent,
    canActivate: [PermissionGuard],
    data: {
      permissions: 'operatoronboarding:add'
    }
  },
  {
    path: 'view',
    component: ViewOperatorsComponent,
    canActivate: [PermissionGuard],
    data: {
      permissions: 'operatoronboarding:view'
    }
  }];

export const OperatorOnboardingRoutes = RouterModule.forChild(routes);

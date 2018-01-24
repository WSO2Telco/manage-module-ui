import { RouterModule } from '@angular/router';
import { OperatorOnboardingMainComponent } from './add/add-main/operatoronboarding.component';
import {SetTokenComponent} from './add/add-token/token.component';
import { ViewOperatorsComponent } from './view-operators/view-operators.component';
import { PermissionGuard } from '../app.guard';
import { CreateOperatorEndpointComponent } from 'app/operatoronboarding/create-operator-endpoint/create-operator-endpoint.component';

const routes = [
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
  },
  {
    path: 'api-endpints',
    component: CreateOperatorEndpointComponent,
    /* canActivate: [PermissionGuard],
    data: {
      permissions: 'operatoronboarding:view'
    } */
  },
  {
    path: 'set-token',
    component: SetTokenComponent,
    /* canActivate: [PermissionGuard],
     data: {
     permissions: 'operatoronboarding:settoken'
     } */
  }
];

export const OperatorOnboardingRoutes = RouterModule.forChild(routes);

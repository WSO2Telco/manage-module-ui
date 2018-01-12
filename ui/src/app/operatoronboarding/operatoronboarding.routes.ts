import {RouterModule} from '@angular/router';
import {OperatorOnboardingMainComponent} from './operatoronboarding-main/operatoronboarding.component';

const routes =[{
  path : '',
  component : OperatorOnboardingMainComponent
}];

export const OperatorOnboardingRoutes = RouterModule.forChild(routes);

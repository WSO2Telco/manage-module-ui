import {RouterModule} from '@angular/router';
import { ThemeComponent } from './theme-main/theme-main.component';

const routes =[{
  path : '',
  component : ThemeComponent
}];

export const ThemeRoutes = RouterModule.forChild(routes);

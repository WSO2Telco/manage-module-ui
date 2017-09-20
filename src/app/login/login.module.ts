import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutes} from "./login.routes";
import { UserLoginComponent } from './user-login/user-login.component';
import {UserInactiveComponent} from './user_inactive/user-inactive.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutes
  ],
  declarations: [UserLoginComponent, UserInactiveComponent]
})
export class LoginModule {
}

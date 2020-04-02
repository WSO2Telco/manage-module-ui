import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutes} from "./login.routes";
import { UserLoginComponent } from './user-login/user-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutes
  ],
  declarations: [UserLoginComponent]
})
export class LoginModule {
}

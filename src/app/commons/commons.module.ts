import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "./services/authentication.service";
import {RemoteDataService} from "./services/remote-data.service";
import {AppCommonService} from "./services/app-common.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [AuthenticationService,RemoteDataService,AppCommonService]
})
export class CommonsModule { }

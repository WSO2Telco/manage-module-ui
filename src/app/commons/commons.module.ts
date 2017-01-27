import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "./services/authentication.service";
import {LoginRemoteDataService} from "../data-providers/login_remote-data.service";
import {AppCommonService} from "./services/app-common.service";
import {MessageService} from "./services/message.service";
import {ApplicationDataTableComponent} from "./components/application-data-table/application-data-table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [AuthenticationService,LoginRemoteDataService,AppCommonService,MessageService],
  exports : []
})
export class CommonsModule { }

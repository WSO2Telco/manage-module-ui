import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from './services/authentication.service';
import {RateService} from './services/rate.service';
import {BlackListService} from './services/blacklist.service';
import {WhitelistService} from './services/whitelist.service';
import {LoginRemoteDataService} from '../data-providers/login_remote-data.service';
import {AppCommonService} from './services/app-common.service';
import {MessageService} from './services/message.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        AuthenticationService,
        LoginRemoteDataService,
        AppCommonService,
        MessageService,
        RateService,
        BlackListService,
        WhitelistService],
    exports: []
})
export class CommonsModule {
}

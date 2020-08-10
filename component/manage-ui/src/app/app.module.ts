import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions, Http} from '@angular/http';
import {ButtonsModule, DropdownModule, PopoverModule, TooltipModule, TypeaheadModule} from 'ng2-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {RootLevelRoutes} from './app.routes';
import {CommonsModule} from './commons/commons.module';
import {AppGuard, BillingGuard, LoginGuard, PermissionGuard} from './app.guard';
import {HeaderComponent} from './commons/components/header/header.component';
import {HamburgerMenuComponent} from './commons/components/hamburger-menu/hamburger-menu.component';
import {UserAvatarComponent} from './commons/components/user-avatar/user-avatar.component';
import {MainMenuComponent} from './commons/components/main-menu/main-menu.component';
import {UserInactiveComponent} from './commons/components/user_inactive/user-inactive.component';
import {BreadcrumbsComponent} from './commons/components/breadcrumbs/breadcrumbs.component';
import {ChartsModule} from 'ng2-charts';
import {DataProvidersModule} from './data-providers/data-providers.module';
import {ToastyModule} from 'ng2-toasty';
import {ApprovalRemoteDataService} from './data-providers/approval-remote-data.service';
import {RateRemoteDataService} from './data-providers/rate_remote-data.service';
import {DashboardRemoteDataService} from './data-providers/dashboard-remote-data.service';
import {ApprovalHelperService} from './approvals/approval-helper.service';
import {SharedModule} from './shared/shared.module';
import {ReportingRemoteDataService} from './data-providers/reporting-remote-data.service';
import {BlackListWhiteListRemoteDataService} from './data-providers/blacklist_whitelist_remote-data.service';
import {QuotacapRemoteDataService} from './data-providers/quotacap_remote-data.service';
import {ApplicationRemoteDataService} from './data-providers/application-remote-data.service';
import {ConfigService} from './commons/services/config.service';
import { TimerService } from './commons/services/timer.service';
import { AppHTTPInterceptor } from './app.http.interceptor';
import { httpFactory } from '@angular/http/src/http_module';
import {SubscriptionRemoteDataService} from "./data-providers/subscription-remote-data.service";
import { ThemeService } from './commons/services/theme.service';
import { ThemeRemoteDataService } from './data-providers/theme_remote-data.service';
import { ResponseFilterService } from './commons/services/response_filter.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HamburgerMenuComponent,
        UserAvatarComponent,
        MainMenuComponent,
        UserInactiveComponent,
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule,
        RootLevelRoutes,
        FormsModule,
        HttpModule,
        CommonsModule,
        ChartsModule,
        SharedModule,
        DataProvidersModule,
        ButtonsModule.forRoot(),
        PopoverModule.forRoot(),
        DropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ToastyModule.forRoot(),
        TypeaheadModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [
        {   provide : Http,
            useClass:AppHTTPInterceptor,
            deps: [XHRBackend, RequestOptions, TimerService]
        },
        ConfigService,
        AppGuard,
        LoginGuard,
        BillingGuard,
        PermissionGuard,
        ApprovalRemoteDataService,
        DashboardRemoteDataService,
        ReportingRemoteDataService,
        SubscriptionRemoteDataService,
        RateRemoteDataService,
        ApprovalHelperService,
        QuotacapRemoteDataService,
        BlackListWhiteListRemoteDataService,
        ThemeRemoteDataService,
        ApplicationRemoteDataService,
        {
            provide : 'API_CONTEXT',
            useValue : 'api'
        },
        ThemeService,
        ResponseFilterService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

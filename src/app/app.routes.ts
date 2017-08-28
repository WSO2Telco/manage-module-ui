import {RouterModule} from "@angular/router";
import {AppGuard, LoginGuard, AdminGuard} from "./app.guard";

const routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    canActivate : [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canActivate : [AppGuard]
  },
  {
    path: 'history',
    loadChildren: 'app/history/history.module#HistoryModule',
    canActivate : [AppGuard]
  },
  {
    path: 'rate',
    loadChildren: 'app/rate/rate.module#RateModule',
    canActivate : [AppGuard]
  },
  {
     path: 'assign-rate',
     loadChildren: 'app/assign-rate/assign-rate.module#AssignRateModule',
     canActivate : [AppGuard]
  },
  {
    path: 'quotacap',
    loadChildren: 'app/quotacap/quotacap.module#QuotaCapModule',
    canActivate : [AppGuard]
  },
  {
    path: 'whitelist',
    loadChildren: 'app/whitelist/whitelist.module#WhitelistModule',
    canActivate : [AdminGuard]
  },
  {
    path: 'approvals',
    loadChildren: 'app/approvals/approvals.module#ApprovalsModule',
    canActivate : [AppGuard]
  },
  {
    path: 'blacklist',
    loadChildren: 'app/blacklist/blacklist.module#BlackListModule',
    canActivate: [AdminGuard]
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : '/home'
  }
];

export const RootLevelRoutes = RouterModule.forRoot(routes,{ useHash: true });

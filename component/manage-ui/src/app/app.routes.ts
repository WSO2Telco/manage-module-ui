import {RouterModule} from '@angular/router';
import {AppGuard, LoginGuard, PermissionGuard} from './app.guard';

const routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canActivate: [AppGuard]
  },
  {
    path: 'history',
    loadChildren: 'app/history/history.module#HistoryModule',
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'workFlowHistory'
    }
  },
  {
    path: 'edit-subscription-application',
    loadChildren: 'app/subscriptions/edit-subscription.module#EditSubscriptionModule',
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'edit-subscription'
    }
  },
  {
    path: 'rate',
    loadChildren: 'app/rate/rate.module#RateModule',
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'rate'
    }
  },
  {
    path: 'quotacap',
    loadChildren: 'app/quotacap/quotacap.module#QuotaCapModule',
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'quota'
    }
  },
  {
    path: 'whitelist',
    loadChildren: 'app/whitelist/whitelist.module#WhitelistModule',
    canActivate: [PermissionGuard],
    data: {
      permissions: 'whiteList'
    }
  },
  {
    path: 'approvals',
    loadChildren: 'app/approvals/approvals.module#ApprovalsModule',
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'application,subscription'
    }
  },
  {
    path: 'blacklist',
    loadChildren: 'app/blacklist/blacklist.module#BlackListModule',
    canActivate: [PermissionGuard],
    data: {
      permissions: 'apiBlacklist,spBlackList'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

export const RootLevelRoutes = RouterModule.forRoot(routes, { useHash: true });

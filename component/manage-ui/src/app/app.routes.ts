import {RouterModule} from '@angular/router';
import {AppGuard, LoginGuard, PermissionGuard} from './app.guard';

const routes = [
  {
    path: 'login',
    loadChildren: () => import('app/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AppGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('app/history/history.module').then(m => m.HistoryModule),
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'workFlowHistory'
    }
  },
  {
    path: 'edit-subscription-application',
    loadChildren: () => import('app/subscriptions/edit-subscription.module').then(m => m.EditSubscriptionModule),
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'edit-subscription'
    }
  },
  {
    path: 'rate',
    loadChildren: () => import('app/rate/rate.module').then(m => m.RateModule),
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'rate'
    }
  },
  {
    path: 'quotacap',
    loadChildren: () => import('app/quotacap/quotacap.module').then(m => m.QuotaCapModule),
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'quota'
    }
  },
  {
    path: 'whitelist',
    loadChildren: () => import('app/whitelist/whitelist.module').then(m => m.WhitelistModule),
    canActivate: [PermissionGuard],
    data: {
      permissions: 'whiteList'
    }
  },
  {
    path: 'approvals',
    loadChildren: () => import('app/approvals/approvals.module').then(m => m.ApprovalsModule),
    canActivate: [AppGuard, PermissionGuard],
    data: {
      permissions: 'application,subscription'
    }
  },
  {
    path: 'blacklist',
    loadChildren: () => import('app/blacklist/blacklist.module').then(m => m.BlackListModule),
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

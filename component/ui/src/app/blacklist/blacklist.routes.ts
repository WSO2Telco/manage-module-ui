import { ApiBlacklistMainComponent } from './apiwise/apiblacklist-main/apiblacklist-main.component';
import { SpBlacklistMainComponent } from './spwise/spblacklist-main/spblacklist-main.component';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from 'app/app.guard';

const routes = [
    {
        path: 'apiwise',
        component: ApiBlacklistMainComponent,
        canActivate: [PermissionGuard],
        data: {
            permissions: 'apiBlacklist'
        }
    },
    {
        path: 'spwise',
        component: SpBlacklistMainComponent,
        canActivate: [PermissionGuard],
        data: {
            permissions: 'spBlackList'
        }
    },
];

export const BlackListRoutes = RouterModule.forChild(routes);

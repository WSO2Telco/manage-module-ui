import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditSubscriptionRoutes} from './edit-subscription.routes';
import {SubscriptionDetailComponent} from './edit-subscription/subscription-detail.component';
import {UpdateSubComponent} from './subscription-detail/update-sub.component';
import {ApplicationDataTableComponent} from "../commons/components/application-data-table/application-data-table.component";
import {SharedModule} from "../shared/shared.module";
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        EditSubscriptionRoutes,
        TabsModule.forRoot()
    ],
    declarations: [
        SubscriptionDetailComponent,
        UpdateSubComponent
        ]
})
export class EditSubscriptionModule {
}
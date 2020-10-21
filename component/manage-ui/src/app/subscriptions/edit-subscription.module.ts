import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditSubscriptionRoutes} from './edit-subscription.routes';
import {SubscriptionDetailComponent} from './subscription-detail/subscription-detail.component';
import {SharedModule} from "../shared/shared.module";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TierEditComponent } from './tier-edit/tier-edit.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        EditSubscriptionRoutes,
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],
    declarations: [
        SubscriptionDetailComponent,
        TierEditComponent
        ]
})
export class EditSubscriptionModule {
}
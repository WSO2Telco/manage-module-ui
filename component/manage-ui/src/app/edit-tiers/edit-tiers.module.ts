import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditTiersRoutes } from './edit-tiers.routes';
import { TierDetailComponent } from './tier-detail/tier-detail.component';
import { EditTierComponent } from './edit-tier/edit-tiers.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        EditTiersRoutes,
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],
    declarations: [
        TierDetailComponent,
        EditTierComponent
    ]
})
export class EditTierModule {
}
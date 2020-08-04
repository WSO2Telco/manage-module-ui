import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResponseFilterRoutes} from './response-filter.routes';
import { ResponseFilterComponent} from './edit-response/response-filter.component';
import {SharedModule} from "../shared/shared.module";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ResponseFilterRoutes,
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],
    declarations: [
        ResponseFilterComponent
        ]
})
export class ResponseFilterModule {
}
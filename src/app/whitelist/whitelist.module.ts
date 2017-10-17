import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import  {WhitelistRoutes} from './whitelist.routes';
import {SharedModule} from '../shared/shared.module';
import {WhitelistMainComponent} from './whitelist-main/whitelist-main.component';
import {WhitelistListComponent} from './whilelist-list/whitelist-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        WhitelistRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        WhitelistMainComponent,
        WhitelistListComponent
        ]
})
export class WhitelistModule {
}
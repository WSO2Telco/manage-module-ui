import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import  {WhitelistRoutes} from './whitelist.routes';
import {SharedModule} from '../shared/shared.module';
import {WhitelistMainComponent} from './whitelist-main/whitelist-main.component';
import {WhitelistListComponent} from './whilelist-list/whitelist-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        WhitelistRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ModalModule.forRoot()
    ],
    declarations: [
        WhitelistMainComponent,
        WhitelistListComponent
        ]
})
export class WhitelistModule {
}
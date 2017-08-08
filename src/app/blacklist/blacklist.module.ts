/**
 * Created by rajithk on 7/25/17.
 */
import {NgModule} from '@angular/core';
import {BlackListRoutes} from './blacklist.routes';
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SharedModule} from '../shared/shared.module';
import { BlacklistListComponent } from '../blacklist/blacklist-list/blacklist-list.component';

@NgModule({

    imports: [
        CommonModule,
        BlackListRoutes,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        SharedModule,
        ModalModule.forRoot()
    ],

    declarations: [
        BlacklistMainComponent,
        BlacklistListComponent
    ]

})

export class BlackListModule {

}

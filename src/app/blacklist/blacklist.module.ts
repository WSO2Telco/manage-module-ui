import {NgModule} from '@angular/core';
import {BlackListRoutes} from './blacklist.routes';
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SharedModule} from '../shared/shared.module';
import { BlacklistListComponent } from '../blacklist/blacklist-list/blacklist-list.component';

@NgModule({

    imports: [
        CommonModule,
        BlackListRoutes,
        FormsModule,
        ReactiveFormsModule,
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

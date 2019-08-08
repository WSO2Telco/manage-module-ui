import { NgModule } from '@angular/core';
import { BlackListRoutes } from './blacklist.routes';
import { ApiBlacklistMainComponent } from './apiwise/apiblacklist-main/apiblacklist-main.component';
import { SpBlacklistMainComponent } from './spwise/spblacklist-main/spblacklist-main.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { ApiBlacklistListComponent } from './apiwise/apiblacklist-list/apiblacklist-list.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({

    imports: [
        CommonModule,
        BlackListRoutes,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FileUploadModule,
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],

    declarations: [
        ApiBlacklistMainComponent,
        ApiBlacklistListComponent,
        SpBlacklistMainComponent
    ]

})

export class BlackListModule {

}

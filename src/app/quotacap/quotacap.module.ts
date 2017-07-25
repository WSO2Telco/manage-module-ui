import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuotaCapRoutes} from './quotacap.routes';
import {SharedModule} from '../shared/shared.module';
import {QuotaCapMainComponent} from './quotacap-main/quotacap-main.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        QuotaCapRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ModalModule.forRoot()
    ],
    declarations: [
        QuotaCapMainComponent
        ]
})
export class QuotaCapModule {
}
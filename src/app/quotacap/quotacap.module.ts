import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuotaCapRoutes} from './quotacap.routes';
import {SharedModule} from '../shared/shared.module';
import {QuotaCapMainComponent} from './quotacap-main/quotacap-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDateRangePickerModule } from 'ngx-daterangepicker';

@NgModule({
    imports: [
        CommonModule,
        QuotaCapRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDateRangePickerModule,
        ModalModule.forRoot()
    ],
    declarations: [
        QuotaCapMainComponent
        ]
})
export class QuotaCapModule {
}
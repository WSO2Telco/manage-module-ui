import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuotaCapRoutes} from './quotacap.routes';
import {SharedModule} from '../shared/shared.module';
import {QuotaCapMainComponent} from './quotacap-main/quotacap-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
    imports: [
        CommonModule,
        QuotaCapRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MyDateRangePickerModule,
        ModalModule.forRoot()
    ],
    declarations: [
        QuotaCapMainComponent
        ]
})
export class QuotaCapModule {
}
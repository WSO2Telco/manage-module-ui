import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperatorOnboardingRoutes} from './operatoronboarding.routes';
import {SharedModule} from '../shared/shared.module';
import {OperatorOnboardingMainComponent} from './operatoronboarding-main/operatoronboarding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
    imports: [
        CommonModule,
        OperatorOnboardingRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MyDateRangePickerModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        OperatorOnboardingMainComponent
        ]
})
export class OperatorOnboarding {
}
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperatorOnboardingRoutes} from './operatoronboarding.routes';
import {AddTokenComponent} from './add/add-token/token.component';
import {SharedModule} from '../shared/shared.module';
import {OperatorOnboardingMainComponent} from './add/add-main/operatoronboarding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [
        CommonModule,
        OperatorOnboardingRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        OperatorOnboardingMainComponent,
        AddTokenComponent
        ]
})
export class OperatorOnboarding {
}
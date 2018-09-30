import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RateCategoryComponent} from './create/rate-ratecategory/ratecategory.component';
import {CategoryComponent} from './create/rate-category/category.component';
import {TariffComponent} from './create/rate-tariff/tariff.component';
import {TaxComponent} from './create/rate-tax/tax.component';
import {RateMainComponent} from './create/rate-main/rate-main.component';
import {AssignRateMainComponent} from './assign/assign-rate-main.component';
import {ViewRateMainComponent} from './view/view-rate-main.component';
import {RateRoutes} from './rate.routes';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {CurrencyComponent} from './create/rate-currency/currency.component';
import { DualListBoxModule } from 'ng2-dual-list-box';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
    imports: [
        CommonModule,
        RateRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        TypeaheadModule.forRoot(),
        TooltipModule.forRoot(),
        DualListBoxModule.forRoot(),
        TabsModule.forRoot(),
        CollapseModule.forRoot(),
        AngularDualListBoxModule,
        MyDateRangePickerModule
    ],
    declarations: [
        RateMainComponent,
        RateCategoryComponent,
        CategoryComponent,
        CurrencyComponent,
        TariffComponent,
        TaxComponent,
        AssignRateMainComponent,
        ViewRateMainComponent
    ]
})
export class RateModule {

}
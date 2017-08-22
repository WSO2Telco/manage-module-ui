import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RateCategoryComponent} from './rate-ratecategory/ratecategory.component';
import {CategoryComponent} from './rate-category/category.component';
import {DefinitionComponent} from './rate-definition/definition.component';
import {TariffComponent} from './rate-tariff/tariff.component';
import {RateMainComponent} from './rate-main/rate-main.component';
import {RateRoutes} from './rate.routes';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {CurrencyComponent} from './rate-currency/currency.component';

@NgModule({
    imports: [
        CommonModule,
        RateRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        TypeaheadModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        RateMainComponent,
        RateCategoryComponent,
        CategoryComponent,
        CurrencyComponent,
        TariffComponent,
        DefinitionComponent
    ]
})
export class RateModule {

}
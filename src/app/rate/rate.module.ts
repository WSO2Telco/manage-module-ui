import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SubcategoryComponent} from './rate-subcategory/subcategory.component';
import {CategoryComponent} from './rate-category/category.component';
import {TariffComponent} from './rate-tariff/tariff.component';
import {RateMainComponent} from './rate-main/rate-main.component';
import {RateRoutes} from './rate.routes';
import {RateFilterComponent} from './rate-filter/rate-filter.component';
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
        SearchPanelComponent,
        SearchResultsComponent,
        RateMainComponent,
        RateFilterComponent,
        SubcategoryComponent,
        CategoryComponent,
        CurrencyComponent,
        TariffComponent
    ]
})
export class RateModule {

}
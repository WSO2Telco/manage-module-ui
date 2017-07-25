import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SubcategoryComponent} from './rate-subcategory/subcategory.component';
import {NewtypeComponent} from './rate-newtype/newtype.component'
import {RateMainComponent} from './rate-main/rate-main.component';
import {RateRoutes} from './rate.routes';
import {RateFilterComponent} from './rate-filter/rate-filter.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';
import { ModalModule } from 'ngx-bootstrap/modal';
import {CurrencyComponent} from './rate-currency/currency.component';

@NgModule({
    imports: [
        CommonModule,
        RateRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ModalModule.forRoot()
    ],
    declarations: [
        SearchPanelComponent,
        SearchResultsComponent,
        RateMainComponent,
        RateFilterComponent,
        SubcategoryComponent,
        NewtypeComponent,
        CurrencyComponent
    ]
})
export class RateModule {
}
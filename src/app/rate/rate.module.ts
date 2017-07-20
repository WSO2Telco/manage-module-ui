import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SubcategoryComponent} from './subcategory/subcategory.component';
import {RateMainComponent} from './rate-main/rate-main.component';
import {RateRoutes} from './rate.routes';
import {RateFilterComponent} from './rate-filter/rate-filter.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';

@NgModule({
    imports: [
        CommonModule,
        RateRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
    ],
    declarations: [SearchPanelComponent, SearchResultsComponent, RateMainComponent, RateFilterComponent, SubcategoryComponent]
})
export class RateModule {
}
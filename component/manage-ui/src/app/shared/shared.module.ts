import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDataTableComponent } from '../commons/components/application-data-table/application-data-table.component';
import { SubscriptionDataTableComponent } from '../commons/components/subscription-data-table/subscription-data-table.component';
import { TooltipModule, TypeaheadModule, PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ResponsiveTableComponent } from '../commons/components/responsive-table/responsive-table.component';
import { HasPermissionsDirective } from 'app/commons/directves/has-permissions.directive';
import { CommonDataTableComponent } from 'app/commons/components/common-data-table/common-data-table.component';

@NgModule({
    imports: [
        CommonModule,
        TooltipModule,
        TypeaheadModule,
        FormsModule,
        SlimLoadingBarModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        ApplicationDataTableComponent,
        SubscriptionDataTableComponent,
        ResponsiveTableComponent,
        HasPermissionsDirective,
        CommonDataTableComponent],

    exports: [
        HasPermissionsDirective,
        ApplicationDataTableComponent,
        SubscriptionDataTableComponent,
        SlimLoadingBarModule,
        ResponsiveTableComponent,
        FormsModule,
        TypeaheadModule,
        PaginationModule,
        CommonDataTableComponent]
})
export class SharedModule {
}

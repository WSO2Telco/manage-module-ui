import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationDataTableComponent} from "../commons/components/application-data-table/application-data-table.component";
import {TooltipModule, TypeaheadModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        TooltipModule,
        TypeaheadModule,
        FormsModule
    ],
    declarations: [ApplicationDataTableComponent],
    exports: [ApplicationDataTableComponent]
})
export class SharedModule {
}

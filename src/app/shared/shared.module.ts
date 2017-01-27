import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationDataTableComponent} from "../commons/components/application-data-table/application-data-table.component";
import {TooltipModule} from "ng2-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        TooltipModule
    ],
    declarations: [ApplicationDataTableComponent],
    exports: [ApplicationDataTableComponent]
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApplicationDataTableComponent} from "../commons/components/application-data-table/application-data-table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApplicationDataTableComponent],
  exports : [ApplicationDataTableComponent]
})
export class SharedModule { }

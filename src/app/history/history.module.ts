import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HistoryMainComponent } from './history-main/history-main.component';
import {HistoryRoutes} from "./history.routes";

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutes
  ],
  declarations: [SearchPanelComponent, SearchResultsComponent, HistoryMainComponent]
})
export class HistoryModule { }

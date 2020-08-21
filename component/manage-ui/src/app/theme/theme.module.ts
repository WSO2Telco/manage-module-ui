import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutes } from './theme.routes';
import { ThemeComponent } from './theme-main/theme-main.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeRoutes,
        SharedModule,
    ],
    declarations: [
        ThemeComponent
    ]
})
export class ThemeModule {
}
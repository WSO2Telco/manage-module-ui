/**
 * Created by rajithk on 7/25/17.
 */
import {NgModule} from '@angular/core';
import {BlackListRoutes} from './blacklist.routes';
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';

@NgModule({

    imports: [
        BlackListRoutes
    ],

    declarations: [
        BlacklistMainComponent
    ]

})

export class BlackListModule {

}

import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/common-data-models';
import {AppCommonService} from '../../services/app-common.service';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    private selectedMenu: MenuItem;
    private isExpand = false;

    private menuSource: MenuItem[] = [
        {id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home'},
        {id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment'},
        {id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps'},
        {id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions'},
        {id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history'},
        {id: 6, route: '/rate', name: 'Rate', position: 'parent', iconName: 'assessment'},
        {id: 7, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel'},
        {id: 8, route: '/blacklist/apiblacklist', name: 'Api Blacklist', position: 'parent', iconName: 'phonelink_erase'},
        {id: 9, route: '/blacklist/spblacklist', name: 'Sp Blacklist', position: 'parent', iconName: 'phonelink_erase'},
        {id: 10, route: '/whitelist', name: 'Whitelist', position: 'parent', iconName: 'phonelink_ring'}

    ];

    constructor(private _appCommonService: AppCommonService,
                private _router: Router) {
    }

    ngOnInit() {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd){
                this.selectedMenu = this.menuSource.filter((menu) => menu.route == event.url)[0];
            }
        });

        this.selectedMenu = this.menuSource[0];
        this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
    }

    onClick(menu: any) {
        this.selectedMenu = menu;
        this._router.navigate([menu.route]);
    }
}

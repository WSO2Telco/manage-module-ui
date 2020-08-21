import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/common-data-models';
import {AppCommonService} from '../../services/app-common.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    private selectedMenu: MenuItem;
    private isExpand = false;
    private isBilling: boolean;

    private menuSource: MenuItem[] = [
        { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home', pattern: '*' },
        { id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment', pattern: 'application,subscription' },
        { id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps', pattern: 'application:visible' },
        { id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions', pattern: 'subscription:visible' },
        { id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history', pattern: 'workFlowHistory:visible' },
        { id: 6, route: '/', name: 'Rate', position: 'parent has-child', iconName: 'blur_linear', pattern: 'rate:view,rate:add,rate:assign' },
        { id: 7, route: '/rate/view', name: 'View Rate', position: 'child', iconName: 'search', pattern: 'rate:view' },
        { id: 8, route: '/rate/create', name: 'Create Rate', position: 'child', iconName: 'assignment', pattern: 'rate:add' },
        { id: 9, route: '/rate/assign', name: 'Assign Rate', position: 'child', iconName: 'assignment_turned_in', pattern: 'rate:assign' },
        { id: 10, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel', pattern: 'quota:visible' },
        { id: 11, route: '/', name: 'Blacklist', position: 'parent has-child', iconName: 'phonelink_erase', pattern: 'apiBlacklist,spBlackList' },
        { id: 12, route: '/blacklist/apiwise', name: 'API Wise Blacklist', position: 'child', iconName: 'developer_board', pattern: 'apiBlacklist' },
        { id: 13, route: '/blacklist/spwise', name: 'Sp Wise Blacklist', position: 'child', iconName: 'dns', pattern: 'spBlackList' },
        { id: 14, route: '/whitelist', name: 'Whitelist', position: 'parent', iconName: 'phonelink_ring', pattern: 'whiteList' },
        { id: 15, route: '/edit-subscription-rate', name: 'Edit Subscription(Rate)', position: 'parent', iconName: 'assignment', pattern: 'edit-subscription-rate' },
        { id: 16, route: '/edit-tiers', name: 'Edit Tiers', position: 'parent', iconName: 'assignment', pattern: 'edit-tiers:visible' },
        { id: 17, route: '/response-filter', name: 'Filter Response', position: 'parent', iconName: 'blur_linear', pattern: 'response-filter' }
    ];


    constructor(private _appCommonService: AppCommonService,
        private _router: Router) {
    }

    ngOnInit() {

        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.selectedMenu = this.menuSource.filter((menu) => menu.route == event.url)[0];
            }
        });

        this.selectedMenu = this.menuSource[0];

        this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
        // this.authService.startChecking();
    }

    onClick(menu: any) {
        this.selectedMenu = menu;
        this._router.navigate([menu.route]);
    }
}

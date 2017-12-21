import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/common-data-models';
import { AppCommonService } from '../../services/app-common.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    private selectedMenu: MenuItem;
    private isExpand = false;
    private isAdmin: boolean;
    private isBilling: boolean;

    private menuSource: MenuItem[] = [
        { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home', pattern: '*' },
        { id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment', pattern: 'application,subscription' },
        { id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps', pattern: 'application' },
        { id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions', pattern: 'subscription' },
        { id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history', pattern: 'workFlowHistory' },
        { id: 6, route: '/', name: 'Rate', position: 'parent has-child', iconName: 'blur_linear', pattern: 'rate' },
        { id: 7, route: '/rate/view', name: 'View Rate', position: 'child', iconName: 'search', pattern: 'rate:view' },
        { id: 8, route: '/rate/create', name: 'Create Rate', position: 'child', iconName: 'assignment', pattern: 'rate:add' },
        { id: 9, route: '/rate/assign', name: 'Assign Rate', position: 'child', iconName: 'assignment_turned_in', pattern: 'rate:assign' },
        { id: 10, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel', pattern: 'quota' },
        { id: 11, route: '/', name: 'Blacklist', position: 'parent has-child', iconName: 'phonelink_erase', pattern: 'apiBlacklist,spBlackList' },
        { id: 12, route: '/blacklist/apiwise', name: 'API Wise Blacklist', position: 'child', iconName: 'developer_board', pattern: 'apiBlacklist' },
        { id: 13, route: '/blacklist/spwise', name: 'Sp Wise Blacklist', position: 'child', iconName: 'dns', pattern: 'spBlackList' },
        { id: 14, route: '/whitelist', name: 'Whitelist', position: 'parent', iconName: 'phonelink_ring', pattern: 'whiteList' }
    ];

  /*   private menuSourceIfOp: MenuItem[] = [
        { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home' },
        { id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment' },
        { id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps' },
        { id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions' },
        { id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history' },
        { id: 6, route: '/', name: 'Rate', position: 'parent has-child', iconName: 'blur_linear' },
        { id: 7, route: '/rate/view', name: 'View Rate', position: 'child', iconName: 'search' },
        { id: 8, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel' },

    ];

    private menuSourceIfAdminBillingDissable: MenuItem[] = [
        { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home' },
        { id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment' },
        { id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps' },
        { id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions' },
        { id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history' },
        { id: 6, route: '/', name: 'Blacklist', position: 'parent has-child', iconName: 'phonelink_erase' },
        { id: 7, route: '/blacklist/apiwise', name: 'API Wise Blacklist', position: 'child', iconName: 'developer_board' },
        { id: 8, route: '/blacklist/spwise', name: 'Sp Wise Blacklist', position: 'child', iconName: 'dns' },
        { id: 9, route: '/whitelist', name: 'Whitelist', position: 'parent', iconName: 'phonelink_ring' }
    ];

    private menuSourceIfOpBillingDissable: MenuItem[] = [
        { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home' },
        { id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment' },
        { id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps' },
        { id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions' },
        { id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history' },
    ]; */

    constructor(private _appCommonService: AppCommonService,
        private _router: Router,
        private authService: AuthenticationService) {
    }

    ngOnInit() {

        let loginInfo = this.authService.loginUserInfo.getValue();

/*         if (loginInfo.isAdmin) {
            this.isAdmin = true;
            if (loginInfo.billing) {
                this.isBilling = true;
                this._router.events.subscribe((event) => {
                    if (event instanceof NavigationEnd) {
                        this.selectedMenu = this.menuSource.filter((menu) => menu.route == event.url)[0];
                    }
                });

                this.selectedMenu = this.menuSource[0];
            } else {
                this.isBilling = false;
                this._router.events.subscribe((event) => {
                    if (event instanceof NavigationEnd) {
                        this.selectedMenu = this.menuSourceIfAdminBillingDissable.filter((menu) => menu.route == event.url)[0];
                    }
                });

                this.selectedMenu = this.menuSourceIfAdminBillingDissable[0];
            }

        } else {
            this.isAdmin = false;
            if (loginInfo.billing) {
                this.isBilling = true;
                this._router.events.subscribe((event) => {
                    if (event instanceof NavigationEnd) {
                        this.selectedMenu = this.menuSourceIfOp.filter((menu) => menu.route == event.url)[0];
                    }
                });

                this.selectedMenu = this.menuSourceIfOp[0];
            } else {
                this.isBilling = false;
                this._router.events.subscribe((event) => {
                    if (event instanceof NavigationEnd) {
                        this.selectedMenu = this.menuSourceIfOpBillingDissable.filter((menu) => menu.route == event.url)[0];
                    }
                });

                this.selectedMenu = this.menuSourceIfOpBillingDissable[0];
            }
        } */
        
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

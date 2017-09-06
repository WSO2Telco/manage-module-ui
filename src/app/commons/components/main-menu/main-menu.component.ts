import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/common-data-models';
import {AppCommonService} from '../../services/app-common.service';
import {Router, NavigationEnd} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    private selectedMenu: MenuItem;
    private isExpand = false;
    private isAdmin: boolean;

    private menuSourceIfAdmin: MenuItem[] = [
        {id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home'},
        {id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment'},
        {id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps'},
        {id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions'},
        {id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history'},
        {id: 6, route: '/', name: 'Rate', position: 'parent has-child', iconName: 'blur_linear'},
        {id: 7, route: '/rate/view', name: 'View Rate', position: 'child', iconName: 'pageview'},
        {id: 8, route: '/rate/create', name: 'Create Rate', position: 'child', iconName: 'assignment'},
        {id: 9, route: '/rate/assign', name: 'Assign Rate', position: 'child', iconName: 'assignment_turned_in'},
        {id: 10, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel'},
        {id: 11, route: '/', name: 'Blacklist', position: 'parent has-child', iconName: 'phonelink_erase'},
        {id: 12, route: '/blacklist/apiwise', name: 'API Wise Blacklist', position: 'child', iconName: 'developer_board'},
        {id: 13, route: '/blacklist/spwise', name: 'Sp Wise Blacklist', position: 'child', iconName: 'dns'},
        {id: 14, route: '/whitelist', name: 'Whitelist', position: 'parent', iconName: 'phonelink_ring'}
    ];

    private menuSourceIfOp: MenuItem[] = [
        {id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home'},
        {id: 2, route: '/', name: 'Workflow', position: 'parent has-child', iconName: 'assignment'},
        {id: 3, route: '/approvals/applications', position: 'child', name: 'Approve Applications', iconName: 'apps'},
        {id: 4, route: '/approvals/subscriptions', position: 'child', name: 'Approve Subscriptions', iconName: 'subscriptions'},
        {id: 5, route: '/history', name: 'History', position: 'child', iconName: 'history'},
        {id: 6, route: '/', name: 'Rate', position: 'parent has-child', iconName: 'blur_linear'},
        {id: 7, route: '/rate/create', name: 'View Rate', position: 'child', iconName: 'assignment'},
        {id: 8, route: '/quotacap', name: 'Quota Cap', position: 'parent', iconName: 'card_travel'},

    ];

    constructor(private _appCommonService: AppCommonService,
                private _router: Router,
                private authService: AuthenticationService) {
    }

    ngOnInit() {

        let loginInfo = this.authService.loginUserInfo.getValue();

        if (loginInfo.isAdmin) {
            this.isAdmin = true;
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.selectedMenu = this.menuSourceIfAdmin.filter((menu) => menu.route == event.url)[0];
                }
            });

            this.selectedMenu = this.menuSourceIfAdmin[0];
        } else {
            this.isAdmin = false;
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.selectedMenu = this.menuSourceIfOp.filter((menu) => menu.route == event.url)[0];
                }
            });

            this.selectedMenu = this.menuSourceIfOp[0];
        }

        this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
    }

    onClick(menu: any) {
        this.selectedMenu = menu;
        this._router.navigate([menu.route]);
    }
}

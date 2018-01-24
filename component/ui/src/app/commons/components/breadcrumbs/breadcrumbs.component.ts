import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { ApprovalRemoteDataService } from '../../../data-providers/approval-remote-data.service';
import { MessageService } from "../../services/message.service";

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

    private activeView: any;
    private approvals: boolean;

    constructor(private _router: Router,
        private approval: ApprovalRemoteDataService,
        private message: MessageService) {
    }

    ngOnInit() {
        this.approvals = false;
        this._router.events
            .filter((event: any) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                this.activeView = event.url.replace('/', '').replace(/\?.*/, '').split('/');
                if (this.activeView.length == 2) {
                    if (this.activeView[0] == 'approvals') {
                        this.approvals = true
                    } else {
                        this.approvals = false;
                    }
                } else {
                    this.approvals = false;
                }
            });
    }

    onReload() {
        this.approval.getAllTasks();
        this.message.info('Dashboard Data Refreshed');
    }

}

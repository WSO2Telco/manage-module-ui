import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/common-data-models';
import {AppCommonService} from "../../services/app-common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  private selectedMenu: MenuItem;
  private isExpand: boolean = false;

  private menuSource: MenuItem[] = [
    {id: 1, route: 'home', name: 'Home', iconName: 'glyphicon-home'},
    {id: 2, route: '/approvals/applications', name: 'Approve Applications', iconName: 'glyphicon-gift'},
    {id: 3, route: '/approvals/subscriptions', name: 'Approve Subscriptions', iconName: 'glyphicon-hand-right'},
    {id: 4, route: 'history', name: 'Approval History', iconName: 'glyphicon-hourglass'}
  ];

  constructor(private _appCommonService: AppCommonService,
              private _router: Router) {
  }

  ngOnInit() {
   // alert(this._router.routerState);
    this.selectedMenu = this.menuSource[0];
    this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
  }

  onClick(menu: any) {
    this.selectedMenu = menu;
    this._router.navigate([menu.route]);
  }
}

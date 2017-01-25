import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  template: `
      {{activeView || 'HOME'}}
  `,
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  private activeView:any;

  constructor(private _router:Router) {}

  ngOnInit() {
    this._router.events
      .filter((event:any)=> event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd)=>{
        this.activeView = event.url;
      });
  }

}

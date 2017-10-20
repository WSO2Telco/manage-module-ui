import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-approval-whitelist-blacklist',
  templateUrl: '/approval-whitlist-blacklist.component.html',
  styleUrls: ['./approval-whitlist-blacklist.component.scss']
})
export class ApprovalWhitelistBlacklistCountComponent implements OnInit {

  @Input()
  private totalCount:number;

  @Input()
  private myCount:number;

  @Input()
  private groupCount:number;

  @Input()
  private name:string;

  @Input()
  private iconClass:string;

  constructor() { }

  ngOnInit() {
  }

}

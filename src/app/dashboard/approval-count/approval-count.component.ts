import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-approval-count',
  templateUrl: './approval-count.component.html',
  styleUrls: ['./approval-count.component.scss']
})
export class ApprovalCountComponent implements OnInit {

  @Input()
  private count:number;

  @Input()
  private name:string;

  @Input()
  private backColor:string;

  @Input()
  private iconClass:string;

  constructor() { }

  ngOnInit() {
  }

}

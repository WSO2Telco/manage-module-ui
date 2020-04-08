import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-approval-count',
  templateUrl: './approval-count.component.html',
  styleUrls: ['./approval-count.component.scss']
})
export class ApprovalCountComponent implements OnInit {

  @Input() totalCount:number;

  @Input() myCount:number;

  @Input() groupCount:number;

  @Input() name:string;

  @Input() iconClass:string;

  constructor() { }

  ngOnInit() {
  }

}

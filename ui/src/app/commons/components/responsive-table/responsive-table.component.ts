import {Component, OnInit, Input, Output} from '@angular/core';
import {ReportingRemoteDataService} from '../../../data-providers/reporting-remote-data.service';
import {ApplicationHistory} from '../../models/reporing-data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

  @Input()
  private tableHeader:string;

  @Input()
  private dataSource:any[];

  @Input()
  private fieldSet:string[];

  @Output()
  private   applicationDetail: ApplicationHistory;

  private operatorApprovals: ApplicationHistory[];
  private subscriptions: ApplicationHistory[];

  constructor(private router: Router) { }

  ngOnInit() {
      this.dataSource = [];
      this.applicationDetail = null;
      this.operatorApprovals = [];
      this.subscriptions = [];
  }

  onNavApplication (id: number) {
      this.router.navigateByUrl('/history/application/' + id);
  }
}

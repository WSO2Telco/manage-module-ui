import {Component, Input, OnInit, Output} from '@angular/core';
import {ReportingRemoteDataService} from '../../data-providers/reporting-remote-data.service';
import {ApplicationHistory} from '../../commons/models/reporing-data-models';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../commons/services/message.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {

    @Input() private applicationDetail: ApplicationHistory;
    private subscriptions: ApplicationHistory[];
    private operatorApprovals: ApplicationHistory[];
    private id: number;
    private name:string;
    private show: boolean;
    private depType : string = "internal_gateway_type2";

  constructor(private reportingService: ReportingRemoteDataService,
    private route: ActivatedRoute,  private message: MessageService) {}

  ngOnInit() {
      this.applicationDetail = null;
      this.subscriptions = [];
      this.operatorApprovals = [];
      this.show  = false;

      this.reportingService.getDeploymentType().then((result)=>{
          this.depType = result.depType;
      }).catch((err)=> {
          console.log(err);
      });

      this.route.params.subscribe(params => {
          this.id = params['id'];
          this.name = params['name'];
          this.onApplication(this.id);
      });
  }

    onApplication (id: number) {
        this.reportingService.getApplicationDetail(id, (response, status) => {
            if (status) {
                this.applicationDetail = response;
                if (response.operatorApprovals != null) {
                    this.operatorApprovals = response.operatorApprovals;
                    this.subscriptions = response.subscriptions;
                    this.show = true;
                } else {
                    this.show = false;
                }
            } else {
                this.message.error('Error Loading Application History Data');
            }
        });
    }
}

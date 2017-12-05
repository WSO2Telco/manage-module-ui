import {Component, OnInit} from '@angular/core';
import {DashboardRemoteDataService} from '../../data-providers/dashboard-remote-data.service';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-approval-history-graph',
    templateUrl: './approval-history-graph.component.html',
    styleUrls: ['./approval-history-graph.component.scss'],
})
export class ApprovalHistoryGraphComponent implements OnInit {

    public barChartOptionsSubscriptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        title: {
            display: true,
            text: 'Subscription Creations'
        }
    };

    public barChartOptionsApplications: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        title: {
            display: true,
            text: 'Application Creations'
        }
    };

    public chartType = 'bar';
    public barChartLegend = false;

    private appCreationHistoryDataSet: any[] = [{data: []}];
    private appCreationHistoryLabels: string[] = [];
    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(53,152,220,0.5)'
        }];

    private subscriptionHistoryDataSet: any[] = [{data: []}];
    private subscriptionHistoryLabels: string[] = [];

    constructor(private dashboardService: DashboardRemoteDataService,
                private message: MessageService) {
    }

    ngOnInit() {
        this.dashboardService.getApplicationCreationHistoryGraphData();
        this.dashboardService.getSubscriptionCreationHistoryGraphData();

        this.dashboardService.ApplicationCreationHistoryDataProvider.subscribe(
            (historyData: any) => {
                if (historyData && historyData.xaxisLabels) {
                    this.appCreationHistoryLabels.length = 0;
                    historyData.xaxisLabels.forEach((lbl, index) => {
                        this.appCreationHistoryLabels[index] = lbl;
                    });
                }

                if (historyData && historyData.graphData && historyData.graphData.length > 0) {
                    this.appCreationHistoryDataSet = historyData.graphData;
                }
            },
            (error) => {
                this.message.error(error.message);
            }
        );

        this.dashboardService.SubscriptionCreationHistoryDataProvider.subscribe(
            (historyData: any) => {
                if (historyData && historyData.xaxisLabels) {
                    this.subscriptionHistoryLabels.length = 0;
                    historyData.xaxisLabels.forEach((lbl, index) => {
                        this.subscriptionHistoryLabels[index] = lbl;
                    });
                }

                if (historyData && historyData.graphData && historyData.graphData.length > 0) {
                    this.subscriptionHistoryDataSet = historyData.graphData;
                }
            },
            (error) => {
                this.message.error(error.message);
            }
        );


    }

}
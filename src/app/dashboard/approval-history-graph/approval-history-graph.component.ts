import {Component, OnInit, Input} from '@angular/core';
import {DashboardRemoteDataService} from "../../data-providers/dashboard-remote-data.service";
import {HistoryBarGraphData} from "../../commons/models/dashboard-data-models";
import {MessageService} from "../../commons/services/message.service";

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

    public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = false;


    public barChartDataSubscriptions: any[] = [
        {data: [65, 59, 80, 81, 85, 55, 79], label: 'All Applications'},
        {data: [28, 48, 40, 19, 27, 27, 16], label: 'My Applications'}
    ];

    private historyCreationDataSet:any[] =  [{ data: [] },{ data: [] }];
    private historyCreationLabels:string[] = [];

    constructor(private dashboardService: DashboardRemoteDataService,
                private message: MessageService) {
    }

    ngOnInit() {
        this.dashboardService.getCreationHistoryGraphData();

        this.dashboardService.CreationHistoryGraphDataProvider.subscribe(
            (historyData:any) => {
                if(historyData && historyData.xAxisLabels){
                    this.historyCreationLabels.length = 0;
                    historyData.xAxisLabels.forEach((lbl,index)=>{
                        this.historyCreationLabels[index] = lbl;
                    });
                }

                if(historyData && historyData.graphData && historyData.graphData.length > 0){
                    this.historyCreationDataSet = historyData.graphData;

                }
            },
            (error) => {
                this.message.error(error);
            }
        );


    }

}

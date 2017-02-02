export class ApprovalHistoryFilter{
    fromDate:string='';
    toDate:string='';
    subscriber:string='';
    api:string = '';
    applicationId:number = 0;
    operator:string = '';
    offset: number =0;
    count: number =10;
}

export class ApprovalHistory{
    applicationId : number = 0;
    applicationName:string;
    applicationDescription:string;
    status:string;
    approvedOn:String;
}

export class ApprovalHistoryDataset{
    recordsCol:ApprovalHistory[] = [];
    noOfRecords:number;
}
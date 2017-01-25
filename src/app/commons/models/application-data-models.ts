export class DateTimeInfo{
  date:string;
  time:string;
  offset: string;
  unformatted:string;
}

export class ApplicationTask {
  id: number;
  assignee: string;
  createTime: DateTimeInfo;
  taskDescription: string;
  applicationId: number;
  applicationName: string;
  applicationDescription: string;
  perators: string;
  tier: string;
  allTiers: string[];
  userName: string;
}

type PROCESS_TYPE = 'APPLICATION_CREATION' | 'SUBSCRIPTION_CREATION';

export class ApplicationTaskSearchParam{
  candidateGroups :string;
  processType : PROCESS_TYPE;
  assignee:string;
  size:number
}

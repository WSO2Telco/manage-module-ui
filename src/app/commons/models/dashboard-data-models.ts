export class DashboardData {
  appCreationsForUser: number;
  appCreationsForGroup: number;
  totalAppCreations: number;
  subCreationsForUser: number;
  subCreationsForGroup: number;
  totalSubCreations: number;
}

export class DashboardDataRequestParam{
  candidateGroups :string;
  assignee:string;
}

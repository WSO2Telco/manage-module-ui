export class ApprovalHistoryFilter {
    fromDate: string = '';
    toDate: string = '';
    subscriber: string = '';
    api: string = '';
    applicationId: number = 0;
    operator: string = '';
    offset: number = 0;
    count: number = 10;
    filterString: string;
}

export class ApprovalRateFilter {
    fromDate: string = '';
    toDate: string = '';
    subscriber: string = '';
    api: string = '';
    applicationId: number = 0;
    operator: string = '';
    offset: number = 0;
    count: number = 10;
}

export class ApprovalHistory {
    applicationId: number = 0;
    applicationName: string;
    applicationDescription: string;
    status: string;
    approvedOn: String;
}

export class ApprovalHistoryDataset {
    recordsCol: ApprovalHistory[] = [];
    noOfRecords: number;
}

export class AppHistory {
    applicationId: number;
    applicationName: string;
    applicationDescription: string;
    status: string;
    approvedOn: string;
    createdBy: string;
}

export class AppHistoryResponse {
    applications: AppHistory [] = [];
    total: number;
    start: number;
    size: number;
}

export class Subscriber {
    name: string;
    id: number;
    tenantId: number;
}

export class Application {
    description: string;
    groupId: number;
    id: number;
    isBlackListed: boolean;
    keys: Array<any>;
    name: string;
    oauthApps: any;
    status: string;
    subscribedAPIs: Array<any>;
    subscriber: Subscriber;
    tier: string;
    uuid: string;
}

export class ApplicationHistory {
    name: string;
    status: string;
    operatorApprovals: OperatorApprovals;
    subscriptions: Subscriptions;
}

export class OperatorApprovals {
    operatorName: string;
    approvalStatus: string;
}

export class Subscriptions {
    name: string;
    version: string;
    tier: string;
    adminApprovalStatus: string;
    operatorApprovals: OperatorApprovals;
    lastUpdated: string;
}

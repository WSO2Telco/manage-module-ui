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

export class SubscriptionHistoryFilter {
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

export class SubscriptionsHistory {
    subscriptionId: number;
    tier: string;
    apiId: number;
    apiName: string;
    applicationId: number;
    applicationName: string;
    subscriptionStatus: string;
    createdBy: string;
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
    applications: AppHistory[] = [];
    total: number;
    start: number;
    size: number;
}

export class SubscriptionHistoryResponse {
    subscriptions: SubscriptionsHistory[] = [];
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

export class APIResponsePath {
    payload: contexPathArr[];
    status: string;
    additionalProperties: any;
}

export class contexPathArr {
    httpVerb: string;
    resourcePath: string;
    httpPathCom: string;
}

//Response Filter Model

export class AddNewResponseParam {
    sp: string;
    application: string;
    api: string;
    operation: string;
    fields: any;

}

export class OperatorApprovals {
    operatorName: string;
    approvalStatus: string;
}

export class Subscriptions {
    name: string;
    id: string;
    version: string;
    tier: string;
    approvalStatus: string;
    operatorName: string;
    lastUpdated: string;
}

export class ApprovedApiOperationRate {
    apiOperation: string;
    rateDefname: string;
    applicationId: number;
    apiOperationId: number;
    rateDefId: number;
    createBy: string;
}
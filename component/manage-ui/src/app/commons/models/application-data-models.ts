import {TableDataType} from './common-data-models';
export class DateTimeInfo {
    date: string;
    time: string;
    offset: string;
    unformatted: string;
}

export class ApplicationTask {
    id: number;
    assignee: string;
    apiName: string;
    apiVersion: string;
    createTime: DateTimeInfo;
    taskDescription: string;
    applicationId: number;
    applicationName: string;
    applicationDescription: string;
    operators: string;
    tier: string;
    creditPlan: string;
    allTiers: string[];
    userName: string;
    isModified: boolean;
    status: string;
    comment: string;
    relevantRates: RelevantRates[];
    selectedRate: string;
    subscriber: string;

    toString() {
        return '' + this.id + ',' + this.applicationName + ',' + this.applicationDescription + ',' + this.comment;
    }
}

export class RelevantRates {
    apiOperation: string;
    rateDefinitions: OperationRateDefinitions[];
}

export class OperationRateDefinitions{
    rateDefName: string;
    rateDefId: number;
    rateDefDescription: string;
}

export class MetaData {
    order: string;
    size: number;
    sort: string;
    start: number;
    total: number;
}

export class PaginationInfo{
    pageNo: number;
    recordsPerPage : number;

    constructor(pageNo: number, recordsPerPage: number) {
        this.pageNo = pageNo;
        this.recordsPerPage = recordsPerPage;
    }
}

export class ApplicationTaskResult {
    applicationTasks: ApplicationTask[];
    metadata: MetaData;
}

export class ApplicationTaskResults {
    myApplicationTasks: ApplicationTaskResult;
    allApplicationTasks: ApplicationTaskResult;

}

type PROCESS_TYPE = 'APPLICATION_CREATION' | 'SUBSCRIPTION_CREATION';

export class ApplicationTaskSearchParam {
    candidateGroups: string;
    processType: PROCESS_TYPE;
    assignee: string;
    isAdmin: boolean;
    operator: string;
    start: number;
    size: number;
}

export class AssignApplicationTaskParam {
    taskId: number;
    assignee: string;
}

export class ApproveApplicationCreationTaskParam {
    taskId: number;
    taskType: 'application';
    user: string;
    selectedTier: string;
    status: 'APPROVED' | 'REJECTED';
    description: string;
    role: boolean;
    creditPlan: string;

    toString() {
        return this.taskId + ', ' + this.description + ', ' + this.selectedTier + ', ' + this.status;
    }
}

export class ApproveSubscriptionCreationTaskParam {
    taskId: number;
    taskType: 'subscription';
    user: string;
    selectedTier: string;
    status: 'APPROVED' | 'REJECTED';
    description: string;
    role: boolean;
    selectedRate: string;
}

export class ApprovalEvent {
    task: ApplicationTask;
    dataType: TableDataType;
    status: 'APPROVED' | 'REJECTED';

    constructor(task: ApplicationTask, dataType: TableDataType, status?) {
        this.task = task;
        this.dataType = dataType;
        this.status = status;
    }
}

export class ApplicationTaskFilter {
    ids: number[] = [];
    appNames: string[] = [];
    apiNames: string[] = [];
    users: string[] = [];
    subscribers: string[] = [];
    filerString: string;
    fromDate: string;
    toDate: string;
    dataType: TableDataType;
    startRecordNumber= 0;
    numberOfRecordsPerPage= 0;

    constructor(dataType: TableDataType, recPerPage?: number) {
        this.dataType = dataType;
        this.numberOfRecordsPerPage = recPerPage;
    }
}


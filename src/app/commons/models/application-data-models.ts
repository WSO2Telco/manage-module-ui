export class DateTimeInfo {
    date: string;
    time: string;
    offset: string;
    unformatted: string;
}

export class ApplicationTask {
    id: number;
    assignee: string;
    createTime: DateTimeInfo;
    taskDescription: string;
    applicationId: number;
    applicationName: string;
    applicationDescription: string;
    operators: string;
    tier: string;
    allTiers: string[];
    userName: string;
    isModified: boolean;
    status : string;
}

type PROCESS_TYPE = 'APPLICATION_CREATION' | 'SUBSCRIPTION_CREATION';

export class ApplicationTaskSearchParam {
    candidateGroups: string;
    processType: PROCESS_TYPE;
    assignee: string;
    size: number
}

export class AssignApplicationTaskParam {
    taskId: number;
    assignee: string;
}

export class ApproveApplicationCreationTaskParam{
    taskId : number;
    user : string;
    selectedTier : string;
    status : 'APPROVED' | 'REJECTED';
    description : string;
}


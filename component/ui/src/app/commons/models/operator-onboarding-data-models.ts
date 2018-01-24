export interface Operator {
    id: number;
    type: string;
    countryName: string;
    countryCode: string;
    mcc: number;
    mnc: number;
    brand: string;
    operator: string;
    status: string;
    bands: string;
    notes: string;
}

export interface OperatorEndpoint {
    id: number;
    operatorId: number;
    api: any;
    endpointUrl: string;
}

export interface AddOperatorEndpointParam{
    operatorId: number;
    api: any;
    endpointUrl: string;
}

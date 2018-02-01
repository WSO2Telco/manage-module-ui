export class Operator {
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
    description: string;
}

export class OperatorEndpoint {
    id: number;
    operatorMnc: number;
    api: any;
    endpointUrl: string;
}

export class GetOperatorEndpointParam {
    constructor(
        public operatorMnc: number,
        public endpointId: number) { }
}

export interface TokenData {
    id:number;
    name: string;
    validity: any;
    date: string;
    url: string;
    type: string;
}

export interface TokenDataEndpointParam {
    name: string;
    validity: any;
    date: string;
    url: string;
    type: string;
}

export class AddOperatorEndpointParam {
    endpointId?: number;
    operatorMnc: number;
    api: any;
    endpointUrl: string;
}

export interface Country {
    countryName: string;
    countryCode: string;
    mcc: number;
}

export interface CountryOperator {
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



export class Brand {
    constructor(public brandName: string, public mcc: number) { }
}
import * as moment from "moment";
import _date = moment.unitOfTime._date;

export class MenuItem {
    id: number;
    route: string;
    name: string;
    position: string;
    iconName: string;
    pattern: string; // EX: permission1:add,permission2:add

}

export class TableDataType {
    dataCategory: 'USER' | 'GROUP';
    dataType: 'APPLICATION' | 'SUBSCRIPTION';


    constructor(dataCategory, dataType) {
        this.dataCategory = dataCategory;
        this.dataType = dataType;
    }
}


export class User {
    userName: string;
    password: string;
}

export class LoginResponse {
    success: boolean;
    message: string;
    isAdmin: boolean;
    operator: string;
    userName: string;
    operatorName: string;
    billing: boolean;
    start: number;
    token: string;
    roles: string[];
    permissions: any;
    theme:string;
}

export class SubCategory {
    category: string;
    subcategory: string;
    tariff: string;
}

export class ServerResponse {
    success: boolean;
    messsage: string;
}

export class FieldSet {
    columnName: string;
    fieldName?: string;
}

export class Currency {
    currencyId: number;
    currencyCode: string;
    currencyDescription: string;
    createdBy: string;
}

export class ApiList {
    user: string;
    api: string;
}

export class Application {
    id: string;
    name: string;
    tier:string;
    approvalStatus:string;
    lastUpdate:string;

}

export class Api {
    id: string;
    name: string;
    provider: string;
    version: string;
}

export class Tariff {
    tariffId: number;
    tariffName: string;
    tariffDescription: string;
    tariffDefaultVal: number;
    tariffMaxCount: number;
    tariffExcessRate: number;
    tariffDefRate: number;
    tariffSPCommission: number;
    tariffAdsCommission: number;
    tariffOpcoCommission: number;
    tariffSurChargeval: number;
    tariffSurChargeAds: number;
    tariffSurChargeOpco: number;
    createdBy: string;
}

export class RateType {
    rateTypeId: number;
    rateTypeCode: string;
    rateTypeDesc: string;
}

export class Rate {
    rateDefinition: RateDefinition;
    rateCategories: RateCategory[];
    rateTaxes: RateTax[];
    createdBy: string;
}


export class RateDefinition {
    rateDefId: number;
    rateDefName: string;
    rateDefDescription: string;
    rateDefDefault: number;
    currency: Currency;
    rateType: RateType;
    rateDefCategoryBase: number;
    tariff: Tariff;
    rateCategories: RateCategory[];
}

export class AssignRateList {
    rateDefId: number;
    rateDefName: string;
    rateDefDescription: string;
    rateDefDefault: number;
    currency: Currency;
    rateType: RateType;
    rateDefCategoryBase: number;
    tariff: Tariff;
    rateCategories: RateCategory[];
    apioperationid:number;
}

export class Tax {
    taxId: number;
}

export class OperatorList {
    id: string;
    operatorName: string;
}

export class RateTax {
    tax: Tax;
    taxId: number;
    taxCode: string;
    taxName: string;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
    taxesValidityDates:TaxValidityDates[]
    level: number;
}

export class TaxValidityDates {
    taxValidityactdate: string;
    taxValiditydisdate: string;
    taxValidityval: number;
}


export class Category {
    categoryId: number;
    categoryName: string;
    categoryCode: string;
    categoryDescription: string;
    createdBy: string;
}

export class RateCategory {
    category: Category;
    subCategory: Category;
    tariff: Tariff;
}

export class Mapping {
    category: string;
    subcategory: string;
    tariff: string;
}

export class BlackListNumbers {
    id: string;
    name: string;
}

export class QuotaList {
    quotaLimit: string;
    fromDate: string;
    toDate: string;
}

export class Operator {
    operatorId: number;
    operatorName: string;
    operatorDescription: string;
}

export class APIOperation {
    apiOperationId: number;
    apiOperation: string;
    apiOperationCode: string;
}

export class AssignRates {
    operator: Operator;
    apiOperation: APIOperation;
    rateDefinition: RateDefinition;
    createdBy: string;
}

export class Configuration {
    host: string;
}

export class API {
    apiId: number;
    apiName: string;
    apiDescription: string;
    createdBy: string;
}

export class RowSelectionParam {
    constructor(
        public fieldNameToMatch: string,
        public valesToCompare: any[]) { }
}

export class Payload {
    valid: string[];
    invalid: string[];
    validationRegex: string;
    prefixGroup: number;
    digitsGroup: number;
}

export class MsisdnValidation {
    payload: Payload;
    success: boolean;
    message: string;
}


export class UpdatedRate {

    apiVersion : string;
    operatorId : number;
    apiOperationId : number;
    applicationId : number;
    rateDefId : number;
    rateDefname : string;
    createBy : string;
    updateBy : string;
    comment : string;
}


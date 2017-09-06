import * as moment from "moment";
import _date = moment.unitOfTime._date;

export class MenuItem {
    id: number;
    route: string;
    name: string;
    position: string;
    iconName: string;

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
    isLoggedIn: boolean;
    roles: string[];
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
    rateTaxes: RateTax [];
    createdBy: string;
}


export class RateDefinition {
    rateDefName: string;
    rateDefDescription: string;
    rateDefDefault: number;
    currency: Currency;
    rateType: RateType;
    rateDefCategoryBase: number;
    tariff: Tariff;
}

export class Tax {
    taxId: number;
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
    api_operationid: number;
    api_operation: string;
}


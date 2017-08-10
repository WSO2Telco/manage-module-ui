export class MenuItem {
    id: number;
    route: string;
    name: string;
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
    tariffDesc: string;
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
}

export class RateType {
    rateTypeId: number;
    rateTypeCode: string;
    rateTypeDesc: string;
}


export class Rate {
    rateDefId: number;
    rateDefName: string;
    rateDefDesc: string;
    rateDefDefault: number;
    currency: Currency;
    rateType: RateType;
    rateDefCategoryBase: number;
    tariff: Tariff;
}

export class Category {
    categoryId: number;
    categoryName: string;
    categoryCode: string;
    categoryDesc: string;
}

export class RateCategory {
    rateDefinition: Rate;
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

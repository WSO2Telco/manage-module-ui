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
    userName: string;
    isLoggedIn: boolean;
    roles: string[];
}

export class SubCategory {
    category: string;
    subcategory: string;
    tariff: string;
}

export class Category {
    categoryName: string;
    categoryCode: string;
    categoryDesc: string;
}

export class RateCard {
    name: string;
    description: string;
    date: string;
    currency: string;
    rateType: string;
    tariff: string;
}

export class ServerResponse{
    success: boolean;
    messsage: string;
}

export class Currency {
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
    tariffName: string;
    tariffDesc: string;
    tariffDefaultVal: number;
    tariffMaxCount: number
    tariffExcessRate: number
    tariffDefRate: number;
    tariffSPCommission: number;
    tariffAdsCommission: number;
    tariffOpcoCommission: number;
    tariffSurChargeval: number;
    tariffSurChargeAds: number;
    tariffSurChargeOpco: number;
}
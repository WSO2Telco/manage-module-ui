export class MenuItem {
    id: number;
    route: string;
    name: string;
    iconName: string;
}

export class TableDataType {
    dataCategory: 'USER' | 'GROUP';
    dataType: 'APPLICATION' | 'SUBSCRIPTION';
}


export class User {
    userName: string;
    password: string;
}

export class LoginResponse{
    userName:string;
    isLoggedIn:boolean;
    roles : string[];
}



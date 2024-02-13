import { RoleEnum } from "../enums/role-enum";

export class User {
    id?: number;
    login?: string;
    password?: string;
    role: RoleEnum;

    constructor(){
        this.role = RoleEnum.ADMIN;
    }
}
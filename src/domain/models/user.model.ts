export class User {
    id?: number;
    login: string;
    password: string;

    constructor(){
        this.login = "";
        this.password = "";
    }
}
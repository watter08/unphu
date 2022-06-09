import { GeneralResponseInterface } from './ResponseModel'

export class AuthenticateInitialState {
    Loading : string;
    Loaded : string;
    Response : GeneralResponseInterface | any;
    
    constructor({Loading = "loading" , Loaded ="loaded", Response:GeneralResponseInterface = null}) {
        this.Loading = Loading;
        this.Loaded = Loaded;
        this.Response = Response;
    }
}


export interface AuthenticateInitialStateInterface {
    Loading : string;
    Loaded : string;
    Response : GeneralResponseInterface | any;
}


export class LoginInitialState {
    Loading : string;
    Loaded : string;
    Login : LoginModelInterface;
    
    constructor({Loading = "loading" , Loaded ="loaded", Login = new LoginModel({})}) {
        this.Loading = Loading;
        this.Loaded = Loaded;
        this.Login = Login;
    }
}

export interface LoginInitialStateInterface {
    Loading : string;
    Loaded : string;
    Login : LoginModelInterface;
    
}
export class LoginModel {
    MessageStatus : string;
    Loaded : string;
    Data: any[];

    constructor({MessageStatus = "" , Loaded = "" , Data = []}){
        this.MessageStatus = MessageStatus;
        this.Loaded = Loaded;
        this.Data = Data;
    }
}

export interface LoginModelInterface {
    MessageStatus : string;
    Loaded : string;
    Data: any[];
}

export interface UserLogInRequest{
    Usuario:string;
    Password:string
}



export class GeneralResponse {
    StatusCode: number;
    Message: string;
    Data: Object | any[];
    IsSuccess: boolean;

    constructor(StatusCode: number, Message: string, Data: Object | any, IsSuccess: boolean) {
        this.StatusCode = StatusCode;
        this.Message = Message;
        this.Data = Data;
        this.IsSuccess = IsSuccess;
    }
}

export interface GeneralResponseInterface {
    StatusCode: number;
    Message: string;
    Data: Object | any[];
    IsSuccess: boolean;
}
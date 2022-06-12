
export interface ErrorsInterface {
    Formulario : Object | any;
}

export interface InputComponentInterface {
    Label : string;
    Name : string;
    LabelMuted? : string;
    Value: string | number | boolean | any;
    PlaceHolder? : string;
    HtmlFor? : string;
    Type? : string;
    ControlId : string;
    TextId : string;
    OnClick? :Function | any;
    OnChange? :Function | any;
    OnEnter? :Function;
    Errors? :Object | any;
    IsDisable? :boolean | any;
    Min? : string | number | any;
    Max? :string | number | any;
    InPutClassName?:string;
}

export interface ITableComponent{
    HeaderCss? :string,
    TheadCss?:string;
    Title? :string,
    HasContainer? :boolean,
    Data? : any[],
    Columns? :any[],
}

export interface ISortInputTable {
    sortInput: string;
    Id: string;
    Data: any[];
    PageNumbers: number[];
    PrevPage:number;
    CurrentPage: number;
    PerPage: number;
    DataCount: number;
}
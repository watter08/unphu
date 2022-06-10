
export interface ErrorsInterface {
    Formulario : Object | any;
}

export interface InputComponentInterface {
    Label : string;
    Name : string;
    LabelMuted? : string;
    Value: string;
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
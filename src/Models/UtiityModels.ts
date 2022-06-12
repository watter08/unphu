
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



export interface IUserChart {
    masculino: number
    femenino: number
    noBinario: number
    ninAnteriores: number
    casados: number
    solteros: number
    unionLibre: number
    tienenHijos: number
    noTieneHijos: number
    mayorEdad: number
    menorEdad: number
}

export class UserChart {
    masculino: number;
    femenino: number;
    noBinario: number;
    ninAnteriores: number;
    casados: number;
    solteros: number;
    unionLibre: number;
    tienenHijos: number;
    noTieneHijos: number;
    mayorEdad: number;
    menorEdad: number;

    constructor({
        masculino = 0,
        femenino = 0,
        noBinario = 0,
        ninAnteriores = 0,
        casados = 0,
        solteros = 0,
        unionLibre = 0,
        tienenHijos = 0,
        noTieneHijos = 0,
        mayorEdad = 0,
        menorEdad = 0,
    }) {
        this.masculino = masculino;
        this.femenino = femenino;
        this.noBinario = noBinario;
        this.ninAnteriores = ninAnteriores;
        this.casados = casados;
        this.solteros = solteros;
        this.unionLibre = unionLibre;
        this.tienenHijos = tienenHijos;
        this.noTieneHijos = noTieneHijos;
        this.mayorEdad = mayorEdad;
        this.menorEdad = menorEdad;
    }
}

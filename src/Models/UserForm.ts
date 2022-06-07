export class UsersRequest {
    Nombres: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Cédula: string;
    Edad: number;
    Género: string;
    Dirección: Direcciones[];
    Teléfono: string;
    Correo: string;
    EstadoCivil: string;
    TienesHijos: boolean;
    FechaNacimiento: Date;

    constructor(
        Nombres: string,
        PrimerApellido: string,
        SegundoApellido: string,
        Cédula: string,
        Edad: number,
        Género: string,
        Dirección: Direcciones[],
        Teléfono: string,
        Correo: string,
        EstadoCivil: string,
        TienesHijos: boolean,
        FechaNacimiento: Date,
    ) {
        this.Nombres = Nombres;
        this.PrimerApellido = PrimerApellido;
        this.SegundoApellido = SegundoApellido;
        this.Cédula = Cédula;
        this.Edad = Edad;
        this.Género = Género;
        this.Dirección = Dirección;
        this.Teléfono = Teléfono;
        this.Correo = Correo;
        this.EstadoCivil = EstadoCivil;
        this.TienesHijos = TienesHijos;
        this.FechaNacimiento = FechaNacimiento;
    }
}



export class Direcciones {
    Calle: string;
    Sector: string;
    Municipio: string;
    NumeroCasa: string;

    constructor(Calle: string, Sector: string, Municipio: string, NumeroCasa: string) {
        this.Calle = Calle;
        this.Sector = Sector;
        this.Municipio = Municipio;
        this.NumeroCasa = NumeroCasa;
    }
}


export interface UsersRequest {
    Nombres: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Cédula: string;
    Edad: number;
    Género: string;
    Dirección: Direcciones[];
    Teléfono: string;
    Correo: string;
    EstadoCivil: string;
    TienesHijos: boolean;
    FechaNacimiento: Date;

}


export interface Direcciones {
    Calle: string;
    Sector: string;
    Municipio: string;
    NumeroCasa: string;
}
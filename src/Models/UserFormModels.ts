export class UsersRequest {
    Nombres: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Cedula: string;
    Edad: number;
    Genero: string;
    Direccion: Direcciones[];
    Telefono: string;
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
        this.Cedula = Cédula;
        this.Edad = Edad;
        this.Genero = Género;
        this.Direccion = Dirección;
        this.Telefono = Teléfono;
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

export interface IUserForm{
    Formulario:IUsersRequest;
    Ids:IUsersRequestIds;
}

export interface IUsersRequest {
    Nombres: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Cedula: string;
    Edad: number;
    Genero: string;
    Direccion: Direcciones[];
    Telefono: string;
    Correo: string;
    EstadoCivil: string;
    TienesHijos: boolean;
    FechaNacimiento: Date;

}
export interface IUsersRequestIds {
    Nombres: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Cedula: string;
    Edad: string;
    Genero: string;
    Direccion: string;
    Telefono: string;
    Correo: string;
    EstadoCivil: string;
    TienesHijos: string;
    FechaNacimiento: string;

}


export interface IDirecciones {
    Calle: string;
    Sector: string;
    Municipio: string;
    NumeroCasa: string;
}
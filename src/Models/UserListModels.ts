


export class UserListDto{
    Id:number;
    NombreCompleto:string;
    CorreoElectronico :string;
    Genero:string;

    constructor(Id:number, NombreCompleto:string, CorreoElectronico :string, Genero:string){
        this.Id = Id;
        this.NombreCompleto = NombreCompleto;
        this.CorreoElectronico = CorreoElectronico;
        this.Genero = Genero;
    }
}

export interface IUserListDTO{
    Id:number;
    NombreCompleto:string;
    CorreoElectronico :string;
    Genero:string;
}
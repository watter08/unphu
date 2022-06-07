


export class UserListDto{
    ID:string;
    NombreCompleto:string;
    Correo :string;
    Género:string;

    constructor(ID:string, NombreCompleto:string, Correo :string, Genero:string){
        this.ID = ID;
        this.NombreCompleto = NombreCompleto;
        this.Correo = Correo;
        this.Género = Genero;
    }
}

export interface UserListDto{
    ID:string;
    NombreCompleto:string;
    Correo :string;
    Género:string;
}
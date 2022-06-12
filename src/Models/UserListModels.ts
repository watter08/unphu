


export class UserListDto {
    id: number;
    nombreCompleto: string;
    correoElectronico: string;
    genero: string;

    constructor({ id = 0, nombreCompleto = '', correoElectronico = '', genero = '' }) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.correoElectronico = correoElectronico;
        this.genero = genero;
    }
}

export interface IUserListDTO {
    id: number;
    nombreCompleto: string;
    correoElectronico: string;
    genero: string;
}

export interface IUserListToDash {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    cedula: string;
    edad: number;
    genero: number;
    generoDescripcion: string;
    telefono: string;
    correoElectronico: string;
    estadoCivil: number;
    estadoCivilDescripcion: string;
    tienesHijos: boolean;
    fechaNacimiento: string;
    fechaCreacion: Date;
    tipoUsuario: number;
    tipoUsuarioDesciption: string;
    usuario: string;
    password: string;
    addresses: IDireccion;
}
export interface IDireccion {
    id: number;
    direccion: string;
}

export class UserListToDash {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    cedula: string;
    edad: number;
    genero: number;
    generoDescripcion: string;
    telefono: string;
    correoElectronico: string;
    estadoCivil: number;
    estadoCivilDescripcion: string;
    tienesHijos: boolean;
    fechaNacimiento: string;
    fechaCreacion: Date;
    tipoUsuario: number;
    tipoUsuarioDesciption: string;
    usuario: string;
    password: string;
    addresses: IDireccion | any;

    constructor({
        id = 0,
        nombre = '',
        primerApellido = '',
        segundoApellido = '',
        cedula="",
        edad = 0,
        genero = 0,
        generoDescripcion = '',
        telefono = '',
        correoElectronico = '',
        estadoCivil = 0,
        estadoCivilDescripcion = '',
        tienesHijos = false,
        fechaNacimiento = '',
        fechaCreacion = new Date(),
        tipoUsuario = 0,
        tipoUsuarioDesciption = '',
        usuario = '',
        password = '',
        addresses = []
    }) {
        this.id = id;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.cedula = cedula;
        this.edad = edad;
        this.genero = genero;
        this.generoDescripcion = generoDescripcion;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
        this.estadoCivil = estadoCivil;
        this.estadoCivilDescripcion = estadoCivilDescripcion;
        this.tienesHijos = tienesHijos;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaCreacion = fechaCreacion;
        this.tipoUsuario = tipoUsuario;
        this.tipoUsuarioDesciption = tipoUsuarioDesciption;
        this.usuario = usuario;
        this.password = password;
        this.addresses = addresses;
    }
}
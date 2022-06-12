import { BGWaveComponent } from '../Components/';
import { Card, Button, Container, Row } from 'react-bootstrap'
import { LoaderPacmanComponent, InputComponent } from "../Components";
import { useForm } from "../Hooks";
import { GetUuId, IsValidDni, isValidPhone, isValidEmail, IsAnAdult } from "../Libs/Utility";
import { IUserForm } from '../Models/UserFormModels'


const UsersFormComponent = () => {

   


    const InitialState: IUserForm = {
        Formulario: {
            Nombres: "",
            PrimerApellido: "",
            SegundoApellido: "",
            Cedula: "",
            Edad: 0,
            Genero: "",
            Direccion: [],
            Telefono: "",
            Correo: "",
            EstadoCivil: "",
            TienesHijos: false,
            FechaNacimiento: new Date(),
        },
        Ids: {
            Nombres: GetUuId(),
            PrimerApellido: GetUuId(),
            SegundoApellido: GetUuId(),
            Cedula: GetUuId(),
            Edad: GetUuId(),
            Genero: GetUuId(),
            Direccion: GetUuId(),
            Telefono: GetUuId(),
            Correo: GetUuId(),
            EstadoCivil: GetUuId(),
            TienesHijos: GetUuId(),
            FechaNacimiento: GetUuId(),
        }
    }

    const Validations = Object.freeze({
        Formulario: {
            Nombres: (name: string) => String(name).length < 4 ? 'Los Nombres Deben Tener Al Menos 4 Caracteres' : "",
            PrimerApellido: (lastName: string) => String(lastName).length < 4 ? 'El Primer Apellido Debe Tener Al Menos  Caracteres' : "",
            SegundoApellido: (lastName: string) => String(lastName).length < 0 ? 'El Segundo Apellido Debe Tener Al Menos 1 Caracteres' : "",
            Cedula: (numero: string) => !IsValidDni(numero) ? 'Cedula Invalida' : "",
            Edad: (edad: number) => Number(edad) > 17 ? 'El Usuario Debe Ser Mayor De Edad' : "",
            Genero: (genero: string) => String(genero).length < 4 ? 'Debes Seleccionar Un Genero' : "",
            Direccion: (direccion: any[]) => !(Array(direccion).length > 0) ? 'Debe Ingresar Al Menos Una Direccion' : "",
            Telefono: (tel: string) => !isValidPhone(tel) ? 'Telefono Invalido' : "",
            Correo: (email: string) => !isValidEmail(email) ? 'Correo Invalido' : "",
            EstadoCivil: (civil: string) => String(civil).length < 4 ? 'Elija Un Estado Civil' : "",
            TienesHijos: (child: number) => Number(child) < 0 ? 'Cantidad Invalido De Hijos' : '',
            FechaNacimiento: (date: Date) => !IsAnAdult(date, 18) ? 'Usuario No Tiene La Edad Correcta Para Trabajar' : '',
        }
    })

    const handleSubmitResquest = () => { }

    const { handleChangeInput, handleSubmit, errors, state, setState, setStateErrors } = useForm<IUserForm>(InitialState, Validations, handleSubmitResquest);



    return (
        <>


            <BGWaveComponent Title="Formulario De Usuarios" >
                <br />
                <Card className="text-center ">
                    <Card.Header className='text-dark'>Agregar Usuario</Card.Header>
                    <Card.Body className="text-dark">
                        <Container style={{ overflow: "scroll", height: "400px", maxWidth: "65vw;" }} >
                            <Row>
                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Nombres"
                                        Name="Nombres"
                                        Value={state.Formulario.Nombres}
                                        ControlId={state.Ids.Nombres}
                                        TextId={state.Ids.Nombres}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Nombres}
                                        Errors={errors}
                                        PlaceHolder="Juan12....."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="PrimerApellido"
                                        Name="PrimerApellido"
                                        Value={state.Formulario.PrimerApellido}
                                        ControlId={state.Ids.PrimerApellido}
                                        TextId={state.Ids.PrimerApellido}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.PrimerApellido}
                                        Errors={errors}
                                        PlaceHolder="Perez...."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="SegundoApellido"
                                        Name="SegundoApellido"
                                        Value={state.Formulario.SegundoApellido}
                                        ControlId={state.Ids.SegundoApellido}
                                        TextId={state.Ids.SegundoApellido}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.SegundoApellido}
                                        Errors={errors}
                                        PlaceHolder="Juan12....."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Cedula"
                                        Name="Cedula"
                                        Value={state.Formulario.Cedula}
                                        ControlId={state.Ids.Cedula}
                                        TextId={state.Ids.Cedula}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Cedula}
                                        Errors={errors}
                                        PlaceHolder="223......"
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Genero"
                                        Name="Genero"
                                        Value={state.Formulario.Genero}
                                        ControlId={state.Ids.Genero}
                                        TextId={state.Ids.Genero}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Genero}
                                        Errors={errors}
                                        PlaceHolder="Masculino....."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Direccion"
                                        Name="Direccion"
                                        Value={state.Formulario.Direccion.toString()}
                                        ControlId={state.Ids.Direccion}
                                        TextId={state.Ids.Direccion}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Direccion}
                                        Errors={errors}
                                        PlaceHolder="Av......"
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Telefono"
                                        Name="Telefono"
                                        Value={state.Formulario.Telefono}
                                        ControlId={state.Ids.Telefono}
                                        TextId={state.Ids.Telefono}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Telefono}
                                        Errors={errors}
                                        PlaceHolder="829-965....."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Correo"
                                        Name="Correo"
                                        Value={state.Formulario.Correo}
                                        ControlId={state.Ids.Correo}
                                        TextId={state.Ids.Correo}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.Correo}
                                        Errors={errors}
                                        PlaceHolder="google@gmail.com"
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="EstadoCivil"
                                        Name="EstadoCivil"
                                        Value={state.Formulario.EstadoCivil}
                                        ControlId={state.Ids.EstadoCivil}
                                        TextId={state.Ids.EstadoCivil}
                                        OnChange={handleChangeInput}
                                        Type="text"
                                        key={state.Ids.EstadoCivil}
                                        Errors={errors}
                                        PlaceHolder="Soltero....."
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Tienes Hijos"
                                        Name="TienesHijos"
                                        Value={state.Formulario.TienesHijos}
                                        ControlId={state.Ids.TienesHijos}
                                        TextId={state.Ids.TienesHijos}
                                        OnChange={handleChangeInput}
                                        Type="number"
                                        Min={0}
                                        key={state.Ids.TienesHijos}
                                        Errors={errors}
                                        PlaceHolder="0"
                                    />
                                </div>

                                <div className="col-sm-6 col-md-4 mb-2 ">
                                    <InputComponent
                                        Label="Fecha Nacimiento"
                                        Name="FechaNacimiento"
                                        Value={state.Formulario.FechaNacimiento}
                                        ControlId={state.Ids.FechaNacimiento}
                                        TextId={state.Ids.FechaNacimiento}
                                        OnChange={handleChangeInput}
                                        Type="date"
                                        key={state.Ids.FechaNacimiento}
                                        Errors={errors}
                                        PlaceHolder="FechaNacimiento....."
                                    />
                                </div>

                                <Button variant="primary">Guardar</Button>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Card.Footer className="text-muted">Casi Terminas!!!!</Card.Footer>
                </Card>

            </BGWaveComponent>

        </>
    )
}

export default UsersFormComponent;
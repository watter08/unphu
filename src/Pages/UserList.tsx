import { BGWaveComponent } from '../Components/';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { LoaderPacmanComponent, InputComponent, TableComponent } from "../Components";
import { useForm } from "../Hooks";
import { GetUuId, IsValidDni, isValidPhone, isValidEmail, IsAnAdult } from "../Libs/Utility";
import { IUserListDTO } from '../Models/UserListModels'



const UserListPageComponent = () => {

    interface IUserList{
        Columns:IColumn[];
        Data:IUserListDTO[];
    }

    interface IColumn{        
        Header:string;
        Name:string;
    }

    const InitialState:IUserList = {
        Columns : [
            {Header:'ID' , Name:'Id'},
            {Header:'Nombre Completo' , Name:'NombreCompleto'},
            {Header:'Correo' , Name:'CorreoElectronico'},
            {Header:'Genero' , Name:'Genero'}
        ],
        Data: [
            {Id : 1, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 2, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 3, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 4, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 5, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
            {Id : 6, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 7, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 8, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 9, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 11, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
            {Id : 12, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 13, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 14, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 15, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 16, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
            {Id : 17, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 18, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 19, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 20, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 21, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
            {Id : 22, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 23, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 24, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 26, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 27, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
            {Id : 28, NombreCompleto:"juan Abreu",CorreoElectronico:"watter08@hotmail.es" ,Genero :"Masculino"},
            {Id : 29, NombreCompleto:"pedro perez",CorreoElectronico:"as@hotmail.es" ,Genero :"femenino"},
            {Id : 30, NombreCompleto:"ruben isidro",CorreoElectronico:"asdas@hotmail.es" ,Genero :"no binario"},
            {Id : 31, NombreCompleto:"julio noseque",CorreoElectronico:"tuytytu@hotmail.es" ,Genero :"Masculino"},
            {Id : 32, NombreCompleto:"Ilbert Castillo",CorreoElectronico:"ilbert21@hotmail.es" ,Genero :"Masculino"},
        ]
    }

    const handleSubmitResquest = () => {};

    const { handleChangeInput, handleSubmit, errors, state, setState, setStateErrors } = useForm<IUserList>(InitialState, {}, handleSubmitResquest);


    return (
        <>
        <LoaderPacmanComponent />
            <BGWaveComponent Title="Formulario De Usuarios" >
                <br />
                <Container style={{ overflow: "scroll-y", height: "400px", maxWidth: "65vw !important;" }} >
                    <Row>
                        <Col>
                            <TableComponent 
                              HeaderCss="DarkBgHeader"
                              TheadCss="PupleBG"
                              Title="Lista De Usuario" 
                              Columns={state.Columns}
                              Data={state.Data}
                              HasContainer={true}
                              />
                        </Col>
                    </Row>
                </Container>

            </BGWaveComponent >

        </>
    )
}



export default UserListPageComponent;
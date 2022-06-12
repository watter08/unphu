import { BGWaveComponent } from '../Components/';
import {  Container, Row, Col } from 'react-bootstrap'
import { LoaderPacmanComponent,  TableComponent } from "../Components";
import { useForm } from "../Hooks";
import { useAppDispatch, useAppSelector } from "../Hooks/useReduxHooks";
import { IUserListDTO  } from "../Models/UserListModels";
import { useEffect } from 'react';
import { fetchGetUserList } from '../Redux/Feactures/Users/UsersThunks';


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
            {Header:'ID' , Name:'id'},
            {Header:'Nombre Completo' , Name:'nombreCompleto'},
            {Header:'Correo' , Name:'correoElectronico'},
            {Header:'Genero' , Name:'genero'}
        ],
        Data: [ ]
    }


    const dispatch = useAppDispatch();
    const UserList = useAppSelector(state => state.UserList.UserList);

    const { handleChangeInput, handleSubmit, errors, state, setState, setStateErrors } = useForm<IUserList>(InitialState, {}, () => {});

    useEffect(() => {
        dispatch(fetchGetUserList());
    },[])


    useEffect(() => {
        if(!(UserList.length > 0)) return
        setState(prevState => {return {...prevState , Data : UserList}});
    },[UserList])

    return (
        <>
        <LoaderPacmanComponent />
            <BGWaveComponent Title="Formulario De Usuarios" >
                <br />
                <Container style={{ overflow: "scroll-y", height: "400px", maxWidth: "65vw !important" }} >
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
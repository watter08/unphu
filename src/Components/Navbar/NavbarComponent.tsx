import { useEffect, useState } from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IUserAuthenticate ,UserAuthenticate} from '../../Models/AuthModels';
import { LogOutClient} from '../../Services/Auth/AuthService'


function NavScrollExample( ) {

    const Initial:IUserAuthenticate = {
        id: 0,
        token: '',
        usuario: '',
        nombreCompleto: '',
        correoElectronico: '',
        tipoUsuario: 0,
    }

    const [state , setState] = useState(Initial);

    useEffect(() => {
        let newData = {...state};
        let data:string | any = (String(localStorage.getItem("Usuario")).length > 0 ) ? localStorage.getItem("Usuario") : "";
        newData = String(data).length > 0 ?  new UserAuthenticate(JSON.parse(data)) : new UserAuthenticate({}) ;
        setState(newData);   
    },[])

    return (
        <Row>
          <Col>
          <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Portal De Unphu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">            
            <Nav
              className="d-flex justify-content-end"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >              
              <NavDropdown title={state.nombreCompleto} id="navbarScrollingDropdown" className="d-flex justify-content-end">
                <NavDropdown.Item href="#" onClick={LogOutClient}>Cerrar Sesion</NavDropdown.Item>                
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
          </Col>
        </Row>
     
    );
  }
  
  export default NavScrollExample;
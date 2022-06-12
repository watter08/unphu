import { memo } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SidebarComponent from './SideBarComponent';
import NavbarComponent from '../Navbar/NavbarComponent'



const AdminLayoutComponent = () => {


    return (
        <>
            <SidebarComponent />

            <section className="home-section">
                <div className="home-content">

                    <Container fluid={true}>

                        <NavbarComponent />
                    </Container>
                    <Container fluid={true}>

                        <Outlet />
                    </Container>
                </div>
            </section>
        </>
    )
}


export default memo(AdminLayoutComponent);
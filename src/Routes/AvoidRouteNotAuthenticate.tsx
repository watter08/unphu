import {  Outlet , Navigate } from "react-router-dom";





//import Login from "../pages/Authenticate/Login/Login";

const AvoidRouteNotAuthenticate = ( Element :JSX.Element | any ): JSX.Element => {
   const hasToken = localStorage.getItem('Token');
   return (hasToken && String(hasToken).length > 10) ? <Navigate to='/Dashboard' />: <Outlet /> 
};

export default AvoidRouteNotAuthenticate;

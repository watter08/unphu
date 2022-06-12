import {  Outlet , Navigate } from "react-router-dom";





//import Login from "../pages/Authenticate/Login/Login";

const ProtectedRoute = ( Element :JSX.Element | any ): JSX.Element => {
   const hasToken = localStorage.getItem('Token');
   return (hasToken && String(hasToken).length > 10) ? <Outlet /> : <Navigate to='/Dashboard' />
};

export default ProtectedRoute;

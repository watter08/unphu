import {  Outlet , Navigate } from "react-router-dom";





//import Login from "../pages/Authenticate/Login/Login";

const ProtectedRoute = ({ Element ,Path,   ...rest }) => {
   const hasToken = localStorage.getItem('Token');
   return (hasToken && String(hasToken).length > 10) ? <Outlet /> : <Navigate to='/' />
};

export default ProtectedRoute;

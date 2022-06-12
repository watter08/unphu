import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import AdminLayoutComponent from '../Components/Layout/AdminLayoutComponent';
import ProtectedRoute from './ProtectedRoute';
import AvoidRouteNotAuthenticate from './AvoidRouteNotAuthenticate'
import { GetUuId } from '../Libs/Utility';


const LoginPageComponent = React.lazy(() => import('../Pages/Login'));
const UsersFormPageComponent = React.lazy(() => import('../Pages/UsersForm'));
const UserListPageComponent = React.lazy(() => import('../Pages/UserList'));
const DashboardComponentPage = React.lazy(() => import('../Pages/Dashboard'));

function AppRoutes(): JSX.Element {

  const Keys = {
    LoginPageComponent: GetUuId(),
    UsersFormPageComponent: GetUuId(),
    UserListPageComponent: GetUuId(),
    DashboardComponentPage: GetUuId(),
  }
  const [pagesKeys, setPagesKeys] = useState(Keys);

  return (
    <React.Suspense fallback={<span></span>}>
      <Routes>

        <Route element={<AvoidRouteNotAuthenticate />} >
          <Route index={false} path={`${process.env.PUBLIC_URL}/`} element={<LoginPageComponent key={pagesKeys.LoginPageComponent} />} />
        </Route>


        <Route element={<ProtectedRoute />} >
          <Route element={<AdminLayoutComponent />}>
            <Route path={`${process.env.PUBLIC_URL}/UsersForm`} element={<UsersFormPageComponent key={pagesKeys.UsersFormPageComponent} />} />
            <Route path={`${process.env.PUBLIC_URL}/UserList`} element={<UserListPageComponent key={pagesKeys.UserListPageComponent} />} />
            <Route path={`${process.env.PUBLIC_URL}/Dashboard`} element={<DashboardComponentPage key={pagesKeys.DashboardComponentPage} />} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default AppRoutes;

import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { GetUuId } from '../Libs/Utility';


const LoginPageComponent = React.lazy(() => import('../Pages/Login'));

function AppRoutes() : JSX.Element {

  const Keys = {LoginPageComponent: GetUuId() }
  const [pagesKeys, setPagesKeys] = useState(Keys);

  return (
    <React.Suspense fallback={<span></span>}>
      <Routes>
          <Route index={false} path={`${process.env.PUBLIC_URL}/`} element={<LoginPageComponent key={pagesKeys.LoginPageComponent} />} />
      </Routes>
    </React.Suspense>
  );
}

export default AppRoutes;

import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const PageLogin = lazy(() => import('../pages/PageLogin/PageLogin'));
const PageRegister = lazy(() => import('../pages/PageRegister/PageRegister'));

const Routes = [
  {
    path: 'login',
    component: PageLogin,
  },
  {
    path: 'register',
    component: PageRegister,
  },
];

export const SDKRoutes = () => Routes.map((r) => (
  <Route
    key={`/sdk/${r.path}`}
    path={`/sdk/${r.path}`}
    component={r.component}
  />
));

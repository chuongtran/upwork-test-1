import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const PageRegister = lazy(() => import('pages/PageRegister/PageRegister'));

export const Routes = [
  {
    path: '',
    component: PageRegister,
  },
  {
    path: 'phone',
    component: PageRegister,
  },
  {
    path: 'verify-phone',
    component: PageRegister,
  },
  {
    path: 'pin-code',
    component: PageRegister,
  },
  {
    path: 'verify-pin-code',
    component: PageRegister,
  },
  {
    path: 'link-bank-account',
    component: PageRegister,
  },
];

export const RegisterRoutes = () => Routes.map((v) => (
  <Route
    key={`/register/${v.path}`}
    path={`/register/${v.path}`}
    exact
    component={v.component}
  />
));

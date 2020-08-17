import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// COMPONENTS
import AuthenticatedRoute from 'components/AuthenticatedRoute/AuthenticatedRoute';
import { ModalGlobal } from 'components/Global';

// ROUTES
import { MerchantRoutes } from 'routes/MerchantRoutes';
import PageTransactionDetails from 'pages/PageTransactionDetails/PageTransactionDetails';
import PageResetPinCode from 'pages/PageResetPinCode/PageResetPinCode';

// PAGES
const PageQrModalEmployee = lazy(() => import('pages/Employee/PageQrModal/PageQrModal.Employee'));
const PageQrModalCustomer = lazy(() => import('pages/PageQrModal/PageQrModal.Customer'));
const PageDashboard = lazy(() => import('pages/PageDashboard/PageDashboard'));
const PageRewards = lazy(() => import('pages/PageRewards/PageRewards'));
const PageRewardDetails = lazy(() => import('pages/PageRewardDetails/PageRewardDetails'));
const PageTransactionHistory = lazy(() => import('pages/PageTransactionHistory/PageTransactionHistory'));
const PageQrCode = lazy(() => import('pages/PageQrCode/PageQrCode'));
const PagePay = lazy(() => import('pages/PagePay/PagePay'));
const PageProfile = lazy(() => import('pages/PageProfile/PageProfile'));
const PageLinkBankAccount = lazy(() => import('pages/PageLinkBankAccount/PageLinkBankAccount'));
const PageCardDetails = lazy(() => import('pages/PageCardDetails/PageCardDetails'));

const PageEmployeeStoresList = lazy(() => import('pages/Employee/PageStoresList/PageStoresList'));

const PageEmployeeDashboard = lazy(() => import('pages/Employee/PageDashboard/PageDashboard'));

const PageEmployeeTransaction = lazy(() => import('pages/Employee/PageTransactions/PageTransactions'));

const PageBrandDetails = lazy(() => import('pages/PageBrandDetails/PageBrandDetails'));

export const ProtectedRoute = () => (
  <AuthenticatedRoute>
    <Route exact path="/link-bank-account" component={PageLinkBankAccount} />
    <Route exact path="/dashboard" component={PageDashboard} />
    <Route exact path="/transactions" component={PageTransactionHistory} />
    <Route exact path="/rewards" component={PageRewards} />
    <Route exact path="/rewards/:rewardId" component={PageRewardDetails} />
    <Route
      exact
      path="/transactions/:transactionID"
      component={PageTransactionDetails}
    />
    <Route exact path="/my-qrcode" component={PageQrCode} />
    <Route exact path="/qr-modal" component={PageQrModalCustomer} />
    <Route
      exact
      path="/profile"
      render={({ history }) => <PageProfile history={history} />}
    />
    <Route path="/pay" component={PagePay} />
    <Route path="/merchants" component={MerchantRoutes} />
    <Route path="/cards/:cardId" component={PageCardDetails} />
    <Route path="/brands/:brandId" component={PageBrandDetails} />
    { /* EMPLOYEE */}
    <Route path="/employee/stores" component={PageEmployeeStoresList} />
    <Route
      exact
      path="/employee/:storeId/dashboard"
      render={({ history, match }) => (
        <PageEmployeeDashboard history={history} match={match} />
      )}
    />

    <Route
      exact
      path="/employee/:storeId/transactions"
      render={({ history, match }) => (
        <PageEmployeeTransaction history={history} match={match} />
      )}
    />

    <Route
      path="/employee/profile"
      render={({ history }) => (
        <PageProfile history={history} isEmployee />
      )}
    />
    <Route
      exact
      path="/employee/:storeId/qr-modal"
      render={({ history, match }) => (
        <PageQrModalEmployee history={history} match={match} />
      )}
    />

    {/** SHOW MODAL GLOBAL */}
    <Route
      exact
      path="/reset-pincode"
      render={({ history, match }) => (
        <PageResetPinCode history={history} match={match} />
      )}
    />
    <ModalGlobal />
  </AuthenticatedRoute>
);

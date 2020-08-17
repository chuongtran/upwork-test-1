import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const StoreExplore = lazy(() => import('pages/PageMerchants/modules/StoreExplore/StoreExplore'));
const StoreDetail = lazy(() => import('pages/PageMerchants/modules/StoreDetail/StoreDetail'));
const RewardDetail = lazy(() => import('pages/PageMerchants/modules/RewardDetails/RewardDetails'));
const StoreList = lazy(() => import('pages/PageMerchants/modules/StoreList/StoreList'));

const Routes = [
  {
    path: 'stores/list',
    isExact: true,
    component: StoreList,
  },
  {
    path: 'stores',
    isExact: true,
    component: StoreExplore,
  },
  {
    path: ':merchantId/stores/:storeId',
    isExact: true,
    component: StoreDetail,
  },
  {
    path: ':merchantId/reward/:rewardId',
    isExact: true,
    component: RewardDetail,
  },
];

export const MerchantRoutes = () => Routes.map((v) => (
  <Route
    key={`/merchants/${v.path}`}
    path={`/merchants/${v.path}`}
    exact={v.isExact}
    component={v.component}
  />
));

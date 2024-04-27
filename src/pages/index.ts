import React from 'react';

const Home = React.lazy(() => import('./Home'));
const MyWeb3APITest = React.lazy(() => import('./web3API/MyWeb3APITest'));
const HeaderAccount = React.lazy(() => import('./HeaderAccount'));
const ChangeNetWork = React.lazy(() => import('./ChangeNetWork'));
const MoreDetail = React.lazy(() => import('./MoreDetail'));
const Welcom = React.lazy(() => import('./Welcom'));
const Login = React.lazy(() => import('./Login'));

export default {
  Home,
  MyWeb3APITest,
  HeaderAccount,
  ChangeNetWork,
  MoreDetail,
  Welcom,
  Login,
};

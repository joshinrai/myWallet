/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Web3 from 'web3';

import Pages from './pages';

import { RootGlobalStyle } from './styles';

let [web3Instance, accounts, walletInstance]: any = new Array(3).fill(void 0);
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  web3Instance = new Web3(`${providerUrl}`);
  accounts = web3Instance?.eth?.accounts;
  walletInstance = accounts?.wallet;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const ContainerWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function App() {

  return (
    <BrowserRouter>
      <RootGlobalStyle />

      <Box
        sx={{
          flexGrow: 1,
        }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: '#212222',
          }}
        >
          <Toolbar>
            <ContainerWrapper>
              <Pages.ChangeNetWork />

              <Pages.HeaderAccount
                web3Instance={web3Instance}
                accounts={accounts}
                walletInstance={walletInstance}
              />
            </ContainerWrapper>

            <Link to="/web3Api">web3API</Link>

            <Pages.MoreDetail />
          </Toolbar>
        </AppBar>
      </Box>

      <Suspense
        fallback={<p>loading</p>}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Pages.Home />
            }
          />
          <Route
            path="/index"
            element={
              <div>index</div>
            }
          />
          <Route
            path="/web3Api"
            element={
              <Pages.MyWeb3APITest />
            }
          />
          <Route
            path="/welcom"
            element={
              <Pages.Welcom
                web3Instance={web3Instance}
                accounts={accounts}
                walletInstance={walletInstance}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Pages.Login />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;

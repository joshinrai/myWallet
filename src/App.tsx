/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Pages from './pages';

import { RootGlobalStyle } from './styles';

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

              <Pages.HeaderAccount />
            </ContainerWrapper>

            <Link to="/web3Api">web3API</Link>

            <Pages.MoreDetail />
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Link to="/index">index</Link>
      <Link to="/home">home</Link> */}

      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/index" element={<div>index</div>} />
        <Route path="/web3Api" element={<Pages.MyWeb3APITest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

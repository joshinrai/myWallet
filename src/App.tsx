import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './pages/Home';

import { RootGlobalStyle } from './APP';

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

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ContainerWrapper>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
            </ContainerWrapper>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Link to="/">index</Link>
      <Link to="/home">Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<div>home</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

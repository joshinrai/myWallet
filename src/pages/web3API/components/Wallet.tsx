import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

import mockData from '../../../mockData/web3APiData';

let walletInstance: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  walletInstance = web3Instance?.eth?.accounts?.wallet;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Wallet = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="add"
                onClick={() => {
                  const res: any = walletInstance.add("0x9fa0a8630d86aba28083635d99458a5a094390a00c7f5d8db7960d0ef8359302");
                  console.log('%c 1111 wallet add res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="clear"
                onClick={() => {
                  const res: any = walletInstance.clear();
                  console.log('%c 1111 wallet clear res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="create"
                onClick={() => {
                  const res: any = walletInstance.create(2);
                  console.log('%c 1111 wallet create res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="decrypt"
                onClick={async () => {
                  const res: any = await walletInstance.decrypt(mockData.walletDecryptData, 'test');
                  console.log('%c 1111 wallet decrypt res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="encrypt"
                onClick={async () => {
                  const res: any = await walletInstance.encrypt('test#!$');
                  console.log('%c 1111 wallet encrypt res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="get"
                onClick={() => {
                  const res: any = walletInstance.get('b5d89661b59a9af0b34f58d19138baa2de48baaf');
                  console.log('%c 1111 wallet get res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="load"
                onClick={async () => {
                  const res: any = await walletInstance.load('test#!$');
                  console.log('%c 1111 wallet load res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="remove"
                onClick={() => {
                  const res: any = walletInstance.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
                  console.log('%c 1111 wallet remove res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="save"
                onClick={async () => {
                  const res: any = await walletInstance.save('test#!$');
                  console.log('%c 1111 wallet save res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getStorage"
                onClick={() => {
                  const res: any = walletInstance.getStorage;
                  console.log('%c 1111 wallet getStorage res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(Wallet);

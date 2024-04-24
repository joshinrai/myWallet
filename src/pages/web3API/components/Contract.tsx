/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

const Contract = () => {

  let contract: any;

  const initContract = async () => {
    try {
      const web3Instance = new Web3(); // 'https://127.0.0.1:4545'
      // const abi = [...] as const; // my contract ABI
      contract = new web3Instance.eth.Contract([], '0xdAC17F958D2ee523a2206206994597C13D831ec7');
      console.log('%c 9999 contract.methods.balanceOf is:', 'color: #ff0;', contract.methods);
      await contract.methods?.balanceOf?.('0xdAC17F958D2ee523a2206206994597C13D831ec7')?.call?.();
      console.log('%c 111111 contract is:', 'color: #0f0;', contract, contract.methods.balanceOf);
    } catch (e) {
      console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
    }
  };

  useEffect(() => {
    initContract();
  }, []);

  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="create"
                onClick={() => {
                  const res = contract?.create?.();
                  console.log('create ...', res);
                }}
              />
            </ListItemButton>
          </ListItem>
          </List>
      </nav>
    </Box>
  );
};

export default memo(Contract);

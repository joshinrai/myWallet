import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

let web3Instance: any;
let ibanInstance: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  web3Instance = new Web3(`${providerUrl}`);
  ibanInstance = new web3Instance.eth.Iban("XE81ETHXREGGAVOFYORK");
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Iban = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="checksum"
                onClick={async () => {
                  const res: any = await ibanInstance.checksum();
                  console.log('%c 666666666 checksum res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="client"
                onClick={async () => {
                  const res: any = await ibanInstance.client();
                  console.log('%c 666666666 client res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="institution"
                onClick={async () => {
                  const res: any = await ibanInstance.institution();
                  console.log('%c 666666666 institution res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isDirect"
                onClick={async () => {
                  const res: any = await ibanInstance.isDirect();
                  console.log('%c 666666666 isDirect res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isIndirect"
                onClick={async () => {
                  const res: any = await ibanInstance.isIndirect();
                  console.log('%c 666666666 isIndirect res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isValid"
                onClick={async () => {
                  const res: any = await ibanInstance.isValid();
                  console.log('%c 666666666 isValid res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toAddress"
                onClick={async () => {
                  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
                  const web3 = new Web3(`${providerUrl}`);
                  const iban = new web3.eth.Iban("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
                  const res: any = await iban.toAddress();
                  console.log('%c 666666666 toAddress res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toString"
                onClick={async () => {
                  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
                  const web3 = new Web3(`${providerUrl}`);
                  const iban = new web3.eth.Iban("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
                  const res: any = await iban.toString();
                  console.log('%c 666666666 toString res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="createIndirect"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.createIndirect({
                    institution: "XREG",
                    identifier: "GAVOFYORK"
                  });
                  console.log('%c 666666666 createIndirect res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromAddress"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.fromAddress('0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8');
                  console.log('%c 666666666 fromAddress res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromBban"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.fromBban('ETHXREGGAVOFYORK');
                  console.log('%c 666666666 fromBban res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isDirect"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.isDirect('XE81ETHXREGGAVOFYORK');
                  console.log('%c 666666666 isDirect res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isIndirect"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.isIndirect('XE81ETHXREGGAVOFYORK');
                  console.log('%c 666666666 isIndirect res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isValid"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.isValid('XE81ETHXREGGAVOFYORK');
                  console.log('%c 666666666 isValid res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toAddress"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.toAddress('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
                  console.log('%c 666666666 toAddress res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toIban"
                onClick={async () => {
                  const res: any = await web3Instance.eth.Iban.toIban('0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8');
                  console.log('%c 666666666 toIban res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(Iban);

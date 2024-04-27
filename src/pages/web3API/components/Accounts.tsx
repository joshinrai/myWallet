/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';
import { signTransaction, Transaction } from 'web3-eth-accounts';

import mockData from '../../../mockData/web3APiData';

let accounts: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  accounts = web3Instance?.eth?.accounts;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Accounts = () => {
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
                  const res = accounts?.create?.();
                  console.log('create ...', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="decrypt"
                onClick={async () => {
                  const decryptData = mockData.decryptData;
                  const res = await accounts?.decrypt?.(...decryptData);
                  console.log('decrypt ...', res, decryptData);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="encrypt"
                onClick={async () => {
                  // TODO: error
                  const encryptKdfData = mockData.encryptKdfData;
                  const kdfRes = await accounts?.decrypt?.(encryptKdfData[0], encryptKdfData[1], encryptKdfData[2]);
                  console.log(' encrypt kdfRes is:', kdfRes);

                  const encryptData = mockData.encryptData;
                  console.log('encryptData ...', encryptData);
                  const res = await accounts?.decrypt?.(encryptData[0], encryptData[1], encryptData[2]);
                  console.log('encrypt ...', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hashMessage"
                onClick={() => {
                  const res = accounts?.hashMessage?.('Hello world');

                  const utf8Res = accounts?.hashMessage?.(Web3.utils.utf8ToHex("Hello world"));
                  console.log(' res is:', res, utf8Res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="parseAndValidatePrivateKey"
                onClick={() => {
                  const res = accounts?.parseAndValidatePrivateKey?.('0x08c673022000ece7964ea4db2d9369c50442b2869cbd8fc21baaca59e18f642c');
                  console.log(' parseAndValidatePrivateKey res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="privateKeyToAccount"
                onClick={() => {
                  const res = accounts?.privateKeyToAccount?.('0x08c673022000ece7964ea4db2d9369c50442b2869cbd8fc21baaca59e18f642c');
                  console.log(' privateKeyToAccount res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="privateKeyToAddress"
                onClick={() => {
                  const res = accounts?.privateKeyToAddress?.('0x08c673022000ece7964ea4db2d9369c50442b2869cbd8fc21baaca59e18f642c');
                  console.log(' privateKeyToAddress res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="privateKeyToPublicKey"
                onClick={() => {
                  const res = accounts?.privateKeyToPublicKey?.('0x08c673022000ece7964ea4db2d9369c50442b2869cbd8fc21baaca59e18f642c');
                  console.log(' privateKeyToPublicKey res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="recover"
                onClick={() => {
                  const data = 'Some data';
                  const sigObj = accounts.sign(data, '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728')
                  const res = accounts?.recover?.(data, sigObj.v, sigObj.r, sigObj.s);
                  console.log(' recover res is:', sigObj, res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="recoverTransaction"
                onClick={() => {
                  const res = accounts?.recoverTransaction?.('0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68');
                  console.log(' recoverTransaction res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sign"
                onClick={() => {
                  const res = accounts?.sign?.('Some data', '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
                  console.log(' sign res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="signTransaction"
                onClick={async () => {
                  // TODO: chainId
                  // const res = accounts?.signTransaction?.('Some data', '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
                  const res: any = await signTransaction(
                    new Transaction({
                      to: '0x118C2E5F57FD62C2B5b46a5ae9216F4FF4011a07',
                      value: '0x186A0',
                      gasLimit: '0x520812',
                      gasPrice: '0x09184e72a000',
                      data: '',
                      // chainId: 1,
                      nonce: 0,
                    }),
                    '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318',
                  );
                  console.log(' signTransaction res is:', res);
                }}
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
    </Box>
  );
};

export default memo(Accounts);

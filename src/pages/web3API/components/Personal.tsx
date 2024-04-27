import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';
import Web3Personal from 'web3-eth-personal';

let web3Instance: any;
let personal: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  web3Instance = new Web3(`${providerUrl}`);
  personal = web3Instance?.eth?.personal;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Personal = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="BatchRequest"
                onClick={() => {
                  const res: any = new personal.BatchRequest();
                  console.log('%c 666666666 BatchRequest res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="blockHeaderTimeout-块头超时"
                onClick={() => {
                  const res: any = personal.blockHeaderTimeout;
                  console.log('%c 666666666 blockHeaderTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="contractDataInputFill-合约数据输入填充"
                onClick={() => {
                  const res: any = personal.contractDataInputFill;
                  console.log('%c 666666666 contractDataInputFill res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="currentProvider"
                onClick={() => {
                  const res: any = personal.currentProvider;
                  console.log('%c 666666666 currentProvider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="defaultAccount"
                onClick={() => {
                  const res: any = personal.defaultAccount;
                  console.log('%c 666666666 defaultAccount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="defaultBlock"
                onClick={() => {
                  const res: any = personal.defaultBlock;
                  console.log('%c 666666666 defaultBlock res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="defaultCommon"
                onClick={() => {
                  const res: any = personal.defaultCommon;
                  console.log('%c 666666666 defaultCommon res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="defaultHardfork"
                onClick={() => {
                  const res: any = personal.defaultHardfork;
                  console.log('%c 666666666 defaultHardfork res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="enableExperimentalFeatures-启用实验功能"
                onClick={() => {
                  const res: any = personal.enableExperimentalFeatures;
                  console.log('%c 666666666 enableExperimentalFeatures res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="givenProvider-给定提供者"
                onClick={() => {
                  const res: any = personal.givenProvider;
                  console.log('%c 666666666 givenProvider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="handleRevert-处理恢复"
                onClick={() => {
                  const res: any = personal.handleRevert;
                  console.log('%c 666666666 handleRevert res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="provider"
                onClick={() => {
                  const res: any = personal.provider;
                  console.log('%c 666666666 provider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscriptionManager"
                onClick={() => {
                  const res: any = personal.subscriptionManager;
                  console.log('%c 666666666 subscriptionManager res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionBlockTimeout-交易区块超时"
                onClick={() => {
                  const res: any = personal.transactionBlockTimeout;
                  console.log('%c 666666666 transactionBlockTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionConfirmationBlocks-交易确认块"
                onClick={() => {
                  const res: any = personal.transactionConfirmationBlocks;
                  console.log('%c 666666666 transactionConfirmationBlocks res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionPollingInterval-交易轮询间隔"
                onClick={() => {
                  const res: any = personal.transactionPollingInterval;
                  console.log('%c 666666666 transactionPollingInterval res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionPollingTimeout-交易轮询超时"
                onClick={() => {
                  const res: any = personal.transactionPollingTimeout;
                  console.log('%c 666666666 transactionPollingTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionReceiptPollingInterval-交易收据轮询间隔"
                onClick={() => {
                  const res: any = personal.transactionReceiptPollingInterval;
                  console.log('%c 666666666 transactionReceiptPollingInterval res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionSendTimeout-交易发送超时"
                onClick={() => {
                  const res: any = personal.transactionSendTimeout;
                  console.log('%c 666666666 transactionSendTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="ecRecover-易恢复"
                onClick={async () => {
                  const res: any = await personal.ecRecover(
                    "Hello world",
	                  "0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b"
                  );
                  console.log('%c 666666666 ecRecover res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="extend"
                onClick={async () => {
                  const res: any = await personal.extend(Web3.utils);
                  console.log('%c 666666666 extend res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getAccounts"
                onClick={async () => {
                  const res: any = await personal.getAccounts();
                  console.log('%c 666666666 getAccounts res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="importRawKey-导入原始密钥"
                onClick={async () => {
                  const res: any = await personal.importRawKey(
                    "abe40cb08850da918ee951b237fa87946499b2d8643e4aa12b0610b050c731f6",
	                  "123456"
                  );
                  console.log('%c 666666666 importRawKey res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="link"
                onClick={async () => {
                  const res: any = await personal.link({});
                  console.log('%c 666666666 link res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="lockAccount"
                onClick={async () => {
                  const res: any = await personal.lockAccount('0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e');
                  console.log('%c 666666666 lockAccount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="newAccount"
                onClick={async () => {
                  // infura 不允许创建新账户
                  const web3PersonalInstance = new Web3Personal(import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER);
                  const res: any = await web3PersonalInstance.newAccount('@ssss');
                  console.log('%c 7777777 newAccount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sendTransaction"
                onClick={async () => {
                  const res: any = await personal.sendTransaction({
                    from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
                    gasPrice: "20000000000",
                    gas: "21000",
                    to: "0x3535353535353535353535353535353535353535",
                    value: "1000000",
                    data: "",
                    nonce: 0,
                  },
                  "123456"
                  );
                  console.log('%c 666666666 newAccount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="setProvider"
                onClick={async () => {
                  const res: any = await personal.setProvider(import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER);
                  console.log('%c 666666666 setProvider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sign"
                onClick={async () => {
                  const res: any = await personal.sign("Hello world", "0x0D4Aa485ECbC499c70860fEb7e5AaeAf5fd8172E", "123456");
                  console.log('%c 666666666 sign res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="signTransaction"
                onClick={async () => {
                  const res: any = await personal.signTransaction({
                    from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
                    gasPrice: "20000000000",
                    gas: "21000",
                    to: "0x3535353535353535353535353535353535353535",
                    value: "1000000000000000000",
                    data: "",
                    nonce: 0,
                  },
                  "123456");
                  console.log('%c 666666666 signTransaction res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="unlockAccount"
                onClick={async () => {
                  const res: any = await personal.unlockAccount(
                    "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
                    "123456",
                    600
                  );
                  console.log('%c 666666666 unlockAccount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="use"
                onClick={async () => {
                  const res: any = await personal.use();
                  console.log('%c 666666666 use res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default memo(Personal);

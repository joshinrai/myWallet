import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

let sepoliaNet: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  sepoliaNet = web3Instance?.eth?.net;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Net = () => {
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
                  const res: any = new sepoliaNet.BatchRequest();
                  console.log('%c 666666666 BatchRequest res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="blockHeaderTimeout"
                onClick={() => {
                  const res: any = sepoliaNet.blockHeaderTimeout;
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
                  const res: any = sepoliaNet.contractDataInputFill;
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
                  const res: any = sepoliaNet.currentProvider;
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
                  const res: any = sepoliaNet.defaultAccount;
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
                  const res: any = sepoliaNet.defaultBlock;
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
                  const res: any = sepoliaNet.defaultCommon;
                  console.log('%c 666666666 defaultCommon res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="defaultHardfork-默认硬分叉"
                onClick={() => {
                  const res: any = sepoliaNet.defaultHardfork;
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
                  const res: any = sepoliaNet.enableExperimentalFeatures;
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
                  const res: any = sepoliaNet.givenProvider;
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
                  const res: any = sepoliaNet.handleRevert;
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
                  const res: any = sepoliaNet.provider;
                  console.log('%c 666666666 provider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscriptionManager-订阅管理器"
                onClick={() => {
                  const res: any = sepoliaNet.subscriptionManager;
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
                  const res: any = sepoliaNet.transactionBlockTimeout;
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
                  const res: any = sepoliaNet.transactionConfirmationBlocks;
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
                  const res: any = sepoliaNet.transactionPollingInterval;
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
                  const res: any = sepoliaNet.transactionPollingTimeout;
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
                  const res: any = sepoliaNet.transactionReceiptPollingInterval;
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
                  const res: any = sepoliaNet.transactionSendTimeout;
                  console.log('%c 666666666 transactionSendTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(Net);

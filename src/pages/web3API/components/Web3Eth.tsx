import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

let webEth: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  webEth = web3Instance?.eth;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Web3Eth = () => {
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
                  const res: any = new webEth.BatchRequest();
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
                  const res: any = webEth.blockHeaderTimeout;
                  console.log('%c 666666666 blockHeaderTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="contractDataInputFill"
                onClick={() => {
                  const res: any = webEth.contractDataInputFill;
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
                  const res: any = webEth.currentProvider;
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
                  const res: any = webEth.defaultAccount;
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
                  const res: any = webEth.defaultBlock;
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
                  const res: any = webEth.defaultCommon;
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
                  const res: any = webEth.defaultHardfork;
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
                  const res: any = webEth.enableExperimentalFeatures;
                  console.log('%c 666666666 enableExperimentalFeatures res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="givenProvider"
                onClick={() => {
                  const res: any = webEth.givenProvider;
                  console.log('%c 666666666 givenProvider res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="handleRevert"
                onClick={() => {
                  const res: any = webEth.handleRevert;
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
                  const res: any = webEth.provider;
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
                  const res: any = webEth.subscriptionManager;
                  console.log('%c 666666666 subscriptionManager res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionBlockTimeout"
                onClick={() => {
                  const res: any = webEth.transactionBlockTimeout;
                  console.log('%c 666666666 transactionBlockTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionConfirmationBlocks"
                onClick={() => {
                  const res: any = webEth.transactionConfirmationBlocks;
                  console.log('%c 666666666 transactionConfirmationBlocks res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionPollingInterval"
                onClick={() => {
                  const res: any = webEth.transactionPollingInterval;
                  console.log('%c 666666666 transactionPollingInterval res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionPollingTimeout"
                onClick={() => {
                  const res: any = webEth.transactionPollingTimeout;
                  console.log('%c 666666666 transactionPollingTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionReceiptPollingInterval"
                onClick={() => {
                  const res: any = webEth.transactionReceiptPollingInterval;
                  console.log('%c 666666666 transactionReceiptPollingInterval res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="transactionSendTimeout"
                onClick={() => {
                  const res: any = webEth.transactionSendTimeout;
                  console.log('%c 666666666 transactionSendTimeout res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="calculateFeeData"
                onClick={async () => {
                  const res: any = await webEth.calculateFeeData();
                  console.log('%c 666666666 calculateFeeData res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="call"
                onClick={async () => {
                  const res: any = await webEth.call(0x0000000000000000000000000000000000000001);
                  console.log('%c 666666666 call res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="clearSubscriptions"
                onClick={async () => {
                  const res: any = await webEth.clearSubscriptions();
                  console.log('%c 666666666 clearSubscriptions res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="createAccessList"
                onClick={async () => {
                  const res: any = await webEth.createAccessList({
                    from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
                    data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
                    gasPrice: '0x3b9aca00',
                    gas: '0x3d0900',
                    to: '0x940b25304947ae863568B3804434EC77E2160b87'
                    }
                  );
                  console.log('%c 666666666 createAccessList res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="estimateGas"
                onClick={async () => {
                  const res: any = await webEth.estimateGas();
                  console.log('%c 666666666 estimateGas res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="extend"
                onClick={async () => {
                  const res: any = await webEth.extend(Web3.utils);
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
                  const res: any = await webEth.getAccounts();
                  console.log('%c 666666666 getAccounts res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getBalance"
                onClick={async () => {
                  const res: any = await webEth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
                  console.log('%c 666666666 getBalance res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getBlock"
                onClick={async () => {
                  const res: any = await webEth.getBlock(0);
                  console.log('%c 666666666 getBlock res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getBlockNumber"
                onClick={async () => {
                  const res: any = await webEth.getBlockNumber();
                  console.log('%c 666666666 getBlockNumber res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getBlockTransactionCount"
                onClick={async () => {
                  const res: any = await webEth.getBlockTransactionCount();
                  console.log('%c 666666666 getBlockTransactionCount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getBlockUncleCount"
                onClick={async () => {
                  const res: any = await webEth.getBlockUncleCount();
                  console.log('%c 666666666 getBlockUncleCount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getChainId"
                onClick={async () => {
                  const res: any = await webEth.getChainId();
                  console.log('%c 666666666 getChainId res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getCode"
                onClick={async () => {
                  const res: any = await webEth.getCode('0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234');
                  console.log('%c 666666666 getCode res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getCoinbase"
                onClick={async () => {
                  const res: any = await webEth.getCoinbase();
                  console.log('%c 666666666 getCoinbase res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getFeeHistory"
                onClick={async () => {
                  const res: any = await webEth.getFeeHistory(4, 'pending', [0, 25, 75, 100]);
                  console.log('%c 666666666 getFeeHistory res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getGasPrice"
                onClick={async () => {
                  const res: any = await webEth.getGasPrice();
                  console.log('%c 666666666 getGasPrice res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getHashRate"
                onClick={async () => {
                  const res: any = await webEth.getHashRate();
                  console.log('%c 666666666 getHashRate res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getHashrate"
                onClick={async () => {
                  const res: any = await webEth.getHashrate();
                  console.log('%c 666666666 getHashrate res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getMaxPriorityFeePerGas"
                onClick={async () => {
                  const res: any = await webEth.getMaxPriorityFeePerGas();
                  console.log('%c 666666666 getMaxPriorityFeePerGas res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getNodeInfo"
                onClick={async () => {
                  const res: any = await webEth.getNodeInfo();
                  console.log('%c 666666666 getNodeInfo res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getPastLogs"
                onClick={async () => {
                  const res: any = await webEth.getPastLogs({
                    address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
                    topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
                  });
                  console.log('%c 666666666 getPastLogs res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getPendingTransactions"
                onClick={async () => {
                  const res: any = await webEth.getPendingTransactions({
                    address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
                    topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
                  });
                  console.log('%c 666666666 getPendingTransactions res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getProof"
                onClick={async () => {
                  const res: any = await webEth.getProof(
                    "0x1234567890123456789012345678901234567890",
                    ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
                    "latest"
                  );
                  console.log('%c 666666666 getProof res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getProtocolVersion"
                onClick={async () => {
                  const res: any = await webEth.getProtocolVersion();
                  console.log('%c 666666666 getProtocolVersion res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getStorageAt"
                onClick={async () => {
                  const res: any = await webEth.getStorageAt('0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234', 0);
                  console.log('%c 666666666 getStorageAt res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getTransaction"
                onClick={async () => {
                  const res: any = await webEth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc');
                  console.log('%c 666666666 getTransaction res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getTransactionCount"
                onClick={async () => {
                  const res: any = await webEth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
                  console.log('%c 666666666 getTransactionCount res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getTransactionFromBlock"
                onClick={async () => {
                  const res: any = await webEth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0);
                  console.log('%c 666666666 getTransactionFromBlock res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getTransactionReceipt"
                onClick={async () => {
                  const res: any = await webEth.getTransactionReceipt('0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f');
                  console.log('%c 666666666 getTransactionReceipt res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getUncle"
                onClick={async () => {
                  const res: any = await webEth.getUncle(0, 1);
                  console.log('%c 666666666 getUncle res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getWork"
                onClick={async () => {
                  const res: any = await webEth.getWork();
                  console.log('%c 666666666 getWork res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isMining"
                onClick={async () => {
                  const res: any = await webEth.isMining();
                  console.log('%c 666666666 isMining res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isSyncing"
                onClick={async () => {
                  const res: any = await webEth.isSyncing();
                  console.log('%c 666666666 isSyncing res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="link"
                onClick={async () => {
                  const res: any = await webEth.link();
                  console.log('%c 666666666 link res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="requestAccounts"
                onClick={async () => {
                  const res: any = await webEth.requestAccounts();
                  console.log('%c 666666666 requestAccounts res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sendSignedTransaction"
                onClick={async () => {
                  const res: any = await webEth.sendSignedTransaction();
                  console.log('%c 666666666 sendSignedTransaction res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sendTransaction"
                onClick={async () => {
                  const transaction = {
                    from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
                    to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
                    value: '0x1'
                  }
                  const res: any = await webEth.sendTransaction(transaction);
                  console.log('%c 666666666 sendTransaction res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="setProvider"
                onClick={async () => {
                  const res: any = await webEth.setProvider(import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER);
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
                  const res: any = await webEth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe");
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
                  const transaction = {
                    from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
                    to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
                    value: '0x1',
                    gas: '21000',
                    gasPrice: await webEth.getGasPrice(),
                    nonce: '0x1',
                    type: '0x0'
                  }
                  const res: any = await webEth.signTransaction(transaction);
                  console.log('%c 666666666 signTransaction res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="signTypedData"
                onClick={async () => {
                  const res: any = await webEth.signTypedData('address', 'typedData');
                  console.log('%c 666666666 signTypedData res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="submitWork"
                onClick={async () => {
                  const res: any = await webEth.submitWork([
                    "0x0000000000000001",
                    "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                    "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
                  ]);
                  console.log('%c 666666666 submitWork res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscribe"
                onClick={async () => {
                  const res: any = await webEth.subscribe('logs', {
                    address: '0x1234567890123456789012345678901234567890',
                    topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
                  });
                  console.log('%c 666666666 subscribe res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscribe('newHeads')"
                onClick={async () => {
                  const res: any = await webEth.subscribe('newHeads');
                  console.log('%c 666666666 subscribe res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscribe('syncing')"
                onClick={async () => {
                  const res: any = await webEth.subscribe('syncing');
                  console.log('%c 666666666 subscribe res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="subscribe('logs', options)"
                onClick={async () => {
                  const res: any = await webEth.subscribe('logs', {
                    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                  });
                  console.log('%c 666666666 subscribe res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="use"
                onClick={async () => {
                  console.log('%c 666666666 use res is:', 'color: #0f0;');
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default memo(Web3Eth);

import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

let web3Utils: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  web3Utils = web3Instance?.utils;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Utils = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="asciiToHex"
                onClick={() => {
                  const res: any = web3Utils.asciiToHex('Hello World...');
                  console.log('%c 888888888 asciiToHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="bytesToHex"
                onClick={() => {
                  const res: any = web3Utils.bytesToHex(new Uint8Array([72, 12]));
                  console.log('%c 888888888 bytesToHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="checkAddressCheckSum-检查地址检查和"
                onClick={() => {
                  const res: any = web3Utils.checkAddressCheckSum(0x9799C859D04F83970AE30FAf55dA7B39F649beaD);
                  console.log('%c 888888888 checkAddressCheckSum res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="compareBlockNumbers-比较块编号"
                onClick={() => {
                  const res: any = web3Utils.compareBlockNumbers(12, 11);
                  console.log('%c 888888888 compareBlockNumbers res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="encodePacked-编码打包"
                onClick={() => {
                  const res: any = web3Utils.encodePacked(12, 11);
                  console.log('%c 888888888 encodePacked res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromAscii"
                onClick={() => {
                  const res: any = web3Utils.fromAscii('0x9799C859D04F83970AE30FAf55dA7B39F649beaD');
                  console.log('%c 888888888 fromAscii res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromDecimal"
                onClick={() => {
                  const res: any = web3Utils.fromDecimal(20);
                  console.log('%c 888888888 fromDecimal res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromTwosComplement"
                onClick={() => {
                  const res: any = web3Utils.fromTwosComplement('0x0000000000000000000000000000000d', 32);
                  console.log('%c 888888888 fromTwosComplement res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromUtf8"
                onClick={() => {
                  const res: any = web3Utils.fromUtf8('0x0000000000000000000000000000000d');
                  console.log('%c 888888888 fromUtf8 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="fromWei"
                onClick={() => {
                  const res: any = web3Utils.fromWei(0x0000000000000000000000000000000d, 'wei');
                  console.log('%c 888888888 fromWei res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getStorageSlotNumForLongString"
                onClick={() => {
                  const res: any = web3Utils.getStorageSlotNumForLongString(0x0000000000000000000000000000000d);
                  console.log('%c 888888888 getStorageSlotNumForLongString res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToAscii"
                onClick={() => {
                  const res: any = web3Utils.hexToAscii('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToAscii res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToBytes"
                onClick={() => {
                  const res: any = web3Utils.hexToBytes('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToBytes res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToNumber"
                onClick={() => {
                  const res: any = web3Utils.hexToNumber('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToNumber res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToNumberString"
                onClick={() => {
                  const res: any = web3Utils.hexToNumberString('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToNumberString res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToString"
                onClick={() => {
                  const res: any = web3Utils.hexToString('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToString res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="hexToUtf8"
                onClick={() => {
                  const res: any = web3Utils.hexToUtf8('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 hexToUtf8 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isAddress"
                onClick={() => {
                  const res: any = web3Utils.isAddress('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isAddress res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isBloom"
                onClick={() => {
                  const res: any = web3Utils.isBloom(true);
                  console.log('%c 888888888 isBloom res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isContractAddressInBloom"
                onClick={() => {
                  const res: any = web3Utils.isContractAddressInBloom('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isContractAddressInBloom res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isHex"
                onClick={() => {
                  const res: any = web3Utils.isHex('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isHexStrict"
                onClick={() => {
                  const res: any = web3Utils.isHexStrict('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isHexStrict res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isInBloom"
                onClick={() => {
                  const res: any = web3Utils.isInBloom('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isInBloom res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isTopic"
                onClick={() => {
                  const res: any = web3Utils.isTopic('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isTopic res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isTopicInBloom"
                onClick={() => {
                  const res: any = web3Utils.isTopicInBloom('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isTopicInBloom res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="isUserEthereumAddressInBloom"
                onClick={() => {
                  const res: any = web3Utils.isUserEthereumAddressInBloom('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 isUserEthereumAddressInBloom res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="keccak256Wrapper"
                onClick={() => {
                  const res: any = web3Utils.keccak256Wrapper('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 keccak256Wrapper res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="leftPad"
                onClick={() => {
                  const res: any = web3Utils.leftPad('0x48656c6c6f20576f726c64');
                  console.log('%c 888888888 leftPad res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="numberToHex"
                onClick={() => {
                  const res: any = web3Utils.numberToHex(20);
                  console.log('%c 888888888 numberToHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="padLeft"
                onClick={() => {
                  const res: any = web3Utils.padLeft('0x123', 10);
                  console.log('%c 888888888 padLeft res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="padRight"
                onClick={() => {
                  const res: any = web3Utils.padRight('0x123', 10);
                  console.log('%c 888888888 padRight res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="processSolidityEncodePackedArgs"
                onClick={() => {
                  // TODO: 数据格式
                  const res: any = web3Utils.processSolidityEncodePackedArgs('0x123');
                  console.log('%c 888888888 processSolidityEncodePackedArgs res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="randomBytes"
                onClick={() => {
                  const res: any = web3Utils.randomBytes(10);
                  console.log('%c 888888888 randomBytes res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="randomHex"
                onClick={() => {
                  const res: any = web3Utils.randomHex(10);
                  console.log('%c 888888888 randomHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="rightPad"
                onClick={() => {
                  const res: any = web3Utils.rightPad('0x123', 10);
                  console.log('%c 888888888 rightPad res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sha3"
                onClick={() => {
                  const res: any = web3Utils.sha3('test');
                  console.log('%c 888888888 sha3 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="sha3Raw"
                onClick={() => {
                  const res: any = web3Utils.sha3Raw('test');
                  console.log('%c 888888888 sha3Raw res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="soliditySha3"
                onClick={() => {
                  const res: any = web3Utils.soliditySha3({ type: "string", value: "31323334" });
                  console.log('%c 888888888 soliditySha3 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="soliditySha3Raw"
                onClick={() => {
                  const res: any = web3Utils.soliditySha3Raw({ type: "string", value: "31323334" });
                  console.log('%c 888888888 soliditySha3Raw res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="stringToHex"
                onClick={() => {
                  const res: any = web3Utils.stringToHex("test");
                  console.log('%c 888888888 stringToHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toAscii"
                onClick={() => {
                  const res: any = web3Utils.toAscii("0x74657374");
                  console.log('%c 888888888 toAscii res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toBigInt"
                onClick={() => {
                  const res: any = web3Utils.toBigInt("0x74657374");
                  console.log('%c 888888888 toBigInt res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toChecksumAddress"
                onClick={() => {
                  const res: any = web3Utils.toChecksumAddress("0xc1912fee45d61c87cc5ea59dae31190fffff232d");
                  console.log('%c 888888888 toChecksumAddress res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toDecimal"
                onClick={() => {
                  const res: any = web3Utils.toDecimal("0xc1912fee45d61c87cc5ea59dae31190fffff232d");
                  console.log('%c 888888888 toDecimal res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toHex"
                onClick={() => {
                  const res: any = web3Utils.toHex("0xc1912fee45d61c87cc5ea59dae31190fffff232d");
                  console.log('%c 888888888 toHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toNumber"
                onClick={() => {
                  const res: any = web3Utils.toNumber("0xc1912fee45d61c87cc5ea59dae31190fffff232d");
                  console.log('%c 888888888 toNumber res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toTwosComplement"
                onClick={() => {
                  const res: any = web3Utils.toTwosComplement(11, 12);
                  console.log('%c 888888888 toTwosComplement res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toUtf8"
                onClick={() => {
                  const res: any = web3Utils.toUtf8('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
                  console.log('%c 888888888 toUtf8 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="toWei"
                onClick={() => {
                  const res: any = web3Utils.toWei(10, 'wei');
                  console.log('%c 888888888 toWei res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="utf8ToHex"
                onClick={() => {
                  const res: any = web3Utils.utf8ToHex('test');
                  console.log('%c 888888888 utf8ToHex res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="uuidV4"
                onClick={() => {
                  const res: any = web3Utils.uuidV4();
                  console.log('%c 888888888 uuidV4 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(Utils);

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

// https://docs.web3js.org/libdocs/ABI

import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';
import mockData from '../../../mockData/web3APiData';

let web3ABI: any;
try {
  const web3Instance = new Web3();
  web3ABI = web3Instance.eth.abi;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const ABI = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="decodeLog"
                onClick={() => {
                  try {
                    const decodeLog = mockData.decodeLogData;
                    const res: any = web3ABI?.decodeLog?.(
                      decodeLog[0],
                      decodeLog[1],
                      decodeLog[2],
                    );
                    console.log('%c 999999999 decodeLog api 测试 is:', 'color: #0f0;', res);
                  } catch (e: any) {
                    console.log('err 2 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="decodeParameter"
                onClick={() => {
                  try {
                    const decodeParameter = mockData.decodeParameterData;
                    const res = web3ABI.decodeParameter(decodeParameter[0], decodeParameter[1]);
                    console.log('%c 999999999 decodeParameter api 测试 is:', 'color: #0f0;', res);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="decodeParameters"
                onClick={() => {
                  try {
                    // const decodeParameters = mockData.decodeParametersData;
                    // const res = web3ABI.decodeParameter(decodeParameters[0], decodeParameters[1]);

                    const decodeParametersObjData = mockData.decodeParametersObjData;
                    const objRes = web3ABI.decodeParameters(decodeParametersObjData[0], decodeParametersObjData[1]);
                    console.log('%c 999999999 decodeParameter api 测试 is:', 'color: #0f0;', objRes);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="decodeParametersWith"
                onClick={() => {
                  console.log('abi decodeParametersWith ...');
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeErrorSignature"
                onClick={() => {
                  console.log('abi encodeErrorSignature ...');
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeEventSignature"
                onClick={() => {
                  try {
                    const encodeEventSignatureData = mockData.encodeEventSignatureData;
                    const res = web3ABI.encodeEventSignature(encodeEventSignatureData);

                    const encodeEventSignatureIndexedData = mockData.encodeEventSignatureIndexedData;
                    const indexRes = web3ABI.encodeEventSignature(encodeEventSignatureIndexedData);
                    console.log('%c 999999999 encodeEventSignature api 测试 is:', 'color: #0f0;', res, indexRes);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeFunctionCall"
                onClick={() => {
                  try {
                    const encodeFunctionCallData = mockData.encodeFunctionCallData;
                    const res = web3ABI.encodeFunctionCall(encodeFunctionCallData[0], encodeFunctionCallData[1]);

                    const encodeFunctionCallOutputData = mockData.encodeFunctionCallOutputData;
                    const outputRes = web3ABI.encodeFunctionCall(encodeFunctionCallOutputData[0], encodeFunctionCallOutputData[1]);
                    console.log('%c 999999999 encodeFunctionCall api 测试 is:', 'color: #0f0;', res, outputRes);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeFunctionSignature"
                onClick={() => {
                  try {
                    const encodeFunctionSignatureData = mockData.encodeFunctionSignatureData;
                    const res = web3ABI.encodeFunctionSignature(encodeFunctionSignatureData);

                    const strRes = web3ABI.encodeFunctionSignature('myMethod(uint256,string)');

                    const multiParamsRes = web3ABI.encodeFunctionSignature('safeTransferFrom(address, address, uint256, bytes)');
                    console.log('%c 999999999 encodeFunctionSignature api 测试 is:', 'color: #0f0;', res, strRes, multiParamsRes);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeParameter"
                onClick={() => {
                  try {
                    const uint256Res = web3ABI.encodeParameter("uint256", "2345675643");

                    const uintRes = web3ABI.encodeParameter("uint", "2345675643");

                    const bytes32Res = web3ABI.encodeParameter("bytes32", "0xdf3234");

                    const bytesRes = web3ABI.encodeParameter("bytes", "0xdf3234");

                    const bytes32ARes = web3ABI.encodeParameter("bytes32[]", ["0xdf3234", "0xfdfd"]);

                    const encodeParameterData = mockData.encodeParameterData;
                    const encodeParameterRes = web3ABI.encodeParameter(...encodeParameterData);

                    console.log('%c 999999999 encodeParameter api 测试 is:', 'color: #0f0;', uint256Res, uintRes, bytes32Res, bytesRes, bytes32ARes, encodeParameterRes);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="encodeParameters"
                onClick={() => {
                  try {
                    const encodeParametersData = mockData.encodeParametersData;
                    const res = web3ABI.encodeParameters(...encodeParametersData);

                    console.log('%c 999999999 encodeFunctionSignature api 测试 is:', 'color: #0f0;', res);
                  } catch(e: any) {
                    console.log('err 3 is:', 'color: #f00;', e);
                  }
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="getMessage"
                onClick={() => {
                  console.log('abi getMessage ...');
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText
                primary="inferTypesAndEncodeParameters"
                onClick={() => {
                  console.log('abi inferTypesAndEncodeParameters ...');
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(ABI);
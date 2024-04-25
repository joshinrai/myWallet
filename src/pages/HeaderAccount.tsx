/*
 * @Author: xushenlei joshinrai@163.com
 * @Date: 2024-04-25 12:38:11
 * @LastEditors: xushenlei joshinrai@163.com
 * @LastEditTime: 2024-04-25 17:34:05
 * @FilePath: /chrome-extension-react/src/pages/HeaderAccount.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useReducer, useEffect } from 'react';

import {
  Typography,
  DialogTitle,
  Dialog,
} from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';

import AccountComponents from './AccountComponents';

import {
  AccountGlobalStyle,
  AccountWrapper,
  DialogTitleWrapper,
} from './styles';

import { Account } from './types';

const Accounts: Account[] = [
  {
    title: 'Account1',
    publicKey: '0x9896fA3a4B4979fbE8a153193260421378F562Ca',
    currency: 'USD',
    balance: '0ETH',
  },
  {
    title: 'Account2',
    publicKey: '0x9799C859D04F83970AE30FAf55dA7B39F649beaD',
    currency: 'USD',
    balance: '1ETH',
  }
];

const initialState = {
  showDialog: false,
  accountValue: 'Account1',
  publicKey: '0x9896fA3a4B4979fbE8a153193260421378F562Ca',
  showAccountList: true,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let timeOut: any;

const HeaderAccount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog, accountValue, publicKey, showAccountList } = state;

  useEffect(() => {
    if (timeOut) {
      clearTimeout(timeOut);
      timeOut = void 0;
    }
  }, []);

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <AccountGlobalStyle />

      <AccountWrapper>
        <div
          className="top_wrapper"
          onClick={() => {
            dispatch({
              showDialog: true,
            });
          }}
        >
          <AttachMoneyIcon />
          <span>{accountValue}</span>
          <div className="expand_more" />
        </div>

        <div className="bottom_wrapper">
          <section className="text_wrapper">
            {/* <span className="public_key" title={publicKey}>{publicKey}</span> */}
            <span className="front_span">{publicKey.slice(0, 7)}</span>
            <span className="ellipses_span">...</span>
            <span className="end_span">{publicKey.slice(-7)}</span>
          </section>
        </div>
      </AccountWrapper>

      <Dialog
        onClose={() => {
          dispatch({ showDialog: false });
          timeOut = setTimeout(() => {
            dispatch({
              showAccountList: true,
            });
          }, 200);
        }}
        open={showDialog}
        sx={{
          minWidth: {
            xs: 300,
            md: 300,
          }
        }}
      >
        <DialogTitle>
          <DialogTitleWrapper>
            { showAccountList ? '选择一个账户' : '添加账户' }
            <CloseIcon
              onClick={() => {
                dispatch({ showDialog: false });
                timeOut = setTimeout(() => {
                  dispatch({
                    showAccountList: true,
                  });
                }, 200);
              }}
            />
          </DialogTitleWrapper>
        </DialogTitle>
        {
          showAccountList ? (
            <AccountComponents.AccountList Accounts={Accounts} outerDispatch={dispatch} />
          ) : (
            <AccountComponents.AddNewAccount />
          )
        }
      </Dialog>
    </Typography>
  );
};

export default memo(HeaderAccount);

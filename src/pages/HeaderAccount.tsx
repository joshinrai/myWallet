/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Typography,
  DialogTitle,
  Dialog,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import Web3 from 'web3';

import AccountComponents from './AccountComponents';

import {
  AccountGlobalStyle,
  AccountWrapper,
  DialogTitleWrapper,
} from './styles';

const initialState = {
  showDialog: false,
  publicKey: '0x9896fA3a4B4979fbE8a153193260421378F562Ca',
  showAccountList: true,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let timeOut: any;

const HeaderAccount = (props: any) => {
  const { walletInstance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog, showAccountList } = state;

  const currentAccount = useSelector((reduxState: any) => reduxState.account.currentAccount);
  const accountList = useSelector((reduxState: any) => reduxState.account.accountList);

  const accountValue = currentAccount?.title;
  const publicKey = currentAccount?.address;

  const loadWalletAddress = async () => {
    const loadWallet = await walletInstance.load(Web3.utils.sha3Raw('test'));
    console.log('%c 888888 loadWallet is:', 'color: #0f0;', walletInstance, loadWallet, loadWallet.length);
  };

  useEffect(() => {
    loadWalletAddress();
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
          <img src="/crypto.svg" alt="account" className="crypto_account" />
          <span>{accountValue}</span>
          <div className="expand_more" />
        </div>

        <div className="bottom_wrapper">
          <section className="text_wrapper">
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
            <AccountComponents.AccountList Accounts={accountList} outerDispatch={dispatch} />
          ) : (
            <AccountComponents.AddNewAccount />
          )
        }
      </Dialog>
    </Typography>
  );
};

export default memo(HeaderAccount);

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
import cloneDeep from 'lodash/cloneDeep';

import AccountComponents from './AccountComponents';

import {
  AccountGlobalStyle,
  AccountWrapper,
  DialogTitleWrapper,
} from './styles';

const initialState = {
  showDialog: false,
  currentPublicKey: '',
  accountList: [],
  showAccountList: true,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let timeOut: any;

const HeaderAccount = (props: any) => {
  const { web3Instance, walletInstance, accounts } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog, currentPublicKey, accountList, showAccountList } = state;

  const currentAccount = useSelector((reduxState: any) => reduxState.account.currentAccount);

  const accountValue = currentAccount?.title;

  const loadWalletAddress = async () => {
    const loadWallet = await walletInstance.load(Web3.utils.sha3Raw('test'), 'myWallet');
    const walletList = cloneDeep(loadWallet);
    const walletLen = walletList.length;
    for (let i = 0; i < walletLen; i += 1) {
      const walletItem = walletList[i];
      const balance: any = await web3Instance.eth.getBalance(walletItem.address);
      const toEth = Web3.utils.toWei(balance, "ether");
      walletItem.balance = `${toEth}eth`;
      console.log('% 66666666 balance is:', '#color: #f00;', balance, toEth);
    }
    dispatch({
      currentPublicKey: walletList?.[0]?.address,
      accountList: walletList,
    });
    console.log('%c 1008611 header account loadWallet is:', 'color: #0f0;', loadWallet, loadWallet.length);
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
            <span className="front_span">{currentPublicKey.slice(0, 7)}</span>
            <span className="ellipses_span">...</span>
            <span className="end_span">{currentPublicKey.slice(-7)}</span>
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
            <AccountComponents.AccountList
              Accounts={accountList}
              outerDispatch={dispatch}
              walletInstance={walletInstance}
            />
          ) : (
            <AccountComponents.AddNewAccount
              walletInstance={walletInstance}
              accounts={accounts}
            />
          )
        }
      </Dialog>
    </Typography>
  );
};

export default memo(HeaderAccount);

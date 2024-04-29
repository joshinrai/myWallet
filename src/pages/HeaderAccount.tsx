/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Typography,
  DialogTitle,
  Dialog,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import Web3 from 'web3';
import cloneDeep from 'lodash/cloneDeep';

import { setAccountLenght, changeCurrentAccount } from '../store/accountsSlice';

import AccountComponents from './AccountComponents';

import {
  AccountGlobalStyle,
  AccountWrapper,
  DialogTitleWrapper,
} from './styles';

const nullSet = new Set([null, void 0, '']);

const initialState = {
  showDialog: false,
  accountList: [],
  showAccountList: true,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let timeOut: any;

const HeaderAccount = (props: any) => {
  const { web3Instance, walletInstance, accounts } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    showDialog,
    accountList,
    showAccountList,
  } = state;

  const reduxDispatch = useDispatch();
  const accountStore = useSelector((reduxState: any) => reduxState.account);
  const navigate = useNavigate();

  const {
    currentAccount,
    password,
    accountLength,
  } = accountStore;

  const loadWalletAddress = async () => {
    if (password) {
      const loadWallet = await walletInstance.load(password, 'myWallet');
      const firstAccountAddress = loadWallet?.[0]?.address;
      reduxDispatch(changeCurrentAccount(firstAccountAddress));
      const walletLen = loadWallet.length;
      const set = new Set();
      const walletList: any = [];
      for (let i = 0; i < walletLen; i += 1) {
        let walletItem: any = cloneDeep(loadWallet[i]);
        const address = walletItem.address;
        if (set.has(address)) continue;
        set.add(address);
        const balance: any = await web3Instance.eth.getBalance(address);
        const ethBalance: string = Web3.utils.fromWei(balance, 'ether');
        walletItem.balance = `${(+ethBalance).toFixed(4)}`;
        walletList.push(walletItem);
      }
      dispatch({
        accountList: walletList,
      });
      reduxDispatch(setAccountLenght(walletLen));
    }
  };

  useEffect(() => {
    const myWalletStorage = localStorage.myWallet;
    if (nullSet.has(myWalletStorage)) {
      navigate('/welcom');
    } else if (nullSet.has(password)) {
      navigate('/login');
    }
  }, [password]);

  useEffect(() => {
    loadWalletAddress();
    if (timeOut) {
      clearTimeout(timeOut);
      timeOut = void 0;
    }
  }, [password, accountLength]);

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
          <span>{'Account1'}</span>
          <div className="expand_more" />
        </div>

        <div className="bottom_wrapper">
          <section className="text_wrapper">
            <span className="front_span">{currentAccount?.slice?.(0, 7)}</span>
            <span className="ellipses_span">...</span>
            <span className="end_span">{currentAccount?.slice?.(-7)}</span>
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
              outerDispatch={dispatch}
              accounts={accounts}
            />
          )
        }
      </Dialog>
    </Typography>
  );
};

export default memo(HeaderAccount);

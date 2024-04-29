/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { memo, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Dialog,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

import { blue } from '@mui/material/colors';

import QRCode from 'qrcode';

import { changeCurrentAccount, deleteAccount } from '../../store/accountsSlice';

import { SelectAccountWrapper } from '../styles';
import { MoreIcon, ImportPrivateKeyWrapper } from './styles';

let timeout: any = void 0;

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialState = {
  anchorEl: null,
  open: false,
  currentAccount: null,
  showDialog: false,
  SnackbarOpen: false,
  accountMessage: '',
  status: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const AccountList = (props: any) => {
  const { Accounts, outerDispatch, walletInstance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { anchorEl, open, currentAccount, showDialog, SnackbarOpen, accountMessage, status } = state;

  const reduxDispatch = useDispatch();
  const password = useSelector((reduxState: any) => reduxState.account.password);

  const handleClose = () => {
    dispatch({
      open: false,
    });
  };

  const showDetail = () => {
    dispatch({
      showDialog: true,
    });
    timeout = setTimeout(() => {
      const canvas = document.querySelector('#qrCode');
      if (canvas) {
        QRCode.toCanvas(canvas, currentAccount.address, function (error: any) {
          if (error) console.error(error)
          console.log('%c 666666 生成账户二维码success!', 'color: #0f0;');
        });
      }
    }, 100);
  };

  const hideAccount = async () => {
    try {
      const removeRes: any = await walletInstance.remove(currentAccount.address);
      const res: any = await walletInstance.save(password, 'myWallet');
      if (removeRes && res) {
        dispatch({
          anchorEl: null,
          open: false,
          currentAccount: void 0,
          SnackbarOpen: true,
          accountMessage: '账户隐藏成功!',
          status: 'success',
        });
        reduxDispatch(deleteAccount());
      } else {
        dispatch({
          SnackbarOpen: true,
          accountMessage: '账户隐藏失败!',
          status: 'error',
        });
      }
    } catch (e: any) {
      console.log('%c 50000 e is:', 'color: #f00;', e);
    }
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
    };
  }, []);

  return (
    <List
      sx={{
        pt: 0,
        height: '400px',
      }}
    >
      {
        Accounts.map((account: any, index: number) => {
          const address = account.address;
          const [front, end] = [address.slice(0, 7), address.slice(-7)];
          return (
            <ListItem
              button
              onClick={() => {
                reduxDispatch(changeCurrentAccount(account?.address));
                console.log('%c 9999999 account is:', 'color: #0f0;', account);
                outerDispatch({
                  showDialog: false,
                });
              }}
              key={account.address}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <SelectAccountWrapper>
                <div className="account">
                  <span>{account?.title ?? `Account${index + 1}`}</span>
                  <section className="currency_action">
                    <span>{account.currency}</span>
                    <MoreIcon
                      onClick={(e: any) => {
                        dispatch({
                          anchorEl: e.target,
                          open: true,
                          currentAccount: account,
                        });
                        e?.preventDefault?.();
                        e?.stopPropagation?.();
                      }}
                    >
                      ...
                    </MoreIcon>
                  </section>
                </div>
                <div className="address">
                  <section className="text_wrapper">
                    <span className="front_span">{front}</span>
                    <span className="ellipses_span">...</span>
                    <span className="end_span">{end}</span>
                  </section>
                  <section className="account_balance">
                    <span className="account_count">{account.balance}</span>
                    <span className="balance_unit">Sepolia ETH</span>
                  </section>
                </div>
              </SelectAccountWrapper>
            </ListItem>
          );
        })
      }

      <ListItem
        autoFocus
        button
        onClick={() => {
          outerDispatch({
            showAccountList: false,
          });
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add account" />
      </ListItem>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          [{
            title: '账户详情',
            key: 'detail',
          }, {
            title: '隐藏账户',
            key: 'hide',
          }].map(({ title, key }: any) => (
            <MenuItem
              onClick={() => {
                if (key === 'detail') showDetail();
                else if (key === 'hide') hideAccount();
              }}
              key={key}
            >
              {title}
            </MenuItem>
          ))
        }
      </Menu>

      <Dialog
        onClose={() => {
          dispatch({
            showDialog: false,
          });
        }}
        open={showDialog}
        sx={{
          minWidth: {
            xs: 300,
            md: 300,
          }
        }}
      >
        <ImportPrivateKeyWrapper>
          <h2>账户详情</h2>
          <canvas id="qrCode"></canvas>
          <span className="account_address">
            {currentAccount?.address}
          </span>
        </ImportPrivateKeyWrapper>
      </Dialog>

      <Snackbar
        open={SnackbarOpen}
        autoHideDuration={2000}
        onClose={() => {
          dispatch({
            SnackbarOpen: false,
            accountMessage: '',
            status: '',
          });
        }}
      >
        <Alert
          severity={status}
          sx={{ width: '100%' }}
        >
          {accountMessage}
        </Alert>
      </Snackbar>
    </List>
  );
};

export default memo(AccountList);

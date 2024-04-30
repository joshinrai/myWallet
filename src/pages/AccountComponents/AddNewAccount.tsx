/* eslint-disable react-refresh/only-export-components */
import React, { memo, useReducer, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import {
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Snackbar,
  Alert as MuiAlert,
  Dialog,
  TextField,
} from '@mui/material';
import { purple } from '@mui/material/colors';

import AddIcon from '@mui/icons-material/Add';

import throttle from 'lodash/throttle';

import { addAccount } from '../../store/accountsSlice';

import { ImportPrivateKeyWrapper } from './styles';

const ColorButton = styled(Button)(({ theme }) => ({
  width: '300px',
  height: '50px',
  marginTop: '10px',
  borderRadius: '25px',
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const initialState = {
  open: false,
  accountMessage: '',
  status: '',
  showDialog: false,
  fieldError: false,
  helperText: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddNewAccount = (props: any) => {
  const { walletInstance, outerDispatch, accounts } = props;

  const inputRef: any = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, accountMessage, status, showDialog, fieldError, helperText } = state;

  const password = useSelector((reduxState: any) => reduxState.account.password);
  const reduxDispatch = useDispatch();

  const judgePrivateKey = async (value: any) => {
    dispatch({
      fieldError: !value,
      helperText: !value ? '请填入私钥！' : '',
    });
    if (value) {
      try {
        await accounts.parseAndValidatePrivateKey(`0x${value}`);
        return true;
      } catch (e: any) {
        dispatch({
          fieldError: true,
          helperText: '请填入正确的私钥！',
        });
        return false;
      }
    }
  };

  return (
    <>
      <List sx={{ pt: 0 }}>
        <ListItem
          autoFocus
          button
          onClick={async () => {
            try {
              await walletInstance.create(1);
              await walletInstance.save(password, import.meta.env.VITE_PROJECT_WALLET_NAME);
              dispatch({
                open: true,
                accountMessage: 'account创建成功!',
                status: 'success',
              });
              outerDispatch({
                showAccountList: true,
              });
              reduxDispatch(addAccount());
            } catch (e: any) {
              dispatch({
                open: true,
                accountMessage: 'account创建失败!',
                status: 'error',
              });
            }
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add a new account" />
        </ListItem>

        <ListItem
          autoFocus
          button
          onClick={() => {
            dispatch({
              showDialog: true,
            });
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="导入账户" />
        </ListItem>
      </List>
      <Dialog
        onClose={() => {
          dispatch({ showDialog: false });
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
          <h2>导入账户</h2>
          <TextField
            inputRef={inputRef}
            id="login_field"
            label="私钥"
            variant="filled"
            type="password"
            error={fieldError}
            helperText={helperText}
            onChange={throttle(async (e: any) => {
              const value = e?.target?.value;
              judgePrivateKey(value);
            }, 200)}
            sx={{
              width: '300px',
              background: '#fffb8f',
              borderRadius: '5px',
            }}
          />

          <ColorButton
            variant="contained"
            onClick={async () => {
              try {
                const value = inputRef?.current?.value;
                await judgePrivateKey(value);
                await walletInstance.add(`0x${value}`);
                dispatch({
                  showDialog: false,
                  open: true,
                  accountMessage: '加载钱包成功!',
                  status: 'success',
                });
                outerDispatch({
                  showAccountList: true,
                });
                reduxDispatch(addAccount());
              } catch (e: any) {
                console.log('%c 钱包加载失败 e is:', 'color: #f00;', e);
                dispatch({
                  open: true,
                  accountMessage: '加载钱包失败!',
                  status: 'error',
                });
              }
            }}
          >
            确定
          </ColorButton>
        </ImportPrivateKeyWrapper>
      </Dialog>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => {
          dispatch({
            open: false,
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
    </>
  );
};

export default memo(AddNewAccount);

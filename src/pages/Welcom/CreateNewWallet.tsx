import { memo, useReducer, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  TextField,
} from '@mui/material';
import { purple } from '@mui/material/colors';

import Web3 from 'web3';
import throttle from 'lodash/throttle';

import { setPassword } from '../../store/accountsSlice';

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

let [passwordText, confirmText] = ['', ''];

const NULLSet = new Set(['', null, void 0]);

const initialState = {
  pswError: false,
  pswhelperText: '',

  cfmError: false,
  cfmhelperText: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

// TODO: form改为非受控模式
const CreateNewWallet = (props: any) => {
  const { outerDispatch, showDialog, walletInstance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    pswError,
    pswhelperText,
    cfmError,
    cfmhelperText,
  } = state;

  const [passwordRef, comfirmRef]: any = [useRef(null), useRef(null)];

  const reduxDispatch = useDispatch();

  return (
    <Dialog
      onClose={() => {
        outerDispatch({ showAddDialog: false });
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
        <h2>创建新钱包</h2>
        <TextField
          inputRef={passwordRef}
          id="password_field"
          label="设置密码"
          variant="filled"
          type="password"
          error={pswError}
          helperText={pswhelperText}
          onChange={throttle((e: any) => {
            const value = e?.target?.value;
            passwordText = Web3.utils.sha3Raw(value);
            const isEqual = passwordText === confirmText;
            const helperText = !value ? '请填入密码！' : (isEqual ? '' : '密码不匹配!');

            const compareBool = !!helperText;

            const obj = {
              pswError: compareBool,
              cfmError: compareBool,
              pswhelperText: helperText,
            };
            if (!isEqual) Object.assign(obj, { cfmhelperText: '密码不匹配!' });
            dispatch(obj);
          }, 200)}
          sx={{
            width: '300px',
            background: '#fffb8f',
            borderRadius: '5px',
          }}
        />

        <TextField
          inputRef={comfirmRef}
          id="confirm_field"
          label="确认密码"
          variant="filled"
          type="password"
          error={cfmError}
          helperText={cfmhelperText}
          onChange={throttle((e: any) => {
            const value = e?.target?.value;
            confirmText = Web3.utils.sha3Raw(value);
            const isEqual = passwordText === confirmText;
            const helperText = !value ? '请确认密码！' : (isEqual ? '' : '密码不匹配!');
            const compareBool = !!helperText;

            const obj = {
              pswError: compareBool,
              cfmError: compareBool,
              cfmhelperText: helperText,
            };

            if (!isEqual) Object.assign(obj, { pswhelperText: '密码不匹配' });

            dispatch(obj);
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
              const [
                pswValue,
                cfmValue,
              ] = [
                passwordRef?.current?.value,
                comfirmRef?.current?.value,
              ];
              let returnBool = false;
              if (NULLSet.has(pswValue)) {
                dispatch({
                  pswError: true,
                  pswhelperText: '请输入密码！',
                });
                returnBool = true;
              }
              if (NULLSet.has(cfmValue)) {
                dispatch({
                  cfmError: true,
                  cfmhelperText: '请填入确认密码！',
                });
                returnBool = true;
              }
              if (returnBool || [pswError, cfmError].some(Boolean)) return;
              await walletInstance.create(1);
              const walletName = import.meta.env.VITE_PROJECT_WALLET_NAME;
              await walletInstance.save(confirmText, walletName);
              // await walletInstance.load(confirmText, walletName);
              reduxDispatch(setPassword(confirmText as any));
              outerDispatch({
                showAddDialog: false,
              });
            } catch(e: any) {
              console.log('error is:', 'color: #f00;', e);
              dispatch({
                fieldError: true,
                helperText: '请填入正确私钥！',
              });
            }
          }}
        >
          确定
        </ColorButton>
      </ImportPrivateKeyWrapper>
    </Dialog>
  );
};

export default memo(CreateNewWallet);

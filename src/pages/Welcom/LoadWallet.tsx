import { memo, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
  Dialog,
  TextField,
} from '@mui/material';
import { purple } from '@mui/material/colors';

import Web3 from 'web3';
import throttle from 'lodash/throttle';

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
  fieldError: false,
  helperText: '',

  pswError: false,
  pswhelperText: '',

  cfmError: false,
  cfmhelperText: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const LoadWallet = (props: any) => {
  const { outerDispatch, showDialog, accounts, walletInstance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    fieldError,
    helperText,
    pswError,
    pswhelperText,
    cfmError,
    cfmhelperText,
  } = state;

  const navigate = useNavigate();

  const [inputRef, passwordRef, comfirmRef]: any = [useRef(null), useRef(null), useRef(null)];

  return (
    <Dialog
      onClose={() => {
        outerDispatch({ showDialog: false });
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
        <h2>导入密钥</h2>
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
            dispatch({
              fieldError: !value,
              helperText: !value ? '请填入私钥！' : '',
            });
            if (value) {
              try {
                const validRes = await accounts.parseAndValidatePrivateKey(`0x${value}`);
                console.log('%c 666666666 validRes is:', 'color: #0f0;', validRes);
              } catch (e: any) {
                dispatch({
                  fieldError: true,
                  helperText: '请填入正确的私钥！',
                });
              }
            }
          }, 200)}
          sx={{
            width: '300px',
            background: '#fffb8f',
            borderRadius: '5px',
          }}
        />

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
                primaryKeyValue,
                pswValue,
                cfmValue,
              ] = [
                inputRef?.current?.value,
                passwordRef?.current?.value,
                comfirmRef?.current?.value,
              ];
              let returnBool = false;
              if (NULLSet.has(primaryKeyValue)) {
                dispatch({
                  fieldError: true,
                  helperText: '请填入私钥！',
                });
                returnBool = true;
              }
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
              if (returnBool || [fieldError, pswError, cfmError].some(Boolean)) return;
              const res: any = await walletInstance.add(`0x${primaryKeyValue}`);
              const saveBool = await walletInstance.save(Web3.utils.sha3Raw(pswValue), import.meta.env.VITE_PROJECT_WALLET_NAME);
              console.log('%c 9999999 确定 ...', 'color: #0f0;', res, saveBool);
              outerDispatch({
                showDialog: false,
              });
              navigate('/');
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

export default memo(LoadWallet);

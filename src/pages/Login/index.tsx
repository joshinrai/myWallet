import { memo, useRef, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import Web3 from 'web3';
import throttle from 'lodash/throttle';

import { LoginWrapper } from './styles';

let walletInstance: any;
try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance: any = new Web3(new Web3.providers.HttpProvider(`${providerUrl}`));
  console.log('%c 111111111 web3Instance.modules is:', 'color: #0f0;', web3Instance.modules, web3Instance);
  walletInstance = web3Instance?.eth?.accounts?.wallet;
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

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
  fieldError: false,
  helperText: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

// TODO: form表单改为非受控组件
const Login = () => {
  const inputRef: any = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { fieldError, helperText } = state;

  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <div className="login_content">
        <img src="/wallet.svg" alt="我的钱包" />
        <h2>欢迎回来！</h2>
        <h4>即将进入去中心化钱包！</h4>
        <TextField
          inputRef={inputRef}
          id="login_field"
          label="密码"
          variant="filled"
          type="password"
          error={fieldError}
          helperText={helperText}
          onChange={throttle((e: any) => {
            const value = e?.target?.value;
            dispatch({
              fieldError: !value,
              helperText: !value ? '请输入密码！' : '',
            });
          }, 200)}
          sx={{
            width: '300px',
            background: '#f0f0f0',
            borderRadius: '5px',
          }}
        />

        <ColorButton
          variant="contained"
          onClick={async () => {
            // const walletIns = await walletInstance.create(1);
            // const saveBool = await walletInstance.save('test#!$2', 'myWallet');
            try {
              const inputValue = inputRef?.current?.value;
              const loadWallet = await walletInstance.load(inputValue); // test#!$2
              console.log('%c 8888888 登录 成功 ...', 'color: #0f0;', inputValue, loadWallet);
              navigate('/');
            } catch (e: any) {
              console.log('error is:', 'color: #f00;', e);
              dispatch({
                fieldError: true,
                helperText: '密码不正确！',
              });
            }
          }}
        >
          登录
        </ColorButton>
      </div>
    </LoginWrapper>
  );
};

export default memo(Login);

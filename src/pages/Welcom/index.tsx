import { memo, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import CreateNewWallet from './CreateNewWallet';
import LoadWallet from './LoadWallet';

import { WelcomWrapper } from './styles';

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

const BootstrapButton = styled(Button)({
  width: '300px',
  height: '50px',
  marginTop: '10px',
  borderRadius: '25px',

  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const initialState = {
  showDialog: false,
  showAddDialog: false,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const Welcom = (props: any) => {
  const { accounts, walletInstance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    showAddDialog,
    showDialog,
  } = state;

  const password = useSelector((reduxState: any) => reduxState.account.password);

  const navigate = useNavigate();

  return (
    <WelcomWrapper>
      <div className="welcom_content">
        <h2>让我们开始创建一个crypto钱包吧！</h2>
        <img src="/wallet.svg" alt="我的钱包" />

        <ColorButton
          variant="contained"
          onClick={async () => {
            dispatch({ showAddDialog: true });
            // const res: any = await walletInstance.create(1);
            console.log('%c 111111 创建 新钱包...', 'color: #0f0;');
          }}
        >
          创建新钱包
        </ColorButton>
        <BootstrapButton
          variant="contained"
          disableRipple
          onClick={() => dispatch({ showDialog: true })}
        >
          导入现有钱包
        </BootstrapButton>

        <Button
          variant="contained"
          sx={{
            marginTop: '20px',
          }}
          onClick={async () => {
            const loadWallet = await walletInstance.load(password, import.meta.env.VITE_PROJECT_WALLET_NAME);
            console.log('%c 8888888 测试加载钱包 ...', 'color: #ff0;', loadWallet, loadWallet.length);
          }}
        >
          测试加载钱包
        </Button>

        <Button
          variant="contained"
          sx={{
            marginTop: '20px',
          }}
          onClick={async () => {
            navigate('/');
          }}
        >
          跳转首页
        </Button>
      </div>

      <CreateNewWallet
        outerDispatch={dispatch}
        showDialog={showAddDialog}
        walletInstance={walletInstance}
      />

      <LoadWallet
        outerDispatch={dispatch}
        showDialog={showDialog}
        accounts={accounts}
        walletInstance={walletInstance}
      />
    </WelcomWrapper>
  );
};

export default memo(Welcom);

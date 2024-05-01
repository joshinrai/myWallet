import { memo, useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';

import {
  Tabs,
  Tab,
  Typography,
  Box,
} from '@mui/material';

import Web3 from 'web3';

import Transfer from './transfer';
import { HomeWrapper } from './styles';

import {
  sepoliaEtherscanInstance,
  etherscanInstance,
  request,
} from '../../utils/myRequest';

const actionList = [
  {
    icon: '/send.svg',
    name: '发送',
    key: 'send'
  },
  {
    icon: '/buySell.svg',
    name: '测试metaMask调用',
    key: 'metamask'
  },
];

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    sx: {
      color: '#fff'
    }
  };
}

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const initialState = {
  ethBalance: '',
  showDialog: false,
  currentChainId: '',
  usdBalance: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const Home = (props: any) => {
  const { web3Instance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { ethBalance, showDialog, currentChainId, usdBalance } = state;

  const currentAccount = useSelector((reduxState: any) => reduxState.account.currentAccount);

  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: any) => setValue(newValue);

  const getAccount = async () => {
    const [
      balance,
      chainId,
      transCount,
      priceRes
    ] = await Promise.all([
      web3Instance.eth.getBalance(currentAccount),
      web3Instance.eth.getChainId(),
      web3Instance.eth.getTransactionCount(currentAccount),
      etherscanInstance.get(`/api?module=stats&action=ethprice&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`),
    ]);
    const chainIdNumber = web3Instance.utils.toNumber(chainId);

    const res: any = await request('eth_blockNumber', chainIdNumber, []);
    const latestBlock = res?.data?.result;
    console.log('%c 888888888 latestBlock is:', 'color: #f00;', latestBlock, priceRes);
    const transactions = await sepoliaEtherscanInstance.get(`/api?module=account&action=txlist&contractaddress=0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43&address=0x2337eE72E227259C6432A6Ef03F294A6738dbF7B&startblock=0&endblock=99999999&page=1&offset=1000&sort=asc&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`);
    console.log('%c 999999999 transactions is:', 'color: #0f0;', transactions);
    // 获取最后一条交易记录
    const latestTransaction = await request(
      'eth_getTransactionByBlockNumberAndIndex',
      chainIdNumber,
      [latestBlock, '0x0']
    );
    console.log('%c 777777777 res is:', 'color: #ff0;', res, latestBlock, latestTransaction);
    for (let i = 0; i < transCount; i += 1) {
      // const bigintNumber = web3Instance.utils.toBigInt(i);
      // const res: any = await request('eth_getTransactionByBlockNumberAndIndex', chainIdNumber, [`${bigintNumber}`, 0]);
      // const res: any = await request('eth_blockNumber', chainIdNumber, []);
      // console.log('%c 777777777 res is:', 'color: #ff0;', res);
    }
    console.log(
      '%c 666666666666 transCount is:',
      'color: #0f0;',
      transCount,
      web3Instance.eth.getTransactionByBlockNumberAndIndex,
    );
    const eBalance: string = Web3.utils.fromWei(balance, 'ether');
    const usdBa = +eBalance * priceRes.data.result.ethusd;

    dispatch({
      ethBalance: `${(+eBalance).toFixed(4)}`,
      currentChainId: chainIdNumber,
      usdBalance: usdBa.toFixed(2),
    });
  };

  useEffect(() => {
    if (currentAccount) getAccount();
  }, [currentAccount]);

  return (
    <HomeWrapper>
      <div className="assets_wrapper">
        <section>
          <span className="account_count">{ethBalance}</span>
          <span className="balance_unit">Sepolia ETH</span>
        </section>
        <span>${usdBalance ?? '0.00'} USD</span>
      </div>

      <div className="action_wrapper">
        {
          actionList.map((item: any) => (
            <section
              key={item.key}
              className="icon_wrapper"
              onClick={async () => {
                if (item.key === 'send') {
                  dispatch({ showDialog: true });
                } else if (item.key === 'metamask') {
                  const win: any = window;
                  const web3 = new Web3(win?.ethereum);

                  await win.ethereum?.request({ method: 'eth_requestAccounts' });

                  const accounts = await web3.eth.getAccounts();
                  console.log('%c 6666666666  metamask...', 'color: #0f0;', accounts);
                }
              }}
            >
              <img src={item.icon} alt={item.name} className="icon_image" />
              <span className="icon_name">{item.name}</span>
            </section>
          ))
        }
      </div>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wallet address"
            centered
          >
            <Tab
              label="代币"
              {...a11yProps(0)}
            />
            <Tab
              label="活动"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
        >
          代币
        </TabPanel>
        <TabPanel
          value={value} index={2}
        >
          活动
        </TabPanel>
      </Box>

      <Transfer
        web3Instance={web3Instance}
        showDialog={showDialog}
        dispatch={dispatch}
        ethBalance={ethBalance}
        currentChainId={currentChainId}
        currentAccount={currentAccount}
      />
    </HomeWrapper>
  );
};

export default memo(Home);

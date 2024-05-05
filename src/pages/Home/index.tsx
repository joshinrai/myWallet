import { memo, useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';

import {
  Tabs,
  Tab,
  Typography,
  Box,
} from '@mui/material';

import Web3 from 'web3';
import dayjs from 'dayjs';

import Transfer from './transfer';
import { HomeWrapper, TransactionHistoryWrapper } from './styles';

import {
  sepoliaEtherscanInstance,
  etherscanInstance,
} from '../../utils/myRequest';

const etherFromWei = Web3.utils.fromWei;

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

let switchBool: boolean = false;

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
  currentTransactions: [],
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const Home = (props: any) => {
  const { web3Instance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    ethBalance,
    showDialog,
    currentChainId,
    usdBalance,
    currentTransactions,
  } = state;

  const currentAccount = useSelector((reduxState: any) => reduxState.account.currentAccount);

  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: any) => setValue(newValue);

  const getTransactions = async (accountAddress: any) => {
    const transactionRes = await sepoliaEtherscanInstance.get(`/api?module=account&action=txlist&contractaddress=0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43&address=${accountAddress}&startblock=0&endblock=99999999&page=1&offset=1000&sort=desc&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`);
    const transactions = (transactionRes?.data?.result ?? []).map((item: any) => {
      const timeStamp = +item.timeStamp * 1000;
      const transDate = dayjs(timeStamp).format('YYYY-MM-DD');
      const transTime = dayjs(timeStamp).format('YYYY-MM-DD HH:mm:ss');
      return {
        ...item,
        transDate,
        transTime,
        ethNum: (+etherFromWei(item.value, 'ether'))?.toFixed(4),
      };
    });
    return transactions;
  };

  const getAccount = async () => {
    const [
      balance,
      chainId,
      priceRes
    ] = await Promise.all([
      web3Instance.eth.getBalance(currentAccount),
      web3Instance.eth.getChainId(),
      etherscanInstance.get(`/api?module=stats&action=ethprice&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`),
    ]);
    const chainIdNumber = web3Instance.utils.toNumber(chainId);

    const transactions = await getTransactions(currentAccount);
    const eBalance: string = etherFromWei(balance, 'ether');
    const usdBa = +eBalance * priceRes.data.result.ethusd;

    dispatch({
      ethBalance: `${(+eBalance).toFixed(4)}`,
      currentChainId: chainIdNumber,
      usdBalance: usdBa.toFixed(2),
      currentTransactions: transactions ?? [],
    });
  };

  const refreshTransList = async () => {
    const transactions = await getTransactions(currentAccount);
    dispatch({
      currentTransactions: transactions ?? [],
    });
  };

  useEffect(() => {
    if (switchBool && !showDialog && currentAccount) {
      refreshTransList();
    }
    if (showDialog) switchBool = true;
  }, [showDialog]);

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
              label="活动"
              {...a11yProps(0)}
            />
            <Tab
              label="NFT"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
        >
          <TransactionHistoryWrapper>
            {
              currentTransactions.map((item: any) => (
                <li key={item.timeStamp}>
                  <div className="split_wrapper">
                    <span className="recieve_status">{
                      item?.contractAddress ? 'ERC20代币' : (
                        `${currentAccount}`.toLowerCase() === item.from.toLowerCase() ? '发送' : '收款'
                      )
                    }</span>
                    <span>{item.ethNum}Sepolia ETH</span>
                  </div>

                  <div className="split_wrapper">
                    <span className="trans_status">{item.txreceipt_status === '1' ? '已确认' : '收款中'}</span>
                    <span>{item.transTime}</span>
                  </div>
                </li>
              ))
            }
          </TransactionHistoryWrapper>
        </TabPanel>
        <TabPanel
          value={value} index={2}
        >
          NFT
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

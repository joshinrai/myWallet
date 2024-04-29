import { memo, useState } from 'react';

import { useSelector } from 'react-redux';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Web3 from 'web3';

import { HomeWrapper } from './styles';

const actionList = [
  {
    icon: '/buySell.svg',
    name: 'Buy & Sell',
    key: 'buySell'
  },
  {
    icon: '/send.svg',
    name: '发送',
    key: 'send'
  },
  {
    icon: '/exchange.svg',
    name: '兑换',
    key: 'exchange'
  },
  {
    icon: '/crossChain.svg',
    name: '测试',
    key: 'crossBridge'
  },
  {
    icon: '/portfolio.svg',
    name: 'Portfolio',
    key: 'portfolio'
  }
];

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
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

try {
  const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
  const web3Instance = new Web3(`${providerUrl}`);
  console.log('%c 7777777777 web3Instance is:', 'color: #ff0;', web3Instance);
} catch (e) {
  console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
}

const Home = (props: any) => {
  const { walletInstance } = props;
  console.log('%c 8888888888 props is:', 'color: #0f0;', props);

  const [value, setValue] = useState(0);
  const count = useSelector((reduxState: any) => reduxState.account.value);
  const accountList = useSelector((reduxState: any) => reduxState.account.accountList);
  // const reduxDispatch = useDispatch();
  console.log('%c 777777777 count is:', 'color: #f00;', count, accountList);

  const handleChange = (_event: any, newValue: any) => setValue(newValue);

  return (
    <HomeWrapper>
      <div className="assets_wrapper">
        <span>0LineaETH</span>
        <span>$0.00 USD</span>
      </div>

      <div className="action_wrapper">
        {
          actionList.map((item: any) => (
            <section
              key={item.key}
              className="icon_wrapper"
              onClick={async () => {
                const loadWallet = await walletInstance.load(Web3.utils.sha3Raw('test'), 'myWallet');
                // reduxDispatch(increment());
                console.log('%c 88888 test redux ...', 'color: #ff0;', item, loadWallet, loadWallet.length);
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
          <Tab label="代币" {...a11yProps(0)} />
          <Tab label="收藏品" {...a11yProps(1)} />
          <Tab label="活动" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        代币
      </TabPanel>
      <TabPanel value={value} index={1}>
        收藏品
      </TabPanel>
      <TabPanel value={value} index={2}>
        活动
      </TabPanel>
    </Box>
    </HomeWrapper>
  );
};

export default memo(Home);

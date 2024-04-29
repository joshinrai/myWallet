import { memo, useState, useEffect, useReducer, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
  Dialog,
  DialogTitle,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Web3 from 'web3';
import throttle from 'lodash/throttle';
import { HomeWrapper, DialogTitleWrapper, TransferWrapper } from './styles';

const actionList = [
  /* {
    icon: '/buySell.svg',
    name: 'Buy & Sell',
    key: 'buySell'
  }, */
  {
    icon: '/send.svg',
    name: '发送',
    key: 'send'
  },
  /* {
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
  } */
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
  addressError: true,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const Home = (props: any) => {
  const { web3Instance } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { ethBalance, showDialog, addressError } = state;

  const publicKeyRef: any = useRef(null);

  const currentAccount = useSelector((reduxState: any) => reduxState.account.currentAccount);

  console.log('%c 888888888888 walletInstance is:', 'color: #0f0;', currentAccount, web3Instance.eth);

  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: any) => setValue(newValue);

  const getAccount = async () => {
    const balance = await web3Instance.eth.getBalance(currentAccount);
    const eBalance: string = Web3.utils.fromWei(balance, 'ether');

    const estimateGasPrice = await web3Instance.eth.estimateGas();
    const gasPrice = await web3Instance.eth.getGasPrice();
    console.log('%c 666666666 balance is:', 'color: #ff0;', estimateGasPrice, gasPrice);
    dispatch({
      ethBalance: `${(+eBalance).toFixed(4)}`,
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
        <span>$0.00 USD</span>
      </div>

      <div className="action_wrapper">
        {
          actionList.map((item: any) => (
            <section
              key={item.key}
              className="icon_wrapper"
              onClick={async () => {
                console.log('%c 8888888888 发送代币 ...', 'color: #f00;');
                dispatch({ showDialog: true });
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
              label="收藏品"
              {...a11yProps(1)}
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
          value={value}
          index={1}
        >
          收藏品
        </TabPanel>
        <TabPanel
          value={value} index={2}
        >
          活动
        </TabPanel>
      </Box>

      <Dialog
        onClose={() => {
          dispatch({ showDialog: false });
        }}
        open={showDialog}
        sx={{
          minWidth: {
            xs: 300,
            md: 600,
          }
        }}
      >
        <DialogTitle>
          <DialogTitleWrapper>
            发送到
            <CloseIcon
              onClick={() => {
                dispatch({ showDialog: false });
              }}
            />
          </DialogTitleWrapper>

          <TextField
            inputRef={publicKeyRef}
            id="address_field"
            label="公钥"
            variant="filled"
            error={addressError}
            helperText={addressError ? '接收方地址无效' : ''}
            onChange={throttle((e: any) => {
              const address = e.target.value;
              const isAddress = Web3.utils.isAddress(address);
              dispatch({
                addressError: !isAddress,
              });
              console.log('%c 9999999 公钥 e is:', 'color: #0f0;', e, address, isAddress);
            }, 200)}
            sx={{
              width: '550px',
              background: '#fffb8f',
              borderRadius: '5px',
            }}
          />

          <TransferWrapper>
            <div className="transfer_wrapper">
              <span className="left_content">资产：</span>
              <section className="right_content">
                <img className="balance_img" src="/balance.svg" alt="余额" />
                <div className="balance_count">
                  <span>Sepolia Eth</span>
                  <section className="balance_count">
                    <span className="balance_label">余额：</span>
                    <span className="balance_sum">2 Sepolia ETH</span>
                  </section>
                </div>
              </section>
            </div>
            <div className="transfer_wrapper">
              <section className="left_content">
                <span>数额：</span>
                <div className="max_button">最大</div>
              </section>

              <section className="right_content">
                <div className="amount_wrapper">
                  <TextField
                    id="amount-number"
                    label="数额"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    helperText="无可用汇率"
                    sx={{
                      height: '100px',
                      width: '120px',
                    }}
                  />
                  <span className="amount_unit">Sepolia ETH</span>
                </div>
                <img src="/exchange.svg" alt="exchange" className="exchange_img" />
              </section>
            </div>

            <div className="gas_wrapper">
              <section className="gas_content">
                <span>Estimated fee</span>
                <span>0.0000506SepoliaETH</span>
              </section>
              <section className="gas_content">
                <div className="market_content">
                  <span>市场：</span>
                  <span>-30秒</span>
                </div>

                <div className="gas_fee_content">
                  <span>最大费用：</span>
                  <span>0.05SepoliaETH</span>
                </div>
              </section>
            </div>

            <div className="footer_button_wrapper">
              <Button variant="outlined" size="medium">
                取消
              </Button>

              <Button variant="contained" size="medium">
                下一步
              </Button>
            </div>
          </TransferWrapper>
        </DialogTitle>
      </Dialog>
    </HomeWrapper>
  );
};

export default memo(Home);

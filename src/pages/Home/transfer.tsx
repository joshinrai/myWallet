import { memo, useReducer, useRef, useEffect, forwardRef } from 'react';

import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';

import Web3 from 'web3';
import throttle from 'lodash/throttle';

import {
  request,
} from '../../utils/myRequest';

import {
  DialogTitleWrapper,
  TransferWrapper,
  TransferConfirmWrapper,
} from './styles';

const titleMap = new Map([
  [0, '发送到'],
  [1, '编辑'],
]);

const refuseMap = new Map([
  [0, '取消'],
  [1, '拒绝'],
]);

const stepMap = new Map([
  [0, '下一步'],
  [1, '确认'],
]);

const Alert = forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialState = {
  addressError: true,
  amountError: false,
  step: 0,
  estimateFee: '',
  maxPriorityFee: '',
  toAddress: '',
  sendValue: '',
  loading: false,
  open: false,
  accountMessage: '',
  status: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let [timeout, intervalTime]: any = [void 0, void 0];

const Transfer = (props: any) => {
  const {
    web3Instance,
    showDialog,
    dispatch: outerDispatch,
    ethBalance,
    currentChainId,
    currentAccount,
  } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    addressError,
    amountError,
    step,
    estimateFee,
    maxPriorityFee,
    toAddress,
    sendValue,
    loading,
    open,
    accountMessage,
    status,
  } = state;

  const [publicKeyRef, amountRef]: any = [useRef(null), useRef(null)];

  const getEstimateGas = async () => {
    try {
      if (!toAddress && intervalTime) {
        clearInterval(intervalTime);
        intervalTime = void 0;
      }
      const [toNumber, fromWei] = [web3Instance.utils.toNumber, Web3.utils.fromWei];
      // etherscan 获取 gas 费
      /* const gasPriceRes = await sepoliaEtherscanInstance.get(`/api?module=proxy&action=eth_gasPrice&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`);
      const estimateGasRes = await sepoliaEtherscanInstance.get(`/api?module=proxy&action=eth_estimateGas&data=0x60fe47b10000000000000000000000000000000000000000000000000000000000000004&to=${toAddress}&value=0x0&gasPrice=${gasPriceRes?.data?.result}&gas=0x186A0&apikey=${import.meta.env.VITE_PROJECT_ETHERSCAN_API_KEY}`);
      console.log('%c 9999999 gasPrice is:', 'color: #f00;', gasPriceRes, fromWei(gasPriceRes?.data?.result, 'ether'), estimateGasRes);
      console.log('%c 8888888 estimateGasRes is:', 'color: #ff0;', fromWei(estimateGasRes?.data?.result, 'ether')); */

      const params = [{
        from: currentAccount,
        to: /^0x.*/.test(toAddress) ? toAddress : `0x${toAddress}`,
      }];
      const [estimateGas, maxPriorityFeePerGas]: any = await Promise.all([
        request('eth_estimateGas', currentChainId, params),
        request('eth_maxPriorityFeePerGas', currentChainId, []),
      ]);

      const [estimateNumber, maxPriorityNumber] = [toNumber(estimateGas?.data?.result), toNumber(maxPriorityFeePerGas?.data?.result)];

      const [estimate, maxPriority]: any = [fromWei(estimateNumber, 'ether'), fromWei(maxPriorityNumber, 'ether')];

      dispatch({
        estimateFee: estimate,
        maxPriorityFee: maxPriority,
      });
    } catch (e: any) {
      console.log('%c e is:', 'color: #f00;', e);
    }
  };

  useEffect(() => {
    if (showDialog && !addressError) {
      getEstimateGas();
      // intervalTime = setInterval(() => {
      //   getEstimateGas();
      // }, 15 * 1000);
    }
  }, [toAddress, addressError]);

  useEffect(() => {
    return () => {
      dispatch({
        addressError: true,
        amountError: false,
        step: 0,
        estimateFee: '',
        maxPriorityFee: '',
        toAddress: '',
        sendValue: '',
        loading: false,
        open: false,
        accountMessage: '',
        status: '',
      });
      if (intervalTime) {
        clearInterval(intervalTime);
        intervalTime = void 0;
      }
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
    }
  }, [showDialog]);

  const domMap = new Map([
    [0, (
      <>
        <div className="transfer_wrapper">
          <span className="left_content">资产：</span>
          <section className="right_content">
            <img className="balance_img" src="/balance.svg" alt="余额" />
            <div className="balance_count">
              <span>Sepolia Eth</span>
              <section className="balance_count">
                <span className="balance_label">余额：</span>
                <span className="balance_sum">{ethBalance} Sepolia ETH</span>
              </section>
            </div>
          </section>
        </div>
        <div className="transfer_wrapper">
          <section className="left_content">
            <span>数额：</span>
            <div
              className="max_button"
              onClick={() => {
                const amountNumber: any = document.querySelector('#amount-number');
                const maxBalance = ethBalance - maxPriorityFee;
                amountNumber.value = maxBalance;
                dispatch({
                  amountError: false,
                  sendValue: maxBalance,
                });
              }}
            >
              最大
            </div>
          </section>

          <section className="right_content">
            <div className="amount_wrapper">
              <TextField
                ref={amountRef}
                id="amount-number"
                label="数额"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  height: '100px',
                  width: '140px',
                }}
                error={amountError}
                helperText={amountError ? '燃料资金不足' : ''}
                onChange={throttle((e: any) => {
                  const value = e?.target?.value;
                  dispatch({
                    amountError: value + maxPriorityFee > ethBalance,
                    sendValue: value,
                  });
                })}
              />
              <span className="amount_unit">Sepolia ETH</span>
            </div>
            <img src="/exchange.svg" alt="exchange" className="exchange_img" />
          </section>
        </div>

        <div className="gas_wrapper">
          <section className="gas_content">
            <span className="estimated_fee">Estimated fee</span>
            <span>{estimateFee} SepoliaETH</span>
          </section>
          <section className="gas_content">
            <div className="market_content">
              <span>市场：</span>
              <span>-30秒</span>
            </div>

            <div className="gas_fee_content">
              <span>最大费用：</span>
              <span>{maxPriorityFee}SepoliaETH</span>
            </div>
          </section>
        </div>
      </>
    )],
    [1, (
      <TransferConfirmWrapper>
        <h4 className="confirm_title">正在发送SEPOLIAETH</h4>
        <div className="amount_wrapper">
          <span className="amount_label">s</span>
          <span className="amount_number">{sendValue}</span>
        </div>

        <div className="container_wrapper">
          <div className="split_wrapper">
            <span className="estimated_fee_label">Estimated fee</span>
            <span className="estimated_fee_number">{estimateFee}</span>
          </div>

          <div className="split_wrapper">
            <span className="market_label">市场</span>
            <span className="market_number">最大费用：{maxPriorityFee} SepoliaEth</span>
          </div>
        </div>

        <div className="container_wrapper">
          <div className="split_wrapper">
            <span className="total_label">总计</span>
            <span className="total_number">{ +sendValue + +estimateFee } Sepolia ETH</span>
          </div>

          <div className="split_wrapper">
            <span className="total_max_label">金额+燃料费</span>
            <span className="total_max_number">最大金额：{ +sendValue + +maxPriorityFee } Sepolia Eth</span>
          </div>
        </div>
      </TransferConfirmWrapper>
    )],
  ]);

  return (
    <Dialog
      onClose={() => {
        outerDispatch({ showDialog: false });
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
          {
            titleMap.get(step)
          }
          <CloseIcon
            onClick={() => {
              outerDispatch({
                showDialog: false,
              });
            }}
          />
        </DialogTitleWrapper>

        {
          step === 0 ? (
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
                  toAddress: address,
                });
              }, 200)}
              sx={{
                width: '550px',
                background: '#fffb8f',
                borderRadius: '5px',
              }}
            />
          ) : null
        }

        <TransferWrapper>
          {
            toAddress ? domMap.get(step) : null
          }
          <div className="footer_button_wrapper">
            <Button
              variant="outlined"
              size="medium"
              onClick={async () => {
                if (step === 0) {
                  outerDispatch({
                    showDialog: false,
                  });
                }
              }}
            >
              {
                refuseMap.get(step)
              }
            </Button>

            <LoadingButton
              variant="contained"
              size="medium"
              loading={loading}
              onClick={async () => {
                if (step === 0) {
                  dispatch({
                    step: 1,
                  });
                } else {
                  const transaction = {
                    from: currentAccount,
                    to: /^0x.*/.test(toAddress) ? toAddress : `0x${toAddress}`,
                    value: Web3.utils.toWei(sendValue, 'ether'),
                    gas: '21000'
                  };
                  dispatch({ loading: true });
                  const res: any = await web3Instance.eth.sendTransaction(transaction);
                  if (parseInt(res?.status) === 1) {
                    dispatch({
                      loading: false,
                      open: true,
                      accountMessage: '转账成功!',
                      status: 'success',
                    });
                    timeout = setTimeout(() => {
                      outerDispatch({
                        showDialog: false,
                      });
                    }, 2000);
                  } else {
                    dispatch({
                      loading: false,
                      open: true,
                      accountMessage: '转账失败!',
                      status: 'error',
                    });
                  }
                }
              }}
            >
              {
                stepMap.get(step)
              }
            </LoadingButton>
          </div>
        </TransferWrapper>
      </DialogTitle>

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

    </Dialog>
  );
};

export default memo(Transfer);

import { memo, useReducer, useRef, useEffect } from 'react';

import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Web3 from 'web3';
import throttle from 'lodash/throttle';

import { request } from '../../utils/myRequest';

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

const initialState = {
  addressError: true,
  amountError: false,
  step: 0,
  estimateFee: '',
  maxPriorityFee: '',
  toAddress: '',
  sendValue: '',
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

let intervalTime: any = void 0;

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
  } = state;

  const publicKeyRef: any = useRef(null);

  const getEstimateGas = async () => {
    try {
      console.log('%c 77777777 toAddress is:', 'color: #0f0;', toAddress);
      if (!toAddress && intervalTime) {
        clearInterval(intervalTime);
        intervalTime = void 0;
      }
      const params = [{
        from: currentAccount,
        to: toAddress, // '0x2337eE72E227259C6432A6Ef03F294A6738dbF7B',
      }];
      const [estimateGas, maxPriorityFeePerGas]: any = await Promise.all([
        request('eth_estimateGas', currentChainId, params),
        request('eth_maxPriorityFeePerGas', currentChainId, []),
      ]);

      const [toNumber, fromWei] = [web3Instance.utils.toNumber, Web3.utils.fromWei];
      console.log('%c 6666666666 toNumber, fromWei is:', 'color: #ff0;', estimateGas?.data?.result, maxPriorityFeePerGas?.data?.result);
      const [estimateNumber, maxPriorityNumber] = [toNumber(estimateGas?.data?.result), toNumber(maxPriorityFeePerGas?.data?.result)];

      const [estimate, maxPriority]: any = [fromWei(estimateNumber, 'ether'), fromWei(maxPriorityNumber, 'ether')];

      console.log(
        '%c 666666666 res is:',
        'color: #f00;',
        estimateGas,
        estimateNumber,
        maxPriorityFeePerGas,
        maxPriorityNumber,
        estimate,
        maxPriority,
      );
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
      });
      if (intervalTime) {
        clearInterval(intervalTime);
        intervalTime = void 0;
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
            >
              最大
            </div>
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
          <span className="amount_number">0.1</span>
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
            <span className="total_number">0.100113SepoliaETH</span>
          </div>

          <div className="split_wrapper">
            <span className="total_label">金额+燃料费</span>
            <span className="total_number">最大金额：0.100113 SepoliaEth</span>
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
            console.log('%c 9999999 公钥 e is:', 'color: #0f0;', e, address, isAddress);
          }, 200)}
          sx={{
            width: '550px',
            background: '#fffb8f',
            borderRadius: '5px',
          }}
        />

        <TransferWrapper>
          {
            domMap.get(step)
          }
          <div className="footer_button_wrapper">
            <Button
              variant="outlined"
              size="medium"
              onClick={async () => {
                /* outerDispatch({
                  showDialog: false,
                }); */
                const res: any = await web3Instance.eth.getTransactionCount(currentAccount);
                console.log('%c 88888888888 res is:', 'color: #ff0;', res);
              }}
            >
              {
                refuseMap.get(step)
              }
            </Button>

            <Button
              variant="contained"
              size="medium"
              onClick={async () => {
                if (step === 0) {
                  dispatch({
                    step: 1,
                  });
                } else {
                  const transaction = {
                    from: currentAccount,
                    to: toAddress,
                    value: Web3.utils.toWei(sendValue, 'ether'),
                    gas: '21000'
                  };
                  console.log('%c 77777777 transaction is:', 'color: #f0f;', transaction);
                  const res: any = await web3Instance.eth.sendTransaction(transaction);
                  console.log('%c 2222222 res is:', 'color: #0ff;', res);
                }
                console.log('%c 999999999 下一步。。。', 'color: #0f0;', step);
              }}
            >
              {
                stepMap.get(step)
              }
            </Button>
          </div>
        </TransferWrapper>
      </DialogTitle>
    </Dialog>
  );
};

export default memo(Transfer);

import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    value: 'test',
    currentAccount: {
      title: 'sepoliaAccount',
      chainName: 'Sepolia',
      address: '0x9896fA3a4B4979fbE8a153193260421378F562Ca',
      currency: 'USD',
      currencyValue: '0',
      balance: 'ETH',
      balanceValue: '',
    },
    accountList: [{
      title: 'sepoliaAccount',
      chainName: 'Sepolia',
      address: '0x9896fA3a4B4979fbE8a153193260421378F562Ca',
      currency: 'USD',
      currencyValue: '0',
      balance: 'ETH',
      balanceValue: '',
    }, {
      title: 'LineaSepoliaAccount',
      chainName: 'Linea Sepolia',
      address: '0x9799C859D04F83970AE30FAf55dA7B39F649beaD',
      currency: 'USD',
      currencyValue: '0',
      balance: 'ETH',
      balanceValue: '',
    }],
  },
  reducers: {
    addAccount: (state: any) => {
      console.log('%c 9999999 add account state is:', 'color: #0f0;', state);
    },
    changeCurrentAccount: (state: any, action: any) => {
      state.currentAccount = action.payload;
    },
    increment: (state: any) => {
      console.log('%c 7777777777 state is:', 'color: #f00;', state);
      state.value = `test_${Math.floor(Math.random() * 1000)}`;
    },
    decrement: (state: any) => {
      state.value = `test_${Math.floor(Math.random() * 1000)}`;
    },
    incrementByAmount: (state: any, action: any) => {
      state.value += action.payload;
    },
  },
});

export const {
  addAccount,
  changeCurrentAccount,
  increment,
  decrement,
  incrementByAmount,
} = accountSlice.actions;

export default accountSlice.reducer;
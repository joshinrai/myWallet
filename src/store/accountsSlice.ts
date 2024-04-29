import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    password: '',
    accountLength: 0,
    currentAccount: null,
  },
  reducers: {
    changeCurrentAccount: (state: any, action: any) => {
      state.currentAccount = action.payload;
    },
    setPassword: (state: any, action: any) => {
      state.password = action.payload;
    },
    setAccountLenght: (state: any, action: any) => {
      state.accountLength = action.payload;
    },
    addAccount: (state: any) => {
      state.accountLength += 1;
    },
    deleteAccount: (state: any) => {
      state.accountLength -= 1;
    },
  },
});

export const {
  changeCurrentAccount,
  setPassword,
  setAccountLenght,
  addAccount,
  deleteAccount,
} = accountSlice.actions;

export default accountSlice.reducer;
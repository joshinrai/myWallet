import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountsSlice';

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
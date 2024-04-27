/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store';
import { Provider } from 'react-redux';

import App from './App.tsx'

const win: any = window;

ReactDOM.createRoot(document.getElementById(win?.rootId ?? 'root_test')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

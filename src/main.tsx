/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store/store';
import { Provider } from 'react-redux';

import App from './App.tsx'

const win: any = window;

console.log('%c 111111 NODE_ENV is:', 'color: #f00;', import.meta.env.VITE_PROJECT_TITLE);
console.log('%c 999999 NODE_ENV is:', 'color: #0f0;', process.env.NODE_ENV); // , JSON.stringify(process.env));

ReactDOM.createRoot(document.getElementById(win?.rootId ?? 'root_test')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

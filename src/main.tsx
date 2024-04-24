import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const win: any = window;

ReactDOM.createRoot(document.getElementById(win?.rootId ?? 'root_test')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

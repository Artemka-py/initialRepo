import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// Global styles
import 'styles/reset.scss';
import 'styles/common.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

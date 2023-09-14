import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly

import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( // Use ReactDOM.render instead of ReactDOM.createRoot
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



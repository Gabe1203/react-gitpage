import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/home.css'
import './css/about.css'
import './css/portfolio.css'
import './css/resume.css'
import './css/contact.css'
import './css/services.css'
import './css/nav.css'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

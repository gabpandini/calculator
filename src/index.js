import './index.css';
import Calculator from './main/Claculator';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>🌈 Calculator 🌈</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

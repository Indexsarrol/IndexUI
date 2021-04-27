/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-04-27 16:31:15
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

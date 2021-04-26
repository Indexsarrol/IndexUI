/*
 * @Author: your name
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-04-25 18:04:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\App.tsx
 */
import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Alert from './components/Alert/Alert';
import './App.css';
const  App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Alert
          message="这是一条成功的消息这是一条成功的消息这是一条成功的消息这是一条成功的消息"
        />
      </div>
    </div>
  );
}

export default App;

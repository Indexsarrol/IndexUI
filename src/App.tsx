/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-21 18:00:09
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React, { useEffect } from 'react';
import Tabs from './components/Tabs/Tabs';
import TabPane from './components/Tabs/TabPane';
import Button from './components/Button/Button';
import message from './components/Message/Message';

import './App.css';


const App: React.FC = () => {


  const alertMessage = () => {
    message.success('123', 1000, () => {
      console.log('close');
    })
  }
  const alertMessage2 = () => {
    message.success('456', 1000, () => {
      console.log('close');
    })
  }

  
  return (
    <div className="App">
      <div style={{ width: 600, marginTop: 20 }}>
        <Button onClick={alertMessage}>消息提示框</Button>
        <Button onClick={alertMessage2}>消息提示框</Button>
      </div>
    </div>
  );
}

export default App;

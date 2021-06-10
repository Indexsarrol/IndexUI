/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-06-09 17:53:17
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React, { useState } from 'react';
import Button from './components/Button/Button';
import notification from './components/Notification/Notification';
import message from './components/Message/Message';
import Icon from './components/Icon/icon';
import Switch from './components/Switch/Switch';
import Empty from './components/Empty/Empty';
import './App.css';


const App: React.FC = () => {


  return (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Empty />
      </div>
    </div>
  );
}

export default App;

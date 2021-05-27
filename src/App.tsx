/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-27 15:32:10
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React, { useState } from 'react';
import Button from './components/Button/Button';
import notification from './components/Notification/Notification';
import Icon from './components/Icon/icon';
import './App.css';


const App: React.FC = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const alertSuccessNotification = () => {
    notification.open({
      type: "success",
      duration: 0,
      message: 'Notification Title',
      description: ' will never close automatically. I will be close automatically. I will never close automatically.',
    })
  }

  const alertErrorNotification = () => {
    notification.open({
      type: "error",
      duration: 0,
      message: 'Notification Title',
      description: ' will never close automatically. I will be close automatically. I will never close automatically.',
    })
  }

  return (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Button onClick={alertSuccessNotification} >消息通知（成功）</Button>
        <Button onClick={alertErrorNotification} >消息通知（失败）</Button>
      </div>
    </div>
  );
}

export default App;

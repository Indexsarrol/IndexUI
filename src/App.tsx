/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-06-02 14:09:07
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React, { useState } from 'react';
import Button from './components/Button/Button';
import notification from './components/Notification/Notification';
import message from './components/Message/Message';
import Icon from './components/Icon/icon';
import Switch from './components/Switch/Switch';
import './App.css';


const App: React.FC = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const alertSuccessNotification = () => {
    message.open({
      type: "warning",
      title: 'this is a message',
      duration: 3,
    })
  }

  const alertErrorNotification = () => {
    notification.open({
      type: "error",
      duration: 0,
      message: 'Notification Title',
      description: ' will never close automatically. I will be close automatically. I will never close automatically.',
    });
  }

  const alertMessage = () => {

  }

  return (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Button onClick={alertSuccessNotification} >消息通知（成功）</Button>
        <Button onClick={alertErrorNotification} >消息通知（失败）</Button>
        <Button onClick={alertMessage}>通知</Button>
        <Switch
          size="large"
          checkedText="开" 
          unCheckedText="关"
          onChange={(checked,e) => { console.log(checked, e) }}
        />

        <Switch
          checkedText="开" 
          unCheckedText="关"
        />

        <Switch
          size="small"
        />
      </div>
    </div>
  );
}

export default App;

/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-27 09:41:22
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import TabPane from './components/Tabs/TabPane';
import Button from './components/Button/Button';
import Icon from './components/Icon/icon';
import Input from './components/Input/Input';
import Search from './components/Input/Search';


import './App.css';


const App: React.FC = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Search
          onSearch={(value) => {console.log(value)}}
          value={value}
          placeholder="请输入内容"
        />
      </div>
    </div>
  );
}

export default App;

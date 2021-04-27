/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-04-27 17:58:37
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\App.tsx
 */
import React, { useState } from 'react';
import Alert from './components/Alert/Alert';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import './App.css';
const  App: React.FC = () => (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Menu defaultKey={1} mode="horizontal">
          <MenuItem index={0} disabled>link1</MenuItem>
          <MenuItem index={1}>link2</MenuItem>
          <MenuItem index={2}>link3</MenuItem>
        </Menu>
      </div>
    </div>
  );

export default App;

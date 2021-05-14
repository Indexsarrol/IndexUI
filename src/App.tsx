/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-14 08:53:35
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\App.tsx
 */
import React from 'react';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import Icon from './components/Icon/icon';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <Icon icon="redo" theme="primary" spin/>
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

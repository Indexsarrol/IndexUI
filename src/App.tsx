/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-18 17:40:07
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React from 'react';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Icon from './components/Icon/icon';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <Icon icon="redo" theme="primary" spin/>
      <div style={{ width: 400, marginTop: 20 }}>
        <Menu defaultKey={1} mode="vertical">
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>link3</MenuItem>
          
        </Menu>
      </div>
    </div>
  );

export default App;

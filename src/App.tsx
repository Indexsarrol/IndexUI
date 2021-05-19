/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-19 14:05:57
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React from 'react';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <div style={{ width: 400, marginTop: 20 }}>
        <Menu 
          defaultKey={'0'} 
          mode="vertical"
          defaultOpenMenus={['2']}
          onSelect={(key) => { alert(key) }}
        >
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

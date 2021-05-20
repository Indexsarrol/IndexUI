/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-20 17:16:16
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React from 'react';
import Tabs from './components/Tabs/Tabs';
import TabPane from './components/Tabs/TabPane';
import Icon from './components/Icon/icon';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <div style={{ width: 600, marginTop: 20 }}>
        <Tabs 
          defaultKey="0" 
          onChange={(active) => {console.log(active)}}
        >
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2" disabled>选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
      </div>
    </div>
  );

export default App;

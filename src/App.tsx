/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-21 10:36:24
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React from 'react';
import Tabs from './components/Tabs/Tabs';
import TabPane from './components/Tabs/TabPane';
import Button from './components/Button/Button';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <div style={{ width: 600, marginTop: 20 }}>
        <Tabs 
          type="line" 
          defaultKey="0" 
          tabPosition="top" 
          tabBarExtraContent={<Button>增加</Button>}
          onChange={(key) => {console.log(key)}}
        >
          <TabPane key="0" tab="选项卡一">选项卡一内容</TabPane>
          <TabPane key="1" tab="选项卡二">选项卡二内容</TabPane>
          <TabPane key="2" tab="选项卡三" disabled>选项卡三内容</TabPane>
          <TabPane key="3" tab="选项卡四">选项卡四内容</TabPane>
        </Tabs>
      </div>
    </div>
  );

export default App;

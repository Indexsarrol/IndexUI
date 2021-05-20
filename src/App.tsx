/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-05-20 17:45:39
 * @LastEditors: Indexsarrol
 * @Description: 
 */
import React from 'react';
import Alert from './components/Alert/Alert';
import Icon from './components/Icon/icon';
import './App.css';
const App: React.FC = () => (
    <div className="App">
      <div style={{ width: 600, marginTop: 20 }}>
        <Alert 
          message="this is a message" 
          description="312312312" 
          type="success" 
          closable
          closeText={<Icon icon="yin-yang" spin />}
        />
        <Alert message="this is a message" description="312312312" type="success" closable/>
      </div>
    </div>
  );

export default App;

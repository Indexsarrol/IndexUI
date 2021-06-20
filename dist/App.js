/*
 * @Author: Indexsarrol
 * @Date: 2021-04-23 10:15:37
 * @LastEditTime: 2021-06-09 17:53:17
 * @LastEditors: Indexsarrol
 * @Description:
 */
import React from 'react';
import Button from './components/Button/Button';
import notification from './components/Notification/Notification';
import message from './components/Message/Message';
import './App.css';
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { style: { width: 400, marginTop: 20 } },
            React.createElement(Button, { onClick: function () { message.open({ type: 'success', title: 'message!!!' }); } }, "\u6309\u94AE"),
            React.createElement(Button, { onClick: function () { notification.open({ type: 'success', message: 'message!!!' }); } }, "\u6309\u94AE"))));
};
export default App;

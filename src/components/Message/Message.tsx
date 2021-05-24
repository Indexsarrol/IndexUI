/*
 * @Description: 消息提示
 * @Author: Indexsarrol
 * @Date: 2021-05-21 13:52:34
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-21 17:59:49
 */

import React, { useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Transition from '../Transition/Transition';
import Icon from '../Icon/icon';

export interface IMessageProps {
  content: string | React.ReactNode;
  duration?: number
  onClose?: () => void
}

export interface IMessageTypeProps {
  success: (content: string, duration: number, onClose: () => void) => void;
  error: (content: string, duration: number, onClose: () => void) => void;
  warning: () => void;
  info: () => void;
};

let defaultArray: any[] = [];
let clickCount: number = 0;

const notice = (content: string, duration: number, onClose: () => void) => {
  const results = new Promise((resolve, reject) => {
    clickCount++;
    if (clickCount === 1) {
      defaultArray.push(1);
      const dom = document.createElement("div");
      ReactDOM.render(messageContainer(content), dom);
      document.body.appendChild(dom);
    } else {
      defaultArray.push(1);
      ReactDOM.render(messageContainer(content), document.getElementById('idx-message'));
    }
    resolve(true);
  });

  results.then(res => {
    setTimeout(() => {
      defaultArray.splice(0, 1);
      ReactDOM.render(messageContainer(content), document.getElementById('idx-message'));
      onClose();
    }, 3000);
  });
}



const messageContainer = (content: string) => {
  return (
    <div className="idx-message" id="idx-message">
      {
        defaultArray?.map(item => {
          return (
            <div className="idx-message-container">
              <Icon icon="check-circle" theme="success" />
              <span className="idx-message-content">{content}</span> 
            </div>
          )
        })
      }
    </div>
  );
}





const message: IMessageTypeProps = {
  success: notice,
  error: notice,
  warning: () => {

  },
  info: () => {

  }
}

export default message;


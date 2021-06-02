/*
 * @Description: message提示框组件
 * @Author: Indexsarrol
 * @Date: 2021-05-28 11:22:25
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-28 14:14:34
 */

import React from 'react';
import Notification from 'rc-notification';
import classnames from 'classnames';
import Icon from '../Icon/icon';
import { NotificationInstance as MessageInstance } from 'rc-notification/lib/Notification';
import 'rc-notification/assets/index.css';

export type MessageType  = 'success' | 'error' | 'warning' | 'info' | 'loading';

export interface IMessageConfigProps {
  type: MessageType; // 消息框提示类型
  top?: number; 
  className?: string;
  duration?: number;
  icon?: React.ReactNode; // 自定义图标
  key?: string;
  title?: string | React.ReactNode;
  closable?: boolean; // 是否显示关闭按钮
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  getContainer?: () => HTMLElement;
}

export interface globalMessageConfigs {
  getContainer?:() => HTMLElement;
  closeIcon: React.ReactNode
}

export enum messageType {
  "success" = "check-circle",
  "error" = "times-circle",
  "info" = "info-circle",
  "warning" = "exclamation-circle",
  "loading" = "spinner"
}

const Message = (function() {
  let message: MessageInstance;
  // open 方法
  const open = (configs: IMessageConfigProps) => {
    const {
      type,
      className,
      top,
      duration = 3.5,
      icon,
      key,
      title,
      closable = false,
      closeIcon,
      onClose,
      getContainer = () => document.body
    } = configs;

    const messageClass = classnames('idx-message-wrapper', className);
    const iconClass = classnames('idx-message-icon', type);
    message.notice({
      content: (
        <div className={messageClass}>
          <div className={iconClass}>
            {
              !icon && ['success', 'error', 'warning', 'info', 'loading'].includes(type)
                ?
                <Icon icon={messageType[type]} spin={type === 'loading'} />
                :
                icon
            }
          </div>
          <span className="idx-message-title">{title}</span>
        </div>
      ),
      key,
      closable,
      onClose: () => onClose && onClose(),
      duration,
      style: { top },
      closeIcon
    });
  };

  // 全局配置
  const config = (configs: globalMessageConfigs) => {
    const { getContainer, closeIcon } = configs;
    Notification.newInstance({
      getContainer,
      closeIcon,
    }, (notice) => {
      return message = notice
    })
  }

  const remove = (key: string) => {
    message.removeNotice(key);
  };
  
  const destroy = () => {
    message.destroy();
  };

  Notification.newInstance({
    style: { top: '50px', left: '50%', transform: 'translate(-50%, 0)'  }
  }, (notice) => message = notice);

  return {
    open,
    config,
    remove,
    destroy
  }
})();


export default Message;

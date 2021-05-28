/*
 * @Description: Notification组件
 * @Author: Indexsarrol
 * @Date: 2021-05-27 10:15:35
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-28 11:13:52
 */

import React from 'react';

import classnames from 'classnames';

import Notification from 'rc-notification';

import Icon from '../Icon/icon';

import { NotificationInstance } from 'rc-notification/lib/Notification';

export enum noticeType {
  "success" = "check-circle",
  "error" = "times-circle",
  "info" = "info-circle",
  "warning" = "exclamation-circle",
  "loading" = "spinner"
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface NotificationConfigProps {
  type: NotificationType; // 通知框类型
  bottom?: number; // 
  className?: string;
  description?: string;
  duration?: number;
  icon?: React.ReactNode; // 自定义图标
  key?: string;
  message?: string | React.ReactNode;
  top?: number;
  closable?: boolean; // 是否显示关闭按钮
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  getContainer?: () => HTMLElement;
}

export interface globalConfig {
  duration?: number;
  getContainer?: () => HTMLElement;
  placement: string;
  closeIcon?: React.ReactNode;
}

const positions = {
  'topLeft': { top: '24px', left: '24px' },
  'topRight': { top: '24px', right: '24px' },
  'bottomLeft': { bottom: '24px', left: '24px' },
  'bottomRight': { bottom: '24px', right: '24px' },
};

const idxNotification = (function () {
  let notification: NotificationInstance;
  let defaultPlacement: string = '';
  const open = (configs: NotificationConfigProps) => {
    const {
      type,
      bottom,
      className,
      description,
      duration = 4.5,
      icon,
      key,
      message,
      top,
      closable = true,
      closeIcon,
      onClose,
    } = configs;
    const notificationClass = classnames('idx-notice-wrapper', className);
    const iconClass = classnames('idx-notice-icon', type);
    notification.notice({
      content: (
        <div className={notificationClass}>
          <div className={iconClass}>
            {
              !icon && ['success', 'error', 'warning', 'info', 'loading'].includes(type)
                ?
                <Icon icon={noticeType[type]} spin={type === 'loading'} />
                :
                icon
            }
          </div>
          <div className="idx-notice-content">
            <p className="idx-notice-title">{message}</p>
            <div className="idx-notice-description">
              {description}
            </div>
          </div>
        </div>
      ),
      key,
      closable,
      onClose: () => {
        onClose && onClose();
      },
      duration,
      style: { top, bottom },
      closeIcon
    });
  };

  const config = (config: globalConfig) => {
    const {
      getContainer,
      placement,
      closeIcon
    } = config;
    if (typeof placement === 'string') {
      defaultPlacement = placement;
      Notification.newInstance(
        {
          style: { ...positions[placement] },
          getContainer: getContainer,
          closeIcon
        }, (notice) => {
          return notification = notice
        });
    }
  };

  const remove = (key: string) => {
    notification.removeNotice(key);
  };
  
  const destroy = () => {
    notification.destroy();
  }
  Notification.newInstance({
    style: { right: '24px', top: '24px' }
  }, (notice) => notification = notice);
  
  return {
    config,
    open,
    remove,
    destroy
  }
})();

export default idxNotification;
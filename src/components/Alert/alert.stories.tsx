/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-09 10:18:10
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-09 11:10:40
 */

import React from 'react';
import { Meta } from '@storybook/react';

import Alert from './Alert';
import Icon from '../Icon/icon';
import message from '../Message/Message';
import Notification from '../Notification/Notification';

import '../../styles/index.scss';
export default {
  title: 'Alert',
  component: Alert
} as Meta;

export const BasicAlert = () => (
	<div style={{ width: 400 }}>
		<Alert message="这是一条普通的警告信息！" />
	</div>
);

BasicAlert.storyName = '基本';


export const AlertType = () => (
	<div style={{ width: 400 }}>
		<Alert type="success" message="这是一条成功的信息！"/>	
		<br />
		<Alert type="danger" message="这是一条错误的信息！"/>
		<br />
		<Alert type="warning" message="这是一条警告的信息！"/>	
	</div>
);
AlertType.storyName = '警告提示类型';

export const allowCloseAlert = () => (
	<div style={{ width: 400 }}>
		<Alert message="这是一条普通的警告信息！"closable/>
	</div>
);

allowCloseAlert.storyName = '允许关闭';

export const descriptionAlert = () => (
	<div style={{ width: 400 }}>
		<Alert
			message="这是一条普通的警告信息！"
			description="我是描述我是描述"
			closable
		/>
	</div>
);
descriptionAlert.storyName = '带有描述';

export const cusotmAlert = () => (
	<div style={{ width: 400 }}>
		<Alert
			message="这是一条普通的警告信息！"
			description="我是描述我是描述"
			closable
			closeText={<Icon icon="trash" />}
		/>
	</div>
);

cusotmAlert.storyName = '自定义关闭按钮';

export const closeCallbackAlert = () => (
	<div style={{ width: 400 }}>
		<Alert
			message="这是一条普通的警告信息！"
			description="我是描述我是描述我是描述我是描述"
			closable
			onClose={() => Notification.open({ type: 'success', message: 'do somthing' })}
		/>
		<Alert
			message="这是一条普通的警告信息！"
			description="我是描述我是描述我是描述我是描述"
			closable
			onClose={() => message.open({ type: 'success', title: 'do somthing' })}
		/>
	</div>
);

closeCallbackAlert.storyName = '关闭时触发的回调函数';
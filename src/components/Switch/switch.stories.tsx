/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-09 11:15:44
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-09 13:44:46
 */
import React from 'react';
import { Meta } from '@storybook/react';

import Switch from './Switch';

import '../../styles/index.scss';
export default {
  title: 'Switch',
  component: Switch
} as Meta;

export const BasicSwitch = () => (
    <Switch defaultChecked/>
);
BasicSwitch.storyName = '基本';

export const SwitchSize = () => (
    <>
      <Switch size="large" style={{ marginRight: 10 }}/>
			<br />
			<Switch defaultChecked style={{ marginRight: 10 }}/>
			<br />
			<Switch size="small"  style={{ marginRight: 10 }}/>
    </>
);

SwitchSize.storyName = '不同尺寸';

export const SwitchDisabled = () => (
	<>
		<Switch size="large" disabled />
		<br />
		<Switch disabled defaultChecked />
		<br />
		<Switch disabled size="small" />
	</>
);

SwitchDisabled.storyName = '是否可用';

export const SwitchWithText = () => (
	<>
		<Switch defaultChecked checkedText="开" unCheckedText="关"/>
		<br />
		<Switch defaultChecked checkedText="1" unCheckedText="0"/>
	</>
);
SwitchWithText.storyName = '带有文字或者图标';


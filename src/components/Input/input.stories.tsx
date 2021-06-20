import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import Icon from '../Icon/icon';
import Button from '../Button/Button';
import Input from './Input';

import '../../styles/index.scss';
export default {
  title: 'Input',
  component: Input
} as Meta;

export const BasicInput = () => (
	<div style={{ width: 400 }}>
		<Input placeholder="请输入内容" />
	</div>
);

BasicInput.storyName = '基本';

export const defaultValueInput = () => (
	<div style={{ width: 400 }}>
		<Input placeholder="请输入内容" defaultValue="默认内容" />
	</div>
);

defaultValueInput.storyName = '默认值';

export const DiffSizeInput = () => (
	<div style={{ width: 400 }}>
		<Input size="large" placeholder="请输入内容" style={{ marginBottom: 15 }}/>
		<Input placeholder="请输入内容" style={{ marginBottom: 10 }}/>
		<Input size="small" placeholder="请输入内容" style={{ marginBottom: 15 }}/>
	</div>
);

DiffSizeInput.storyName = '不同尺寸';

export const DisabledInput = () => (
	<div style={{ width: 400 }}>
		<Input disabled size="large" placeholder="请输入内容" style={{ marginBottom: 15 }}/>
		<Input disabled placeholder="请输入内容" style={{ marginBottom: 10 }}/>
		<Input disabled size="small" placeholder="请输入内容" style={{ marginBottom: 15 }}/>
	</div>
);

DisabledInput.storyName = '不可使用';

// export const allowClearInput = () => (
// 	<div style={{ width: 400 }}>
// 		<Input size="large" placeholder="请输入内容" style={{ marginBottom: 15 }} allowClear/>
// 		<Input placeholder="请输入内容" style={{ marginBottom: 10 }} allowClear/>
// 		<Input size="small" placeholder="请输入内容" style={{ marginBottom: 15 }} allowClear/>
// 	</div>
// );

// allowClearInput.storyName = '可清除内容';

export const expandInput = () => (
	<div style={{ width: 400 }}>
		<Input prefix={<Icon icon="user" />} placeholder="请输入内容" style={{ marginBottom: 10 }}/>
		<Input suffix={<Icon icon="search" />} placeholder="请输入内容" style={{ marginBottom: 10 }}/>
		<Input addonBefore="https://" addonAfter=".com" placeholder="请输入内容" style={{ marginBottom: 10 }}/>
	</div>
);

expandInput.storyName = '可扩展';

import React from 'react';
import { Meta } from '@storybook/react';
import Empty from './Empty';
import Icon from '../Icon/icon';

import '../../styles/index.scss';
export default {
  title: 'Empty',
  component: Empty
} as Meta;

export const BasicEmpty = () => (
	<div style={{ width: '100%' }}>
		<Empty />
	</div>
);

BasicEmpty.storyName = '基本';

export const ChangeImage = () => (
	<div style={{ width: '100%' }}>
		<Empty image={<Icon size="6x" icon="times" style={{ color: '#e0e0e0' }}/>} />
	</div>
);

ChangeImage.storyName = '可更换图片';

export const ChangeDescription = () => (
	<div style={{ width: '100%' }}>
		<Empty description="暂时没法看到数据哦~" />
	</div>
);

ChangeDescription.storyName = '可修改提示文字';
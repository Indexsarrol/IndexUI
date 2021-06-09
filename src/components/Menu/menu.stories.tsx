/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-09 13:40:54
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-09 13:52:10
 */
import React from 'react';
import { Meta } from '@storybook/react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

import '../../styles/index.scss';
export default {
  title: 'Menu',
  component: Menu
} as Meta;

export const BasicMenu = () => (
    <Menu defaultKey="0">
			<MenuItem>文档</MenuItem>
			<MenuItem>API</MenuItem>
			<SubMenu title="生态系统">
				<MenuItem>社区</MenuItem>
				<MenuItem>主题</MenuItem>
			</SubMenu>
    </Menu>
);
BasicMenu.storyName = '基本';

export const DisabledMenu = () => (
	<Menu defaultKey="1">
		<MenuItem disabled>文档</MenuItem>
		<MenuItem>API</MenuItem>
		<SubMenu title="生态系统">
			<MenuItem>社区</MenuItem>
			<MenuItem>主题</MenuItem>
		</SubMenu>
	</Menu>
);
DisabledMenu.storyName = '菜单不可用';

export const VerticalMenu = () => (
	<Menu defaultKey="1" mode="vertical">
		<MenuItem>文档</MenuItem>
		<MenuItem>API</MenuItem>
		<SubMenu title="生态系统">
			<MenuItem>社区</MenuItem>
			<MenuItem>主题</MenuItem>
		</SubMenu>
	</Menu>
);
VerticalMenu.storyName = '纵向菜单';

export const VerticalExpandMenu = () => (
	<Menu defaultKey="1" mode="vertical" defaultOpenMenus={['2']}>
		<MenuItem>文档</MenuItem>
		<MenuItem>API</MenuItem>
		<SubMenu title="生态系统">
			<MenuItem>社区</MenuItem>
			<MenuItem>主题</MenuItem>
		</SubMenu>
	</Menu>
);
VerticalExpandMenu.storyName = '默认展开';

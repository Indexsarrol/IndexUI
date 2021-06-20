import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import Tabs from './Tabs';
import TabPane from './TabPane';
import Icon from '../Icon/icon';
import Button from '../Button/Button';

import '../../styles/index.scss';
export default {
  title: 'Tabs',
  component: Tabs
} as Meta;

export const BasicTabs = () => (
    <Fragment>
        <p>因技术问题，暂时无法实现对Tabpane的文档说明！TabPane的属性如下：</p>
        <p>key: 设置当前tabpane的key值；string类型</p>
        <p>tab: 设置当前tabpane的标题；string | React.ReactNode类型</p>
        <p>className: 设置当前tabpane的类名；string类型</p>
        <p>disabled: 设置当前tabpane是否禁用；boolean类型</p>
        <p>style: 设置当前tabpane样式；</p>
        <div style={{ width: 400 }}>
            <Tabs defaultKey="0" onChange={(key) => console.log(key)}>
                <TabPane tab="选项1" key="1">选项1内容</TabPane>
                <TabPane tab="选项2" key="2" disabled>选项2内容</TabPane>
                <TabPane tab="选项3" key="3">选项3内容</TabPane>
            </Tabs>
        </div>
    </Fragment>
	
);

BasicTabs.storyName = '基本';

export const IconTabs = () => (
    <div style={{ width: 400 }}>
        <Tabs type="line" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab={<span>选项1 <Icon icon="smile-wink" /></span>} key="1">选项1内容</TabPane>
            <TabPane tab={<span>选项2 <Icon icon="angry" /></span>} key="2">选项2内容</TabPane>
            <TabPane tab={<span>选项3 <Icon icon="tired" /></span>} key="3">选项3内容</TabPane>
        </Tabs>
    </div>
	
);

IconTabs.storyName = '带有图标'

export const DiffTypeTabs = () => (
    <div style={{ width: 400 }}>
        <Tabs type="line" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>

        <Tabs type="card" defaultKey="1" onChange={(key) => console.log(key)}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
    </div>
	
);

DiffTypeTabs.storyName = '不同类型';

export const PositionTabs = () => (
    <div style={{ width: 400 }}>
        <p>默认页签位置向上</p>
        <Tabs type="line" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
        <p>默认页签位置向下</p>
        <Tabs type="line" tabPosition="bottom" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
        <p>默认页签位置向左</p>
        <Tabs type="line" tabPosition="left" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
        <p>默认页签位置向右</p>
        <Tabs type="line" tabPosition="right" defaultKey="1" onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
    </div>
	
);

PositionTabs.storyName = '页签位置';


export const ExtraContentTabs = () => (
    <div style={{ width: 400 }}>
        <p>可以在页签右边添加附加操作。</p>
        <Tabs type="line" defaultKey="1" tabBarExtraContent={<Button>extra</Button>} onChange={(key) => console.log(key)} style={{ marginBottom: 30 }}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>

        <Tabs type="card" defaultKey="1" tabBarExtraContent={<Button>extra</Button>} onChange={(key) => console.log(key)}>
            <TabPane tab="选项1" key="1">选项1内容</TabPane>
            <TabPane tab="选项2" key="2">选项2内容</TabPane>
            <TabPane tab="选项3" key="3">选项3内容</TabPane>
        </Tabs>
    </div>
	
);

ExtraContentTabs.storyName = '附加内容';
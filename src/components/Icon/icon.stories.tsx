import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import Icon from './icon';

import '../../styles/index.scss';
export default {
  title: 'Icon',
  component: Icon
} as Meta;

export const BasicIcon = () => (
    <Fragment>
        <p>目前icon图标是基于react-fontawesome图标库，目前大概1000多种图标，足够满足大部分图标需求，因数量太多，就不一一展示。更多图标：<a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free">点击跳转</a>。</p>
        <div style={{ width: 400, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Icon icon="check" size="4x"/>
            <Icon icon="times" size="4x"/>
            <Icon icon="angle-up" size="4x"/>
            <Icon icon="angle-right" size="4x"/>
            <Icon icon="angle-left" size="4x"/>
            <Icon icon="angle-down" size="4x"/>
        </div>
    </Fragment>
);

BasicIcon.storyName = '基本';

export const ThemeIcon = () => (
    <Fragment>
        <p>目前主题色包括：success、dander、primary、warning、info、warning等。</p>
        <div style={{ width: 400, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Icon icon="check" size="4x" theme="success"/>
            <Icon icon="times" size="4x" theme="danger"/>
            <Icon icon="angle-up" size="4x" theme="primary"/>
            <Icon icon="angle-right" size="4x" theme="warning"/>
            <Icon icon="angle-left" size="4x" theme="info"/>
            <Icon icon="angle-down" size="4x" theme="secondary"/>
        </div>
    </Fragment>
);

ThemeIcon.storyName = '跟随主题色';


export const MoreIcon = () => (
    <Fragment>
        <p>该图标支持自动旋转等操作，具体属性请查看<a href="https://github.com/FortAwesome/react-fontawesome#basic">文档</a>。</p>
        <div style={{ width: 400, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Icon icon="spinner" size="4x" theme="info" spin/>
        </div>
    </Fragment>
);

MoreIcon.storyName = '更多行为';
/*
 * @Description: Tabs组件
 * @Author: Indexsarrol
 * @Date: 2021-05-19 14:51:08
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-20 16:10:59
 */

import React, { useState } from 'react';
import { ITabPaneProps } from './TabPane';
import classnames from 'classnames';

export type TabsType = 'line' | 'card';

export type TabPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ITabsProps {
  defaultKey: string;
  className?: string;
  style?: React.CSSProperties;
  type?: TabsType;
  tabPosition?: TabPosition;
  onChange: (key: string) => void
}

const Tabs: React.FC<ITabsProps> = (props) => {
  const { defaultKey, className, tabPosition, style, children, onChange, type } = props;
  const [ currentKey, setCurrentKey ] = useState(defaultKey);

  const handleChange = (key: string) => {
    setCurrentKey(key);
    onChange(key)
  }

  const tabsClasses = classnames('idx-tabs', className, {
    [`idx-tabs-${tabPosition}`]: tabPosition,
    [`idx-tabs-${type}`]: type
  });
  
  const tabsNavClasses = classnames('idx-tabs-bar', {
    [`idx-tabs-${tabPosition}-bar`]: tabPosition
  });



  const renderHeader = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<ITabPaneProps>;
      const { tab, disabled } = childElement.props;
      const tabsNavItemClasses = classnames('idx-tabs-tab', {
        'idx-tabs-tab-active': currentKey === index.toString(),
        'idx-tabs-tab-disabled': disabled
      })
      return (
        <li 
          className={tabsNavItemClasses} 
          onClick={disabled ? () => {} : () => {handleChange(index.toString())}}
        >
          {tab}
        </li>
      );
    })
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<ITabPaneProps>;
      if (childElement.type.displayName === 'TabPane') {
        if (index.toString() === currentKey) {
          return childElement;
        }
      } else {
        console.error('Warning: Tabs component only accept TabPane component! ')
      }
      
    })
  }
  
  return (
    <div className={tabsClasses} style={style}>
        <ul className={tabsNavClasses}>
          {renderHeader()}
        </ul>
        <div className="idx-tabs-content">
          {renderChildren()}
        </div>
    </div>
  );
}

Tabs.defaultProps = {
  defaultKey: '0',
  type: 'line',
  tabPosition: 'top'
}

export default Tabs;


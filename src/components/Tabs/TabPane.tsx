/*
 * @Description: tabpane组件
 * @Author: Indexsarrol
 * @Date: 2021-05-19 15:22:26
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-20 15:05:42
 */

import * as React from 'react';
import classnames from 'classnames';
export interface ITabPaneProps {
  key: string;
  tab: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties
}


const TabPane: React.FC<ITabPaneProps> = (props) => {
  const { className, style, children } = props;
  const panelClasses = classnames('idx-tabs-panel', className)
  return (
    <div className={panelClasses} style={style}>
      {children}
    </div>
  );
}

TabPane.displayName = 'TabPane';

export default TabPane;
/*
 * @Description: tabpane组件
 * @Author: Indexsarrol
 * @Date: 2021-05-19 15:22:26
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-20 15:05:42
 */
import * as React from 'react';
import classnames from 'classnames';
var TabPane = function (props) {
    var className = props.className, style = props.style, children = props.children;
    var panelClasses = classnames('idx-tabs-panel', className);
    return (React.createElement("div", { className: panelClasses, style: style }, children));
};
TabPane.displayName = 'TabPane';
export default TabPane;

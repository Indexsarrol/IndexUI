/*
 * @Description: Tabs组件
 * @Author: Indexsarrol
 * @Date: 2021-05-19 14:51:08
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-21 10:34:51
 */
import React, { useState } from 'react';
import classnames from 'classnames';
var Tabs = function (props) {
    var _a, _b;
    var defaultKey = props.defaultKey, className = props.className, tabPosition = props.tabPosition, style = props.style, children = props.children, onChange = props.onChange, type = props.type, tabBarExtraContent = props.tabBarExtraContent;
    var _c = useState(defaultKey), currentKey = _c[0], setCurrentKey = _c[1];
    var handleChange = function (key) {
        setCurrentKey(key);
        onChange(key);
    };
    var tabsClasses = classnames('idx-tabs', className, (_a = {},
        _a["idx-tabs-" + tabPosition] = tabPosition,
        _a["idx-tabs-" + type] = type,
        _a));
    var tabsNavClasses = classnames('idx-tabs-bar', (_b = {},
        _b["idx-tabs-" + tabPosition + "-bar"] = tabPosition,
        _b));
    var renderHeader = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var _a = childElement.props, tab = _a.tab, disabled = _a.disabled;
            var tabsNavItemClasses = classnames('idx-tabs-tab', {
                'idx-tabs-tab-active': currentKey === index.toString(),
                'idx-tabs-tab-disabled': disabled
            });
            return (React.createElement("div", { className: tabsNavItemClasses, onClick: disabled ? function () { } : function () { handleChange(index.toString()); } }, tab));
        });
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            if (childElement.type.displayName === 'TabPane') {
                if (index.toString() === currentKey) {
                    return childElement;
                }
            }
            else {
                console.error('Warning: Tabs component only accept component! ');
            }
        });
    };
    return (React.createElement("div", { className: tabsClasses, style: style },
        React.createElement("div", { className: tabsNavClasses }, tabPosition === "top" || tabPosition === "bottom"
            ?
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "idx-tabs-bar-container" }, renderHeader()),
                    React.createElement("div", { className: "idx-tabs-tab-bar-extra" }, tabBarExtraContent))
            :
                renderHeader()),
        React.createElement("div", { className: "idx-tabs-content" }, renderChildren())));
};
Tabs.defaultProps = {
    defaultKey: '0',
    type: 'line',
    tabPosition: 'top'
};
export default Tabs;

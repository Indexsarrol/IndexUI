/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 09:41:42
 * @LastEditTime: 2021-06-09 14:04:56
 * @LastEditors: Indexsarrol
 * @Description:
 * @FilePath: \index-ui\src\components\Menu\Menu.tsx
 */
import React, { useState, createContext } from 'react';
import classnames from 'classnames';
;
export var MenuContext = createContext({ key: '0' });
var Menu = function (props) {
    var defaultKey = props.defaultKey, className = props.className, mode = props.mode, style = props.style, children = props.children, defaultOpenMenus = props.defaultOpenMenus, onSelect = props.onSelect;
    var _a = useState(defaultKey), currentKey = _a[0], setCurrentKey = _a[1];
    var handleClick = function (key) {
        setCurrentKey(key);
        if (onSelect) {
            onSelect(key);
        }
    };
    var transferContext = {
        key: currentKey ? currentKey : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenMenus: defaultOpenMenus
    };
    var classNames = classnames('idx-menu', className, {
        'idx-menu-vertical': mode === 'vertical',
        'idx-menu-horizontal': mode !== 'vertical',
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            // childElement.type.displayName
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: "" + index
                });
            }
            else {
                console.error('Menu组件的子组件只能为MenuItem组件');
            }
        });
    };
    return (React.createElement("ul", { className: classNames, style: style },
        React.createElement(MenuContext.Provider, { value: transferContext }, renderChildren())));
};
Menu.defaultProps = {
    mode: 'horizontal',
    defaultKey: '0',
    defaultOpenMenus: []
};
export default Menu;

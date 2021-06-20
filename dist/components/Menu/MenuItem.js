/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 14:29:06
 * @LastEditTime: 2021-05-19 09:30:10
 * @LastEditors: Indexsarrol
 * @Description:
 * @FilePath: \index-ui\src\components\Menu\MenuItem.tsx
 */
import React, { useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './Menu';
var MenuItem = function (props) {
    var _a;
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var prefix = 'idx-menu-item';
    var classNames = classnames(prefix, className, (_a = {},
        _a[prefix + "-disabled"] = disabled,
        _a[prefix + "-actived"] = context.key === index,
        _a));
    var handleChange = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classNames, style: style, onClick: handleChange }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;

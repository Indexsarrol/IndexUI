var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
 * @Description:
 * @Author: Indexsarrol
 * @Date: 2021-05-18 15:36:18
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-19 11:24:48
 */
import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './Menu';
import Icon from './../Icon/icon';
import Transition from '../Transition/Transition';
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var openSubMenus = context.defaultOpenMenus;
    var isVerticalOpenMenus = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false;
    var _a = useState(isVerticalOpenMenus), menuOpend = _a[0], setOpen = _a[1];
    var timer = null;
    var classes = classnames('idx-menu-item idx-submenu-item', className, {
        'is-active': context.key === index,
        'is-opened': menuOpend,
        'is-vertical': context.mode === 'vertical'
    });
    var renderChildren = function () {
        var childComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: index + "-" + i
                });
            }
            else {
                console.error('Warning: SubItem组件内只能支持MenuItem组件');
            }
        });
        var subMenuOpenClasses = classnames('idx-submenu', {
            'menu-opened': menuOpend
        });
        return (React.createElement(Transition, { in: menuOpend, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuOpenClasses }, childComponent)));
    };
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpend);
    };
    var handleMouse = function (e, toggle) {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode === "horizontal" ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); },
    } : {};
    return (React.createElement("li", __assign({ className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;

/*
 * @Description: 图标组件
 * @Author: Indexsarrol
 * @Date: 2021-05-13 15:02:30
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-21 16:15:46
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classnames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
var Icon = function (props) {
    var _a;
    var className = props.className, theme = props.theme, restProps = __rest(props, ["className", "theme"]);
    var classes = classnames('idx-icon', className, (_a = {},
        _a["icon-" + theme] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, restProps)));
};
export default Icon;

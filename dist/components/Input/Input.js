/*
 * @Description: Input输入框组件
 * @Author: Indexsarrol
 * @Date: 2021-05-26 13:55:52
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-27 09:51:37
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
import Icon from '../Icon/icon';
import classnames from 'classnames';
var inputRef = React.createRef();
var Input = function (props) {
    var _a;
    var style = props.style, className = props.className, addonAfterClassName = props.addonAfterClassName, size = props.size, disabled = props.disabled, defaultValue = props.defaultValue, allowClear = props.allowClear, value = props.value, addonBefore = props.addonBefore, addonAfter = props.addonAfter, prefix = props.prefix, suffix = props.suffix, restProps = __rest(props, ["style", "className", "addonAfterClassName", "size", "disabled", "defaultValue", "allowClear", "value", "addonBefore", "addonAfter", "prefix", "suffix"]);
    var classes = classnames('idx-input-wrapper', (_a = {},
        _a["idx-input-" + size] = size,
        _a['idx-input-disabled'] = disabled,
        _a['idx-input-before-addon'] = addonBefore,
        _a['idx-input-after-addon'] = addonAfter,
        _a));
    var innerClasses = classnames('idx-input-inner', className, {
        'idx-input-inner-without-prefix': !prefix,
        'idx-input-inner-without-suffix': !suffix,
        'idx-input-inner-with-clear': allowClear,
    });
    var addonAfterClasses = classnames('idx-input-afteraddon', addonAfterClassName);
    var clearInputValue = function () {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (React.createElement("div", { className: classes, style: style },
        addonBefore
            &&
                (React.createElement("div", { className: "idx-input-beforeaddon" }, addonBefore)),
        prefix &&
            (React.createElement("span", { className: "idx-prefix-icon" }, prefix)),
        React.createElement("input", __assign({ ref: inputRef, type: "input", defaultValue: defaultValue, value: value, className: innerClasses, disabled: disabled }, restProps)),
        allowClear && inputRef.current && inputRef.current.value.length > 0 &&
            (React.createElement("span", { className: "idx-clear-icon" },
                React.createElement(Icon, { icon: "times-circle", size: "sm", onClick: clearInputValue }))),
        suffix &&
            (React.createElement("span", { className: "idx-suffix-icon" }, suffix)),
        addonAfter
            &&
                (React.createElement("div", { className: addonAfterClasses }, addonAfter))));
};
Input.defaultProps = {
    size: "default",
};
export default Input;

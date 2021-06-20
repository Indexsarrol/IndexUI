/*
 * @Author: wujian
 * @Date: 2021-04-25 16:27:51
 * @LastEditTime: 2021-06-09 10:51:33
 * @LastEditors: Indexsarrol
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Alert\Alert.tsx
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
import React, { useState } from 'react';
import Icon from '../Icon/icon';
import Transition from '../Transition/Transition';
import classnames from 'classnames';
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Default"] = "default";
    AlertType["Danger"] = "danger";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
var Alert = function (props) {
    var _a;
    var type = props.type, closable = props.closable, description = props.description, message = props.message, closeText = props.closeText, className = props.className, onClose = props.onClose, restProps = __rest(props, ["type", "closable", "description", "message", "closeText", "className", "onClose"]);
    var prefix = 'idx-alert';
    var CLOSE_ICON_CLASSNAME = 'idx-alert-close-icon';
    var _b = useState(false), hide = _b[0], setHide = _b[1];
    var classes = classnames(prefix, className, (_a = {},
        _a[prefix + "-" + type] = type,
        _a));
    var isShowClose = classnames(CLOSE_ICON_CLASSNAME, {
        hidden: !closable
    });
    // 关闭按钮
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    return (React.createElement(Transition, { in: !hide, timeout: 300, animation: "zoom-in-top" },
        React.createElement("div", __assign({ id: "idx-alert", className: classes }, restProps),
            React.createElement("div", { className: "idx-alert-message-content" },
                React.createElement("span", { className: "idx-alert-message" }, message),
                React.createElement("span", { className: isShowClose, onClick: handleClose }, closeText)),
            description &&
                React.createElement("div", { className: "idx-alert-description" }, description))));
};
Alert.defaultProps = {
    type: 'default',
    closable: false,
    closeText: React.createElement(Icon, { icon: "times" })
};
export default Alert;

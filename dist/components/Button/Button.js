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
/*
 * @Author: your name
 * @Date: 2021-04-23 14:26:21
 * @LastEditTime: 2021-06-09 10:16:24
 * @LastEditors: Indexsarrol
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Button\Button.tsx
 */
import React from 'react';
import classnames from 'classnames';
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "large";
    ButtonSize["Small"] = "small";
})(ButtonSize || (ButtonSize = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, size = props.size, disabled = props.disabled, href = props.href, children = props.children, restProps = __rest(props, ["btnType", "className", "size", "disabled", "href", "children"]);
    var prefix = 'idx-btn';
    var classNames = classnames(prefix, className, (_a = {},
        _a[prefix + "-" + btnType] = btnType,
        _a[prefix + "-" + size] = size,
        _a.disabled = btnType === 'link' && disabled,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classNames, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({}, restProps, { className: classNames, disabled: disabled }), children));
    }
};
Button.defaultProps = {
    btnType: 'default',
    disabled: false
};
export default Button;

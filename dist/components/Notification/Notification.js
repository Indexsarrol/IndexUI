/*
 * @Description: Notification组件
 * @Author: Indexsarrol
 * @Date: 2021-05-27 10:15:35
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-28 11:13:52
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
import React from 'react';
import classnames from 'classnames';
import Notification from 'rc-notification';
import Icon from '../Icon/icon';
export var noticeType;
(function (noticeType) {
    noticeType["success"] = "check-circle";
    noticeType["error"] = "times-circle";
    noticeType["info"] = "info-circle";
    noticeType["warning"] = "exclamation-circle";
    noticeType["loading"] = "spinner";
})(noticeType || (noticeType = {}));
var positions = {
    'topLeft': { top: '24px', left: '24px' },
    'topRight': { top: '24px', right: '24px' },
    'bottomLeft': { bottom: '24px', left: '24px' },
    'bottomRight': { bottom: '24px', right: '24px' },
};
var idxNotification = (function () {
    var notification;
    var defaultPlacement = '';
    var open = function (configs) {
        var type = configs.type, bottom = configs.bottom, className = configs.className, description = configs.description, _a = configs.duration, duration = _a === void 0 ? 4.5 : _a, icon = configs.icon, key = configs.key, message = configs.message, top = configs.top, _b = configs.closable, closable = _b === void 0 ? true : _b, closeIcon = configs.closeIcon, onClose = configs.onClose;
        var notificationClass = classnames('idx-notice-wrapper', className);
        var iconClass = classnames('idx-notice-icon', type);
        notification.notice({
            content: (React.createElement("div", { className: notificationClass },
                React.createElement("div", { className: iconClass }, !icon && ['success', 'error', 'warning', 'info', 'loading'].includes(type)
                    ?
                        React.createElement(Icon, { icon: noticeType[type], spin: type === 'loading' })
                    :
                        icon),
                React.createElement("div", { className: "idx-notice-content" },
                    React.createElement("p", { className: "idx-notice-title" }, message),
                    React.createElement("div", { className: "idx-notice-description" }, description)))),
            key: key,
            closable: closable,
            onClose: function () {
                onClose && onClose();
            },
            duration: duration,
            style: { top: top, bottom: bottom },
            closeIcon: closeIcon
        });
    };
    var config = function (config) {
        var getContainer = config.getContainer, placement = config.placement, closeIcon = config.closeIcon;
        if (typeof placement === 'string') {
            defaultPlacement = placement;
            Notification.newInstance({
                style: __assign({}, positions[placement]),
                getContainer: getContainer,
                closeIcon: closeIcon
            }, function (notice) {
                return notification = notice;
            });
        }
    };
    var remove = function (key) {
        notification.removeNotice(key);
    };
    var destroy = function () {
        notification.destroy();
    };
    Notification.newInstance({
        style: { right: '24px', top: '24px' }
    }, function (notice) { return notification = notice; });
    return {
        config: config,
        open: open,
        remove: remove,
        destroy: destroy
    };
})();
export default idxNotification;

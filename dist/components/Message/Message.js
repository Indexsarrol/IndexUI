/*
 * @Description: message提示框组件
 * @Author: Indexsarrol
 * @Date: 2021-05-28 11:22:25
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-28 14:14:34
 */
import React from 'react';
import Notification from 'rc-notification';
import classnames from 'classnames';
import Icon from '../Icon/icon';
import 'rc-notification/assets/index.css';
export var messageType;
(function (messageType) {
    messageType["success"] = "check-circle";
    messageType["error"] = "times-circle";
    messageType["info"] = "info-circle";
    messageType["warning"] = "exclamation-circle";
    messageType["loading"] = "spinner";
})(messageType || (messageType = {}));
var Message = (function () {
    var message;
    // open 方法
    var open = function (configs) {
        var type = configs.type, className = configs.className, top = configs.top, _a = configs.duration, duration = _a === void 0 ? 3.5 : _a, icon = configs.icon, key = configs.key, title = configs.title, _b = configs.closable, closable = _b === void 0 ? false : _b, closeIcon = configs.closeIcon, onClose = configs.onClose, _c = configs.getContainer, getContainer = _c === void 0 ? function () { return document.body; } : _c;
        var messageClass = classnames('idx-message-wrapper', className);
        var iconClass = classnames('idx-message-icon', type);
        message.notice({
            content: (React.createElement("div", { className: messageClass },
                React.createElement("div", { className: iconClass }, !icon && ['success', 'error', 'warning', 'info', 'loading'].includes(type)
                    ?
                        React.createElement(Icon, { icon: messageType[type], spin: type === 'loading' })
                    :
                        icon),
                React.createElement("span", { className: "idx-message-title" }, title))),
            key: key,
            closable: closable,
            onClose: function () { return onClose && onClose(); },
            duration: duration,
            style: { top: top },
            closeIcon: closeIcon
        });
    };
    // 全局配置
    var config = function (configs) {
        var getContainer = configs.getContainer, closeIcon = configs.closeIcon;
        Notification.newInstance({
            getContainer: getContainer,
            closeIcon: closeIcon,
        }, function (notice) {
            return message = notice;
        });
    };
    var remove = function (key) {
        message.removeNotice(key);
    };
    var destroy = function () {
        message.destroy();
    };
    Notification.newInstance({
        style: { top: '50px', left: '50%', transform: 'translate(-50%, 0)' }
    }, function (notice) { return message = notice; });
    return {
        open: open,
        config: config,
        remove: remove,
        destroy: destroy
    };
})();
export default Message;

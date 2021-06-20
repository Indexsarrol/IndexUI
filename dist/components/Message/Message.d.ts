import React from 'react';
import 'rc-notification/assets/index.css';
export declare type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading';
export interface IMessageConfigProps {
    type: MessageType;
    top?: number;
    className?: string;
    duration?: number;
    icon?: React.ReactNode;
    key?: string;
    title?: string | React.ReactNode;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    onClose?: () => void;
    getContainer?: () => HTMLElement;
}
export interface globalMessageConfigs {
    getContainer?: () => HTMLElement;
    closeIcon: React.ReactNode;
}
export declare enum messageType {
    "success" = "check-circle",
    "error" = "times-circle",
    "info" = "info-circle",
    "warning" = "exclamation-circle",
    "loading" = "spinner"
}
declare const Message: {
    open: (configs: IMessageConfigProps) => void;
    config: (configs: globalMessageConfigs) => void;
    remove: (key: string) => void;
    destroy: () => void;
};
export default Message;

import React from 'react';
export declare enum noticeType {
    "success" = "check-circle",
    "error" = "times-circle",
    "info" = "info-circle",
    "warning" = "exclamation-circle",
    "loading" = "spinner"
}
export declare type NotificationType = 'success' | 'error' | 'info' | 'warning' | 'loading';
export interface NotificationConfigProps {
    type: NotificationType;
    bottom?: number;
    className?: string;
    description?: string;
    duration?: number;
    icon?: React.ReactNode;
    key?: string;
    message?: string | React.ReactNode;
    top?: number;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    onClose?: () => void;
    onClick?: () => void;
    getContainer?: () => HTMLElement;
}
export interface globalConfig {
    duration?: number;
    getContainer?: () => HTMLElement;
    placement: string;
    closeIcon?: React.ReactNode;
}
declare const idxNotification: {
    config: (config: globalConfig) => void;
    open: (configs: NotificationConfigProps) => void;
    remove: (key: string) => void;
    destroy: () => void;
};
export default idxNotification;

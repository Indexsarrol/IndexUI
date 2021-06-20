import React, { ReactNode } from 'react';
export declare enum AlertType {
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
export interface IAlertProps {
    /**
     * 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`。
     */
    type?: string;
    /**
     * 指定警告提示的类名。
     */
    className?: string;
    /**
     * 指定警告提示是否可以关闭。
     */
    closable?: boolean;
    /**
     * 指定警告提示描述内容。
     */
    description?: string;
    /**
     * 指定警告提示标题内容。
     */
    message?: ReactNode | string;
    /**
     * 指定警告提示自定义关闭按钮，仅当closable为true时生效。
     */
    closeText?: string | ReactNode;
    /**
     * 指定警告提示点击关闭按钮回调函数，仅当closable为true时生效。
     */
    onClose?: () => void;
}
declare type NativeElementProps = React.DOMAttributes<HTMLElement>;
declare type TAlertProps = Partial<NativeElementProps & IAlertProps>;
declare const Alert: React.FC<TAlertProps>;
export default Alert;

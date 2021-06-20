import React from 'react';
export declare type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
export declare type SizeType = 'small' | 'large' | 'default';
export interface SwitchProps {
    /**
     * 开关大小，可选值：
     */
    size?: SizeType;
    /**
     * 开关类名
     */
    className?: string;
    /**
     * 指定当前是否选中
     */
    checked?: boolean;
    /**
     * 开关行内样式
     */
    style?: React.CSSProperties;
    /**
     * 开关默认是否选中
     */
    defaultChecked?: boolean;
    /**
     * 开关默认是否禁用
     */
    disabled?: boolean;
    /**
     * 开关选中时提示的文字
     */
    checkedText?: string | React.ReactNode;
    /**
     * 开关关闭时提示的文字
     */
    unCheckedText?: string | React.ReactNode;
    /**
     * 开关切换的回调函数`Function(checked: boolean, event: Event)`
     */
    onChange?: SwitchChangeEventHandler;
    /**
     * 开关点击的回调函数`Function(checked: boolean, event: Event)`
     */
    onClick?: SwitchChangeEventHandler;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;

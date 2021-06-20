import React from 'react';
declare type InputSize = 'small' | 'default' | 'large';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'> {
    /**设置输入框样式 */
    style?: React.CSSProperties;
    /**设置输入框类名 */
    className?: string;
    /**设置输入框末尾类名 */
    addonAfterClassName?: string;
    /**设置输入框尺寸 */
    size?: InputSize;
    /**设置输入框是否禁用 */
    disabled?: boolean;
    /**设置输入框默认值 */
    defaultValue?: string;
    /**设置输入框可变value */
    value?: string;
    /**设置输入框是否可清空（功能暂时未开放） */
    allowClear?: boolean;
    /**获取当前输入框ref */
    ref?: any;
    /**带标签的 input，设置前置标签 */
    addonBefore?: string | React.ReactNode;
    /**带标签的 input，设置后置标签 */
    addonAfter?: string | React.ReactNode;
    /**带有前缀图标的 input */
    prefix?: string | React.ReactNode;
    /**带有后缀图标的 input */
    suffix?: string | React.ReactNode;
    /** 输入框内容变化时的回调 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;

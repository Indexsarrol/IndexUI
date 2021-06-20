import React from 'react';
export declare type ButtonType = 'default' | 'primary' | 'link' | 'dashed' | 'danger' | 'warning';
export declare enum ButtonSize {
    Large = "large",
    Small = "small"
}
export interface IButtonProps {
    /**
     * 设置按钮类名
     */
    className?: string;
    /**
     * 设置按钮类型，可选值为 `primary`， `link`， `dashed`， `danger`， `warning`。
     */
    btnType?: string;
    /**
     * 设置按钮尺寸，可选值为 `large`， `small`，默认值为`default`。
     */
    size?: string;
    /**
     * 按钮失效状态
     */
    disabled?: boolean;
    /**
     * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致，只在btnType为`link`时生效。
     */
    href?: string;
    children: React.ReactNode;
}
declare type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;

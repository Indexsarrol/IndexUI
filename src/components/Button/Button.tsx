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

export type ButtonType = 'default' | 'primary' | 'link' | 'dashed' | 'danger' | 'warning'

export enum ButtonSize {
	Large = 'large',
	Small = 'small'
}
export interface IButtonProps {
	/**
	 * 设置按钮类名
	 */
	className?: string;
	/**
	 * 设置按钮类型，可选值为 `primary`， `link`， `dashed`， `danger`， `warning`。
	 */
	btnType?: string,
	/**
	 * 设置按钮尺寸，可选值为 `large`， `small`，默认值为`default`。
	 */
	size?: string,
	/**
	 * 按钮失效状态
	 */
	disabled?: boolean
	/**
	 * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致，只在btnType为`link`时生效。
	 */
	href?: string
	children: React.ReactNode
}



type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
	const {
		btnType,
		className,
		size,
		disabled,
		href,
		children,
		...restProps
	} = props;
	const prefix = 'idx-btn';
	const classNames = classnames(prefix, className, {
		[`${prefix}-${btnType}`] : btnType,
		[`${prefix}-${size}`] : size,
		disabled: btnType === 'link' && disabled
	});

	if (btnType === 'link' && href) {
		return (
			<a 
				className={classNames}
				href={href}
				{...restProps}
			>
				{children}
			</a>
		)
	} else {
		return (
			<button
				{...restProps}
				className={classNames}
				disabled={disabled}
			>
				{children}
			</button>
		)
	}
}

Button.defaultProps = {
	btnType: 'default',
	disabled: false
}


export default Button;
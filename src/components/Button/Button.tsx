/*
 * @Author: your name
 * @Date: 2021-04-23 14:26:21
 * @LastEditTime: 2021-04-26 09:42:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Button\Button.tsx
 */
import React from 'react';
import classnames from 'classnames';

export enum ButtonType {
	Default = 'default',
	Primary = 'primary',
	Link = 'link',
	Dashed = 'dashed',
	Danger = 'danger',
	Warning = 'warning',
}

export enum ButtonSize {
	Large = 'large',
	Small = 'small'
}

interface IButtonProps {
	className?: string;
	btnType?: string,
	size?: string,
	disabled?: boolean
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
		disabled: btnType === ButtonType.Link && disabled
	});

	if (btnType === ButtonType.Link && href) {
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
	btnType: ButtonType.Default,
	disabled: false
}


export default Button;
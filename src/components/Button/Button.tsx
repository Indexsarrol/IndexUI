/*
 * @Author: your name
 * @Date: 2021-04-23 14:26:21
 * @LastEditTime: 2021-06-24 10:55:09
 * @LastEditors: Indexsarrol
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Button\Button.tsx
 */
import React from 'react';
import Icon from '../Icon';
import {
	IconProp,
  } from '@fortawesome/fontawesome-svg-core'
import classnames from 'classnames';

export type ButtonType = 'default' | 'primary' | 'link' | 'dashed' | 'danger' | 'warning'

export type ButtonSize = 'large' | 'small';

export interface IButtonProps {
	/**
	 * 设置按钮类名
	 */
	className?: string;
	/**
	 * 设置按钮类型，可选值为 `primary`， `link`， `dashed`， `danger`， `warning`。
	 */
	btnType?: ButtonType,
	/**
	 * 设置按钮尺寸，可选值为 `large`， `small`，默认值为`default`。
	 */
	size?: ButtonSize,
	/**
	 * 按钮失效状态
	 */
	disabled?: boolean
	/**
	 * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致，只在btnType为`link`时生效。
	 */
	href?: string;
	icon?: IconProp;
	loading?: boolean;
	children?: React.ReactNode
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
		loading,
		icon,
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
				disabled={loading || disabled}
			>
				<div className={`${prefix}-wrapper`}>
					{ loading && <Icon icon="spinner" spin style={{ marginRight: 6 }}/> }
					<span>
						{ icon && <Icon icon={icon} style={{ marginRight: 6 }} /> }
					</span>
					<span>{children}</span>
				</div>
			</button>
		)
	}
}

Button.defaultProps = {
	btnType: 'default',
	disabled: false
}


export default Button;
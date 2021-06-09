/*
 * @Author: wujian
 * @Date: 2021-04-25 16:27:51
 * @LastEditTime: 2021-06-09 10:51:33
 * @LastEditors: Indexsarrol
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Alert\Alert.tsx
 */

import React, { useState, ReactNode } from 'react';
import Icon from '../Icon/icon';
import Transition from '../Transition/Transition';
import classnames from 'classnames';

export enum AlertType {
	Success = 'success',
	Default = 'default',
	Danger = 'danger',
	Warning = 'warning'
}

// export type AlertType = 'success' | 'default' | 'danger' | 'warning';

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
	onClose?: () => void
}

type NativeElementProps = React.DOMAttributes<HTMLElement>;
type TAlertProps = Partial<NativeElementProps & IAlertProps>;
const Alert: React.FC<TAlertProps> = (props) => {
	const {
		type,
		closable,
		description,
		message,
		closeText,
		className,
		onClose,
		...restProps
	} = props;

	const prefix = 'idx-alert';
	const CLOSE_ICON_CLASSNAME = 'idx-alert-close-icon';
	const [hide, setHide] = useState(false);
	const classes = classnames(prefix, className, {
		[`${prefix}-${type}`]: type
	});
	const isShowClose = classnames(CLOSE_ICON_CLASSNAME, {
		hidden: !closable
	});

	// 关闭按钮
	const handleClose = () => {
		if (onClose) {
			onClose()
		}
		setHide(true);
	}
	return (
		<Transition
			in={!hide}
			timeout={300}
			animation="zoom-in-top"
		>
			<div
			id="idx-alert"
			className={classes}
			{...restProps}
		>
			<div className="idx-alert-message-content">
				<span className="idx-alert-message">{message}</span>
				<span
					className={isShowClose}
					onClick={handleClose}
				>{closeText}</span>
			</div>
			{
				description && 
				<div className="idx-alert-description">
					{description}
				</div>
			}
			
		</div>
		</Transition>
		
	)
}

Alert.defaultProps = {
	type: 'default',
	closable: false,
	closeText: <Icon icon="times" />
}

export default Alert;


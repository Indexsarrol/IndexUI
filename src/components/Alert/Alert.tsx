/*
 * @Author: wujian
 * @Date: 2021-04-25 16:27:51
 * @LastEditTime: 2021-05-20 17:38:07
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

interface IAlertProps {
	type?: string;
	className?: string;
	closable?: boolean;
	delay?: number;
	description?: string;
	message?: string | ReactNode;
	closeText?: string | ReactNode;
	afterClose?: () => void;
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
		delay,
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
	type: AlertType.Default,
	closable: false,
	closeText: <Icon icon="times" />
}

export default Alert;


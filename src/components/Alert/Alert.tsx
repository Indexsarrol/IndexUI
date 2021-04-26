/*
 * @Author: wujian
 * @Date: 2021-04-25 16:27:51
 * @LastEditTime: 2021-04-25 18:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \index-ui\src\components\Alert\Alert.tsx
 */

import React, { ReactNode } from 'react';
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
	onClose?: (e: MouseEvent) => void
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
		afterClose,
		onClose,
		...restProps
	} = props;

	const prefix = 'idx-alert';
	const CLOSE_ICON_CLASSNAME = 'idx-alert-close-icon';

	const classes = classnames(prefix, className, {
		[`${prefix}-${type}`]: type
	});
	const isShowClose = classnames(CLOSE_ICON_CLASSNAME, {
		hidden: !closable
	});

	// 关闭按钮
	const handleClose = () => {
		new Promise((resolve, reject) => {
			const alertDom = document.querySelector('#idx-alert');
			resolve('success');
			alertDom?.remove();
		}).then(_ => {
			if (afterClose) {
				setTimeout(() => {
					afterClose();
				}, delay);
			}
		})
	}
	return (
		<div
			id="idx-alert"
			className={classes}
			{...restProps}
		>
			<div className="idx-alert-message-content">
				<span>{message}</span>
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
	)
}

Alert.defaultProps = {
	type: AlertType.Default,
	closable: false,
	closeText: '关闭'
}

export default Alert;

